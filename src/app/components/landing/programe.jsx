import React from 'react';
import Image from 'next/image';

function Programe() {
  return (
    <div className=" py-16 px-4 md:px-20 text-center">
      <h2
        className="text-4xl md:text-5xl mb-12 text-[#3c597B]"
        style={{ fontFamily: 'Rofane' }}
      >
        <span className="italic font-normal">Our</span>{' '}
        <span className="non-italic font-normal">Smart Programs</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
<a href='/collectors'>
        <div className="rounded-xl overflow-hidden shadow-md cursor-pointer">
          <Image
            src="/images/landing/collectors.png"
            alt="Collectors’ Affair"
            width={300}
            height={300}
            className="object-cover w-full h-auto"
          />
        </div>
</a>
<a href='/erbe'>
        <div className="rounded-xl overflow-hidden shadow-md cursor-pointer">
          <Image
            src="/images/landing/erbe.png"
            alt="The ERBE Project"
            width={300}
            height={300}
            className="object-cover w-full h-auto"
          />
        </div>
</a><a href='/vitrine'>
        <div className="rounded-xl overflow-hidden shadow-md cursor-pointer">
          <Image
            src="/images/landing/vitrine.png"
            alt="The Vitrine"
            width={300}
            height={300}
            className="object-cover w-full h-auto"
          />
        </div>
</a><a href='/now'>
        <div className="rounded-xl overflow-hidden shadow-md cursor-pointer">
          <Image
            src="/images/landing/now.png"
            alt="New and Beyond"
            width={300}
            height={300}
            className="object-cover w-full h-auto"
          />
        </div>
        </a>
      </div>
    </div>
  );
}

export default Programe;
