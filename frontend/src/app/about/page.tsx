"use client";

import { motion } from "framer-motion";
import Navbar from '@/app/components/navbar';
import './about.css';

// JSX namespace to fix type errors
declare namespace JSX {
  interface IntrinsicElements {
    'motion.h1': any;
    'motion.h2': any;
    'motion.div': any;
    'motion.p': any;
    'main': any;
    'section': any;
    'div': any;
    'span': any;
    'p': any;
    'h1': any;
    'h2': any;
    'h3': any;
    'img': any;
  }
}

export default function About() {
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
            About CoSprout
          </motion.h1>
          
          <motion.div
            className="relative inline-flex mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="highlighter absolute inset-x-0 bottom-0 border-b-[10px] border-[#4ADE80]"></span>
            <h2 className="relative text-2xl font-bold text-black sm:text-3xl">
              Cultivating Potential Through Mentorship
            </h2>
          </motion.div>
          
          <motion.p
            className="text-lg text-black max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We&apos;re a dedicated community of educators, professionals, and students passionate about nurturing the next generation. 
            Through personalized mentorship, innovative resources, and a supportive network, we help young minds discover and 
            develop their unique talents and aspirations.
          </motion.p>
          
          {/* Space for group photo */}
          <div className="group-photo-container mb-12">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="CoSprout Team" 
              className="rounded-lg shadow-xl mx-auto"
            />
            <p className="text-sm text-gray-600 mt-3">The CoSprout team at our 2023 annual retreat</p>
          </div>
        </section>
        
        {/* Mission section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-teal-600 mb-6">Our Mission</h2>
              <p className="text-lg mb-4">
                At CoSprout, we believe every young person deserves access to quality mentorship that nurtures their unique 
                potential and helps them navigate their educational and personal journey with confidence.
              </p>
              <p className="text-lg mb-4">
                Through our structured programs, we create meaningful connections between experienced mentors and young learners, 
                fostering relationships that inspire growth, build resilience, and open doors to new opportunities.
              </p>
              <p className="text-lg">
                We&apos;re committed to breaking down barriers to access and creating an inclusive environment where diverse 
                perspectives are valued and celebrated.
              </p>
            </motion.div>
            
            {/* Space for future cartoon animation */}
            <div className="cartoon-animation-placeholder bg-white/30 rounded-lg flex items-center justify-center p-8 h-80">
              <p className="text-gray-500 italic">Space for mission illustration</p>
            </div>
          </div>
        </section>
        
        {/* Founding section */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-black mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Founding
          </motion.h2>
          
          <motion.div
            className="relative inline-flex mb-8 mx-auto block text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="highlighter absolute inset-x-0 bottom-0 border-b-[10px] border-[#4ADE80]"></span>
            <h3 className="relative text-xl font-bold text-black">
              A vision born from personal experience
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            {/* Space for future cartoon animation */}
            <div className="cartoon-animation-placeholder bg-white/30 rounded-lg flex items-center justify-center p-8 h-80 order-2 lg:order-1">
              <p className="text-gray-500 italic">Space for founding story illustration</p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              <p className="text-lg mb-4">
                CoSprout began in 2020 when a group of university students recognized a critical gap in educational support 
                for younger students, especially those from underserved communities. Having benefited from mentorship 
                themselves, they understood the profound impact that guidance and encouragement can have on a young person&apos;s 
                trajectory.
              </p>
              <p className="text-lg mb-4">
                What started as informal tutoring sessions during the pandemic quickly evolved into structured mentorship 
                programs as the founders witnessed firsthand how personalized attention could unlock potential and build 
                confidence in their mentees.
              </p>
              <p className="text-lg">
                With a shared vision of making quality mentorship accessible to all, they formalized CoSprout as an 
                organization dedicated to connecting young minds with mentors who could help them navigate academic 
                challenges, explore interests, and develop essential life skills.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Growth section */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-black mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Growing Our Impact
          </motion.h2>
          
          <motion.div
            className="relative inline-flex mb-8 mx-auto block text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="highlighter absolute inset-x-0 bottom-0 border-b-[10px] border-[#4ADE80]"></span>
            <h3 className="relative text-xl font-bold text-black">
              Expanding our reach through community partnerships
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-lg mb-4">
                From our grassroots beginning, CoSprout has flourished into a vibrant community of over 200 mentors and 
                500 mentees across multiple cities. Our growth has been fueled by word-of-mouth as participants experience 
                the transformative power of meaningful mentorship.
              </p>
              <p className="text-lg mb-4">
                Strategic partnerships with schools, community centers, and educational nonprofits have allowed us to 
                extend our reach to students who might otherwise lack access to supportive mentorship. These collaborations 
                have enriched our programs and helped us better understand and address the diverse needs of the communities 
                we serve.
              </p>
              <p className="text-lg">
                As we continue to grow, we remain committed to our founding principle: that every young person deserves a 
                mentor who believes in their potential and can help them navigate their unique path to success. With each 
                new mentor and mentee who joins our community, we move closer to realizing our vision of a world where 
                quality mentorship is accessible to all.
              </p>
            </motion.div>
            
            {/* Space for future cartoon animation */}
            <div className="cartoon-animation-placeholder bg-white/30 rounded-lg flex items-center justify-center p-8 h-80">
              <p className="text-gray-500 italic">Space for growth journey illustration</p>
            </div>
          </div>
        </section>
        
        {/* Values section */}
        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-bold text-black mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Core Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Mentorship",
                description: "We believe in the power of guidance and shared experience to transform lives and unlock potential."
              },
              {
                title: "Accessibility",
                description: "We strive to remove barriers and make quality mentorship available to all, regardless of background or circumstance."
              },
              {
                title: "Growth",
                description: "We foster environments where continuous learning and personal development are encouraged and celebrated."
              },
              {
                title: "Community",
                description: "We build meaningful connections that provide support, inspiration, and a sense of belonging."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-teal-600 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Join us CTA */}
        <section className="text-center mb-16">
          <motion.div
            className="bg-teal-600 text-white rounded-xl py-12 px-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you&apos;re looking to become a mentor, find a mentor, or support our work, 
              there&apos;s a place for you in the CoSprout community.
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
              Get Involved
            </a>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
