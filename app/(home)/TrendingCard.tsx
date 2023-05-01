import Link from 'next/link';
import React from 'react';

import Ai from '/public/assets/ai-1.jpg';
import Image from 'next/image';

type Props = {
  className?: string;
}

const TrendingCard = ({ className }: Props) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      href="/"
    >
      <div className="z-0 relative w-full h-full">
        <Image
          fill
          alt="tech"
          placeholder="blur"
          src={Ai}
          sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />

      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          Technology
        </h4>
        <div className="text-wh-100 mt-2">Ai Take Over The Industry</div>
      </div>
    </Link>
  )
}

export default TrendingCard