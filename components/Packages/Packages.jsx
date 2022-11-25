import React from 'react'
import Image from 'next/image'
import View from '../../assets/view.jpg'

const Packages = () => {
  return (
    <>
        <div className='relative h-full pb-[160px pt-4] bg-gradient-to-b from-gray-500 to-white text-white '>
            <div className='min-h-[300px] md:min-h-[600px] lg:max-h-[800px] bg-fixed bg-no-repeat bg-cover bg-center'
            style={{backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/11/29/05/01/lights-1867437_960_720.jpg")'}}></div>

            <div className='absolute top-0 left-0 bottom-0 flex justify-center items-center p-8 md:w-1/2 bg-white bg-gradient-to-t from-gray-100 to bg-gray-white'>
                
                <div className='flex flex-col justify-center items-center bg-black rounded-lg p-4 md:p-10 text-center z-10' >
                    <h1 className='text-4xl font-semibold '>Packages</h1>
                    <ul className='text-sm md:text-2xl font-medium text-gray-300 mt-4 space-y-3'>
                        <li >Disigner For a Day Package</li>
                        <li>Designer On-Call Package</li>
                        <li>Designer Full-Service Package</li>
                    </ul>
                    
                </div>
                <div className='md:ml-[-250px] md:mt-[130px] '>
                    <Image
                        src={View}
                        width={450}
                        height={500}
                        className='opacity-20 md:opacity-10 sm:max-w-[200px] rounded-lg'
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Packages