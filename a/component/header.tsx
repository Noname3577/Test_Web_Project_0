'use client';

import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'หน้าแรก', href: '#' },
    { label: 'เกี่ยวกับ', href: '#' },
    { label: 'บริการ', href: '#' },
  ];

  const rightNavItems = [
    { label: 'ติดต่อ', href: '#' },
    { label: 'บล็อก', href: '#' },
    { label: 'เข้าสู่ระบบ', href: '#' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left Navigation - Desktop */}
          <nav className="hidden md:flex gap-2 lg:gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
            
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 mx-4 sm:mx-6 md:flex-1 md:flex md:justify-center">
            <img src="./logo.png" alt="โลโก้" className="h-8 sm:h-10 lg:h-12" />
          </div>

          {/* Right Navigation - Desktop */}
          <nav className="hidden md:flex gap-2 lg:gap-6">
            {rightNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Placeholder for alignment on mobile */}
          <div className="md:hidden w-10" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-transparent border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium text-base transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr className="my-2" />
            {rightNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium text-base transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header