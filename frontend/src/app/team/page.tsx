"use client";

// Add JSX namespace to fix type errors
declare namespace JSX {
  interface IntrinsicElements {
    'motion.h1': any;
    'motion.div': any;
    'main': any;
    'section': any;
    'div': any;
    'span': any;
    'p': any;
    'h1': any;
  }
}

import { motion } from "framer-motion";
import Navbar from '@/app/components/navbar';
import TeamMember from '@/app/components/TeamMember';
import './team.css';

// Social media icons as SVG strings
const socialIcons = {
  linkedin: `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.7.7 0 00.06.28V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>`,
  instagram: `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg>`,
  twitter: `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`,
  github: `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`
};

// Team member data
const teamMembers = [
  {
    name: "Yoonjung Choi",
    roles: ["Co-Director", "Business Developer", "Team Lead"],
    bio: "Yoonjung is a passionate leader with a vision for connecting students with mentors. She leads our business development initiatives and oversees the organization's strategy.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    memberSince: "Fall 2023",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/", icon: socialIcons.linkedin },
      { platform: "twitter", url: "https://twitter.com/", icon: socialIcons.twitter },
    ]
  },
  {
    name: "John Doe",
    roles: ["Co-Director", "Technical Lead"],
    bio: "John is a tech enthusiast and educator with a background in computer science and a passion for teaching coding to children. He leads the technical development of CoSprout's platform.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    memberSince: "Fall 2023",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/", icon: socialIcons.linkedin },
      { platform: "github", url: "https://github.com/", icon: socialIcons.github },
    ]
  },
  {
    name: "Maria Rodriguez",
    roles: ["Director of Mentorship", "Program Coordinator"],
    bio: "Maria specializes in creating effective mentorship programs and has connected hundreds of students with mentors. She ensures that our mentorship experience is meaningful and impactful.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    memberSince: "Winter 2023",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/", icon: socialIcons.linkedin },
      { platform: "instagram", url: "https://instagram.com/", icon: socialIcons.instagram },
    ]
  },
  {
    name: "David Chen",
    roles: ["Curriculum Director", "Content Creator"],
    bio: "David has a deep passion for education innovation. With a background in educational psychology, he develops our comprehensive learning pathways and ensures our content is engaging and effective.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    memberSince: "Spring 2023",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/", icon: socialIcons.linkedin },
      { platform: "twitter", url: "https://twitter.com/", icon: socialIcons.twitter },
    ]
  },
  {
    name: "Sarah Johnson",
    roles: ["Community Manager", "Event Coordinator"],
    bio: "Sarah is dedicated to building a supportive and engaging community for our young learners. She organizes events, facilitates discussions, and ensures everyone feels welcome in the CoSprout family.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    memberSince: "Winter 2023",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/", icon: socialIcons.linkedin },
      { platform: "instagram", url: "https://instagram.com/", icon: socialIcons.instagram },
    ]
  },
  {
    name: "Michael Wong",
    roles: ["Educational Outreach", "School Liaison"],
    bio: "Michael coordinates our partnerships with schools and educational institutions. He's passionate about making quality mentorship accessible to students from all backgrounds.",
    image: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    memberSince: "Spring 2023",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/", icon: socialIcons.linkedin },
      { platform: "twitter", url: "https://twitter.com/", icon: socialIcons.twitter },
    ]
  }
];

export default function Team() {
  return (
    <main className="bg-gradient-to-b from-green-100 to-green-200 min-h-screen">
      <Navbar />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl font-bold text-black sm:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet Our Team
          </motion.h1>
          
          <motion.div
            className="relative inline-flex mt-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="highlighter absolute inset-x-0 bottom-0 border-b-[10px] border-[#4ADE80]"></span>
            <p className="relative text-lg font-bold text-black sm:text-xl max-w-3xl mx-auto">
              The passionate individuals behind CoSprout dedicated to helping young minds reach their full potential
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 grid-flow-row-dense grid-row-matching-height">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="team-card-container"
            >
              <TeamMember {...member} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
