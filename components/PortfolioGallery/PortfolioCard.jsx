import React,{useState} from 'react'
import {AiOutlineZoomIn} from 'react-icons/ai';
import { urlFor } from '../../lib/client';

const PortfolioCard = ({image, handleModal, showModal, handleImage }) => {

    const [cardHover, setCardHover] = useState(false)


  return (
    <>
        <div  className='relative h-full m-3 cursor-pointer hover:scale-105 ease-in-out duration-300'
        onMouseOver={() => setCardHover(true)} onMouseOut={() => setCardHover(false)}
        >
        {cardHover &&

        <div className='absolute flex justify-center items-center h-full w-full top-0 bg-black z-20 opacity-30 rounded-lg'
        onClick={() =>
             {
                handleModal(!showModal)
                handleImage(image)
            
            }}
        
        >
            <AiOutlineZoomIn size={30}/>
        </div>
        }
            <img
                src={urlFor(image.image.asset._ref)}
                width={450}
                height={450}
                className='rounded-lg min-h-max'
                alt='history'
            />
        </div>
    </>
  )
}

export default PortfolioCard