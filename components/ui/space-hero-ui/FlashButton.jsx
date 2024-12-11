'use client'
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function FlashButton({ className }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const createParticle = (x, y) => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      button.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 1000);
    };

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (Math.random() < 0.1) {
        // Adjust this value to control particle density
        createParticle(x, y);
      }
    };

    button.addEventListener('mousemove', handleMouseMove);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Link
      href={'https://calendly.com/vipuluthaiah/weframe-tech?month=2024-10'}
      className={`animated-border-box w-[200px] md:w-[250px] h-[75px] translate-y-48 md:translate-y-48 ${className}`}
    >
      <div ref={buttonRef} className="relative w-full h-full overflow-hidden">
        <div className="flashlight" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <p className="text-white text-md md:text-lg font-bold">
            Book a Meeting
          </p>
        </div>
      </div>
    </Link>
  );
}
