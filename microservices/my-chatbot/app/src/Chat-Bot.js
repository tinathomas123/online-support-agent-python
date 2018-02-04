import React, { Component } from 'react';
//import 'font-awesome/css/font-awesome.min.css';
//import './scripts';
//import './speach-script';
import './styles.css';


class ChatBot extends Component {
    render() {
      return (
        <div className="ChatBot">
          
          <div class="container">
             <div class="row">
                <div className="chat-window col-xs-5 col-md-3" id="chat_window_1">
                    <div className="col-xs-12 col-md-12">
            	        <div className="panel panel-default">
                            <div className="panel-heading top-bar">
                                <div className="col-md-8 col-xs-8">
                                    <h3 className="panel-title"><span class="glyphicon glyphicon-comment"></span> Chat - Bot #1</h3>
                                </div>
                                <div className="col-md-4 col-xs-4" >
                                    <a href="#"><span id="minim_chat_window" class="glyphicon glyphicon-minus icon_minim"></span></a>
                                    <a id="start_button" onclick="startButton(event)"> <i class="fa fa-microphone"> </i>  </a>
                                    {/*<!-- <a href="#"><span class="glyphicon glyphicon-remove icon_close" data-id="chat_window_1"></span></a> */}
                                </div>
                            </div>
                            <div className="panel-body msg_container_base">                      
                        
                             </div>
                            <div className="panel-footer">
                                <form id="formChatBox">
                                 <div className="input-group">
                                    <input id="txtChatBox" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary btn-sm" type="submit" id="btn-chat">Send</button>
                                    </span>
                                 </div>
                                </form>
                            </div>
        		        </div>
                    </div>
                </div>
                <div className="col-md-6">
                </div>
             </div>
            </div>
        </div>
      );
    }
  }
  
  export default ChatBot;
  