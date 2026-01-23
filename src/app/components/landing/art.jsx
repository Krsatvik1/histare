'use client';
import React, { useState, useRef } from "react";
import Image from "next/image";
import MobileStoryView from "./mobile-story-view";

const workItems = [
  {
    id: 1,
    img: "/images/art/hourse.png",
    author: "Sunil Das",
    title: "Untitled",
    medium: "Mixed Media on Paper",
    size: "30 x 22 in",
    year: "2005"
  },
  {
    id: 2,
    img: "/images/art/lily.png",
    author: "A. Ramachandran",
    title: "Girl with water Hyacinth",
    medium: "Oil on Canvas",
    size: "46 x 36 in",
    year: "2012"
  },
  {
    id: 3,
    img: "/images/art/red.png",
    author: "Ritu Kapoor Kamanth",
    title: "Ready",
    medium: "Oil on Canvas",
    size: '36" x 60"',
    year: "",
    orientation: 'landscape'
  },
  {
    id: 4,
    img: "/images/landing/w4.png",
    author: "F.N Souza",
    title: "Untitled",
    medium: "Gouache on paper pasted on board",
    size: '21.5" x 14.5"',
    year: "1950"
  },
  {
    id: 5,
    img: "/images/art/Resonance.png",
    author: "Kanchan Chander",
    title: "Abhivyakti",
    medium: "Acrylic oil and sequins on canvas",
    size: "48 x 15 in",
    year: ""
  },
  {
    id: 6,
    img: "/images/art/bird.png",
    author: "Sudhir Bhagat",
    title: "Live Life To The Fullest",
    medium: "Oil on canvas",
    size: "",
    year: "2017",
    orientation: "landscape"
  },
  {
    id: 7,
    img: "/images/art/shell.png",
    author: "Thukral & Tagra",
    title: "Dominus Aeris Coleus -XIII",
    medium: "Oil on Canvas",
    size: "60 x 60 in",
    year: "2017"
  },
  {
    id: 8,
    img: "/images/art/green.png",
    author: "Paramjeet Singh",
    title: "Untitled",
    medium: "Oil on Canvas",
    size: '42 x 24 in',
    year: "2015"
  },
  {
    id: 9,
    img: "/images/art/man.png",
    author: "Paramjeet Singh Dogra",
    title: "Untitled",
    medium: "Oil & Acrylic on Canvas",
    size: "24 x 30 in",
    year: ""
  },
  {
    id: 10,
    img: "/images/art/purple.png",
    author: "Prem Singh",
    title: "Lyrical Voices",
    medium: "Oil on Canvas",
    size: "35 x 50 in",
    year: "2014"
  },
  {
    id: 11,
    img: "/images/art/brown.png",
    author: "Vijay Sada Shiv Mashe",
    title: "",
    medium: "Cow dung & acrylic on raw canvas",
    size: "36 x 45 in",
    year: ""
  },
  {
    id: 12,
    img: "/images/art/browntwo.png",
    author: "Vijay Sada Shiv Mashe",
    title: "",
    medium: "Cow dung & acrylic on raw canvas",
    size: "37 x 44.5 in",
    year: ""
  },
  {
    id: 'grouped-13-14-15',
    isGroup: true,
    images: [
      "/images/art/blackheart.png",
      "/images/art/clover.png",
      "/images/art/cocnut.png"
    ],
    author: "Zareena Hashmi",
    title: "Tilka: By The Mango Tree",
    medium: "Woodcut on paper",
    size: "12.5 x 9.75 in",
    year: ""
  },
  {
    id: 16,
    img: "/images/art/diamond.png",
    author: "Sada Shiv Jivya Mashe",
    title: "",
    medium: "Cow dung and acrylic on raw canvas",
    size: "79.5 x 54 in",
    year: ""
  },
  {
    id: 17,
    img: "/images/art/deer.png",
    author: "Rudhan Devi",
    title: "Peacocks",
    medium: "Natural earth ochre colors on handmade paper",
    size: "40 x 56 in",
    year: ""
  },
  {
    id: 18,
    img: "/images/art/peacocks.png",
    author: "Rudhan Devi",
    title: "Peacocks",
    medium: "Natural earth ochre colors on handmade paper",
    size: "40 x 56 in",
    year: "",
    orientation: "landscape"
  },
  // New items from Figma
  {
    id: 19,
    img: "/images/art/gurcharan-singh-untitled.png",
    author: "Dr. Gurcharan Singh",
    medium: "Acrylic on canvas",
    size: "24 x 24 in",
    year: ""
  },
  {
    id: 20,
    isGroup: true,
    images: [
      "/images/art/toral-pandya-horizon-1.png",
      "/images/art/toral-pandya-horizon-2.png",
      "/images/art/toral-pandya-horizon-3.png"
    ],
    author: "Toral Pandya",
    title: "Horizon I, Horizon II, Horizon III",
    medium: "Linocut Printing",
    size: "12 x 12 in (each)",
    year: "2025"
  },
  {
    id: 21,
    img: "/images/art/suresh-kumar-flowers-mat.png",
    author: "Suresh Kumar M",
    title: "Flowers Mat",
    medium: "Natural Wood",
    size: "39 x 35.5 in",
    year: "2024"
  },
  {
    id: 22,
    img: "/images/art/pallavi-nath-energy.png",
    author: "Pallavi Nath",
    title: "Energy",
    medium: "Acrylic on canvas",
    size: "36 x 36 in",
    year: "2020"
  },
  {
    id: 23,
    isGroup: true,
    images: [
      "/images/art/pallavi-nath-mask-1.png",
      "/images/art/pallavi-nath-mask-2.png",
      "/images/art/pallavi-nath-mask-3.png",
      "/images/art/pallavi-nath-mask-4.png"
    ],
    author: "Pallavi Nath",
    title: "A Rhythm of Mask",
    medium: "Acrylic on canvas",
    size: "24 x 24 in (each)",
    year: "2020"
  },
  {
    id: 24,
    img: "/images/art/santosh-jain-sankat-mochan.png",
    author: "Santosh Jain",
    title: "Sankat Mochan II",
    medium: "Photography Mixed Media on Archival Paper",
    size: "24 x 16 in",
    year: "2018"
  },
  {
    id: 25,
    img: "/images/art/arunima-sanyal-triptych.png",
    author: "Arunima Sanyal",
    title: "Triptych",
    medium: "Acrylic on canvas (triptych)",
    size: "12 x 12 in (each)",
    year: "2011"
  },
  {
    id: 26,
    img: "/images/art/chanchal-chakrabarti-tree-of-life.png",
    author: "Chanchal Chakrabarti",
    title: "Rectangle Tree of Life",
    medium: "Cast brass with Patina finish, lacquered and heat treated",
    size: "42 x 24 in",
    year: "2024"
  },
  {
    id: 27,
    img: "/images/art/anaushka-rao-ophelia.png",
    author: "Anaushka Rao",
    title: "Ophelia and Amrita",
    medium: "Digital",
    size: "16 x 11.3 in",
    year: "2024"
  },
  {
    id: 28,
    isGroup: true,
    images: [
      "/images/art/jitendra-thorat-1.png",
      "/images/art/jitendra-thorat-2.png",
      "/images/art/jitendra-thorat-3.png",
      "/images/art/jitendra-thorat-4.png"
    ],
    author: "Jitendra Thorat",
    medium: "Mix media on paper",
    size: "24 x 38 in",
    year: "2024"
  }
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
        <div className="text-sm md:text-base font-semibold text-gray-800 mb-1 wrap-break-word line-clamp-2">{item.author}</div>
      )}
      {item.title && item.title.toLowerCase() !== 'untitled' && (
        <div className="text-xs md:text-sm text-gray-600 mb-1 wrap-break-word">Title: {item.title}</div>
      )}
      {(item.medium || item.material) && (
        <div className="text-xs md:text-sm text-gray-600 mb-1 leading-relaxed wrap-break-word line-clamp-2">
          Material: {item.medium || item.material}
        </div>
      )}
      {item.size && <div className="text-xs md:text-sm text-gray-600 mb-1 wrap-break-word">Size: {item.size}</div>}
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
        <div className="text-sm md:text-base font-semibold text-gray-800 mb-1 wrap-break-word line-clamp-2">{item.author}</div>
      )}
      {item.title && item.title.toLowerCase() !== 'untitled' && (
        <div className="text-xs md:text-sm text-gray-600 mb-1 wrap-break-word">Title: {item.title}</div>
      )}
      {(item.medium || item.material) && (
        <div className="text-xs md:text-sm text-gray-600 mb-1 leading-relaxed wrap-break-word line-clamp-2">
          Material: {item.medium || item.material}
        </div>
      )}
      {item.size && <div className="text-xs md:text-sm text-gray-600 mb-1 wrap-break-word">Size: {item.size}</div>}
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
    <div className="mb-0! flex flex-col justify-end --bg-red-200 h-full" style={{ fontFamily: 'Optima' }}>
      <div className="mb-4">{Info}</div>
      <div>{Art}</div>
    </div>
  ) : (
    <div className="flex flex-col h-full">
      <div className="mb-4">{Art}</div>
      <div>{Info}</div>
    </div>
  );
}

