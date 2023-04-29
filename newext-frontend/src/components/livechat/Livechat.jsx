import React, { useEffect, useState } from "react";
import "./livechat.css";
import "font-awesome/css/font-awesome.min.css";
import socketIo from "socket.io-client";
import ReactScrollToBottom from "react-scroll-to-bottom";

const ENDPOINT = "http://localhost:9876/";
let socket;

const Chat = ({ user, chat, profilePicture, classs }) => {
  return (
    <>
      <div className={`individual-chat ${ user ? 'userComment': ''} ${classs}`}>
        <div className="user-logo_wrapper">
          <div className="user-logo">
            <img src={profilePicture} alt="user-profile_logo" />
          </div>
        </div>
        <div className="username-chat_container">
          <p className="user-chat">
            <span className="username">{user}</span>
            {chat}
          </p>
        </div>
      </div>
    </>
  );
};

const Livechat = () => {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([]);
  const [id, setId] = useState();
  useEffect(() => {
    socket = socketIo(ENDPOINT);
    socket.on("connect", () => {
      setId(socket.id);
    });
    socket.emit("joined", { user: "yash" });
    socket.on("welcome", (data) => {
      setMessages([...messages, data]);
    });
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessages([...messages, data]);
    });
    return () => {
      socket.off();
    };
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("message", { message: input, id });
  };

  return (
    <>
      <div className="chat-wrapper">
        <h1 className="chat-wrapper_heading">Live Chat</h1>
        <hr />
        <ReactScrollToBottom className="chats-container">
          {messages.map((chat, i) => (
            <Chat
              user={chat.id === id ? "You" : chat.user}
              chat={chat.message}
              profilePicture={chat.profilePicture}
              key={i}
              classs={chat.id === id ? "right" : "left"}
            />
          ))}
        </ReactScrollToBottom>
        <div className="chat-input_wrapper">
          <div className="chat-input">
            <form action="submit">
              <textarea
                name=""
                id="input-area"
                cols="30"
                rows="10"
                placeholder="Say something..."
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
              <div className="input-tools">
                <div className="emojis">
                  <i className="fa fa-smile-o"></i>
                  <i className="fa fa-bold"></i>
                  <i className="fa fa-italic"></i>
                  <i className="fa fa-quote-right"></i>
                </div>
                <button onClick={(e) => sendMessage(e)}>
                  Send
                  <span>
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Livechat;
