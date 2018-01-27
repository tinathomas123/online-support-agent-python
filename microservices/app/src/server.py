from src import app
# from flask import jsonify

import urllib
import json
import os
import requests
import json

from flask import Flask
from flask import request
from flask import make_response

@app.route("/")
def home():
    return "Hasura Hello World"

# Uncomment to add a new URL at /new

# @app.route("/json")
# def json_message():
#     return jsonify(message="Hello World")

@app.route('/webhook', methods=['POST'])
def webhook():
    req = request.get_json(silent=False, force=True)

    print("Request:")
    print(json.dumps(req, indent=4))

    res = makeWebhookResult(req)

    res = json.dumps(res, indent=4)
    print(res)
    r = make_response(res)
    r.headers['Content-Type'] = 'application/json'
    return r.json()

def makeWebhookResult(req):
    if req.get("result").get("action") != "shipping.cost":
        return {}
    result = req.get("result")
    parameters = result.get("parameters")
    zone = parameters.get("shipping-zone")

    cost = {'Europe':100, 'North America':200, 'South America':300, 'Asia':400, 'Africa':500}

    speech = "The cost of shipping to " + zone + " is " + str(cost[zone]) + " euros."

    print("Response:")
    print(speech)

    return {
        "speech": speech,
        "displayText": speech,
        #"data": {},
        # "contextOut": [],
        "source": "apiai-onlinestore-shipping"
    }

@app.route("/get_articles")
def get_articles():
    # This is the url to which the query is made
    url = "https://data.abstraction59.hasura-app.io/v1/query"

    # This is the json payload for the query
    requestPayload = {
        "type": "select",
        "args": {
            "table": "article",
            "columns": [
                "*"
            ]
        }
    }

    # Setting headers
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer d3a378c0f2330fc9d555c47ff4035adc374ba5b52b0c17e7"
    }

    # Make the query and store response in resp
    resp = requests.request("GET", url, data=json.dumps(requestPayload), headers=headers)

    # resp.content contains the json response.
    print(resp.content)

