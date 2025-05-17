'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [logoImage, setLogoImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // Simulate fetching logo from backend
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        // Simulate no logo being available
        setTimeout(() => {
          setLogoImage(null);
        }, 500);
      } catch (error) {
        console.error('Error fetching logo:', error);
        setLogoImage(null);
      }
    };

    fetchLogo();
  }, []);

  // Update active link based on route
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-blue-800 text-white shadow-lg">
      <div className="max-w-15xl mx-auto px-4 sm:px-10 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Title section */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              className="flex items-center group"
              onClick={() => setActiveLink('/')}
            >
              {logoImage ? (
                <Image
                  src={logoImage}
                  alt="Company Logo"
                  width={140}
                  height={50}
                  className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  priority
                />
              ) : (
                <div className="flex flex-col group">
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 tracking-tight">
                    IEEE
                  </span>
                  <span className="text-xl font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-100 mt-[-4px]">
                    EXECUTIVE
                  </span>
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavLink href="/" active={activeLink === '/'}>Home</NavLink>
              <NavLink href="/team" active={activeLink === '/team'}>Team</NavLink>
              <NavLink href="/achievements" active={activeLink === '/achievements'}>Achievements</NavLink>
              <NavLink href="/services" active={activeLink === '/services'}>Services</NavLink>
              <NavLink href="/socials" active={activeLink === '/socials'}>Socials</NavLink>
              <NavLink href="/about" active={activeLink === '/about'}>About</NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-700/30 focus:outline-none transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-900/90 to-gray-900/90 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <MobileNavLink href="/" active={activeLink === '/'}>Home</MobileNavLink>
            <MobileNavLink href="/team" active={activeLink === '/team'}>Team</MobileNavLink>
            <MobileNavLink href="/achievements" active={activeLink === '/achievements'}>Achievements</MobileNavLink>
            <MobileNavLink href="/services" active={activeLink === '/services'}>Services</MobileNavLink>
            <MobileNavLink href="/socials" active={activeLink === '/socials'}>Socials</MobileNavLink>
            <MobileNavLink href="/about" active={activeLink === '/about'}>About</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

// Enhanced NavLink component for desktop
function NavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 group
        ${active ? 'text-blue-200' : 'text-gray-300 hover:text-white'}`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-300 transition-all duration-500 
        ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </Link>
  );
}

// Enhanced MobileNavLink component
function MobileNavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`block px-4 py-3 text-xl rounded-lg transition-all duration-300
        ${active ? 'bg-blue-800/50 text-white font-semibold' : 'text-blue-100 hover:bg-blue-800/30 hover:text-white'}`}
    >
      <span className="flex items-center">
        <span className={`mr-2 h-1 w-1 rounded-full transition-all duration-300
          ${active ? 'bg-blue-300 w-2' : 'bg-blue-400/50 group-hover:bg-blue-300'}`}></span>
        {children}
      </span>
    </Link>
  );
}