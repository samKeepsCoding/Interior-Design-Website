import React from 'react';

const ServicesHeader = () => {
  return (
    <>
        <div className='relative w-full h-[50vh] md:h-[70vh] bg-black flex justify-center bg-cover bg-center tracking-[.1em] hover:tracking-[1.45em] cursor-pointer transition-all ease-in duration-300 ' 
            style={{backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_960_720.jpg")'}}>
            <div className='absolute top-0 left-0 w-full bg-black h-full opacity-50'>

            </div>
            <div className='relative flex flex-col justify-center items-center'>
                <h1 className=' text-gray-200 text-4xl md:text-8xl font-bold  '>Our Services</h1>
                
            </div>
        </div>
    </>
  )
}

export default ServicesHeader