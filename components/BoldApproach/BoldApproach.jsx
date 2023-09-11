import React from 'react'
import Image from 'next/image'
import homeIcon from '../../assets/homeIcon.png'

const BoldApproach = () => {
  return (
    <>
    <div className='text-black flex justify-center items-center bg-cover bg-center py-11 lg:mx-20' style={{backgroundImage:'url(https://cdn.pixabay.com/photo/2022/05/27/12/03/living-room-7225003_960_720.jpg)'}}>
        <div className=' bg-white opacity-75 md:p-8 pb-8 md:max-w-3xl rounded-md'>
            <div className='flex flex-row items-center max-w-sm md:max-w-xl ml-4'>
                <Image
                    src={homeIcon}
                    className='rounded-md'
                    alt='Home'
                />
                <h1 className='text-4xl font-bold my-8 ml-4'>The Bold Approach</h1>
            </div>
            
            <ul className='list-disc text-base p-4 m-2 md:px-16 space-y-6 md:text-xl mb-7'>
                <li> We work with you on your initial ideas to create a concept that can be translated into decorating plans</li>
                <li> We draw on our extensive industy experience to probide solutions that are both</li>
                <li>We walk you through every step of the process and maintain clear lines of communication at all times, ensuring you always feel informed and in control.</li>
                <li>We create designs that reflect your personality and character – not ours.</li>
                <li>We ensure exceptional workmanship and meticulous attention to detail, strictly adhering to the highest design and build quality standards.</li>
            </ul>
        </div>
    </div>
    
    </>
  )
}

export default BoldApproach