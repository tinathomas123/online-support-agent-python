import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBot from './Chat-Bot';

class App extends Component {
  render() {
    return (
      <div className="App">        
        {/*<ChatBot />*/}
        <iframe  frameborder="1" position="relative"
        width="350" height="400" src="https://console.dialogflow.com/api-client/demo/embedded/24eb5166-855e-4043-b0ba-74f9bb04608f"></iframe>
      </div>
    );
  }
}

export default App;
