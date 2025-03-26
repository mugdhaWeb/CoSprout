"use client";

import { motion } from "framer-motion";
import { useState } from 'react';
import Navbar from '@/app/components/navbar';
import Link from 'next/link';
import './impact.css';

// JSX namespace to fix type errors
declare namespace JSX {
  interface IntrinsicElements {
    'motion.h1': any;
    'motion.h2': any;
    'motion.div': any;
    'motion.p': any;
    'motion.span': any;
    'main': any;
    'section': any;
    'div': any;
    'span': any;
    'p': any;
    'h1': any;
    'h2': any;
    'h3': any;
    'h4': any;
    'img': any;
    'a': any;
    'blockquote': any;
  }
}

// Testimonial data
const testimonials = [
  {
    quote: "CoSprout changed me in a way that I love. Rather than being some kid who just wanted to get a good job and defy a stereotype, I became a person who is trying to change the world.",
    name: "Marcus",
    school: "Princeton",
    year: "26"
  },
  {
    quote: "The mentorship I received through CoSprout was transformative. My mentor didn&apos;t just help me with college applications, but helped me discover my passion for engineering and believe in my abilities.",
    name: "Sofia",
    school: "MIT",
    year: "25"
  },
  {
    quote: "As a first-generation student, I had no idea how to navigate the college application process. CoSprout provided me with the guidance, resources, and confidence I needed to aim high and achieve my dreams.",
    name: "Jamal",
    school: "Stanford",
    year: "24"
  },
  {
    quote: "Through CoSprout, I learned that my background wasn&apos;t a limitation but a strength. The skills and perspective I gained helped me secure both admission to my dream school and a life-changing scholarship.",
    name: "Anita",
    school: "Harvard",
    year: "25"
  }
];

export default function Impact() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
        <section className="text-center mb-20">
          <motion.h1 
            className="text-4xl font-bold text-black sm:text-6xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Impact
          </motion.h1>
          
          <motion.div
            className="relative inline-flex mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="highlighter absolute inset-x-0 bottom-0 border-b-[10px] border-[#4ADE80]"></span>
            <h2 className="relative text-2xl font-bold text-black sm:text-3xl">
              Transforming Lives Through Mentorship
            </h2>
          </motion.div>
          
          <motion.p
            className="text-lg text-black max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At CoSprout, we measure our success by the achievements of our scholars. From prestigious universities 
            to competitive scholarships and internships, our mentees are making their mark on the world.
          </motion.p>
        </section>
        
        {/* Key stats section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-medium text-gray-600 mb-2">Average Family Income</h3>
              <div className="text-5xl font-bold text-teal-600 mb-4">$35,500</div>
              <p className="text-gray-700">
                Our scholars come from diverse socioeconomic backgrounds, with many facing financial barriers to higher education.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-medium text-gray-600 mb-2">First Generation</h3>
              <div className="text-5xl font-bold text-teal-600 mb-4">82%</div>
              <p className="text-gray-700">
                The majority of our scholars are the first in their families to attend college, breaking generational barriers.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-medium text-gray-600 mb-2">Scholarships (Class 2022)</h3>
              <div className="text-5xl font-bold text-teal-600 mb-4">$5M+</div>
              <p className="text-gray-700">
                Our Class of 2022 won over $5 million in scholarships, making quality education accessible.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Voices of Our Scholars</h2>
          
          <div className="testimonial-carousel relative">
            <div className="overflow-hidden">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 md:p-12 shadow-md mb-6"
              >
                <div className="testimonial-quote-mark text-green-300 opacity-30">&quot;</div>
                <blockquote className="text-xl md:text-2xl font-medium text-gray-700 mb-6 relative z-10">
                  {testimonials[activeTestimonial].quote}
                </blockquote>
                <div className="flex items-center">
                  <div className="testimonial-avatar bg-gradient-to-r from-teal-400 to-green-300 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-teal-600">{testimonials[activeTestimonial].school} &apos;{testimonials[activeTestimonial].year}</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="flex justify-center gap-2 mt-8">
              <button 
                onClick={prevTestimonial}
                className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-teal-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`rounded-full w-3 h-3 ${activeTestimonial === index ? 'bg-teal-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
              
              <button 
                onClick={nextTestimonial}
                className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-teal-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>
        
        {/* Outcomes highlight section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-teal-600 mb-6">Where Our Scholars Go</h2>
              <p className="text-lg mb-4">
                From Ivy League universities to prestigious tech companies, our scholars are making their mark across the nation. 
                Through personalized mentorship and dedicated support, we help them access opportunities that change their trajectories.
              </p>
              <p className="text-lg mb-6">
                Our scholars have been admitted to top institutions like Princeton, Harvard, MIT, and Stanford, received prestigious scholarships 
                such as Gates and Jack Kent Cooke, and secured internships at leading companies including Amazon, Google, and Apple.
              </p>
              
              <a href="/impact/results" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 rounded-md bg-teal-600 hover:bg-teal-700 focus:bg-teal-700" onClick={(e) => { 
                e.preventDefault(); 
                const currentPath = window.location.pathname;
                if (currentPath !== '/impact/results') {
                  window.location.href = '/impact/results'; 
                }
              }}>
                See All Outcomes
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-white rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-teal-600 mb-2">Universities</h3>
                <p className="text-gray-700 mb-3">Our scholars have been admitted to over 39 prestigious universities nationwide.</p>
                <div className="text-sm font-medium text-teal-600">Princeton • MIT • Harvard • Stanford</div>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-xl font-bold text-teal-600 mb-2">Programs</h3>
                <p className="text-gray-700 mb-3">Our mentees have gained access to 13 prestigious educational programs.</p>
                <div className="text-sm font-medium text-teal-600">Questbridge • MOSTEC • CSSI • LEDA</div>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-bold text-teal-600 mb-2">Scholarships</h3>
                <p className="text-gray-700 mb-3">Our scholars have earned millions in scholarships to fund their education.</p>
                <div className="text-sm font-medium text-teal-600">Jack Kent Cooke • Gates • Jefferson</div>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h3 className="text-xl font-bold text-teal-600 mb-2">Internships</h3>
                <p className="text-gray-700 mb-3">Our mentees have secured positions at 11 leading companies.</p>
                <div className="text-sm font-medium text-teal-600">Amazon • Microsoft • Google • Apple</div>
              </motion.div>
            </div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Reach Your Full Potential?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join the CoSprout community today and connect with mentors who can help you achieve your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <a
                href="/impact/results"
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold border border-white text-white transition-all duration-200 rounded-md hover:bg-teal-500"
                onClick={(e) => { 
                  e.preventDefault(); 
                  const currentPath = window.location.pathname;
                  if (currentPath !== '/impact/results') {
                    window.location.href = '/impact/results'; 
                  }
                }}
              >
                View All Results
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
