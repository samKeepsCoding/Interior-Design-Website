import React,{useState} from 'react'
import  livingRoom2 from '../../assets/livingRoom2.jpg'
import Image from 'next/image'
import {AiOutlineZoomIn} from 'react-icons/ai'

const GalleryCard = ({zoom, handleZoom, pic, id, handleImage}) => {

    const [cardEffect, setCardEffect] = useState(false)
    

  return (
    <>
        <div  className='relative h-full ml-2 inline-block cursor-pointer  hover:scale-105 ease-in-out duration-300'
         onMouseOver={() => setCardEffect(true)} onMouseLeave={() => setCardEffect(false)}
         >
            {cardEffect && 
                <div className='absolute flex justify-center items-center h-full w-full top-0 bg-black z-20 opacity-30 rounded-lg'
                onClick={() =>
                    { 
                        handleZoom(true)
                        handleImage(pic)
                     }} 
                >
                    <AiOutlineZoomIn size={30} />
                </div>
            }
            <Image
                src={pic}
                width={350}
                height={300}
               className='rounded-lg'
               id={id}
               
            />
            
        </div>
    </>
  )
}

export default GalleryCard