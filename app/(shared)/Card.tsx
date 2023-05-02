import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Ai from '/public/assets/ai-2.jpg';

type Props = {
  className?: string;
  imageHeight?: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
}

const Card = ({ className, imageHeight, isSmallCard = false, isLongForm = false }: Props) => {
  return (
    <div className={className}>
      <Link
        className='basis-full hover:opacity-70'
        href='/'
      >
        <div className={`relative w-auto mb-3 ${imageHeight}`}>
          <Image
            fill
            alt='Tech'
            placeholder='blur'
            sizes="(max-width: 480px) 100vw,
            (max-width: 768px) 75vw,
            (max-width: 1060px) 50vw,
            33vw
            "
            style={{ objectFit: "fill" }}
            src={Ai}
          />
        </div>
      </Link>

      <div className='basis-full'>
        <Link href='/'>
          <h4
            className={`font-bold hover:text-accent-green
            ${isSmallCard ? "text-base" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : ""}
          `}
          >
            Title Card
          </h4>
        </Link>

        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">John Doe</h5>
          <h6 className="text-wh-300 text-xs">21 March 2023</h6>
        </div>
        <p
          className={`text-wh-500 ${isLongForm ? "line-clamp-5" : "line-clamp-3"
            }`}
        >
          Blablablabalbalbalbalbalbalblabla
        </p>

      </div>
    </div>
  )
}

export default Card