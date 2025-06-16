
import React from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface UserMenuProps {
  user: User | null;
  currentTier: string;
  signOut: () => void;
}

const UserMenu = ({ user, currentTier, signOut }: UserMenuProps) => {
  if (!user) {
    return (
      <div className="flex items-center space-x-2">
        <button className="text-white hover:text-gray-300">Sign In</button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-white">{user.name}</span>
      <button onClick={signOut} className="text-white hover:text-gray-300">
        Sign Out
      </button>
    </div>
  );
};

export default UserMenu;
