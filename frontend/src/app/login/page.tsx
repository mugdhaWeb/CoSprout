"use client";

import { motion } from "framer-motion";
import { useState } from 'react';
import Navbar from '@/app/components/navbar';
import './login.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle login logic
    console.log('Login attempted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="bg-gradient-to-b from-green-100 to-green-200 min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      
      <div className="abstract-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 flex-grow flex flex-col justify-center">
        <section className="text-center mb-12">
          <motion.h1 
            className="text-4xl font-bold text-black sm:text-6xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome Back
          </motion.h1>
          
          <motion.p
            className="text-lg text-black max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sign in to access your CoSprout account
          </motion.p>
        </section>

        <section className="max-w-md mx-auto">
          <motion.form
            className="bg-white rounded-xl p-8 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">
              <div className="form-group">
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

              <div className="form-group">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 rounded-md border-2 border-teal-500/50 hover:border-teal-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors"
                  required
                />
              </div>

              <div className="flex items-center justify-start gap-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-teal-600 hover:text-teal-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition-colors duration-200"
              >
                Sign in
              </button>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <a href="/register" className="font-medium text-teal-600 hover:text-teal-500">
                    Register here
                  </a>
                </p>
              </div>
            </div>
          </motion.form>
        </section>
      </div>
    </main>
  );
} 