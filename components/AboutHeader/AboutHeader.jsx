import React from 'react'

const AboutHeader = () => {
  return (
    <>
         <div className='relative w-full h-[50vh] md:h-[70vh] bg-black flex justify-center bg-cover bg-center tracking-[.1em] hover:tracking-[1.45em] cursor-pointer transition-all ease-in duration-300 ' 
            style={{backgroundImage: 'url("https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_960_720.jpg")'}}>
            <div className='absolute top-0 left-0 w-full bg-black h-full opacity-50'>

            </div>
            <div className='relative flex flex-col justify-center items-center'>
                <h1 className=' text-gray-200 text-4xl md:text-8xl font-bold  '>About Us</h1>
                <h4 className=' text-white '>Know Us Better</h4>
            </div>
        </div>
    </>
  )
}

export default AboutHeader