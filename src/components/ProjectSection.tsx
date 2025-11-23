import React from 'react';
import routeMapImage from 'figma:asset/f6abcb1a3f4a0642c238b71414ebcc360045fc88.png';

export function ProjectSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-8 md:p-12 transition-colors duration-300">
          <div className="grid md:grid-cols-[350px_1fr] gap-8 items-center">
            {/* Route Map Image */}
            <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-600">
              <img
                src={routeMapImage}
                alt="Namo Bharat Route Network"
                className="w-full h-[200px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <div>
                <h2 
                  className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
                  style={{ 
                    fontFamily: '"Outfit", "Inter", system-ui, sans-serif',
                    background: 'linear-gradient(135deg, #1e40af 0%, #f97316 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  NAMO BHARAT PROJECT
                </h2>
                <p 
                  className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 font-medium transition-colors duration-300"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Namo Bharat is a new, dedicated, high speed, high capacity, comfortable 
                  commuter service connecting regional nodes in NCR.
                </p>
                <p 
                  className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-medium transition-colors duration-300"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  It is different from conventional Railway as it will provide reliable, high 
                  frequency, point to point regional travel at high speed along dedicated path 
                  way. Namo Bharat is also different from metro as it caters to passengers 
                  looking to travel relatively longer distance with fewer stops and at higher 
                  speed.
                </p>
              </div>
              
              <div className="flex justify-end">
                <a 
                  href="https://ncrtc.in/rrts-a-journey-so-far/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#e65a28] dark:bg-orange-600 text-white rounded hover:bg-[#d14d1f] dark:hover:bg-orange-700 transition-colors font-bold"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}