'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-950 to-blue-950 text-white py-6 px-4 border-t border-gray-800 fixed bottom-0 left-0 z-10">
      <div className="max-w-15xl mx-auto flex flex-col items-center">
        <div className="text-center mb-2">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} IEEE Executive. All rights reserved.
          </p>
        </div>
        <div className="group">
          <Link 
            href="/team" 
            className="flex items-center text-gray-400 hover:text-blue-300 transition-colors duration-300"
          >
            <span className="text-xs font-medium mr-1">Designed by</span>
            <span className="text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-100 group-hover:from-blue-300 group-hover:to-blue-200 transition-all duration-300">
              The Team
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}