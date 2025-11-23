import React, { useState } from 'react';
import { Menu, X, ChevronDown, Home, MapPin, Map, Package, Users, BusFront, Sun, Moon } from 'lucide-react';
import logo from 'figma:asset/ef2381e67a01993bc3e64608d41a297647c090de.png';
import { useDarkMode } from './DarkModeContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const exploreDropdownItems = [
    { label: 'Station Facilities', href: 'https://rrts.co.in/web/station-facility', icon: MapPin },
    { label: 'Map', href: 'https://rrts.co.in/web/rrts-map', icon: Map },
    { label: 'Lost and Found', href: 'https://rrts.co.in/web/lost-found', icon: Package },
    { label: 'Feeder Bus Services', href: 'https://rrts.co.in/web/feed-bus', icon: BusFront },
    { label: 'Ridership Information', href: 'https://rrts.co.in/web/ridership', icon: Users },
  ];

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.explore-dropdown-container')) {
        setIsExploreOpen(false);
      }
    };

    if (isExploreOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isExploreOpen]);

  return (
    <header className="bg-[#3d4450] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button (left) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="NCRTC Logo" className="h-10" />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center space-x-1 flex-1">
            <a
              href="#home"
              onClick={scrollToTop}
              className="px-3 py-2 text-sm font-medium hover:bg-orange-600 transition-all duration-200 rounded"
              style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' }}
            >
              Home
            </a>
            
            {/* Explore with Dropdown */}
            <div 
              className="relative explore-dropdown-container"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsExploreOpen(!isExploreOpen);
                }}
                className="px-3 py-2 text-sm font-medium hover:bg-orange-600 transition-all duration-200 rounded flex items-center gap-1 group"
                style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' }}
              >
                <span className="group-hover:translate-y-[-1px] transition-transform duration-200">
                  Explore
                </span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isExploreOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isExploreOpen && (
                <div className="absolute top-full left-0 mt-1 bg-[#2d3239] rounded-md shadow-xl min-w-[220px] py-2 z-50">
                  {exploreDropdownItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-sm hover:bg-orange-600 transition-colors"
                    >
                      <item.icon size={16} className="mr-2" />
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#help-support"
              className="px-3 py-2 text-sm font-medium hover:bg-orange-600 transition-all duration-200 rounded"
              style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' }}
            >
              Help & Support
            </a>

            <a
              href="#faq"
              className="px-3 py-2 text-sm font-medium hover:bg-orange-600 transition-all duration-200 rounded"
              style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' }}
            >
              FAQ
            </a>

            <a
              href="#discounted-fare"
              className="px-3 py-2 text-sm font-medium hover:bg-orange-600 transition-all duration-200 rounded"
              style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' }}
            >
              Discounted Fare
            </a>
          </nav>

          {/* Right Side: Dark Mode Toggle & Namo Bharat Button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-600 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-orange-400" />
              ) : (
                <Moon size={20} className="text-gray-200" />
              )}
            </button>

            {/* Namo Bharat Website Button */}
            <a
              href="https://rrts.co.in/web/dashboard/home"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-bold bg-orange-600 text-white hover:bg-white hover:text-orange-600 transition-all duration-200 rounded border-2 border-orange-600"
              style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif' }}
            >
              NAMO BHARAT WEBSITE
            </a>
          </div>

          {/* Spacer for mobile to balance the layout */}
          <div className="md:hidden w-10"></div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-600">
            <a
              href="#home"
              onClick={(e) => {
                scrollToTop(e);
                setIsMenuOpen(false);
              }}
              className="block px-3 py-3 text-sm font-medium hover:bg-gray-700 transition-colors rounded"
            >
              Home
            </a>

            {/* Explore with Mobile Dropdown */}
            <div>
              <button
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium hover:bg-gray-700 transition-colors rounded"
              >
                <span>Explore</span>
                <ChevronDown size={14} className={`transition-transform ${isExploreOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isExploreOpen && (
                <div className="pl-6 bg-[#2d3239]">
                  {exploreDropdownItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 text-sm hover:bg-gray-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon size={16} className="mr-2 inline-block" />
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#help-support"
              className="block px-3 py-3 text-sm font-medium hover:bg-gray-700 transition-colors rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Help & Support
            </a>

            <a
              href="#faq"
              className="block px-3 py-3 text-sm font-medium hover:bg-gray-700 transition-colors rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>

            <a
              href="#discounted-fare"
              className="block px-3 py-3 text-sm font-medium hover:bg-gray-700 transition-colors rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Discounted Fare
            </a>

            {/* Namo Bharat Website Button - Mobile */}
            <a
              href="https://rrts.co.in/web/dashboard/home"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-3 mt-3 px-4 py-3 text-sm font-bold bg-orange-600 text-white hover:bg-white hover:text-orange-600 transition-all duration-200 rounded border-2 border-orange-600 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              NAMO BHARAT WEBSITE
            </a>

            {/* Dark Mode Toggle - Mobile */}
            <button
              onClick={toggleDarkMode}
              className="mx-3 mt-3 px-4 py-3 text-sm font-medium bg-gray-700 hover:bg-gray-600 transition-all duration-200 rounded flex items-center justify-center gap-2"
            >
              {isDarkMode ? (
                <>
                  <Sun size={18} className="text-orange-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={18} className="text-gray-200" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}