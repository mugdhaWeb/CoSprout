"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from '@/app/components/navbar';
import './resources.css';
import { useAuth } from '../contexts/AuthContext';

// JSX namespace to fix type errors
declare namespace JSX {
  interface IntrinsicElements {
    'motion.div': any;
    'motion.h1': any;
    'motion.h2': any;
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
    'ul': any;
    'li': any;
    'a': any;
    'img': any;
  }
}

// Sample data for resources
const categories = [
  "All",
  "College Admissions",
  "Scholarships",
  "Internships",
  "Career Development",
  "Study Tips",
  "Personal Growth"
];

const resources = [
  {
    id: 1,
    title: "How to Write a Standout College Essay",
    excerpt: "Learn the key elements that make a college essay memorable and how to showcase your unique story effectively.",
    content: `
      <h2>Introduction</h2>
      <p>Writing a compelling college essay is one of the most important parts of your college application. It's your chance to show admissions officers who you are beyond your grades and test scores.</p>

      <h2>Key Elements of a Strong Essay</h2>
      <ul>
        <li>Authentic voice and personal perspective</li>
        <li>Clear narrative structure</li>
        <li>Specific details and examples</li>
        <li>Meaningful reflection and growth</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <p>Many students fall into common traps when writing their essays. Here are some to watch out for:</p>
      <ul>
        <li>Using clichés or generic statements</li>
        <li>Focusing too much on achievements without personal growth</li>
        <li>Writing what you think admissions officers want to hear</li>
        <li>Not proofreading thoroughly</li>
      </ul>

      <h2>Tips for Success</h2>
      <p>To write an effective college essay:</p>
      <ol>
        <li>Start early and allow time for multiple drafts</li>
        <li>Be authentic and honest about your experiences</li>
        <li>Show, don't tell - use specific examples</li>
        <li>Get feedback from trusted mentors or teachers</li>
        <li>Revise, revise, revise</li>
      </ol>
    `,
    author: "Sarah Chen",
    date: "March 15, 2024",
    category: "College Admissions",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    likes: 234,
    comments: 45,
    shares: 12
  },
  {
    id: 2,
    title: "Top 10 Scholarships for STEM Students",
    excerpt: "A comprehensive guide to the best scholarships available for students pursuing STEM fields.",
    author: "Michael Rodriguez",
    date: "March 14, 2024",
    category: "Scholarships",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    likes: 189,
    comments: 32,
    shares: 8
  },
  {
    id: 3,
    title: "Landing Your First Tech Internship",
    excerpt: "Essential tips and strategies for securing an internship in the technology industry.",
    author: "Emily Zhang",
    date: "March 13, 2024",
    category: "Internships",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    likes: 312,
    comments: 67,
    shares: 15
  },
  {
    id: 4,
    title: "Effective Time Management for Students",
    excerpt: "Learn how to balance academics, extracurriculars, and personal life while maintaining good grades.",
    author: "David Kim",
    date: "March 12, 2024",
    category: "Study Tips",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    likes: 156,
    comments: 28,
    shares: 6
  }
];

