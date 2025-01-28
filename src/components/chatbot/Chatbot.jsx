import React, { useState, useEffect, useRef } from "react";
import "./chatbot.css";
import { FcGoogle } from "react-icons/fc";
import { SiDuckduckgo } from "react-icons/si";
import { BsBing } from "react-icons/bs";
import { TbBrandYahoo } from "react-icons/tb";
import { TbBrandWikipedia } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { BsAmazon } from "react-icons/bs";
import { SiStartpage } from "react-icons/si";
import { FaYandex } from "react-icons/fa";
import { SiQwant } from "react-icons/si";
import { SiEcosia } from "react-icons/si";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatWindowRef = useRef(null); // Reference to the chat window

  const sendMessage = () => {
    if (input.trim() === "") return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Add the user's message to the chat window
    const userMessage = { text: input, time: currentTime, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Clear the input box
    setInput("");

    // Simulate a dummy response after a short delay
    setTimeout(() => {
      const dummyResponse = `You said: "${input}"`; // Create a dummy response
      const supportMessage = {
        text: dummyResponse,
        time: currentTime,
        sender: "support",
      };
      setMessages((prevMessages) => [...prevMessages, supportMessage]);
    }, 1000); // Simulate a 1-second delay for the response

    // For API Call WE Can Used Below Code
    // Send the user's message to the Flask backend
    // fetch('/chat', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ message: input })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     const supportMessage = { text: data.response, time: currentTime, sender: 'support' };
    //     setMessages((prevMessages) => [...prevMessages, supportMessage]);
    //   })
    //   .catch(error => console.error('Error:', error));
  };

  // Scroll to the bottom of the chat window whenever messages change
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className="chatbot-container">
      <header className="chatbot-header">
        <img src="./phoenix.png" alt="Logo" className="logo" />
        <h1>Search Engine Bot</h1>
      </header>

      <div className="chat-window" ref={chatWindowRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.sender === "user" ? (
              <>
                <p>{msg.text}</p>
                <span className="time">{msg.time}</span>
              </>
            ) : (
              <>
                <p>{msg.text}</p>
                <div>
                  <p>Title</p>
                  <p>Content</p>
                  <div style={{ backgroundColor: "#f4f4f9" }}>
                    <p>URL of Product</p>
                  </div>
                </div>
                <span className="time">{msg.time}</span>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <div className="chat-input_message">
          <input
            type="text"
            placeholder="Type a message..."
            className="message-box"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="send-button" onClick={sendMessage}>
            <img src="./paper-plane.png" alt="Send" />
          </button>
        </div>
        <div className="search-icon">
          <span className="icon-container">
            <FcGoogle fontSize={23} />
          </span>
          <span className="icon-container">
            <SiDuckduckgo fontSize={23} />
          </span>
          <span className="icon-container">
            <BsBing fontSize={23} />
          </span>
          <span className="icon-container">
            <TbBrandYahoo fontSize={23} />
          </span>
          <span className="icon-container">
            <TbBrandWikipedia fontSize={23} />
          </span>
          <span className="icon-container">
            <FaGithub fontSize={23} />
          </span>
          <span className="icon-container">
            <BsAmazon fontSize={23} />
          </span>
          <span className="icon-container">
            <SiStartpage fontSize={23} />
          </span>
          <span className="icon-container">
            <FaYandex fontSize={23} />
          </span>
          <span className="icon-container">
            <SiQwant fontSize={23} />
          </span>
          <span className="icon-container">
            <SiEcosia fontSize={23} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
