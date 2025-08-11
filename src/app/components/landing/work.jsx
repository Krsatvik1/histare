'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const workItems = [
    {
      id: 1,
      img: "/images/nava/elephant.png",
      author: "Dancing Across Time",
      material: "Statuario Marble, Semi-precious Lapis, Merino Wool, Mother of Pearl and Silk Threads",
      size: "8 H Ft.",
     
      
    },
    {
      id: 2,
      img: "/images/nava/flower.png",
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
      {
        id: 12,
        img: "/images/nava/plantarium.png",
        author: "Pathways To Liberation",
        material: "Stainless steel ,High quality Oil based paint",
      size: "12 H Ft.",
      },
  ];

function CardContent({ item, reversed }) {
  const Info = (
    <div className="p-4 rounded-lg w-52">
      {item.author && (
        <div className="text-sm md:text-base font-semibold text-gray-800 mb-1">{item.author}</div>
      )}
      {item.title && <div className="text-xs md:text-sm text-gray-600 mb-1">Title: {item.title}</div>}
      {item.size && <div className="text-xs md:text-sm text-gray-600 mb-1">Size: {item.size}</div>}
      {item.material && <div className="text-xs md:text-sm text-gray-600 mb-1 leading-relaxed">Material: {item.material}</div>}
    </div>
  );

  const Art = (
    <div className="p-0 rounded-lg w-52">
      <Image
        src={item.img}
        alt={item.title || "Artwork"}
        width={200}
        height={350}
        className="rounded-md object-cover mx-auto"
      />
    </div>
  );

  return reversed ? (
    <div className="flex flex-col">
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
  return (
    <div className="h-screen  overflow-x-hidden flex flex-col">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .work-scroll-container {
          overflow: hidden;
          width: 100vw;
          height: 600px;
          position: relative;
          margin-left: calc(-50vw + 50%);
        }
        
        .work-scroll-track {
          display: flex;
          animation: scroll 70s linear infinite;
          width: fit-content;
          align-items: flex-end;
          height: 100%;
        }
        
        .work-scroll-track:hover {
          animation-play-state: paused;
        }
        
        .work-card {
          flex-shrink: 0;
          margin: 0 0px;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #003677;
          border-leftt: 1px solid #003677;
          padding-left:26px;
          // border-left: none;
        }
        
        .work-card.card-up {
          justify-content: flex-start;
          padding-top: 0px;
          
        }
        
        .work-card.card-down {
          justify-content: flex-end;
          padding-bottom: 0px;
        }

        /* Ensure no horizontal scroll */
        body {
          overflow-x: hidden;
        }
      `}</style>

      {/* Header - Taking about 20% of screen */}
      <div className="flex-shrink-0 pt-8 pb-4">
        <h2
          className="text-4xl pt-15 md:pt-0 md:text-6xl text-[#3c597B] text-center"
          style={{ fontFamily: "Rofane", fontStyle: "italic" }}
        >
          <span className="not-italic font-normal">Navankalpa</span>
        </h2>
      </div>

      {/* Scroll Container - Taking about 75% of screen */}
      <div className="flex-1 flex items-center">
        <div className="work-scroll-container">
          <div className="work-scroll-track">
            {workItems.concat(workItems).map((item, i) => (
              <div
                key={i}
                className={`work-card ${
                  i % 2 === 0 ? 'card-up' : 'card-down'
                }`}
              >
                <CardContent item={item} reversed={i % 2 === 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}