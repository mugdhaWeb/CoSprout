"use client";

import { motion } from "framer-motion";
import { useState } from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/Footer';
import './contact.css';

// JSX namespace to fix type errors
declare namespace JSX {
  interface IntrinsicElements {
    'motion.h1': any;
    'motion.h2': any;
    'motion.div': any;
    'motion.p': any;
    'motion.span': any;
    'motion.form': any;
    'main': any;
    'section': any;
    'div': any;
    'span': any;
    'p': any;
    'h1': any;
    'h2': any;
    'h3': any;
    'form': any;
    'input': any;
    'textarea': any;
    'button': any;
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
            Get in Touch
          </motion.h1>
          
          <motion.div
            className="relative inline-flex mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="highlighter absolute inset-x-0 bottom-0 border-b-[10px] border-[#4ADE80]"></span>
            <h2 className="relative text-2xl font-bold text-black sm:text-3xl">
              We&apos;re Here to Help
            </h2>
          </motion.div>
          
          <motion.p
            className="text-lg text-black max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have questions about our mentorship program? Want to get involved? 
            We&apos;d love to hear from you. Reach out and we&apos;ll respond as soon as we can.
          </motion.p>
        </section>

        {/* FAQ Section */}
        <section className="mb-24">
          <motion.h2
            className="text-3xl font-bold text-black mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-teal-600 mb-4">How can I become a mentor?</h3>
              <p className="text-gray-700">
                We're always looking for passionate mentors! Fill out our mentor application form and we'll get back to you within 48 hours to discuss the next steps.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-teal-600 mb-4">What support do you offer students?</h3>
              <p className="text-gray-700">
                Our mentorship program includes college application guidance, essay reviews, interview prep, and ongoing academic and career support.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-teal-600 mb-4">How long is the mentorship program?</h3>
              <p className="text-gray-700">
                Our core program runs for 12 months, but many mentor-mentee relationships continue throughout college and beyond.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-teal-600 mb-4">Is there a cost for students?</h3>
              <p className="text-gray-700">
                Our program is completely free for students. We believe in making quality mentorship accessible to all.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact methods grid */}
        <section className="mb-16">
          <motion.h2
            className="text-3xl font-bold text-black mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ways to Connect
          </motion.h2>
          <div className="contact-methods">
            <motion.div
              className="contact-method-card bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-teal-600 mb-2">Email Us</h3>
              <p className="text-gray-700 mb-3">Send us an email anytime. We&apos;ll respond within 24 hours.</p>
              <div className="text-sm font-medium text-teal-600">contact@cosprout.org</div>
            </motion.div>

            <motion.div
              className="contact-method-card bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-teal-600 mb-2">Schedule a Call</h3>
              <p className="text-gray-700 mb-3">Book a 15-minute call with our team to learn more.</p>
              <div className="text-sm font-medium text-teal-600">calendly.com/cosprout</div>
            </motion.div>

            <motion.div
              className="contact-method-card bg-white rounded-xl p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-teal-600 mb-2">Follow Us</h3>
              <p className="text-gray-700 mb-3">Stay updated with our latest news and events.</p>
              <div className="text-sm font-medium text-teal-600">@cosprout</div>
            </motion.div>
          </div>
        </section>

        {/* Contact form section */}
        <section className="max-w-2xl mx-auto">
          <motion.form
            className="contact-form bg-white rounded-xl p-8 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">
              <div className="form-group border-b pb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 rounded-md border-2 border-teal-500/50 hover:border-teal-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors"
                  required
                />
              </div>

              <div className="form-group border-b pb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 rounded-md border-2 border-teal-500/50 hover:border-teal-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors"
                  required
                />
              </div>

              <div className="form-group border-b pb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 rounded-md border-2 border-teal-500/50 hover:border-teal-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors"
                  required
                />
              </div>

              <div className="form-group pb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-input w-full px-4 py-2 rounded-md border-2 border-teal-500/50 hover:border-teal-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>

            {isSubmitted && (
              <motion.div
                className="success-message mt-4 p-4 bg-green-100 text-green-700 rounded-md"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you for your message! We&apos;ll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
