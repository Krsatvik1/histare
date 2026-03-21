import React from 'react';
import Image from 'next/image';

function Programe() {
  return (
    <div className="py-16 px-4 md:px-20 pb-10 text-center min-h-screen flex flex-col justify-center ">
      <div className="rounded-xl overflow-hidden pt-5  md:mb-3 --bg-red-200">
        <Image
          src="/images/art/rang.svg"
          alt="Collectors' Affair"
          width={800}
          height={200}
          className="object-contain w-full h-[35px] h-[50px] sm:h-[45px] md:h-[70px] lg:h-[80px] --bg-red-200 pt-[7px]"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center pt-4 sm:pt-10 md:pt-0">
        <a href="/collectors">
          <div className="rounded-xl overflow-hidden aspect-[3/4] bg-[#2B3730]">
            <Image
              src="/Collectors_ Affaire logo.png"
              alt="Collectors' Affair"
              width={100}
              height={100}
              className="object-contain w-full h-full scale-90"
            />
          </div>
        </a>

        <a href='/erbe'>
          <div className="rounded-xl overflow-hidden aspect-[3/4] bg-[#6B2134]">
            <Image
              src="/images/landing/ERBE.webp"
              alt="Collectors' Affair"
              width={100}
              height={100}
              className="object-contain w-full h-full scale-90"
            />
          </div>
        </a>

        <a href='/vitrine'>
          <div className="rounded-xl overflow-hidden aspect-[3/4] bg-[#0E2B4C]">
            <Image
              src="/images/landing/VITRINE.webp"
              alt="Collectors' Affair"
              width={100}
              height={100}
              className="object-contain w-full h-full scale-90"
            />
          </div>
        </a>

        <a href='/now'>
          <div className="rounded-xl overflow-hidden aspect-[3/4] bg-[#FFFFFF]">
            <Image
              src="/images/landing/NOW.webp"
              alt="Collectors' Affair"
              width={100}
              height={100}
              className="object-contain w-full h-full scale-90"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Programe;