"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";
import axios from "axios";
import NavBar from "@/app/components/navbar";

const API_URL = "http://localhost:5001/api"; // Ensure this matches your backend port

export default function ApplyPage() {
  const router = useRouter();

  // Determine if we're in login mode or registration mode.
  const [isLogin, setIsLogin] = useState(true);

  // Form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("mentee");
  const [category, setCategory] = useState("");

  // For verification flow (if needed)
  const [verificationCode, setVerificationCode] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  // For error and success messages
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      if (showVerification) {
        // When the user is verifying the code sent by email.
        const response = await axios.post(`${API_URL}/auth/verify`, {
          email,
          code: verificationCode,
        });
        setMessage(response.data.message);
        // After verification, redirect to the login success page.
        router.push("/apply/loginSuccess");
      } else if (isLogin) {
        // Handle login: Send email and password.
        const response = await axios.post(`${API_URL}/auth/login`, {
          email,
          password,
        });
        // Save token and user data in localStorage.
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // Redirect based on user role.
        if (response.data.user.role === "mentor") {
          router.push("/mentor-dashboard");
        } else {
          router.push("/");
        }
      } else {
        // Handle registration.
        const response = await axios.post(`${API_URL}/auth/register`, {
          email,
          password,
          role,
          category,
        });
        setMessage(response.data.message);
        // Redirect to the verification sent page.
        router.push("/apply/verificationSent");
      }
    } catch (err: any) {
      console.error("Error during submit:", err);
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <main className="bg-gradient-to-b overflow-hidden from-green-100 to-green-200 min-h-screen">
      <NavBar />
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {showVerification
                  ? "Verify Email"
                  : isLogin
                  ? "Welcome Back"
                  : "Join CoSprout"}
              </h2>
              <p className="text-gray-600">
                {showVerification
                  ? "Enter the verification code sent to your email"
                  : isLogin
                  ? "Sign in to continue your journey"
                  : "Create your account to get started"}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            {message && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {showVerification ? (
                // Verification code input section.
                <div>
                  <label
                    htmlFor="verificationCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Verification Code
                  </label>
                  <input
                    id="verificationCode"
                    type="text"
                    required
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Enter verification code"
                  />
                </div>
              ) : (
                // Standard login or registration form.
                <>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  {!isLogin && (
                    <>
                      <div>
                        <label
                          htmlFor="role"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Role
                        </label>
                        <select
                          id="role"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        >
                          <option value="mentee">Mentee</option>
                          <option value="mentor">Mentor</option>
                          <option value="both">Both</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="category"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Category
                        </label>
                        <select
                          id="category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        >
                          <option value="">Select a category</option>
                          <option value="High School">High School</option>
                          <option value="College">College</option>
                          <option value="Pre Professional">Pre Professional</option>
                        </select>
                      </div>
                    </>
                  )}
                </>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  {showVerification
                    ? "Verify Email"
                    : isLogin
                    ? "Sign In"
                    : "Create Account"}
                </button>
              </div>
            </form>

            {!showVerification && (
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  {isLogin
                    ? "Don't have an account? "
                    : "Already have an account? "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="font-medium text-green-600 hover:text-green-500"
                  >
                    {isLogin ? "Apply Now" : "Sign In"}
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
