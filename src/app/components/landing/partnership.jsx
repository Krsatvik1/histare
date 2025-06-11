import React from 'react';
import Image from 'next/image';

function Partnership() {
  return (
    <div className="py-16 px-4 md:px-20 text-center">
      <h2
        className="text-4xl md:text-5xl mb-12 text-[#3c597B]"
        style={{ fontFamily: 'Rofane' }}
      >
        <span className="italic font-normal">Our</span>{' '}
        <span className=" font-normal">Partners</span>{' '}
        <span className="italic font-normal">and</span>{' '}
        <span className=" font-normal">Associates</span>
      </h2>

      <div className="flex justify-center flex-wrap gap-8 items-center">
        <Image src="/images/landing/google.png" alt="Google" width={200} height={80} />
        <Image src="/images/landing/pinterest.png" alt="Pinterest" width={200} height={80} />
        <Image src="/images/landing/stripe.png" alt="Stripe" width={200} height={80} />
        <Image src="/images/landing/reddit.png" alt="Reddit" width={200} height={80} />
        <Image src="/images/landing/spotify.png" alt="Spotify" width={200} height={80} />
      </div>
    </div>
  );
}

export default Partnership;
