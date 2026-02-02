'use client';

import { useState } from 'react';

interface HeaderProps {
  onNavigate?: (sectionIndex: number) => void;
}

function Header({ onNavigate }: HeaderProps = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'หน้าแรก', section: 0 },
    { label: 'เกี่ยวกับ', section: 1 },
    { label: 'บริการ', section: 2 },
  ];

  const rightNavItems = [
    { label: 'ติดต่อ', section: 3 },
    { label: 'บล็อก', section: 4 },
    { label: 'เข้าสู่ระบบ', href: '#' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left Navigation - Desktop */}
          <nav className="hidden md:flex gap-2 lg:gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate?.(item.section)}
                className="text-white hover:text-blue-300 font-medium text-sm lg:text-base transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
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
              item.section !== undefined ? (
                <button
                  key={item.label}
                  onClick={() => onNavigate?.(item.section!)}
                  className="text-white hover:text-blue-300 font-medium text-sm lg:text-base transition-colors duration-200 bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-blue-300 font-medium text-sm lg:text-base transition-colors duration-200"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Placeholder for alignment on mobile */}
          <div className="md:hidden w-10" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-t border-gray-200 dark:border-zinc-700">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate?.(item.section);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium text-base transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <hr className="my-2 border-gray-300 dark:border-zinc-700" />
            {rightNavItems.map((item) => (
              item.section !== undefined ? (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate?.(item.section!);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium text-base transition-colors duration-200"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium text-base transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header