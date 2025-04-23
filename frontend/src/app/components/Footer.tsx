"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
              Links
            </h3>
            <ul className="space-y-3">
              {['About', 'Team', 'Impact', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-base text-gray-600 hover:text-teal-600 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const currentPath = window.location.pathname;
                      const targetPath = `/${item.toLowerCase()}`;
                      if (currentPath !== targetPath) {
                        window.location.href = targetPath;
                      }
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://twitter.com/cosprout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base text-gray-600 hover:text-teal-600 transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/cosprout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base text-gray-600 hover:text-teal-600 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/cosprout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base text-gray-600 hover:text-teal-600 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com/cosprout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base text-gray-600 hover:text-teal-600 transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <p className="text-base text-gray-600">
                  Email: contact@cosprout.org
                </p>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const currentPath = window.location.pathname;
                    if (currentPath !== '/contact') {
                      window.location.href = '/contact';
                    }
                  }}
                >
                  Get in touch
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} CoSprout. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 