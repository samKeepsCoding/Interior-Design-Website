import React from 'react'
import Image from 'next/image'
import Bedroom from '../../assets/Bedroom.webp'

const ServiceCard = ({image, body, title}) => {
  return (
    <>
        <div className='flex-col justify-center items-center text-center px-10 mb-4 drop-shadow-xl'>
            <Image
                height={360}
                width={480}
                src={image}
                className='rounded-md'
            />
            <h6 className='text-2xl font-semibold mt-3'>{title}</h6>
            <h6 className='text-md font-light italic mt-3'>{body}</h6>
        </div>
    </>
  )
}

export default ServiceCard