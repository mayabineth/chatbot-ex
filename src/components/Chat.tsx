import React from "react";
import { useChat } from "../context/ChatContext.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import MessageList from "./MessageList.tsx";
import Sidebar from "./SideBar.tsx";
import Wrapper from "../assets/wrappers/ChatPage.tsx";

const Chat: React.FC<{ username: string }> = ({ username }) => {
  const { isSidebarVisible } = useChat();
  return (
    <Wrapper $isSidebarVisible={isSidebarVisible}>
      <Header username={username} />
      <div className="chat-container">
        <Sidebar />
        <MessageList />
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Chat;
