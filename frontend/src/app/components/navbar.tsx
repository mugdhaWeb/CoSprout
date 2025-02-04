'use client'
import React, { useState } from 'react';

export default function Navbar () {
    const [showLinks, setShowLinks] = useState(false);
  
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
    return (
      <header className="bg-green-100">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="/" title="" className="flex">
                  <img className="w-auto h-8" src="cosproutlogo.png" alt="" />
                </a>
              </div>
              <button type="button" className="inline-flex rounded-md p-1 text-teal-600 transition-all duration-200 lg:hidden border border-teal-600  focus:bg-teal-600 focus:text-white"
              onClick={toggleLinks}>
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                </button>
                              <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10 font-semibold">

                <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">About</a>
                <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">Team</a>
                <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">Impact</a>
                <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">Resources</a>
                <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">Contact</a>

                <div className="w-px h-5 bg-black/20"></div>
                <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">Log in</a>
                <a href="/apply" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold rounded-md text-teal-600 border-2 border-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-200 focus:bg-teal-600 focus:text-white" role="button"> Apply Now</a>
              </div>
              
            </div>
          </div>
          {showLinks && (
        <div
          className="fixed top-0 left-0 z-50 w-screen h-screen bg-gray-500 bg-opacity-75 overflow-x-hidden overflow-y-auto"
          style={{ width: '50%'}}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <a href="#" title="" className="link">About</a>
            <a href="#" title="" className="link">Team</a>
            <a href="#" title="" className="link">Impact</a>
            <a href="#" title="" className="link">Resources</a>
            <a href="#" title="" className="link">Contact</a>
          </div>
        </div>
      )}
        </header>
    )
}