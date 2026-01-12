'use client';
import React, { useState, useRef } from "react";
import Image from "next/image";

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
    img: "/images/nava/flower5.png",
    author: "Pathways To Liberation",
    material: "Stainless steel ,High quality Oil based paint",
    size: "12 H Ft.",
  },
  {
    id: 2,
    img: "/images/nava/flower.png",
    author: "Ethereal Echoes",
    material: "Brass and Bronze",
    size: "18 H Ft.",
    orientation: "landscape"
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
    popup_image: "/images/nava/overview2.png",
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
    orientation: "landscape"
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

const isVideo = (src) => {
  if (!src) return false;
  const ext = src.split('.').pop().toLowerCase();
  return ext === 'mp4' || ext === 'webm';
};

function GroupedCardContent({ item, reversed, onImageClick, onHover, onLeave }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const Info = (
    <div className="p-4 pl-0 pb-0 rounded-lg" style={{ fontFamily: 'Optima' }}>
      {item.author && (
        <div className="text-sm md:text-base font-semibold text-gray-800 mb-1 break-words line-clamp-2">{item.author}</div>
      )}
      {item.title && <div className="text-xs md:text-sm text-gray-600 mb-1 break-words">Title: {item.title}</div>}
      {item.material && <div className="text-xs md:text-sm text-gray-600 mb-1 leading-relaxed break-words line-clamp-2">Material: {item.material}</div>}
      {item.size && <div className="text-xs md:text-sm text-gray-600 mb-1 break-words">Size: {item.size}</div>}
    </div>
  );

  const currentSrc = item.images[currentImageIndex];
  const isCurrentVideo = isVideo(currentSrc);

  const GroupedArt = (
    <div className="p-0 ml-0 rounded-lg w-52">
      {/* Main Image */}
      <div className="mb-3" onClick={() => onImageClick(item, currentImageIndex)}>
        {isCurrentVideo ? (
          <video
            src={currentSrc}
            className="rounded-md object-cover cursor-pointer hover:opacity-80 transition-opacity w-full h-[350px]"
            autoPlay
            muted
            loop
            playsInline
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          />
        ) : (
          <Image
            src={currentSrc}
            alt={`${item.title || "Artwork"} ${currentImageIndex + 1}`}
            width={200}
            height={350}
            className="rounded-md object-cover cursor-pointer hover:opacity-80 transition-opacity w-full"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-1 justify-center">
        {item.images.map((imgSrc, index) => {
          const isThumbVideo = isVideo(imgSrc);
          return (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              className={`relative overflow-hidden rounded border transition-all ${index === currentImageIndex
                  ? 'border-blue-500 ring-1 ring-blue-200'
                  : 'border-gray-300 hover:border-gray-400'
                }`}
            >
              {isThumbVideo ? (
                <video
                  src={imgSrc}
                  className="object-cover w-[30px] h-[40px]"
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image
                  src={imgSrc}
                  alt={`${item.title || "Artwork"} ${index + 1}`}
                  width={30}
                  height={40}
                  className="object-cover"
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  );

  return reversed ? (
    <div className="flex flex-col" style={{ fontFamily: 'Optima' }}>
      <div className="mb-4">{Info}</div>
      <div>{GroupedArt}</div>
    </div>
  ) : (
    <div className="flex flex-col">
      <div className="mb-4">{GroupedArt}</div>
      <div>{Info}</div>
    </div>
  );
}

function CardContent({ item, reversed, onImageClick, onHover, onLeave }) {
  if (item.isGroup) {
    return <GroupedCardContent item={item} reversed={reversed} onImageClick={onImageClick} onHover={onHover} onLeave={onLeave} />;
  }

  // Determine if this is a landscape orientation card
  const isLandscape = item.orientation === "landscape";
  const isItemVideo = isVideo(item.img);

  const Info = (
    <div className={`p-4 pl-0 pb-0 rounded-lg ${isLandscape ? 'w-full' : 'w-52'}`} style={{ fontFamily: 'Optima' }}>
      {item.author && (
        <div className="text-sm md:text-base font-semibold text-gray-800 mb-1 break-words line-clamp-2">{item.author}</div>
      )}
      {item.title && <div className="text-xs md:text-sm text-gray-600 mb-1 break-words">Title: {item.title}</div>}
      {item.material && <div className="text-xs md:text-sm text-gray-600 mb-1 leading-relaxed break-words line-clamp-2">Material: {item.material}</div>}
      {item.size && <div className="text-xs md:text-sm text-gray-600 mb-1 break-words">Size: {item.size}</div>}
    </div>
  );

  const Art = (
    <div className={`p-0 ml-0 rounded-lg ${isLandscape ? 'w-full' : 'w-52'}`}>
      {isItemVideo ? (
        <video
          src={item.img}
          className={`rounded-md object-cover mx-auto ml-0 cursor-pointer hover:opacity-80 transition-opacity ${isLandscape ? 'w-full h-auto' : 'w-[200px] h-[350px]'
            }`}
          autoPlay
          muted
          loop
          playsInline
          onClick={() => onImageClick(item)}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        />
      ) : (
        <Image
          src={item.img}
          alt={item.title || "Artwork"}
          width={isLandscape ? 400 : 200}
          height={isLandscape ? 250 : 350}
          className={`rounded-md object-cover mx-auto ml-0 cursor-pointer hover:opacity-80 transition-opacity ${isLandscape ? 'w-full h-auto' : ''
            }`}
          onClick={() => onImageClick(item)}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        />
      )}
    </div>
  );

  return reversed ? (
    <div className="!mb-0 flex flex-col justify-end --bg-red-200 h-[100%]" style={{ fontFamily: 'Optima' }}>
      <div className="mb-4">{Info}</div>
      <div>{Art}</div>
    </div>
  ) : (
    <div className="flex flex-col h-[100%]">
      <div className="mb-4">{Art}</div>
      <div>{Info}</div>
    </div>
  );
}

export default function Work() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollTrackRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleImageClick = (item, imageIndex = null) => {
    if (item.isGroup && imageIndex !== null) {
      // For grouped images, show the specific image clicked
      setSelectedImage({
        ...item,
        currentImage: item.images[imageIndex],
        imageIndex
      });
    } else if (item.isGroup) {
      // For grouped images without specific index, show first image
      setSelectedImage({
        ...item,
        currentImage: item.images[0],
        imageIndex: 0
      });
    } else {
      // For single images, use popup_image if available, otherwise use img
      console.log(item.popup_image)
      console.log(item)
      setSelectedImage({
        ...item,
        currentImage: item.popup_image || item.img
      });
    }
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="h-screen bg-[#F3F0ED] overflow-x-hidden flex flex-col --bg-red-200">
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
          margin: 0 0px !important;
          height: 100%;
          display: flex;
          padding-bottom: 0px !important;
          margin-bottom : 0px !important ;
          flex-direction: column;
          border-right: 1px solid #003677;
          border-right: 1px solid #f1d394;
          padding-left: 30px;
          border-left: none;
        }

        .work-card.grouped {
          padding-left: 30px;
          padding-right: 30px;
          min-width: fit-content;
        }

        .work-card.landscape {
          padding-left: 30px;
          padding-right: 30px;
          min-width: 450px;
        }
        
        .work-card.card-up {
          justify-content: flex-start;
          padding-top: 0px;
        }
        
        .work-card.card-down {
          justify-content: flex-end;
          padding-bottom: 0px;
        }

        body {
          overflow-x: hidden;
        }
      `}</style>

      <div className="rounded-xl overflow-hidden pt-5 md:pt-5 pt-32 mb-5 --bg-red-200 flex items-center justify-center">
        <Image
          src="/images/art/nav.svg"
          alt="navankalpa"
          width={800}
          height={250}
          className="!m-0 object-contain w-full pt-[34px] --bg-red-200 h-[75px] sm:h-[60px] md:h-[80px] lg:h-[90px] xl:h-[110px]"
        />
      </div>

      <div className="flex-1 flex items-center !h-24  -bg-green-200 !mt-0" style={{ fontFamily: 'Optima' }}>
        <div
          className="work-scroll-container --bg-blue-200"
        >
          <div
            ref={scrollTrackRef}
            className="work-scroll-track"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {/* Create multiple copies for true infinite scroll */}
            {[...workItems, ...workItems, ...workItems, ...workItems].map((item, i) => (
              <div
                key={i}
                className={`work-card ${item.isGroup ? 'grouped' : ''} ${item.orientation === 'landscape' ? 'landscape' : ''
                  } ${i % 2 === 0 ? 'card-up' : 'card-down'
                  }`}
              >
                <CardContent
                  item={item}
                  reversed={i % 2 === 1}
                  onImageClick={handleImageClick}
                  onHover={handleMouseEnter}
                  onLeave={handleMouseLeave}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div
            className="fixed inset-0 bg-blur bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={closePopup}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
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
              <div className="flex flex-col lg:flex-row bg-[#F3F0ED]">
                <div className="flex-1 flex items-center justify-center p-4">
                  {isVideo(selectedImage.currentImage || selectedImage.img) ? (
                    <video
                      src={selectedImage.currentImage || selectedImage.img}
                      className="max-w-full max-h-[70vh] object-contain rounded-md"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <Image
                      src={selectedImage.currentImage || selectedImage.img}
                      alt={selectedImage.title || "Artwork"}
                      width={600}
                      height={800}
                      className="max-w-full max-h-[70vh] object-contain rounded-md"
                    />
                  )}
                </div>

                {/* Info Panel */}
                <div className="lg:w-80 p-6" style={{ fontFamily: 'Optima' }}>
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

                  {/* For grouped images, show navigation */}
                  {selectedImage.isGroup && (
                    <div className="mt-6 pt-4 border-t border-gray-300">
                      <div className="text-sm text-gray-600 mb-3">
                        Image {(selectedImage.imageIndex || 0) + 1} of {selectedImage.images.length}
                      </div>
                      <div className="flex gap-2">
                        {selectedImage.images.map((imgSrc, index) => {
                          const isThumbVideo = isVideo(imgSrc);
                          return (
                            <button
                              key={index}
                              onClick={() => setSelectedImage({
                                ...selectedImage,
                                currentImage: imgSrc,
                                imageIndex: index
                              })}
                              className={`relative overflow-hidden rounded border-2 transition-all ${index === selectedImage.imageIndex
                                  ? 'border-blue-500 ring-2 ring-blue-200'
                                  : 'border-gray-300 hover:border-gray-400'
                                }`}
                            >
                              {isThumbVideo ? (
                                <video
                                  src={imgSrc}
                                  className="object-cover w-[60px] h-[80px]"
                                  muted
                                  loop
                                  playsInline
                                />
                              ) : (
                                <Image
                                  src={imgSrc}
                                  alt={`${selectedImage.title} ${index + 1}`}
                                  width={60}
                                  height={80}
                                  className="object-cover"
                                />
                              )}
                            </button>
                          )
                        })}
                      </div>
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