import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import highSpeedImage from 'figma:asset/16a5d17a1cd4ba8e9305ea6043ba47f55d3b1a06.png';
import coachesImage from 'figma:asset/de133e6a266538579bfe37d947be0658af4371fd.png';
import safetyImage from 'figma:asset/dfbf937de1e6fed38fb37fd331af580f67cf9673.png';
import ticketingImage from 'figma:asset/e6b3aa568c5ffc947d2a614e62147d9370870f21.png';
import ecoImage from 'figma:asset/a86f69c1206874614e2206e9e488e725407ffa46.png';

export function FacilitiesSection() {
  const facilities = [
    {
      title: 'High-Speed Connectivity',
      description: 'Trains run at a top speed of 180 km/h, reducing travel time drastically between Delhi and nearby NCR cities like Meerut.',
      image: highSpeedImage,
    },
    {
      title: 'Comfortable and Modern Coaches',
      description: 'Fully air-conditioned with ergonomic seating, Wi-Fi, mobile/laptop charging points, and luggage racks.',
      image: coachesImage,
    },
    {
      title: 'Safety and Surveillance',
      description: 'CCTV cameras, emergency alarms, and real-time monitoring for enhanced passenger security.',
      image: safetyImage,
    },
    {
      title: 'Digital Ticketing & Smart Entry',
      description: 'QR-code-based ticketing, NCMC card support, and contactless entry for convenience.',
      image: ticketingImage,
    },
    {
      title: 'Eco-Friendly Infrastructure',
      description: 'Solar panels, energy-efficient systems, and a sustainable design to reduce carbon footprint.',
      image: ecoImage,
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="bg-[#2d5169] dark:bg-gray-800 text-white py-8 px-6 mb-8 rounded-t-lg transition-colors duration-300">
          <h2 
            className="text-3xl md:text-4xl text-center font-bold"
            style={{ fontFamily: '"Outfit", "Inter", system-ui, sans-serif' }}
          >
            FACILITIES PROVIDED BY NAMO BHARAT (RRTS)
          </h2>
        </div>

        {/* Facilities List */}
        <div className="space-y-4">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[170px_1fr] gap-4 items-center bg-[#e8e8e8] dark:bg-gray-700 p-4 rounded shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:bg-[#dcdcdc] dark:hover:bg-gray-600 cursor-pointer"
            >
              {/* Image */}
              <div className="rounded overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-[120px] object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div>
                <h3 
                  className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300"
                  style={{ fontFamily: '"Outfit", "Inter", system-ui, sans-serif' }}
                >
                  {facility.title}
                </h3>
                <p 
                  className="text-sm text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}