import React from 'react';
import featuredPostImage from 'figma:asset/16a5d17a1cd4ba8e9305ea6043ba47f55d3b1a06.png';

export function SocialMediaSection() {
  return (
    <section 
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(https://metrorailnews.in/wp-content/uploads/2025/11/newindianexpress2024-11-1289flhv.png)` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/80 transition-colors duration-300"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <h2 
          className="text-4xl md:text-5xl text-white text-center mb-12 font-bold"
          style={{ 
            fontFamily: '"Outfit", "Inter", system-ui, sans-serif',
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
          }}
        >
          NCRTC IN SOCIAL MEDIA
        </h2>

        {/* Featured Post */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/rCQgdbIqruo"
              title="NCRTC Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}