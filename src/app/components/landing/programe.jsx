import React from 'react';
import Image from 'next/image';

function Programe() {
  return (
    <div className="py-16 px-4 md:px-20 pb-10 text-center min-h-screen flex flex-col justify-center">
      <div className="rounded-xl overflow-hidden   pt-5 mb-10">
        <Image
          src="/images/art/rang.svg"
          alt="Collectors' Affair"
          width={800}
          height={200}
          className="object-contain w-full h-[35px] sm:h-[45px] md:h-[70px] lg:h-[80px]"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center pt-10 md:pt-0">
      <a href="/collectors">
        <div className="rounded-xl overflow-hidden h-[200px] sm:h-[250px] md:h-[400px] bg-[#2B3730]">
          <Image
            src="/images/art/Rect.svg"
            alt="Collectors' Affair"
            width={100}
            height={100}
            className="object-contain w-full h-full scale-90"
          />
        </div>
      </a>

        
        <a href='/erbe'>
        <div className="rounded-xl overflow-hidden h-[200px] sm:h-[250px] md:h-[400px] bg-[#6B2134]">
          <Image
            src="/images/landing/ERBE.svg"
            alt="Collectors' Affair"
            width={100}
            height={100}
            className="object-contain w-full h-full scale-90"
          />
        </div>
        </a>
        
        <a href='/vitrine'>
        <div className="rounded-xl overflow-hidden h-[200px] sm:h-[250px] md:h-[400px] bg-[#0E2B4C]">
          <Image
            src="/images/landing/VITRINE.svg"
            alt="Collectors' Affair"
            width={100}
            height={100}
            className="object-contain w-full h-full scale-90"
          />
        </div>
        </a>
        
        <a href='/now'>
        <div className="rounded-xl overflow-hidden h-[200px] sm:h-[250px] md:h-[400px] bg-[#FFFFFF]">
          <Image
            src="/images/landing/NOW.svg"
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