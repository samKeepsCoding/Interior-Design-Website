import React,{useState} from 'react'
import PortfolioCard from './PortfolioCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { urlFor} from '../..//lib/client';








const PortfolioGallery = ({ profileImages }) => {

    const [handleModal, setHandleModal] = useState(false)

    const [modalImage, setModalImage] = useState(null)

    const slideLeft = () => {
      const slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft - 3000;
    };
  
    const slideRight = () => {
      const slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft + 1000;
    };


    
  return (
    <>
        <div className='w-full lg:px-[8rem] flex justify-center items-center bg-gray-100'>
            <div className='max-w-8xl flex flex-wrap justify-center items-center p-2 border-t-2'>
            {profileImages && profileImages.length > 0 ? (
              profileImages.map((image) => (
                <PortfolioCard image={image} handleModal={setHandleModal} showModal={handleModal} handleImage={setModalImage} />
              ))
            ) : (
              <p>No profile images available</p>
            )}
           </div>
        </div>

                {handleModal &&
                  <div className='fixed top-0 bottom-0 h-screen flex justify-center items-center w-full bg-black overflow-hidden'
                   
                  >

                    <MdChevronLeft color='white' size={50} className='absolute bottom-10 left-20 md:top-1/2 xl:left-1/4 cursor-pointer' onClick={() => slideLeft()}/>
                    <MdChevronRight color='white' size={50} className='absolute bottom-10 right-20 md:top-1/2 xl:right-1/4 cursor-pointer' onClick={() => slideRight()}/>
                    <AiOutlineCloseCircle color='gray' size={30} className='absolute top-1/4 right-[1rem] md:right-1/4 hover:fill-white cursor-pointer duration-500 z-10' onClick={() => setHandleModal()}/>


                    {/* Container */}
                    <div className='inline-flex max-w-xl overflow-x-scroll scroll-smooth xl:scrollbar-hide ' id='slider'>
                      {/* Cards */}
                      <div className='relative flex flex-col justify-center items-center min-w-full text-center space-y-6 px-4 py-6'>
                        <img
                          src={urlFor(modalImage.image.asset._ref)}
                          width={550}
                          height={500}
                          className='rounded-lg'
                          onClick={() => 
                            {
                              setHandleModal(false)
                              setModalImage(urlFor(modalImage.image.asset._ref))
                            }}
                        />
                      </div> 
                      <div className='relative flex flex-col justify-center items-center min-w-full text-center space-y-6 px-4 py-6'>
                        <img
                          src={urlFor(modalImage.image.asset._ref)}
                          width={550}
                          height={500}
                          className='rounded-lg'
                          onClick={() => 
                            {
                              setHandleModal(false)
                              setModalImage(modalImage)
                            }}
                        />
                      </div> 
                    </div>

                  
                      
                  </div>
                }
    </>
  )
}

export default PortfolioGallery