export default function Work() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
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
    <>
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
          width: fit-content;
          align-items: flex-end;
          height: 85%;
          animation: scroll 100s linear infinite;
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

      {/* Mobile View */}
      <div className="md:hidden w-full relative h-dvh bg-[#F3F0ED]">
        <MobileStoryView
          items={workItems}
          sectionLogoSrc="/images/art/arth2.svg"
          nextSectionId="work-section"
          onItemClick={(item) => handleImageClick(item)}
        />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex h-screen bg-[#F3F0ED] overflow-x-hidden flex-col --bg-red-200">
        <div className="rounded-xl overflow-hidden pt-32 mb-5 --bg-red-200 flex items-center justify-center">
          <Image
            src="/images/art/arth2.svg"
            alt="artthakya"
            width={750}
            height={250}
            className="m-0! object-contain w-full pt-[34px] --bg-red-200 h-[75px] sm:h-[60px] md:h-[80px] lg:h-[90px] xl:h-[110px]"
          />
        </div>

        <div className="flex-1 flex items-center h-24!  -bg-green-200 mt-0!" style={{ fontFamily: 'Optima' }}>
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
                  {selectedImage.title && selectedImage.title.toLowerCase() !== 'untitled' && (
                    <div className="text-lg text-gray-700 mb-2">
                      <span className="font-semibold">Title:</span> {selectedImage.title}
                    </div>
                  )}
                  {(selectedImage.medium || selectedImage.material) && (
                    <div className="text-base text-gray-600 mb-2 leading-relaxed">
                      <span className="font-semibold">Material:</span> {selectedImage.medium || selectedImage.material}
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
    </>
  );
}