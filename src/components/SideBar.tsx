import React from "react";
import { Sender, useChat } from "../context/ChatContext.tsx";
import Wrapper from "../assets/wrappers/SideBarPage.tsx";
import { FaTimes } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";

const Sidebar: React.FC = () => {
  const {
    messages,
    toggleSidebar,
    deleteMessage,
    resendMessage,
    isSidebarVisible,
  } = useChat();

  if (!isSidebarVisible) return null;

  return (
    <Wrapper>
      <Tooltip title="Close sidebar">
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </Tooltip>
      <h3 className="title">Recent Messages</h3>
      {messages
        .filter((msg) => msg.sender === Sender.User)
        .map((msg) => (
          <div className="msgs" key={msg.id}>
            <span >{msg.text}</span>
            <div className="msg-details">
              <span className="btns">
                <button
                  className="resend-btn btn"
                  onClick={() => resendMessage(msg.text)}
                >
                  Resend
                </button>
                <button
                  className="delete-btn btn"
                  onClick={() => deleteMessage(msg.id)}
                >
                  Delete
                </button>
              </span>
              <span className="date-time">{msg.timestamp}</span>
            </div>
          </div>
        ))}
    </Wrapper>
  );
};

export default Sidebar;
