'use client'

import Image from 'next/image';

export default function Introduction() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/intro.jpg"
        alt="Our wedding day"
        layout="fill"
        objectFit="cover"
        priority
        className='object-cover object-center'
      />
      <div className="absolute inset-0 flex flex-col items-center pt-10">
        <h1 className="text-5xl font-serif drop-shadow-lg text-[#1A5319]">
          Our
        </h1>
        <h1 className="text-5xl font-serif drop-shadow-lg text-[#1A5319]">
          Wedding
        </h1>
        <h1 className="text-5xl font-serif drop-shadow-lg text-[#1A5319]">
          Day
        </h1>
      </div>
    </div>
  );
}