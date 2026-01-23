import React from 'react';
import Image from 'next/image'; // Use only if you're in a Next.js project

const Elephant = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 py-16 sm:py-20 pt-20 sm:pt-24">
      {/* Elephant Image */}
      <div className="flex-3/5 flex items-center justify-center">
        <Image
          src="/images/landing/elephant.png"
          alt="Paper Elephant Statue"
          width={500}
          height={500}
          className="object-contain w-80 sm:w-96 md:w-[500px] h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex-2/5 text-center md:text-left mt-6 sm:mt-8 md:mt-0 px-2 sm:px-4">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-[#3c597B]"
          style={{ fontFamily: 'Rofane' }}
        >
          Unveiling Histare
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-sm sm:max-w-md mx-auto md:mx-0">
          A Comprehensive Cultural Arts Organization Crafting Solutions To Empower The People,
          Planet And Ensuring Significant Advancements With A Focus On The Diverse Heritage Of India.
        </p>
        <a href='/unveiling'>
          <button className="mt-4 sm:mt-6 border border-[#3c597B] text-[#3c597B] px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full hover:bg-[#3c597B] hover:text-white transition duration-300">
            Delve Deeper
          </button>
        </a>
      </div>
    </section>
  );
};

export default Elephant;