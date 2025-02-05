import React from "react";
import { IMessage, Sender } from "../context/ChatContext.tsx";
import { FaUser } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { Wrapper } from "../assets/wrappers/MessagePage.tsx";

const Message: React.FC<{ message: IMessage }> = ({ message }) => {
  return (
    <Wrapper $sender={message.sender}>
      <span className="msg-icon">
        {message.sender === Sender.User ? <FaUser /> : <FaRobot />}
      </span>
      <div className="msg-text"> {message.text}</div>
    </Wrapper>
  );
};

export default Message;
