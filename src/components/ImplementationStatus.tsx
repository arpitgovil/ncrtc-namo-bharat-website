import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import constructionImage1 from 'figma:asset/41839885a04df0e69147f5da1789b1d6a9e8bfdb.png';
import constructionImage2 from 'figma:asset/379afd214e98b2b2ecf092f58e43fafc7ab681f6.png';
import constructionImage3 from 'figma:asset/75e2fdf3cb2bffb618a2aea7a1a9f1ecb1a87cc6.png';
import constructionImage4 from 'figma:asset/9d0e7dbc88d734eb7c169e0ab8c598698137b8c2.png';
import constructionImage5 from 'figma:asset/52280acbac938a964aa3c1857e893beebdadff9c.png';

export function ImplementationStatus() {
  const projects = [
    {
      title: 'Station Infrastructure Development',
      image: constructionImage4,
      description: 'Modern station with distinctive blue wave-patterned roofing and advanced facilities',
      status: 'In Progress',
    },
    {
      title: 'Elevated Track Construction',
      image: constructionImage5,
      description: 'High-precision viaduct construction with state-of-the-art engineering',
      status: 'In Progress',
    },
    {
      title: 'Elevated Viaduct Construction',
      image: constructionImage1,
      description: 'Advanced elevated corridor connecting major urban centers',
      status: 'In Progress',
    },
    {
      title: 'Station Interior Development',
      image: constructionImage2,
      description: 'Modern platform screen door installation and interior finishing',
      status: 'In Progress',
    },
    {
      title: 'Platform & Terminal Integration',
      image: constructionImage3,
      description: 'State-of-the-art station facilities with modern architectural design',
      status: 'In Progress',
    },
    {
      title: 'Multi-Level Station Complex',
      image: constructionImage4,
      description: 'Comprehensive terminal development with integrated transport connectivity',
      status: 'In Progress',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ 
              fontFamily: '"Outfit", "Inter", system-ui, sans-serif',
              background: 'linear-gradient(135deg, #ff8c00 0%, #1e40af 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            IMPLEMENTATION STATUS
          </h2>
          <p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 font-medium transition-colors duration-300"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Track the progress of our ambitious project across various phases of development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      project.status === 'Completed'
                        ? 'bg-green-500 text-white'
                        : 'bg-yellow-500 text-white'
                    }`}
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2"
                  style={{ fontFamily: '"Outfit", "Inter", system-ui, sans-serif' }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a 
            href="https://ncrtc.in/implementation/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-md font-bold"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            VIEW ALL PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
}