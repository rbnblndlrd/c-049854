
import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingChatButton = () => {
  return (
    <button className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40">
      <MessageCircle size={24} />
    </button>
  );
};