export default function Resources() {
  const { isAuthenticated } = useAuth();
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<typeof resources[0] | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filteredResources = activeCategory === "All"
    ? resources
    : resources.filter(resource => resource.category === activeCategory);

  const handleLike = (resourceId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(resourceId)) {
        newSet.delete(resourceId);
      } else {
        newSet.add(resourceId);
      }
      return newSet;
    });
  };

  const handleComment = (resourceId: number) => {
    const currentPath = window.location.pathname;
    if (currentPath !== `/resources/${resourceId}`) {
      window.location.href = `/resources/${resourceId}`;
    }
  };

  const handleShare = (resource: typeof resources[0], e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedResource(resource);
    setShowShareModal(true);
  };

  const handleCopyLink = (resourceId: number) => {
    const url = `${window.location.origin}/resources/${resourceId}`;
    navigator.clipboard.writeText(url);
    // You could add a toast notification here
  };

  const handleCreatePost = () => {
    if (!isAuthenticated) {
      window.location.href = '/signup';
    } else {
      setShowCreateModal(true);
    }
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
        <section className="text-center mb-16">
          <motion.h1 
            className="text-4xl font-bold text-black sm:text-6xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Resources
          </motion.h1>
          
          <motion.div
            className="relative inline-flex mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="highlighter absolute inset-x-0 bottom-0 border-b-[10px] border-[#4ADE80]"></span>
            <h2 className="relative text-2xl font-bold text-black sm:text-3xl">
              Knowledge Hub
            </h2>
          </motion.div>
          
          <motion.p
            className="text-lg text-black max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover valuable insights, tips, and guides to help you navigate your educational journey and career development.
          </motion.p>

          {/* Create Post Button */}
          <motion.button
            className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            onClick={handleCreatePost}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Create New Post
          </motion.button>
        </section>

        {/* Category tabs */}
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resources grid */}
        <div className="resources-grid">
          {filteredResources.map((resource) => (
            <motion.div
              key={resource.id}
              className="resource-post cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                const currentPath = window.location.pathname;
                if (currentPath !== `/resources/${resource.id}`) {
                  window.location.href = `/resources/${resource.id}`;
                }
              }}
            >
              <div className="resource-post-header">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="resource-post-avatar"
                />
                <div className="resource-post-meta">
                  <div className="resource-post-author">{resource.author}</div>
                  <div className="resource-post-date">{resource.date}</div>
                </div>
              </div>
              
              <div className="resource-post-content">
                <h3 className="resource-post-title">{resource.title}</h3>
                <p className="resource-post-excerpt">{resource.excerpt}</p>
              </div>

              <div className="resource-post-actions">
                <div 
                  className={`resource-post-action ${likedPosts.has(resource.id) ? 'text-teal-600' : 'text-gray-500'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(resource.id);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={likedPosts.has(resource.id) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{likedPosts.has(resource.id) ? resource.likes + 1 : resource.likes}</span>
                </div>
                <div 
                  className="resource-post-action"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleComment(resource.id);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{resource.comments}</span>
                </div>
                <div 
                  className="resource-post-action"
                  onClick={(e) => handleShare(resource, e)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>Share</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && selectedResource && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Share this post</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${window.location.origin}/resources/${selectedResource.id}`)}&text=${encodeURIComponent(selectedResource.title)}`, '_blank')}
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Share on Twitter
              </button>
              
              <button
                onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`${window.location.origin}/resources/${selectedResource.id}`)}&title=${encodeURIComponent(selectedResource.title)}`, '_blank')}
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Share on LinkedIn
              </button>
              
              <button
                onClick={() => handleCopyLink(selectedResource.id)}
                className="w-full flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                Copy Link
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Post Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Create New Post</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  id="title"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Enter your post title"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  id="category"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                >
                  {categories.filter(cat => cat !== "All").map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                <div className="mt-1 border rounded-md shadow-sm">
                  <div className="border-b p-2 space-x-2">
                    <button
                      type="button"
                      className="px-2 py-1 rounded hover:bg-gray-100"
                      onClick={() => {/* Add header formatting */}}
                    >
                      H1
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1 rounded hover:bg-gray-100"
                      onClick={() => {/* Add header formatting */}}
                    >
                      H2
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1 rounded hover:bg-gray-100"
                      onClick={() => {/* Add bold formatting */}}
                    >
                      B
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1 rounded hover:bg-gray-100"
                      onClick={() => {/* Add italic formatting */}}
                    >
                      I
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1 rounded hover:bg-gray-100"
                      onClick={() => {/* Add list formatting */}}
                    >
                      • List
                    </button>
                  </div>
                  <textarea
                    id="content"
                    rows={10}
                    className="block w-full border-0 p-4 focus:ring-0"
                    placeholder="Write your post content here..."
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 border rounded-md hover:bg-gray-50"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
                >
                  Publish Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
