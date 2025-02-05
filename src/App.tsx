import React from "react";
import { ChatProvider } from "./context/ChatContext.tsx";
import Chat from "./components/Chat.tsx";

const App: React.FC = () => {
  return (
    <ChatProvider>
      <Chat username="Maya" />
    </ChatProvider>
  );
};

export default App;
