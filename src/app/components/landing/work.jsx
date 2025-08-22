'use client';
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const workItems = [
    {
      id: 1,
      img: "/images/nava/elephant.png",
      author: "Dancing Across Time",
      material: "Statuario Marble, Semi-precious Lapis, Merino Wool, Mother of Pearl and Silk Threads",
      size: "8 H Ft.",
     
      
    },
      {
        id: 12,
        img: "/images/nava/lily.svg",
        author: "Pathways To Liberation",
        material: "Stainless steel ,High quality Oil based paint",
      size: "12 H Ft.",
      },
    {
      id: 2,
      img: "/images/nava/flower2.png",
      author: "Ethereal Echoes",
      material: "Brass and Bronze",
      size: "18 H Ft.",
    },
    {
        id: 3,
        img: "/images/nava/white.png",
        author: "Respledent Vistas",
        material: "Pashmina Wool and Muga Silk",
        size: "9 L Ft. x 11 B Ft.",
      },
    {
      id: 4,
      img: "/images/nava/black.png",
      author: "Symphonic Splendour",
      material: "Nero Marquina Marble,Pure brass wire",
        size: "10 L Ft. x 8 B Ft.",
    },
    {
        id: 5,
        img: "/images/nava/gold.png",
        author: "Generational Wisdom",
        material: "Copper-Brass wire on marble",
      size: "9 H Ft. x 5 B Ft.",
      },
    {
      id: 6,
      img: "/images/nava/w1.png",
      author: "Transcendent Peace",
      material: "Bianco Laza GL Marble",
    size: "6 H Ft. x 4 B Ft.",
    },
    {
      id: 7,
      img: "/images/nava/overview.png",
      author: "Euphoric Revelry",
      material: "Nero Marquina marble,Pure brass Wire,Lapis Lauzuli",
    size: "8 H Ft. x 4 B Ft.",
    },
    {
      id: 8,
      img: "/images/nava/red.png",
      author: "Euphoric Revelry",
      material: "Natural dyes with pigments ground from stones,leaves,flowers and roots ",
    size: "10 L Ft. x 10 B Ft.",
    },
    {
      id: 9,
      img: "/images/nava/tree.png",
      author: "The Moments of Opulence",
      material: "Copper-Brass wire on marble",
    size: "6 H Ft. x 10 B Ft.",
    },
    {
        id: 10,
        img: "/images/nava/w11.png",
        author: "Temporal Drift",
        material: "Hand-scupted natural driftwood produced for the 5th Nadi Utsav 2024",
      size: "10 in",
      },
      {
        id: 11,
        img: "/images/nava/mockup.png",
        author: "The Dining & Banqueting Culture",
        material: "Charcoal and acrylic color on archival paper",
      size: "",
      },
    
  ];

function CardContent({ item, reversed, onImageClick }) {
  const Info = (
    <div className="p-4 pl-0 rounded-lg w-52 md:w-52 w-36" style={{fontFamily:'Optima'}}>
      {item.author && (
        <div className="text-sm md:text-base font-semibold text-gray-800 mb-1 break-words line-clamp-2">{item.author}</div>
      )}
      {item.title && <div className="text-xs md:text-sm text-gray-600 mb-1 break-words">Title: {item.title}</div>}
      {item.material && <div className="text-xs md:text-sm text-gray-600 mb-1 leading-relaxed break-words line-clamp-2">Material: {item.material}</div>}
      {item.size && <div className="text-xs md:text-sm text-gray-600 mb-1 break-words">Size: {item.size}</div>}
    </div>
  );

  const Art = (
    <div className="p-0 ml-0 rounded-lg w-52 md:w-52 w-36">
      <Image
        src={item.img}
        alt={item.title || "Artwork"}
        width={200}
        height={350}
        className="rounded-md object-cover mx-auto ml-0 cursor-pointer hover:opacity-80 transition-opacity w-36 h-52 md:w-52 md:h-80"
        onClick={() => onImageClick(item)}
      />
    </div>
  );

  return reversed ? (
    <div className="!mb-0 flex flex-col" style={{fontFamily:'Optima'}}>
      <div className="mb-4">{Info}</div>
      <div>{Art}</div>
    </div>
  ) : (
    <div className="flex flex-col">
      <div className="mb-4">{Art}</div>
      <div>{Info}</div>
    </div>
  );
}

