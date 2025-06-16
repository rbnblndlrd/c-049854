
import React from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  user: User | null;
  currentTier: string;
  onClose: () => void;
  handleSignOut: () => void;
}

const MobileMenu = ({ isOpen, user, currentTier, onClose, handleSignOut }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="bg-black border-t border-gray-800 py-4">
      <div className="space-y-2">
        <a href="/browse-providers" className="block text-white hover:text-gray-300 px-4 py-2">
          Browse Providers
        </a>
        {user && (
          <>
            <a href="/dashboard" className="block text-white hover:text-gray-300 px-4 py-2">
              Dashboard
            </a>
            <button 
              onClick={handleSignOut}
              className="block text-white hover:text-gray-300 px-4 py-2 w-full text-left"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
