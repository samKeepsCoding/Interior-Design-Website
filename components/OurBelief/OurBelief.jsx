import React from 'react'
import Image from 'next/image'
import apartment from '../../assets/apartment.jpg'


const OurBelief = () => {
  return (
    <>
        <div className='relative h-full pb-[160px pt-4] bg-gradient-to-b from-gray-500 to-white text-white '>
            <div className='min-h-[500px] md:min-h-[500px] lg:max-h-[800px] bg-fixed bg-no-repeat bg-cover bg-center'
            style={{backgroundImage: 'url("https://cdn.pixabay.com/photo/2020/12/16/00/10/home-5835289__340.jpg")'}}></div>

           <div className='absolute top-0 right-0 bottom-0 w-3/5 md:w-1/2 flex justify-center items-center  bg-black'>
                <div className='text-start text-white max-w-md px-3'>
                    <h1 className='text-lg md:text-2xl lg:text-4xl font-bold '>Our Belief</h1>
                    <p className='mt-4 text-sm md:text-lg lg:text-xl font-medium text-gray-300 '>
                        At Unlimited Touch By design, we believe in taking the stress off of you by providing end-to-end decoration solutions. Our ethos aligns with doing the right thing by our clients every time! Whether it is just space planning, sourcing, are looking for a one-stop shop for an entire home or individual items to maximize the potential in 
                        your home space, we are here to make the process simple.
                    </p>
                </div>
           </div>
            
        </div>
    </>
  )
}

export default OurBelief