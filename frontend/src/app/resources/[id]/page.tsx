"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from '@/app/components/navbar';
import '../resources.css';

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

// Sample data for resources (in a real app, this would come from an API or database)
const resources = [
  {
    id: 1,
    title: "How to Write a Standout College Essay",
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
  // Add more resources here...
];

export default function ResourcePost({ params }: { params: { id: string } }) {
  const resource = resources.find(r => r.id === parseInt(params.id));
  const [showComments, setShowComments] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [likes, setLikes] = useState(resource?.likes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Array<{id: number, text: string, author: string, date: string}>>([]);

  const handleLike = () => {
    if (!isLiked) {
      setLikes(prev => prev + 1);
      setIsLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setIsLiked(false);
    }
  };

  const handleComment = () => {
    setShowComments(true);
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        text: comment,
        author: "You",
        date: new Date().toLocaleDateString()
      };
      setComments(prev => [...prev, newComment]);
      setComment("");
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  };

  if (!resource) {
    return (
      <main className="bg-gradient-to-b from-green-100 to-green-200 min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Resource Not Found</h1>
          <p className="text-lg text-gray-700 mb-8">The resource you're looking for doesn't exist.</p>
          <a
            href="/resources"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 rounded-md bg-teal-600 hover:bg-teal-700"
            onClick={(e) => {
              e.preventDefault();
              const currentPath = window.location.pathname;
              if (currentPath !== '/resources') {
                window.location.href = '/resources';
              }
            }}
          >
            Back to Resources
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-b from-green-100 to-green-200 min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Abstract background shapes */}
      <div className="abstract-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Back button */}
        <a
          href="/resources"
          className="inline-flex items-center text-teal-600 font-medium mb-8 hover:text-teal-700 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            const currentPath = window.location.pathname;
            if (currentPath !== '/resources') {
              window.location.href = '/resources';
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Back to Resources
        </a>

        {/* Article header */}
        <motion.div
          className="bg-white rounded-xl p-8 shadow-md mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <img
              src={resource.image}
              alt={resource.title}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="font-semibold text-gray-900">{resource.author}</div>
              <div className="text-sm text-gray-500">{resource.date}</div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{resource.title}</h1>
          <div className="text-sm text-gray-500 mb-6">Category: {resource.category}</div>

          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: resource.content }}
          />

          {/* Social actions */}
          <div className="flex gap-6 mt-8 pt-6 border-t">
            <div 
              className={`flex items-center ${isLiked ? 'text-teal-600' : 'text-gray-500'} hover:text-teal-600 cursor-pointer`}
              onClick={handleLike}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill={isLiked ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{likes}</span>
            </div>
            <div 
              className="flex items-center text-gray-500 hover:text-teal-600 cursor-pointer"
              onClick={handleComment}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{comments.length}</span>
            </div>
            <div 
              className="flex items-center text-gray-500 hover:text-teal-600 cursor-pointer"
              onClick={handleShare}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>Share</span>
            </div>
          </div>

          {/* Comments section */}
          {showComments && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-xl font-semibold mb-4">Comments</h3>
              
              {/* Comment form */}
              <form onSubmit={handleSubmitComment} className="mb-6">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  rows={3}
                />
                <button
                  type="submit"
                  className="mt-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Post Comment
                </button>
              </form>

              {/* Comments list */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-semibold">{comment.author}</div>
                      <div className="text-sm text-gray-500">{comment.date}</div>
                    </div>
                    <p className="text-gray-700">{comment.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
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
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(resource.title)}`, '_blank')}
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Share on Twitter
              </button>
              
              <button
                onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(resource.title)}`, '_blank')}
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Share on LinkedIn
              </button>
              
              <button
                onClick={handleCopyLink}
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
    </main>
  );
} 