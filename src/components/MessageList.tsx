import React from "react";
import { useChat } from "../context/ChatContext.tsx";
import Message from "./Message.tsx";
import Wrapper from "../assets/wrappers/MessageListPage.tsx";
import logo from "../assets/images/no-messages.svg";

const MessageList: React.FC = () => {
  const { messages } = useChat();

  return (
    <Wrapper>
      {messages.length > 0 ? (
        messages.map((msg) => <Message key={msg.id} message={msg} />)
      ) : (
        <div className="no-messages">
          <img src={logo} alt="No messages" />
          <span>Start a conversation!</span>
        </div>
      )}
    </Wrapper>
  );
};

export default MessageList;
