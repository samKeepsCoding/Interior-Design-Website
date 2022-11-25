import React from 'react'

const MethodCard = ({title, body}) => {
  return (
    <>
        <div className='bg-white flex flex-col p-8 :py-8 px-[3rem] lg:w-2/6 lg:rounded-lg'>
            <div className='border-b-2 py-5'>
                <h1 className='text-3xl font-semibold'>{title}</h1>
            </div> 
            <p className='text-base md:text-lg xl:text-2xl text-gray-400 mt-4 lg:leading-loose md:leading-loose '>
                {body}
            </p>
            
        </div>
    </>
  )
}

export default MethodCard