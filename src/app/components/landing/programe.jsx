import React from 'react';
import Image from 'next/image';

function Programme() {
  return (
    <div className="py-16 px-4 md:px-20 pb-10 text-center min-h-screen flex flex-col justify-center">
      
      {/* Standardized Title Section */}
      <div className="pt-16 mb-8 flex items-center justify-center">
        <Image
          src="/images/art/rang.svg"
          alt="Rang Mahal"
          width={800}
          height={200}
          className="object-contain w-full h-[50px] sm:h-[60px] md:h-[80px] lg:h-[90px] xl:h-[100px]"
        />
      </div>
       
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center pt-2 md:pt-0">
        <a href="/collectors">
          <div className="rounded-xl overflow-hidden aspect-[3/4] bg-[#2B3730]">
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
          <div className="rounded-xl overflow-hidden aspect-[3/4] bg-[#6B2134]">
            <Image
              src="/images/landing/ERBE.svg"
              alt="ERBE"
              width={100}
              height={100}
              className="object-contain w-full h-full scale-90"
            />
          </div>
        </a>
                 
        <a href='/vitrine'>
          <div className="rounded-xl overflow-hidden aspect-[3/4] bg-[#0E2B4C]">
            <Image
              src="/images/landing/VITRINE.svg"
              alt="Vitrine"
              width={100}
              height={100}
              className="object-contain w-full h-full scale-90"
            />
          </div>
        </a>
                 
        <a href='/now'>
          <div className="rounded-xl overflow-hidden aspect-[3/4] bg-[#FFFFFF]">
            <Image
              src="/images/landing/NOW.svg"
              alt="NOW"
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

export default Programme;