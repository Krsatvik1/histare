import React from 'react';
import Image from 'next/image';
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
  FaFacebook
} from 'react-icons/fa6';

const ProFooter = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer 
      className="relative text-gray-800 pt-16 pb-8 px-6 sm:px-10 md:px-20 w-full overflow-hidden"
      style={{ backgroundColor: '#F3F0ED' }}
    >
      {/* Decorative Half Circle - Only show if image exists */}
      <div className="absolute bottom-0 left-0 z-0 w-[1350px] h-[870px] overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/landing/circle.png"
            alt="Decorative Circle"
            fill
            className="md:translate-x-[-40%] md:translate-y-[50%] md:opacity-50 opacity-0 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
      
      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8 mb-8 text-center md:text-left  ">
        {/* Address Block */}
        <div className="text-sm sm:text-base text-[#555555] max-w-sm text-center md:text-left ">
          <p className="font-semibold mb-2">Histare Concepts Private Limited</p>
          <p className="mb-2">
            E 23, Right side, Lower Ground Floor,<br />
            Poorvi Marg, Vasant Vihar,<br />
            Delhi 110057
          </p>
          <p className="mb-1">+91-11-40158326</p>
          <p>info@histare.in</p>
        </div>
        
        {/* Clickable Map */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <a 
            href="https://maps.app.goo.gl/3VqKz5Q8QcuWA2g67?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer transition-transform hover:scale-105"
          >
            <div className="relative w-64 h-40 sm:w-80 sm:h-48 bg-gray-200 rounded-lg overflow-hidden mx-auto">
              <Image
                src="/images/program/map.png"
                alt="Location Map - Click to open in Google Maps"
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.parentElement.innerHTML = `
                    <div class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 rounded-lg">
                      <div class="text-center">
                        <p>Click to view location</p>
                        <p class="text-sm mt-1">Google Maps</p>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
          </a>
        </div>
      </div>
      
      {/* Bottom Row */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-[#555555] gap-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a>
        </div>
        <p className="text-sm">© {getCurrentYear()} Histare Concepts Private Limited</p>
      </div>
    </footer>
  );
};

export default ProFooter;