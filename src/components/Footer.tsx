import React, { useState } from "react";
import { useChat } from "../context/ChatContext.tsx";
import Wrapper from "../assets/wrappers/FooterPage.tsx";
import { IoMdSend } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";
import {
  TbLayoutSidebarRightCollapseFilled,
  TbLayoutSidebarRightExpandFilled,
} from "react-icons/tb";

const Footer: React.FC = () => {
  const { sendMessage, toggleSidebar, isSidebarVisible } = useChat();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    setLoading(true);
    sendMessage(text);
    setText("");
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <Wrapper>
      <Tooltip title={isSidebarVisible ? "Close sidebar" : "Open sidebar"}>
        <button className="side-bar-toggle-btn" onClick={toggleSidebar}>
          {isSidebarVisible ? (
            <TbLayoutSidebarRightCollapseFilled />
          ) : (
            <TbLayoutSidebarRightExpandFilled />
          )}
        </button>
      </Tooltip>
      <input
        className="input-text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        onKeyDown={handleKeyDown}
      />
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <Tooltip title="Send">
          <span>
            <button className="send-btn" onClick={handleSend} disabled={!text}>
              <IoMdSend />
            </button>
          </span>
        </Tooltip>
      )}
    </Wrapper>
  );
};

export default Footer;
