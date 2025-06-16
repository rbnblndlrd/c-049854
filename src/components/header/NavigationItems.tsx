
import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationItemsProps {
  isLoggedIn: boolean;
}

const NavigationItems = ({ isLoggedIn }: NavigationItemsProps) => {
  return (
    <div className="flex items-center space-x-4">
      <Link to="/browse-providers" className="text-white hover:text-gray-300">
        Browse
      </Link>
      {isLoggedIn && (
        <Link to="/dashboard" className="text-white hover:text-gray-300">
          Dashboard
        </Link>
      )}
    </div>
  );
};

export default NavigationItems;
