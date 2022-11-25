import React,{useState} from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import GalleryCard from './GalleryCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import livingRoom from '../../assets/livingRoom2.jpg'
import staircase0 from '../../assets/staircase0.jpg'


const data = {
    pic1 : {
        image: livingRoom,
        id: '1'
    },
    pic2 : {
        image: staircase0,
        id: '2'
    }

}

const AboutGallery = () => {

    const [zoomImage, setZoomImage]= useState(false)
    const [modalImage, setModalImage] = useState(null)

    const handleZoomImage = () => {
        setZoomImage(!zoomImage)
    }

    const handleImage = () => {
        setModalImage(id)
    }

    const slideLeft = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };

  return (
    <>
        <div className='relative w-full'>
            <div className='flex items-center px-4 '>
                    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 hidden md:block' onClick={slideLeft} size={40} color={'black'}/>
                        <div
                            id='slider' 
                            className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide ' 
                        >
                            <GalleryCard zoom={zoomImage} handleZoom={handleZoomImage} pic={data.pic1.image} id={data.pic1.id} handleImage={setModalImage}/>
                            <GalleryCard zoom={zoomImage} handleZoom={handleZoomImage} pic={data.pic1.image} id={data.pic1.id} handleImage={setModalImage}/>
                            <GalleryCard zoom={zoomImage} handleZoom={handleZoomImage} pic={data.pic1.image} id={data.pic1.id} handleImage={setModalImage}/>
                            <GalleryCard zoom={zoomImage} handleZoom={handleZoomImage} pic={data.pic1.image} id={data.pic1.id} handleImage={setModalImage}/>
                            <GalleryCard zoom={zoomImage} handleZoom={handleZoomImage} pic={data.pic1.image} id={data.pic1.id} handleImage={setModalImage}/>
                            <GalleryCard zoom={zoomImage} handleZoom={handleZoomImage} pic={data.pic2.image} id={data.pic2.id} handleImage={setModalImage}/>
                            <GalleryCard zoom={zoomImage} handleZoom={handleZoomImage} pic={data.pic2.image} id={data.pic2.id} handleImage={setModalImage}/>
                            <GalleryCard zoom={zoomImage} handleZoom={handleZoomImage} pic={data.pic2.image} id={data.pic2.id} handleImage={setModalImage}/>
                            <GalleryCard zoom={zoomImage} handleZoom={handleZoomImage} pic={data.pic2.image} id={data.pic2.id} handleImage={setModalImage}/>
                            <GalleryCard zoom={zoomImage} handleZoom={handleZoomImage} pic={data.pic2.image} id={data.pic2.id} handleImage={setModalImage}/>
                            
                        </div>
                    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 hidden md:block' onClick={slideRight} size={40} color={'black'} />
                    {zoomImage ? (

                        <div className='absolute left-0 h-screen w-screen flex justify-center items-center ' onClick={()=> handleZoomImage()}>

                            <div className='absolute left-0 h-screen w-full flex justify-center items-center bg-black  opacity-70'></div>

                            <motion.div className='relative h-screen w-screen flex flex-col justify-center items-center max-w-3xl z-40 '
                                initial={{
                                    y: -50,
                                    opacity: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 0.5
                                }}
                                onClick={() => handleZoomImage()}
                            >
                                <Image
                                    src={modalImage}
                                    width={550}
                                    height={550}
                                    className='rounded-lg'
                                    loading='lazy'
                                    onClick={()=> handleZoomImage()}
                                />
                            </motion.div>
                        </div>

                    ) : null}
            </div>
        </div>
    </>

  )
}

export default AboutGallery