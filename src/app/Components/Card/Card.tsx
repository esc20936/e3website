import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface CardProps {
    title: string;
    description: string;
    image: StaticImageData;
}


export default function Card(
    { title, description, image }: CardProps
) {


  description = description.substring(0, 150) + '...';

  return (
    <div
        className='group rounded-lg shadow-lg bg-white w-64 m-4 flex flex-col md:flex-row md:w-2/6 overflow-hidden hover:bg-blue-950  transform hover:scale-105 transition ease-linear'>
        <Image
            className='rounded-t-lg md:rounded-tr-none  md:rounded-l-lg group-hover:brightness-50 md:w-1/2'
            src={image}
            alt='card'
        />
        <div className='flex flex-col justify-center items-start p-4 group-hover:bg-blue-950 transition ease-linear'>
            <h2 className='text-xl font-bold mb-2 text-black text-left group-hover:text-white transition ease-linear'>
                {title}
            </h2>
            <p className='text-base leading-relaxed text-black group-hover:text-white transition ease-linear'>
                {description}
            </p>

            <button className=' flex items-center mt-4 rounded-lg py-2 px-4 text-gray-500 transition ease-linear group-hover:text-white group-hover:bg-pink-500'>
                <span>Leer más</span>
                <svg

                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path d='M5 12h14'></path>
                    <path d='M12 5l7 7-7 7'></path>
                </svg>
            </button>
    </div>

        
    </div>
  )
}
