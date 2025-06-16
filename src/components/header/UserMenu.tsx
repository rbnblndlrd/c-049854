
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
        <Link to="/auth">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </Link>
        <Link to="/auth">
          <Button size="sm">
            Sign Up
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-700">Hello, {user.name || user.email}</span>
      <Link to="/my-profile">
        <Button variant="outline" size="sm">
          Profile
        </Button>
      </Link>
      <Button variant="ghost" size="sm" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
};

export default UserMenu;
