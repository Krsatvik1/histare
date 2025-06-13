import React from 'react';
import Image from 'next/image';

function Partnership() {
  return (
    <div className="py-16 px-4 md:px-20 text-center">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl mb-12 text-[#3c597B]"
        style={{ fontFamily: 'Rofane' }}
      >
        <span className="italic font-normal">Our</span>{' '}
        <span className=" font-normal">Partners</span>{' '}
        <span className="italic font-normal">and</span>{' '}
        <span className=" font-normal">Associates</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center items-center">
        <div className="w-32 sm:w-40 md:w-48">
          <Image
            src="/images/landing/google.png"
            alt="Google"
            width={200}
            height={80}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-32 sm:w-40 md:w-48">
          <Image
            src="/images/landing/pinterest.png"
            alt="Pinterest"
            width={200}
            height={80}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-32 sm:w-40 md:w-48">
          <Image
            src="/images/landing/stripe.png"
            alt="Stripe"
            width={200}
            height={80}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-32 sm:w-40 md:w-48">
          <Image
            src="/images/landing/reddit.png"
            alt="Reddit"
            width={200}
            height={80}
            className="w-full h-auto object-contain"
          />
        </div>
        
        {/* Spotify: Center it only on small screens */}
        <div className="w-32 sm:w-40 md:w-48 col-span-2 sm:col-span-1 justify-self-center">
          <Image
            src="/images/landing/spotify.png"
            alt="Spotify"
            width={200}
            height={80}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Partnership;
