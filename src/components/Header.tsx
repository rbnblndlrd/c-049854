
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { LanguageToggle } from '@/components/LanguageToggle';
import HeaderLogo from '@/components/header/HeaderLogo';
import NavigationItems from '@/components/header/NavigationItems';
import UserMenu from '@/components/header/UserMenu';
import MobileMenu from '@/components/header/MobileMenu';

const Header = () => {
  const { user, signOut } = useAuth();
  const { currentTier } = useSubscription();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
    setIsMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0 mr-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <HeaderLogo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-end flex-1 space-x-1">
            <nav className="flex items-center space-x-1">
              <NavigationItems isLoggedIn={!!user} />
              
              {/* HOUSIE Pro - Always visible */}
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200 px-4 py-2 rounded-lg text-sm whitespace-nowrap">
                HOUSIE Pro
              </Link>
            </nav>
            
            {/* Desktop Controls */}
            <div className="flex items-center space-x-3 ml-6">
              {/* Language Toggle */}
              <div className="flex-shrink-0">
                <LanguageToggle />
              </div>
              
              {/* User Menu - Desktop only */}
              <div className="flex-shrink-0">
                <UserMenu 
                  user={user} 
                  currentTier={currentTier} 
                  signOut={signOut}
                />
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Language toggle for tablet only */}
            <div className="hidden md:flex lg:hidden items-center space-x-2">
              <LanguageToggle />
            </div>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 text-gray-700 hover:bg-gray-100"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <MobileMenu
              isOpen={isMenuOpen}
              user={user}
              currentTier={currentTier}
              onClose={closeMobileMenu}
              handleSignOut={handleSignOut}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
