"use client";

import { motion } from "framer-motion";
import Navbar from '@/app/components/navbar';
import Link from 'next/link';
import '../impact.css';

// JSX namespace to fix type errors
declare namespace JSX {
  interface IntrinsicElements {
    'motion.h1': any;
    'motion.h2': any;
    'motion.div': any;
    'motion.p': any;
    'motion.span': any;
    'motion.ul': any;
    'motion.li': any;
    'main': any;
    'section': any;
    'div': any;
    'span': any;
    'p': any;
    'h1': any;
    'h2': any;
    'h3': any;
    'h4': any;
    'ul': any;
    'li': any;
    'a': any;
  }
}

// Data for universities, programs, and internships
const universities = [
  { name: "Princeton", count: 3 },
  { name: "MIT", count: 3 },
  { name: "Harvard", count: 2 },
  { name: "Stanford", count: 10 },
  { name: "Yale", count: 2 },
  { name: "UChicago", count: 1 },
  { name: "Johns Hopkins", count: 1 },
  { name: "UPenn", count: 6 },
  { name: "Caltech", count: 3 },
  { name: "Duke", count: 1 },
  { name: "Northwestern", count: 2 },
  { name: "Brown", count: 2 },
  { name: "Vanderbilt", count: 1 },
  { name: "Rice", count: 3 },
  { name: "WashU", count: 3 },
  { name: "Cornell", count: 3 },
  { name: "Columbia", count: 1 },
  { name: "UC Berkeley", count: 1 },
  { name: "NYU", count: 1 },
  { name: "UMich", count: 1 },
  { name: "UVA", count: 3 },
  { name: "USC", count: 1 },
  { name: "Tufts", count: 1 },
  { name: "University of Florida", count: 1 },
  { name: "Swarthmore", count: 3 },
  { name: "Barnard", count: 1 },
  { name: "Colby", count: 2 },
  { name: "Wesleyan", count: 2 },
  { name: "RIT", count: 2 },
  { name: "George Mason", count: 2 },
  { name: "Sophie Davis", count: 1 },
  { name: "RPI", count: 1 },
  { name: "Purdue", count: 1 },
  { name: "Brandeis", count: 1 },
  { name: "UMD", count: 1 },
  { name: "Middlebury", count: 1 },
  { name: "UTRGV", count: 1 },
  { name: "UIUC", count: 1 },
  { name: "SJSU", count: 1 }
];

const programs = [
  { name: "Jack Kent Cooke (JKC)", count: 6 },
  { name: "Gates Scholarship", count: 1 },
  { name: "Science Summer Program (SSP)", count: 3 },
  { name: "LEDA", count: 6 },
  { name: "MOSTEC", count: 14 },
  { name: "Jefferson Scholarship", count: 1 },
  { name: "BS/MD Programs", count: 3 },
  { name: "Questbridge", count: 14 },
  { name: "CSSI", count: 10 },
  { name: "AFE", count: 6 },
  { name: "SAMS", count: 1 },
  { name: "Janestreet Program", count: 2 },
  { name: "Penn M&T", count: 1 }
];

const internships = [
  { name: "Capital One", count: 2 },
  { name: "Amazon", count: 8 },
  { name: "Microsoft", count: 3 },
  { name: "Roblox", count: 1 },
  { name: "Geico", count: 1 },
  { name: "Nvidia", count: 1 },
  { name: "Google", count: 1 },
  { name: "Chase", count: 1 },
  { name: "Jane Street", count: 3 },
  { name: "Apple", count: 2 },
  { name: "Goldman Sachs", count: 1 }
];

export default function Results() {
  // Calculate total counts
  const totalUniversities = universities.reduce((sum, item) => sum + item.count, 0);
  const totalPrograms = programs.reduce((sum, item) => sum + item.count, 0);
  const totalInternships = internships.reduce((sum, item) => sum + item.count, 0);

  return (
    <main className="bg-gradient-to-b from-green-100 to-green-200 min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Abstract background shapes */}
      <div className="abstract-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Hero section */}
        <section className="text-center mb-16">
          <a
            href="/impact"
            className="inline-flex items-center text-teal-600 font-medium mb-4 hover:text-teal-700 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const currentPath = window.location.pathname;
              if (currentPath !== '/impact') {
                window.location.href = '/impact';
              }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to Impact
          </a>
          
          <motion.h1 
            className="text-4xl font-bold text-black sm:text-6xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Results
          </motion.h1>
          
          <motion.div
            className="relative inline-flex mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="highlighter absolute inset-x-0 bottom-0 border-b-[10px] border-[#4ADE80]"></span>
            <h2 className="relative text-2xl font-bold text-black sm:text-3xl">
              The Achievements of Our Scholars
            </h2>
          </motion.div>
          
          <motion.p
            className="text-lg text-black max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our scholars have gained admission to top universities, secured prestigious scholarships, 
            and landed internships at leading companies. Here&apos;s a comprehensive breakdown of their accomplishments.
          </motion.p>
        </section>
        
        {/* Summary Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-medium text-gray-600 mb-2">Universities</h3>
              <div className="text-5xl font-bold text-teal-600 mb-2">{totalUniversities}</div>
              <p className="text-gray-700">
                Acceptances to {universities.length} different institutions
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-medium text-gray-600 mb-2">Programs & Scholarships</h3>
              <div className="text-5xl font-bold text-teal-600 mb-2">{totalPrograms}</div>
              <p className="text-gray-700">
                Admissions to {programs.length} prestigious programs
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-medium text-gray-600 mb-2">Internships</h3>
              <div className="text-5xl font-bold text-teal-600 mb-2">{totalInternships}</div>
              <p className="text-gray-700">
                Positions at {internships.length} leading companies
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Universities Section */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-black mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Universities
          </motion.h2>
          
          <div className="results-grid">
            {universities.map((university, index) => (
              <motion.div
                key={university.name}
                className="bg-white rounded-lg p-6 shadow-md result-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">Admissions</p>
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    {university.count}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Programs and Scholarships Section */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-black mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Programs & Scholarships
          </motion.h2>
          
          <div className="results-grid">
            {programs.map((program, index) => (
              <motion.div
                key={program.name}
                className="bg-white rounded-lg p-6 shadow-md result-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">Recipients</p>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {program.count}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Internships Section */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-black mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Internships
          </motion.h2>
          
          <div className="results-grid">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.name}
                className="bg-white rounded-lg p-6 shadow-md result-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{internship.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">Placements</p>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {internship.count}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* CTA section */}
        <section className="text-center mb-16">
          <motion.div
            className="bg-teal-600 text-white rounded-xl py-12 px-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Success Story</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you&apos;re looking to pursue higher education, win scholarships, or land competitive internships, 
              the CoSprout community is here to support your journey.
            </p>
            <a
              href="/apply"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold bg-white text-teal-600 transition-all duration-200 rounded-md hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                const currentPath = window.location.pathname;
                if (currentPath !== '/apply') {
                  window.location.href = '/apply';
                }
              }}
            >
              Apply Now
            </a>
          </motion.div>
        </section>
      </div>
    </main>
  );
} 