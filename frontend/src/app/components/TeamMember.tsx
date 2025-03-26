"use client";

// Add JSX namespace to fix type errors
declare namespace JSX {
  interface IntrinsicElements {
    'motion.div': any;
    'div': any;
    'h3': any;
    'p': any;
    'img': any;
    'a': any;
    'span': any;
  }
}

import { useState } from 'react';
import { motion } from 'framer-motion';

type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

type TeamMemberProps = {
  name: string;
  roles?: string[];  // Make roles optional with ? modifier
  bio: string;
  image: string;
  memberSince?: string; // Make memberSince optional
  socialLinks: SocialLink[];
};

export default function TeamMember({ 
  name, 
  roles = [], // Default empty array if undefined
  bio, 
  image, 
  memberSince = '', 
  socialLinks 
}: TeamMemberProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Safely check if roles is an array before rendering
  const safeRoles = Array.isArray(roles) ? roles : [];

  const cardVariants = {
    collapsed: {
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    expanded: {
      height: "auto",
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  const contentVariants = {
    collapsed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 }
    },
    expanded: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, delay: 0.1 }
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-lg team-card h-full"
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      onClick={toggleExpand}
    >
      <div className="relative h-full flex flex-col">
        <div className="aspect-square w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
          />
        </div>
        <div className="py-4 px-5 flex-grow flex flex-col">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
            
            {/* Use safeRoles instead of roles directly */}
            {safeRoles.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {safeRoles.map((role, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-50 text-blue-700 px-3 py-1 text-sm rounded-md"
                  >
                    {role}
                  </span>
                ))}
              </div>
            )}
            
            {/* Only render memberSince if it exists */}
            {memberSince && (
              <p className="text-gray-600 text-sm mb-2">Member since {memberSince}</p>
            )}
          </div>
          
          {/* Click to expand - positioned at the bottom */}
          <div className={`card-expand-button text-center text-xs text-gray-400 transition-opacity duration-300 ${isExpanded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            <span>Click to expand</span>
            <svg className="w-4 h-4 mx-auto mt-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          
          {/* Expanded content */}
          <motion.div
            variants={contentVariants}
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
            className="overflow-hidden"
          >
            <div className="pt-2">
              <p className="text-gray-700 mb-4">{bio}</p>
              <div className="flex space-x-4 mt-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200 social-icon"
                  >
                    <div dangerouslySetInnerHTML={{ __html: link.icon }} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 