import React from "react";
import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div>
      <form className="form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
        <button className="sendButton" onClick={(e) => sendMessage(e)}>
          Send{" "}
        </button>
      </form>
    </div>
  );
};

export default Input;
