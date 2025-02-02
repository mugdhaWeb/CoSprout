"use client";

import { motion } from "framer-motion"
export default function Landing () {
    return (
    <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <img className="w-full" src="hero-img.png" alt="" />
            </div>
            <div>
              <div className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
              <motion.h1 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 0.8,
                    delay: 0.25,
                    ease: [0, 0.71, 0.2, 1.01]
                    }}
                >Sprout</motion.h1>
                <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.50,
                ease: [0, 0.71, 0.2, 1.01]
                }}
                className="text-4xl font-bold text-block sm:text-6xl lg:text-7xl">your full</motion.div>
                <div className="relative inline-flex">
                  <span className="highlighter absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                  <motion.h1 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 0.8,
                    delay: 0.75,
                    ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Potential.</motion.h1>
                </div>
              </div>

              <p className="mt-8 text-base text-black sm:text-xl">Join a network of students, young individuals, and mentors from diverse backgrounds seeking to make a difference in themselves and in the world.</p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-15">
                <a href="/apply" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md bg-teal-600 hover:bg-teal-700 focus:bg-teal-700" role="button">Apply Now</a>
                <div className="inline-flex items-center mt-6 md:ml-4 text-base font-semibold transition-all duration-200 sm:mt-0">
                  <svg className="w-10 h-10 mr-2" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 32 32">
                  <path d="M15.5 3c-7.456 0-13.5 6.044-13.5 13.5s6.044 13.5 13.5 13.5 13.5-6.044 13.5-13.5-6.044-13.5-13.5-13.5zM15.5 27c-5.799 0-10.5-4.701-10.5-10.5s4.701-10.5 10.5-10.5 10.5 4.701 10.5 10.5-4.701 10.5-10.5 10.5zM15.5 10c-0.828 0-1.5 0.671-1.5 1.5v5.062c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5v-5.062c0-0.829-0.672-1.5-1.5-1.5zM15.5 20c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5 1.5-0.672 1.5-1.5-0.672-1.5-1.5-1.5z"></path>
                  </svg>
                    Our Fall 2023 Cohort Application is now live!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}