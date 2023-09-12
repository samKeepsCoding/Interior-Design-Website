import React from 'react'

const BookingHeader = () => {
  return (
    <>
        <div className='relative w-full h-[30vh] md:h-[40vh] bg-black flex justify-start bg-cover bg-center tracking-[.1em] cursor-pointer transition-all ease-in duration-300 ' 
            style={{backgroundImage: 'url("https://images.unsplash.com/photo-1577017040065-650ee4d43339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")'}}>
            <div className='absolute top-0 left-0 w-full bg-black h-full opacity-50'>

            </div>
            <div className='relative w-full flex flex-co justify-end  items-center ml-8 mt-5'>
                <h1 className=" text-gray-200 text-4xl md:text-8xl font-bold mr-10 ">Let&apos;s Get Started.</h1>
                
            </div>
        </div>
    </>
  )
}

export default BookingHeader