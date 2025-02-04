"use client";

import { useEffect, useState, useRef } from 'react';

import Typewriter from 'typewriter-effect';
export default function Intro () {
    const [isActive, setIsActive] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsActive(true);
          }
        },
        { threshold: 0.1 } // Adjust the threshold as per your requirement
      );
  
      if (componentRef.current) {
        observer.observe(componentRef.current);
      }
  
      return () => {
        if (componentRef.current) {
          observer.unobserve(componentRef.current);
        }
      };
    }, []);

    return (
    <section ref={componentRef} className="h-1/2 py-5 sm:py-8 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 space-y-16">
            <div className="grid items-center grid-cols-1 lg:order-last gap-12 lg:grid-cols-2">
                <div className="lg:order-last w-auto lg:pl-48">
                    <svg className={isActive ? 'active' : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300">
                    <path className="cls-1 svg-elem-1" d="m203.69,127.76c-12.81,18.04-19.09,38.17-21.18,60.4-2.09,17,13.86,31.9,30.85,27.45,19.09-5.23,35.04-14.9,49.94-30.85,19.09-22.22,26.41-47.59,28.5-67.72,2.09-17-12.81-30.85-29.81-26.41-25.62,5.23-45.76,20.13-58.31,37.13ZM116.62,58.99c-19.09-17-42.36-28.5-71.12-33.99-14.9-2.09-28.5,9.41-28.5,24.32,0,38.17,4.18,82.62,28.5,110.34,13.86,15.95,29.81,25.36,48.63,33.99,8.37,4.18,14.9,12.81,14.9,22.22v43.4c0,13.86,10.72,24.32,24.32,24.32h9.41c13.86,0,24.32-10.72,24.32-24.32v-40.27c1.57-111.39-19.61-133.61-50.46-160.02h0Z"></path>
                    <path className="cls-1 svg-elem-2" d="m179.11,103.44c-24.32-36.08-3.14-89.16,39.22-81.58,42.36,7.58-14.64,117.66-39.22,81.58Z"></path>
                    </svg>
                </div>
                <div>
                <div className="font-bold text-black text-4xl md:text-5xl">
                <h1>We are building</h1>
                <Typewriter
                options={{
                    strings: ['visionaries', 'collaborators', 'trailblazers', 'co-founders', 'critical thinkers', 'problem solvers'],
                    autoStart: true,
                    loop: true,
                }}
                />
                <h1>for our generation.</h1>
                </div>
                <p className="mt-8 text-base text-black sm:text-l">Cosprout is more than just a network; it is a community-driven by shared values and a commitment to personal and societal growth. Our holistic approach ensures they receive the guidance, opportunities, and skills necessary to secure positions in renowned institutions and competitive programs. Together, we strive to sprout our scholars to induce positive change toward our society.</p>
                </div>
            </div>
            <div className="opacity-70 font-medium text-center text-black order-last sm:text-4xl lg:text-3xl space-y-8">
                <h1>Our scholars have sprouted to top universities and companies:</h1>
                <div className="grid items-center grid-cols-3 lg:grid-cols-9 gap-x-24 sm:gap-x-48 md:gap-x-48 lg:gap-x-20 gap-y-5">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Harvard_University_shield.svg/1200px-Harvard_University_shield.svg.png"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/1200px-Princeton_seal.svg.png"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Shield_of_the_University_of_Pennsylvania.svg/1832px-Shield_of_the_University_of_Pennsylvania.svg.png"/>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_California_Institute_of_Technology.svg/1200px-Seal_of_the_California_Institute_of_Technology.svg.png"/>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/1200px-MIT_Seal.svg.png"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/1200px-Seal_of_Leland_Stanford_Junior_University.svg.png"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png"/>
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png"/>
                </div>
            </div>
          </div>
        </div>
      </section>
    )
}