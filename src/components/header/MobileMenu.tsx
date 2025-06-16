
import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="bg-white border-t border-gray-200 py-4">
      <div className="space-y-2">
        <Link 
          to="/browse-providers" 
          className="block text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Find Services
        </Link>
        
        {user ? (
          <>
            <Link 
              to="/bookings" 
              className="block text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
              onClick={onClose}
            >
              My Bookings
            </Link>
            <Link 
              to="/dashboard" 
              className="block text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
              onClick={onClose}
            >
              Dashboard
            </Link>
            <Link 
              to="/my-profile" 
              className="block text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
              onClick={onClose}
            >
              My Profile
            </Link>
            <button 
              onClick={handleSignOut}
              className="block text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-4 py-2 w-full text-left rounded-lg"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link 
              to="/auth" 
              className="block text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
              onClick={onClose}
            >
              Sign In
            </Link>
            <Link 
              to="/auth" 
              className="block bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-center"
              onClick={onClose}
            >
              Sign Up
            </Link>
          </>
        )}
        
        <Link 
          to="/pricing" 
          className="block text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          HOUSIE Pro
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
