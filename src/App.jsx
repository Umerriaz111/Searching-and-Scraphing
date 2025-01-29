import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chatbot from './components/chatbot/chatbot/Chatbot';

import Sidebar from './components/chatbot/sidebar/Sidebar';



function App() {
  const [count, setCount] = useState(0)
  const [showChatbot, setShowChatbot] = useState(false);
  const handleNewChat = () => {
    setShowChatbot(true); // Show chatbot when "New Chat" is clicked
};
  return (
    <>
    <Sidebar onNewChat={handleNewChat} />
            <div >
                {showChatbot && <Chatbot />} {/* Render chatbot if showChatbot is true */}
            </div> 
  
            {/* <Chatbot />
            <Sidebar/> */}
    </> 
    
  )
}

export default App
