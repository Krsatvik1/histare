'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
        img: "/images/art/Red.png",
        author: "Ritu Kapoor Kamanth",
        title: "Ready",
        medium: "Oil on Canvas",
        size: '36" x 60"',
        year: ""
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
      size: "30 x 22 in",
      year: "2005"
    },
    {
      id: 7,
      img: "/images/art/shell.png",
      author: "Thukral & Tagra",
      title: "Dominus Aeris Coleus -XIII",
      medium: "",
      size: "",
      year: ""
    },
    {
      id: 8,
      img: "/images/art/green.png",
      author: "Paramjeet Singh",
      title: "Untitled",
      medium: "Oil on Canvas",
      size: '42" x 24"',
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
        id: 13,
        img: "/images/art/blackheart.png",
        author: "Zareena Hashmi",
        title: "By The Mango Tree",
        medium: "Woodcut on Paper",
        size: "12.5 x 9.75 in",
        year: ""
      },
      {
        id: 14,
        img: "/images/art/clover.png",
        author: "Zareena Hashmi",
        title: "By The Mango Tree",
        medium: "Woodcut on Paper",
        size: "12.5 x 9.75 in",
        year: ""
      },
      
      {
        id: 15,
        img: "/images/art/cocnut.png",
        author: "Zareena Hashmi",
        title: "By The Mango Tree",
        medium: "Woodcut on Paper",
        size: "12.5 x 9.75 in",
        year: ""
      },
      
      {
        id: 16,
        img: "/images/art/dimond.png",
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
        year: ""
      },
  ];

function CardContent({ item, reversed }) {
  const Info = (
    <div className="p-4 rounded-lg w-52">
      {item.author && (
        <div className="text-sm md:text-base font-semibold text-gray-800 mb-1">{item.author}</div>
      )}
      {item.title && <div className="text-xs md:text-sm text-gray-600 mb-1">Title: {item.title}</div>}
      {item.medium && <div className="text-xs md:text-sm text-gray-600 mb-1 leading-relaxed">Medium: {item.medium}</div>}
      {item.size && <div className="text-xs md:text-sm text-gray-600 mb-1">Size: {item.size}</div>}
      {item.year && <div className="text-xs md:text-sm text-gray-600">Year: {item.year}</div>}
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
    <div className="h-screen bg-[#F3F0ED] overflow-x-hidden flex flex-col">
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
          height: 550px;
          
          position: relative;
          margin-left: calc(-50vw + 50%);
        }
        
        .work-scroll-track {
          display: flex;
          animation: scroll 80s linear infinite;
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
          justify-content:center;
          flex-direction: column;
          border-right: 1px solid #003677;
          padding-left:26px;
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

        /* Ensure no horizontal scroll */
        body {
          overflow-x: hidden;
        }
      `}</style>

      {/* Header - Taking about 20% of screen */}
      {/* <div className="flex-shrink-0 pt-8 pb-4">
        <h2
          className="text-4xl pt-15 md:pt-0 md:text-6xl text-[#3c597B] text-center"
          style={{ fontFamily: "Rofane", fontStyle: "italic" }}
        >
          <span className="not-italic font-normal">Arthakhya</span>
        </h2>
      </div> */}
      <div className="rounded-xl overflow-hidden pt-5 mb-5">
      <Image
        src="/images/art/art.svg"
        alt="artthakya"
        width={800}
        height={250}
        className="object-contain w-full h-[75px] sm:h-[60px] md:h-[80px] lg:h-[90px] xl:h-[110px]"
      />
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