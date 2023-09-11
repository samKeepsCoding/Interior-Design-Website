import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import apartment from '../../assets/apartment.jpg'
import staircase from '../../assets/staircase0.jpg'

const DiscoveryCall = () => {
    
  return (
    <>
        <div className='flex flex-col md:flex-row justify-center items-center min-h-[500px] px-8 bg-gradient-to-b from-gray-200'>
            
            <div className='w-[70%] flex justify-center items-center z-10 md:px-7'>

                <div className=' md:h-[500px] md:w-[400px] bg-cover mt-8 z-10 drop-shadow-lg  ' 
                    >
                        <Image
                            src={apartment}
                            width={800}
                            height={1000}
                            className='rounded-lg'
                            alt='Decorated apartment'
                        />
                </div>
                <div className='md:ml-[-250px] md:mt-[130px] '>
                    <Image
                        src={staircase}
                        width={450}
                        height={500}
                        className='opacity-10 sm:max-w-[200px] rounded-lg'
                        alt='Spiral Staircase'
                    />
                </div>
            </div>
                <div className='md:w-1/2 flex justify-start items-center h-full mt-3 md:mt-0'>
                    <div className='flex flex-col justify-center items-center text-start bg-black p-8 pt-[3rem] rounded-lg max-w-lg space-y-4'>
                        <h1 className='text-4xl font-semibold '>Discovery Calls</h1>
                        <p className='text-xl text-gray-300 leading-8 am:leading-loose'>
                            <span className='text-gray-3=400 text-2xl font-medium'>Discovery Call – 15 min FREE:</span>  The initial phone call is where we discover your needs. 
                            Together we will decide if we are a great fit for each other.  If so, book the on-site consultation.
                        </p>
                        <Link href='/bookConsultation'>
                            <button className='w-full bg-[#af938f] py-3 rounded-md text-white font-semibold '>Book Consultation</button>
                        </Link>
                    </div>

                </div>
        
        </div>
        
    </>
  )
}

export default DiscoveryCall