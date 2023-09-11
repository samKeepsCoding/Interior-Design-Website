import React from 'react'
import Link from 'next/link'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Quote = () => {
  return (
    <>
        <div className='min-h-[230px] w-full flex flex-col justify-center items-center text-center text-black space-y-2'>
            <h1 className='text-4xl font-bold'>Interested In Our Services??</h1>
            <Link href='/bookConsultation' >
                <div className='flex justify-center items-center cursor-pointer border-b-2'>
                    <a href="" className='text-lg font-bold text-[#9a827d]'>Get A Quote </a>
                    <BsFillArrowRightCircleFill size={15} color={'#9a827d'} className='ml-2 mt-1'/>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Quote