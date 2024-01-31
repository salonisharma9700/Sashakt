import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../Bot/config.js';
import './bot.css'
import ActionProvider from '../Bot/ActionProvider.js'
import MessageParser from '../Bot/MessageParser.js'


const Bot = () => {
    return ( 
        <div className="Bot">
            <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            />
        </div>
     );
}
 
export default Bot;