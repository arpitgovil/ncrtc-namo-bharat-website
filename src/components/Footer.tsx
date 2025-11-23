import React from 'react';
import { Mail, Phone, CircleDot, Instagram, Twitter, Facebook } from 'lucide-react';
import logo from 'figma:asset/ef2381e67a01993bc3e64608d41a297647c090de.png';

export function Footer() {
  const usefulLinks = [
    { label: 'Vigilance', href: 'https://ncrtc.in/vigilance/' },
    { label: 'Privacy Policy', href: 'https://ncrtc.in/privacy-policy/' },
    { label: 'Telephone Directory', href: 'https://ncrtc.in/telephone-directory/' },
    { label: 'Hyperlinking Policy', href: 'https://ncrtc.in/hyperlinking-policy/' },
    { label: 'Sitemap', href: 'https://ncrtc.in/sitemap/' },
  ];

  const externalLinks = [
    { label: 'National Portal', href: 'https://india.gov.in/' },
    { label: 'Govt. of NYC, Delhi', href: 'https://delhi.gov.in/' },
    { label: 'Govt. of Haryana', href: 'https://haryana.gov.in/' },
    { label: 'Govt. of Uttarpradesh', href: 'https://up.gov.in/' },
    { label: 'Indian Railways', href: 'http://www.indianrailways.gov.in/' },
    { label: 'National War Memorial', href: 'https://nationalwarmemorial.gov.in/Default.php' },
  ];

  return (
    <footer className="bg-[#2d3e50] dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 
              className="text-xl mb-6 font-bold"
              style={{ fontFamily: '"Outfit", "Inter", system-ui, sans-serif' }}
            >
              About Us
            </h3>
            <div className="mb-6">
              <img src={logo} alt="NCRTC Logo" className="h-16 mb-4" />
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 
              className="text-xl mb-6 font-bold"
              style={{ fontFamily: '"Outfit", "Inter", system-ui, sans-serif' }}
            >
              Useful Links
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/90 hover:text-white transition-colors flex items-center group font-medium"
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    <CircleDot size={8} className="mr-3 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 
              className="text-xl mb-6 font-bold"
              style={{ fontFamily: '"Outfit", "Inter", system-ui, sans-serif' }}
            >
              External Links
            </h3>
            <ul className="space-y-3">
              {externalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/90 hover:text-white transition-colors flex items-center group font-medium"
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    <CircleDot size={8} className="mr-3 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 
              className="text-xl mb-6 font-bold"
              style={{ fontFamily: '"Outfit", "Inter", system-ui, sans-serif' }}
            >
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <p 
                className="text-white/90 leading-relaxed font-medium"
                style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
              >
                National Capital Region Transport Corporation Gatishakti Bhawan, INA<br />
                New Delhi - 110023
              </p>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-white flex-shrink-0" />
                <span 
                  className="text-white/90 font-medium"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  011-24869700
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-white flex-shrink-0" />
                <span 
                  className="text-white/90 font-medium"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  contactus@ncrtc.in
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CircleDot size={12} className="text-white flex-shrink-0 mt-1" />
                <span 
                  className="text-white/90 font-medium"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  CIN No:<br />
                  U60200DL2013SGD258718
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 mt-8">
          <div 
            className="text-center text-sm text-white/80 font-medium"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Copyright @2025 – www.ncrtc.in. All Rights Reserved. All images on the website are representations. The actual assets may be different.
          </div>
          
          {/* Creator Credit */}
          <div className="text-center mt-4">
            <p 
              className="text-sm text-white/90 font-medium flex items-center justify-center gap-2"
              style={{ fontFamily: '"Outfit", "Inter", system-ui, sans-serif' }}
            >
              <span>Created by</span>
              <a 
                href="https://github.com/arpitgovil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-orange-400 hover:text-orange-300 transition-colors duration-200 underline decoration-orange-400/50 hover:decoration-orange-300"
              >
                ARPIT GOVIL
              </a>
              <span className="mx-1">•</span>
              <span>Thank you</span>
              <span className="text-red-500 text-lg">❤️</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}