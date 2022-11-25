import React from 'react'
import Image from 'next/image'
import staircase from '../../assets/staircase0.jpg'
import view from '../../assets/view.jpg'


const CriticalThinking = () => {
  return (
    <>
        <div className=' flex flex-col justify-center items-center lg:flex-row  bg-gradient-to-b from-white to-gray-200 text-black pt-8 space-x-8 mt-[60px]'>
            <div className=' p-8 max-w-lg'>
                <div className='flex flex-col mt-10 space-y-2'>
                    <h6 className=' text-xl font-semibold text-gray-400'>Critical Thinking</h6>
                    <h1 className='text-5xl font-bold'>Concept & Details</h1>
                </div>
                <div className='mt-[60px] leading-9 text-lg font-semibold text-gray-500 space-y-8'>
                    <p>
                       <span className='font-bold text-xl'>Unlimited Touch By Design </span> 
                       is expert in interior decoration. We set out to decorate homes that are elegant and improve functionality through exceptional workmanship and meticulous attention to detail.
                        We want you to come home to an inspiring and joyful home.
                    </p>
                    <p>
                    Our interior decoration projects include the highest standard. Before we begin the process, we spend time with you and your family to find out what your preference is and how your family operates.
                     We aim to create designs that are tailored to each family’s unique style.
                    </p>
                </div>
            </div>
            <div>
                <div className='flex md:w-full mb-3'>
                    <Image
                        src={view}
                        width={600}
                        height={500}
                        className='rounded-md shadow-xl'
                    />
                </div>
            </div>
        </div>
    
    </>
  )
}

export default CriticalThinking