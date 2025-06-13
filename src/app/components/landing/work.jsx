import React from "react";
import Image from "next/image";

const workItems = [
  {
    img: "/images/landing/w1.png",
    title: "Untitled",
    category: "Collection Building",
    author: "F. N. Souza",
  },
  {
    img: "/images/landing/w2.png",
    title: "Pathways to Liberation",
    category: "Artistic Design Innovation",
  },
  {
    img: "/images/landing/w3.png",
    title: "Collectors' Affaire",
    category: "Smart Programme",
    author: "Rajiv Kumar",
  },
  {
    img: "/images/landing/w4.png",
    title: "Dominus Aeris Coleus - XIII",
    category: "Collection Building",
    author: "Thukral & Tagra",
  },
  {
    img: "/images/landing/w5.png",
    title: "Untitled",
    category: "Collection Building",
    author: "Paramjit Singh",
  },
  {
    img: "/images/landing/w6.png",
    title: "Generational Wisdom: The Mandalic Renaissance",
    category: "Artistic Design Innovation",
  },
];

function CardContent({ item, reversed }) {
  /* “reversed” means: text first, image last  */
  const Info = (
    <>
      <div className="text-sm text-gray-700 mt-8">{item.category}</div>
      <div className="text-md font-semibold text-black">{item.title}</div>
      {item.author && (
        <div className="text-sm text-gray-600">{item.author}</div>
      )}
    </>
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
