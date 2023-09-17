import React, { useState, useRef, useEffect } from 'react';
import { IoIosSend } from 'react-icons/io';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const chatContainerRef = useRef(null);

  // Scroll to the bottom of the chat container when new messages arrive
  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const userMessage = {
      text: newMessage,
      timestamp: new Date().toLocaleTimeString(),
      sender: 'User',
    };

    const systemResponse = {
      text: 'This is an automated system response.',
      timestamp: new Date().toLocaleTimeString(),
      sender: 'System',
    };

    setMessages([...messages, userMessage, systemResponse]);
    setNewMessage('');
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Chat Header */}
      <div className="bg-blue-500 text-white py-4 px-6">
        <h2 className="text-lg font-semibold">Support Chat</h2>
      </div>

      {/* Chat Messages */}
      <div
        ref={chatContainerRef}
        className="flex-1 p-4 overflow-y-auto bg-gray-100"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-md rounded-lg py-2 px-4 ${
              message.sender === 'User' ? 'bg-blue-500 text-white ml-auto' : 'bg-white text-gray-800 mr-auto'
            } mb-2`}
          >
            {message.text}
            <div className="text-xs text-gray-500 mt-1">{message.timestamp}</div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-white p-4 border-t border-gray-300">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleSendMessage}
          >
            <IoIosSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
