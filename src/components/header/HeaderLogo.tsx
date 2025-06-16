
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <Link to="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
      HOUSIE
    </Link>
  );
};

export default HeaderLogo;
