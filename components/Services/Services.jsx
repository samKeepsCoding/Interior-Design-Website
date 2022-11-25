import React,{useState} from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import ScrollTrigger from 'react-scroll-trigger';
import ServiceCard from './ServiceCard'
import Bedroom from '../../assets/Bedroom.webp'
import Furniture from '../../assets/Furniture.jpg'
import LivingRoom from '../../assets/living-room.jpg'


const Services = () => {

    const [showCards, setShowCards] = useState(false)

  return (
    <>
        <div className='lg:mb-8 w-full flex-col'>
            <div className='w-full pt-[100px] pb-3 flex flex-col text-center '>
                <h6 className='text-black text-lg mb-3 font-extralight italic'>Special Packages Available!</h6>
                <h1 className='text-black text-5xl font-bold mt-4'>Services</h1>
            </div>
            
            <div className='pt-8 md:h-3/5 bg-gradient-to-r from-gray-50 to-white flex justify-center text-black'>
                <ScrollTrigger onEnter={() => setShowCards(true)}>
                    {showCards && 
                    <motion.div className='flex-col md:flex-row md:items-center lg:max-w-8xl flex justify-between'
                    initial={{
                        y:300,
                        opacity:0
                    }}
                    animate={{
                        y:0,
                        opacity:1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    >
                        <ServiceCard image={Bedroom} title={'Book Consultation'} body={'Designer For A Day Package'}/>
                        <ServiceCard image={Furniture} title ={'Discovery Call Free 15 Min'} body={'Designer On-Call Package'}/>
                        <ServiceCard image={LivingRoom} title={'Book Consultation'} body={'Designer Full-Service Package'}/>
                    </motion.div>
                    }
                </ScrollTrigger>
            </div>
        </div>
    </>
  )
}

export default Services