export default function Work() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isManualControl, setIsManualControl] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollTrackRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsManualControl(true);
    
    if (scrollTrackRef.current) {
      // Get the current computed transform value
      const computedStyle = window.getComputedStyle(scrollTrackRef.current);
      const transform = computedStyle.getPropertyValue('transform');
      
      if (transform !== 'none') {
        const matrix = transform.match(/matrix.*\((.+)\)/);
        if (matrix) {
          const values = matrix[1].split(', ');
          const currentX = parseFloat(values[4]);
          setScrollPosition(currentX);
          
          // Remove animation and set the current position
          scrollTrackRef.current.style.animation = 'none';
          scrollTrackRef.current.style.transform = `translateX(${currentX}px)`;
        }
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsManualControl(false);
    
    if (scrollTrackRef.current) {
      // Start continuous infinite animation from current position
      const currentPosition = scrollPosition;
      
      // Create and apply infinite looping animation from current position
      const animationName = `infinite-scroll-${Date.now()}`;
      const keyframes = `
        @keyframes ${animationName} {
          0% { transform: translateX(${currentPosition}px); }
          100% { transform: translateX(calc(${currentPosition}px - 25%)); }
        }
      `;
      
      // Remove existing style element if any
      const existingStyle = document.getElementById('dynamic-scroll-animation');
      if (existingStyle) {
        existingStyle.remove();
      }
      
      // Add new keyframe animation
      const style = document.createElement('style');
      style.id = 'dynamic-scroll-animation';
      style.textContent = keyframes;
      document.head.appendChild(style);
      
      // Apply the new infinite animation (maintaining original 80s duration)
      scrollTrackRef.current.style.animation = `${animationName} 80s linear infinite`;
    }
  };

  const handleImageClick = (item) => {
    setSelectedImage({
      ...item,
      currentImage: item.img
    });
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  const handleArrowClick = (direction) => {
    if (scrollTrackRef.current && isManualControl) {
      const scrollAmount = 300;
      
      if (direction === 'right') {
        // Always move right - no reset, true infinite scroll
        const newPosition = scrollPosition - scrollAmount;
        setScrollPosition(newPosition);
        scrollTrackRef.current.style.transform = `translateX(${newPosition}px)`;
      } else {
        // Always move left - no reset, true infinite scroll  
        const newPosition = scrollPosition + scrollAmount;
        setScrollPosition(newPosition);
        scrollTrackRef.current.style.transform = `translateX(${newPosition}px)`;
      }
    }
  };

  return (
    <div className="h-screen bg-[#F3F0ED] overflow-x-hidden flex flex-col">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        .work-scroll-container {
          overflow: hidden;
          width: 100vw;
          height: 100%;
          position: relative;
        
          margin-left: calc(-50vw + 50%);
        }
        
        .work-scroll-track {
          display: flex;
          animation: scroll 80s linear infinite;
          width: fit-content;
          align-items: flex-end;
          height: 85%;
          transition: transform 0.3s ease-out;
        }

        @media (max-width: 768px) {
          .work-scroll-track {
            height: 75%;
          }
        }
        
        .work-card {
          flex-shrink: 0;
          margin: 0 0px;
          height: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          border-right: 1px solid #003677;
          padding-left: 30px;
          border-left: none;
        }
        
        .work-card.card-up {
          justify-content: flex-start;
          padding-top: 0px;
        }
        
        .work-card.card-down {
          justify-content: flex-end;
          padding-bottom: 0px;
        }

        .arrow-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 54, 119, 0.8);
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
          pointer-events: none;
          z-index: 10;
        }
        
        .arrow-button.visible {
          opacity: 1;
          pointer-events: auto;
        }
        
        .arrow-button:hover {
          background: rgba(0, 54, 119, 1);
          transform: translateY(-50%) scale(1.1);
        }
        
        .arrow-left {
          left: 20px;
        }
        
        .arrow-right {
          right: 20px;
        }

        body {
          overflow-x: hidden;
        }
      `}</style>

      <div className="rounded-xl overflow-hidden pt-32 md:pt-10 mb-5">
        <Image
          src="/images/art/nav.svg"
          alt="navankalpa"
          width={800}
          height={250}
          className="!pb-0 object-contain w-full h-[38px] sm:h-[45px] md:h-[75px] lg:h-[75px] xl:h-[75px]"
        />
      </div>

      <div className="flex-1 flex items-center !h-24 --bg-green-200 !mt-0" style={{fontFamily:'Optima'}}>
        <div 
          className="work-scroll-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Arrow */}
          <button
            className={`arrow-button arrow-left ${isHovered ? 'visible' : ''}`}
            onClick={() => handleArrowClick('left')}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            className={`arrow-button arrow-right ${isHovered ? 'visible' : ''}`}
            onClick={() => handleArrowClick('right')}
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={scrollTrackRef}
            className="work-scroll-track"
          >
            {/* Create multiple copies for true infinite scroll */}
            {[...workItems, ...workItems, ...workItems, ...workItems].map((item, i) => (
              <div
                key={i}
                className={`work-card ${
                  i % 2 === 0 ? 'card-up' : 'card-down'
                }`}
              >
                <CardContent item={item} reversed={i % 2 === 1} onImageClick={handleImageClick} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div 
          className="fixed inset-0 bg bg-opacity-20 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden bg-[#F3F0ED]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70 transition-all z-10"
            >
              ×
            </button>
            
            {/* Image */}
            <div className="flex flex-col lg:flex-row ">
              <div className="flex-1 flex items-center justify-center p-4">
                <Image
                  src={selectedImage.currentImage || selectedImage.img}
                  alt={selectedImage.title || "Artwork"}
                  width={600}
                  height={800}
                  className="max-w-full max-h-[70vh] object-contain rounded-md"
                />
              </div>
              
              {/* Info Panel */}
              <div className="lg:w-80 p-6 --bg-gray-50" style={{fontFamily:'Optima'}}>
                {selectedImage.author && (
                  <div className="text-xl font-bold text-gray-800 mb-3">{selectedImage.author}</div>
                )}
                {selectedImage.title && (
                  <div className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold">Title:</span> {selectedImage.title}
                  </div>
                )}
                {selectedImage.material && (
                  <div className="text-base text-gray-600 mb-2 leading-relaxed">
                    <span className="font-semibold">Material:</span> {selectedImage.material}
                  </div>
                )}
                {selectedImage.size && (
                  <div className="text-base text-gray-600 mb-2">
                    <span className="font-semibold">Size:</span> {selectedImage.size}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}