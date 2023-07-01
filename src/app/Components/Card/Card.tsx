import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface CardProps {
    serviceMainTitle: string;
    serviceDescription: string;
    serviceImage: StaticImageData;
    onClick?: () => void;
}


export default function Card(
    { serviceMainTitle, serviceDescription, serviceImage,onClick }: CardProps
) {



  serviceDescription = serviceDescription.substring(0, 150) + '...';

  return (
    <div
        onClick={onClick}
        className='group rounded-lg shadow-lg bg-white w-64 sm:w-3/4 m-4 flex flex-col md:flex-row md:w-2/3 lg:w-1/3 md:min-w-80 overflow-hidden   transform hover:scale-105 transition ease-linear'>
        <Image
            className='rounded-t-lg md:rounded-tr-none  md:rounded-l-lg group-hover:brightness-50 md:w-1/2'
            src={serviceImage}
            alt='card'
        />
        <div className='flex flex-col justify-center items-start p-4 transition ease-linear'>
            <h2 className='text-xl font-bold mb-2 text-black text-left  transition ease-linear'>
                {serviceMainTitle}
            </h2>
            <p className='text-base leading-relaxed text-black  transition ease-linear'>
                {serviceDescription}
            </p>

            <button className=' flex items-center mt-4 rounded-lg py-2 px-4 text-gray-500 transition ease-linear group-hover:text-white group-hover:bg-blue-600'>
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
