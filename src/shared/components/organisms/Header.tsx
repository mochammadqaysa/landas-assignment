import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '@/routes/routes';
import BasicText from '@/shared/components/atoms/texts/BasicText';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: 'EN', href: '#' },
    { name: 'KW', href: '#' },
    { name: 'PANTS', href: '#' },
    { name: 'T-SHIRT', href: '#' },
    { name: 'SALE', href: '#' },
    { name: 'COLLECTION', href: '#' },
    { name: 'COMMUNITY', href: '#' },
  ];

  const handleLoginClick = () => {
    navigate(routes.login);
  };

  const handleLogoClick = () => {
    navigate(routes.main);
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="text-2xl font-bold text-primary-400 hover:text-primary-300 transition-colors"
            >
              LANDAS
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm hover:text-primary-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <button className="hover:text-primary-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.8-9M7 13l-2.293 2.293c-.195.195-.195.512 0 .707L7 18h10" />
              </svg>
            </button>

            {/* User Icon */}
            <button 
              className="hover:text-primary-400 transition-colors"
              onClick={handleLoginClick}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Search Icon */}
            <button 
              className="hover:text-primary-400 transition-colors"
              // You can add onClick handler for search here if needed
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth={2} />
                <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
              </svg>
            </button>

            {/* Currency */}
            <BasicText size="sm" className="hidden sm:block text-white">
              로그아웃
            </BasicText>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden hover:text-primary-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm hover:text-primary-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}