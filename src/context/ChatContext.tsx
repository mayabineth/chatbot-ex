import React, { createContext, useContext, useState } from "react";
import { format } from "date-fns";

export enum Sender {
  User = "User",
  Bot = "Bot",
}

export interface IMessage {
  id: number;
  text: string;
  sender: Sender;
  timestamp: string;
}

interface IChatContextProps {
  messages: IMessage[];
  sendMessage: (text: string) => void;
  deleteMessage: (id: number) => void;
  resendMessage: (text: string) => void;
  toggleSidebar: () => void;
  isSidebarVisible: boolean;
}

const ChatContext = createContext<IChatContextProps | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMessage: IMessage = {
      id: Date.now(),
      text,
      sender: Sender.User,
      timestamp: format(new Date(), "dd/MM/yyyy HH:mm"),
    };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: IMessage = {
        id: Date.now(),
        text,
        sender: Sender.Bot,
        timestamp: format(new Date(), "dd/MM/yyyy HH:mm"),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const deleteMessage = (id: number) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const resendMessage = (text: string) => {
    sendMessage(text);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        sendMessage,
        deleteMessage,
        resendMessage,
        toggleSidebar,
        isSidebarVisible,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
