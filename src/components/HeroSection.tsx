import React from 'react';
import heroImage from 'figma:asset/16a5d17a1cd4ba8e9305ea6043ba47f55d3b1a06.png';

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern train in station"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 
            className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl"
            style={{ 
              fontFamily: '"Clash Display", "Outfit", "Inter", system-ui, sans-serif',
              background: 'linear-gradient(135deg, #ff8c00 0%, #1e40af 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            IMPACT OF NAMO BHARAT EXPRESS
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-lg font-medium"
            style={{ fontFamily: '"Inter", "Roboto", system-ui, sans-serif' }}
          >
            Experience the future of regional rapid transit. Connecting cities with speed, 
            comfort, and sustainability. The Namo Bharat Express represents a new era 
            in urban mobility across the National Capital Region.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
}