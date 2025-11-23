import React from 'react';
import trainImage from 'figma:asset/16a5d17a1cd4ba8e9305ea6043ba47f55d3b1a06.png';

export function VisionSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-8 md:p-12 transition-colors duration-300">
          <div className="grid md:grid-cols-[350px_1fr] gap-8 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={trainImage}
                alt="RRTS Train"
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
                  OUR VISION
                </h2>
                <p 
                  className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-medium transition-colors duration-300"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Improve quality of life of people by providing equitable, fast, reliable, safe, 
                  comfortable, efficient and sustainable mobility solutions enabling economic 
                  development of NCR.
                </p>
              </div>
              
              <div className="flex justify-end">
                <a 
                  href="https://ncrtc.in/our-vision-and-logo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#1e4d7b] dark:bg-blue-600 text-white rounded hover:bg-[#163a5e] dark:hover:bg-blue-700 transition-colors font-bold"
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