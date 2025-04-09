"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-fey-background border-b border-fey-border/20 text-white py-4 px-6 w-full">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-medium">
          <span className="bg-gradient-to-r from-fey-accent-blue to-fey-accent-purple bg-clip-text text-transparent">TradeLite</span> Pro
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none bg-fey-highlight p-2 rounded-lg"
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
          <Link href="/simulations" className="text-gray-400 hover:text-white transition-colors">Simulations</Link>
          <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link>
          <div className="h-4 w-px bg-fey-border/50 mx-2"></div>
          <Link href="/auth/login" className="text-gray-400 hover:text-white transition-colors">Sign In</Link>
          <Link 
            href="/auth/register" 
            className="bg-gradient-to-r from-fey-accent-blue to-fey-accent-purple px-4 py-1.5 rounded-xl hover:opacity-90 transition-opacity text-white font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 py-2 space-y-3 bg-fey-card rounded-xl p-4 shadow-lg absolute z-50 left-4 right-4">
          <Link href="/" className="block px-2 py-1.5 text-gray-400 hover:text-white transition-colors">Home</Link>
          <Link href="/simulations" className="block px-2 py-1.5 text-gray-400 hover:text-white transition-colors">Simulations</Link>
          <Link href="/dashboard" className="block px-2 py-1.5 text-gray-400 hover:text-white transition-colors">Dashboard</Link>
          <div className="h-px w-full bg-fey-border/30 my-2"></div>
          <Link href="/auth/login" className="block px-2 py-1.5 text-gray-400 hover:text-white transition-colors">Sign In</Link>
          <Link 
            href="/auth/register" 
            className="block px-4 py-2 mt-2 bg-gradient-to-r from-fey-accent-blue to-fey-accent-purple rounded-xl text-center text-white"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
