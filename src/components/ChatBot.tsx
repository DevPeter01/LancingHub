import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ id: number; text: string; sender: 'user' | 'bot' }[]>([
    { id: 1, text: 'Hello, How are you doing today!', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newUserMessage = { id: messages.length + 1, text: inputValue, sender: 'user' as const };
      setMessages([...messages, newUserMessage]);
      setInputValue('');

      setTimeout(() => {
        const botResponse = { 
          id: messages.length + 2, 
          text: 'How can I help you today?', 
          sender: 'bot' as const 
        };
        setMessages(prev => [...prev, botResponse]);
      }, 500);
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-xl flex items-center justify-center z-40 hover:shadow-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={28} />
      </motion.button>

      {/* Chatbot Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header with Messages/Support tabs */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 flex items-center justify-between rounded-t-2xl">
              <div className="flex gap-2">
                <button className="bg-white/30 hover:bg-white/40 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 transition">
                  📧 Messages
                </button>
                <button className="text-white px-3 py-1 text-sm hover:bg-white/10 rounded-full transition">
                  Support
                </button>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Branding Bar */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-2 flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm font-bold">
                ✓
              </div>
              <span className="font-bold text-sm">Lancing Hub</span>
              <span className="text-xs text-white/80">▼</span>
            </div>

            {/* Date */}
            <div className="px-4 pt-3 pb-2 text-gray-600 text-sm font-medium">
              Friday, 13 February
            </div>

            {/* Messages Container */}
            <div className="h-40 overflow-y-auto px-4 py-2 space-y-3 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0">
                      L
                    </div>
                  )}
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-gray-300 text-gray-900'
                        : 'bg-gray-200 text-gray-900'
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info Message */}
            <div className="px-4 py-2 border-t border-gray-200 bg-white">
              <p className="text-xs text-gray-700 font-medium mb-2">
                Just in case you leave or we reply later:
              </p>
              <p className="text-xs text-gray-600 italic">
                How do you want us to get back to you?
              </p>
            </div>

            {/* Email Alert */}
            <div className="px-4 py-2 border-t border-gray-200 bg-yellow-50">
              <p className="text-xs text-yellow-800 font-medium flex items-start gap-2">
                <span>🔔</span>
                <span>Please set your email to continue.</span>
              </p>
            </div>

            {/* Input & Send */}
            <div className="p-3 border-t border-gray-200 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Compose your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <motion.button
                onClick={handleSendMessage}
                className="px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
