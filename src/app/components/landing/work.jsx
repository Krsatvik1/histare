'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const workItems = [
  {
    id: 1,
    img: "/images/landing/w1.png",
    title: "Transcendent Peace",
    category: "Artistic Design Innovation",
    author: "",
  },
  {
    id: 2,
    img: "/images/landing/w2.png",
    title: "Girl With Water Hyacinth",
    category: "Collection Building",
    author: "A. Ramachandran",
  },
  {
    id: 3,
    img: "/images/landing/w3.png",
    title: "The Vitrine",
    category: "Smart Programmes",
    author: "Mercedes | T&T Motors",
    explore: "https://www.youtube.com/watch?v=t_nMhVOHaBE",
  },
  {
    id: 4,
    img: "/images/landing/w4.png",
    title: "Untitled",
    category: "Collection Building",
    author: "F. N. Souza",
  },
  {
    id: 5,
    img: "/images/landing/w5.png",
    title: "Pathways to Liberation",
    category: "Product Innovation",
    author: "",
  },
  {
    id: 6,
    img: "/images/landing/w6.png",
    title: "Collectors' Affaire",
    category: "Smart Programmes",
    author: "Rajiv Kumar - Maya",
  },
  {
    id: 7,
    img: "/images/landing/w7.png",
    title: "Dominus Aeris Coleus - XIII",
    category: "Collection Building",
    author: "Thukral & Tagra",
  },
  {
    id: 8,
    img: "/images/landing/w8.png",
    title: "Untitled",
    category: "Collection Building",
    author: "Paramjit Singh",
  },
  {
    id: 9,
    img: "/images/landing/w9.png",
    title: "The Mandalic Renaissance",
    category: "Product Innovation",
    author: "",
  },
  {
    id: 10,
    img: "/images/landing/w10.png",
    title: "Art and the Metaverse",
    category: "Knowledge Sharing",
    author: "",
  },
  {
    id: 11,
    img: "/images/landing/w11.png",
    title: "IGNCA, Ministry of Culture",
    category: "Artistic Product Innovation",
    author: "",
  },
];

function CardContent({ item, reversed }) {
  const Info = (
    <div className={reversed ? "my-2" : "my-2"}>
      <div className="text-sm text-gray-700">{item.category}</div>
      <div className="text-md text-black mt-1">{item.title}</div>
      {item.author && (
        <div className="text-sm text-gray-600 mt-1">{item.author}</div>
      )}
      {item.explore && (
        <a
          href={item.explore}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          <button className="border border-[#3c597B] text-[#3c597B] px-5 py-2 rounded-full hover:bg-[#3c597B] hover:text-white transition duration-300">
            Explore more!
          </button>
        </a>
      )}
    </div>
  );

  const Art = (
    <Image
      src={item.img}
      alt={item.title}
      width={300}
      height={400}
      className="rounded-md object-cover mx-auto"
    />
  );

  return reversed ? (
    <div>
      {Info}
      {Art}
    </div>
  ) : (
    <div>
      {Art}
      {Info}
    </div>
  );
}

export default function Work() {
  return (
    <div className="py-8 min-h-screen">
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
          width: 100%;
          padding: 100px; 
        }
        
        .work-scroll-track {
          display: flex;
          animation: scroll 60s linear infinite;
          width: fit-content;
          align-items: flex-start; 
        }
        
        .work-scroll-track:hover {
          animation-play-state: paused;
        }
        
        .work-card {
          flex-shrink: 0;
        }
        
        .work-card.card-up {
          transform: translateY(-100px);
        }
        
        .work-card.card-down {
          transform: translateY(100px);
        }
      `}</style>

      <h2
        className="text-4xl md:text-5xl text-[#3c597B] text-center"
        style={{ fontFamily: "Rofane", fontStyle: "italic" }}
      >
        <span className="italic font-normal">Our </span>
        <span className="not-italic font-normal">Work</span>
      </h2>

      <div className="work-scroll-container">
        <div className="work-scroll-track py-3">
          {workItems.concat(workItems).map((item, i) => (
            <div
              key={i}
              className={`work-card flex flex-col justify-around px-6 py-0 ${
                i % 2 === 0 ? 'card-up' : 'card-down'
              }`}
            >
              <CardContent item={item} reversed={i % 2 === 1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}