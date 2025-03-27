'use client'
import React, { useState } from 'react';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  // Function to navigate only if the current path is different from target
  const handleNavigation = (path: string) => {
    // Get the current path
    const currentPath = window.location.pathname;
    
    // Only navigate if the path is different from current path
    if (currentPath !== path) {
      window.location.href = path;
    }
  };

  return (
    <header className="bg-green-100 relative z-50">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
              <img className="w-auto h-8" src="/cosproutlogo.png" alt="CoSprout Logo" />
            </a>
          </div>
            
          <button 
            type="button" 
            className="inline-flex rounded-md p-1 text-teal-600 transition-all duration-200 lg:hidden border border-teal-600 focus:bg-teal-600 focus:text-white"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg className={`w-6 h-6 ${showMobileMenu ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <svg className={`w-6 h-6 ${showMobileMenu ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
            
          <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10 font-semibold">
            <a href="/about" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={(e) => { e.preventDefault(); handleNavigation('/about'); }}>About</a>
            <a href="/team" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={(e) => { e.preventDefault(); handleNavigation('/team'); }}>Team</a>
            <a href="/impact" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={(e) => { e.preventDefault(); handleNavigation('/impact'); }}>Impact</a>
            <a href="/resources" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80" onClick={(e) => { e.preventDefault(); handleNavigation('/resources'); }}>Resources</a>
            <a href="#" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">Contact</a>

            <div className="w-px h-5 bg-black/20"></div>
            <a href="#" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">Log in</a>
            <a href="/apply" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold rounded-md text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-200 focus:bg-teal-600 focus:text-white" onClick={(e) => { e.preventDefault(); handleNavigation('/apply'); }}>Apply Now</a>
          </div>
        </div>
      </div>
        
      {showMobileMenu && (
        <div className="fixed top-0 left-0 z-50 w-64 h-screen bg-green-100 shadow-lg overflow-x-hidden overflow-y-auto flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setShowMobileMenu(false)}
              className="text-teal-600 hover:text-teal-800"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-start p-5 space-y-4">
            <a href="/" className="w-full py-2 text-center text-lg font-semibold text-black hover:text-teal-600" onClick={(e) => { e.preventDefault(); handleNavigation('/'); setShowMobileMenu(false); }}>Home</a>
            <a href="/about" className="w-full py-2 text-center text-lg font-semibold text-black hover:text-teal-600" onClick={(e) => { e.preventDefault(); handleNavigation('/about'); setShowMobileMenu(false); }}>About</a>
            <a href="/team" className="w-full py-2 text-center text-lg font-semibold text-black hover:text-teal-600" onClick={(e) => { e.preventDefault(); handleNavigation('/team'); setShowMobileMenu(false); }}>Team</a>
            <a href="/impact" className="w-full py-2 text-center text-lg font-semibold text-black hover:text-teal-600" onClick={(e) => { e.preventDefault(); handleNavigation('/impact'); setShowMobileMenu(false); }}>Impact</a>
            <a href="/resources" className="w-full py-2 text-center text-lg font-semibold text-black hover:text-teal-600" onClick={(e) => { e.preventDefault(); handleNavigation('/resources'); setShowMobileMenu(false); }}>Resources</a>
            <a href="#" className="w-full py-2 text-center text-lg font-semibold text-black hover:text-teal-600" onClick={() => setShowMobileMenu(false)}>Contact</a>
            <div className="w-full h-px bg-gray-200 my-2"></div>
            <a href="#" className="w-full py-2 text-center text-lg font-semibold text-black hover:text-teal-600" onClick={() => setShowMobileMenu(false)}>Log in</a>
            <a href="/apply" className="w-full py-2 text-center text-lg font-semibold text-teal-600 border-2 border-teal-600 rounded-md hover:bg-teal-600 hover:text-white" onClick={(e) => { e.preventDefault(); handleNavigation('/apply'); setShowMobileMenu(false); }}>Apply Now</a>
          </div>
        </div>
      )}
    </header>
  );
}