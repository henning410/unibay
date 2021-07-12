import React from "react";
import { format } from "timeago.js";
import "./Message.css";
import ReactEmoji from 'react-emoji';

const Message = ({ message, own }) => {
  console.log(message);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">{ReactEmoji.emojify(message.text)}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div >

  )
};

export default Message;