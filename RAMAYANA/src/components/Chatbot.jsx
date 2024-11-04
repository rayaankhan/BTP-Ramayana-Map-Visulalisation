import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return; // Avoid sending empty messages

    // Add user's message to chat
    setMessages([...messages, { text: message, type: 'user' }]);
    setMessage('');

    try {
      const res = await fetch('https://ramayana4everyone.onrender.com/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        const data = await res.json();
        // Add bot's response to chat
        setMessages([...messages, { text: message, type: 'user' }, { text: data.reply, type: 'bot' }]);
      } else {
        // Handle non-200 responses
        console.error('Failed to send message');
        setMessages([...messages, { text: message, type: 'user' }, { text: 'Failed to get response', type: 'bot' }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages([...messages, { text: message, type: 'user' }, { text: 'Error sending message', type: 'bot' }]);
    }
  };

  return (
    <div className="relative z-20">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed  top-4 right-2 lg:bottom-4 lg:right-4 lg:top-auto p-3 lg:p-4 bg-orange-600 text-white rounded-r-xl rounded-tl-xl shadow-lg hover:bg-orange-600 transition-colors"
        >
          <span className="text-sm lg:text-xl ">💬</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
          <div className="flex items-center justify-between bg-orange-500 p-3 text-white rounded-t-lg">
            <h3 className="text-lg font-semibold">Chatbot</h3>
            <button
              onClick={toggleChat}
              className="text-xl font-semibold hover:text-gray-200"
            >
              ×
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Chat messages */}
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-md ${msg.type === 'user' ? 'bg-gray-100 text-right' : 'bg-blue-100 text-left'}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-gray-200 p-2 flex items-center">
            <input
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="Type a message..."
              className="flex-1 p-1 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="ml-2 bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
