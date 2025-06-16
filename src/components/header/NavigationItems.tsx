
import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationItemsProps {
  isLoggedIn: boolean;
}

const NavigationItems = ({ isLoggedIn }: NavigationItemsProps) => {
  return (
    <div className="flex items-center space-x-4">
      <Link to="/browse-providers" className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
        Find Services
      </Link>
      {isLoggedIn && (
        <>
          <Link to="/bookings" className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
            My Bookings
          </Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
            Dashboard
          </Link>
        </>
      )}
    </div>
  );
};

export default NavigationItems;
