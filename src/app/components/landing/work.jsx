'use client';
import React from "react";
import Image from "next/image";

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
    title: "Collectors’ Affaire",
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
    <div>
      <div className="text-sm text-gray-700 mt-10">{item.category}</div>
      <div className="text-md text-black">{item.title}</div>
      {item.author && (
        <div className="text-sm text-gray-600">{item.author}</div>
      )}
      {item.explore && (
        <a href={item.explore} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">
          <button className=" border border-[#3c597B] text-[#3c597B] px-5 py-2 rounded-full hover:bg-[#3c597B] hover:text-white transition duration-300">
          Explore more !
        </button>
          </a>)}
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
    <>
      {Info}
      {Art}
    </>
  ) : (
    <>
      {Art}
      {Info}
    </>
  );
}

export default function Work() {
  return (
    <div className="py-16">
      <h2
        className="text-4xl md:text-5xl mb-12 text-[#3c597B] text-center"
        style={{ fontFamily: "Rofane", fontStyle: "italic" }}
      >
        <span className="italic font-normal">Our </span>
        <span className="not-italic font-normal">Work</span>
      </h2>

      <div className="work-scroll-container">
        <div className="work-scroll-track">
          {workItems.concat(workItems).map((item, i) => (
            <div
              key={i}
              className="work-card flex flex-col justify-between px-6"
            >
              <CardContent item={item} reversed={i % 2 === 1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
