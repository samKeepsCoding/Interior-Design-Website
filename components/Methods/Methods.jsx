import React,{useState} from 'react';
import MethodCard from './MethodCard';
import {motion} from 'framer-motion';
import ScrollTrigger from 'react-scroll-trigger';




const Methods = () => {

    const [showMethods, setShowMethods] = useState(false)

  return (
    <>
        <div className='relative h-full pb-[160px pt-4] text-black bg-gradient-to-b from-gray-500 to-white '>

            <div className='min-h-[300px] md:min-h-[600px] lg:min-h-[800px] bg-fixed bg-no-repeat bg-cover bg-center' 
            style={{backgroundImage:"url('https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_960_720.jpg')" } }>
            </div>
            <ScrollTrigger onEnter={() => setShowMethods(true)} >
                {showMethods && 
                <motion.div 
                initial={{
                    y: 50,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: .7
                }}
                className=' lg:absolute lg:top-[40%] lg:bottom-0 w-full flex flex-col lg:flex-row justify-center lg:px-20 lg:space-x-5 max-w-8xl'>
                    <MethodCard title={'Perfect Design'} body={`All the elements that make up your home are included in our color schemes. ” You only get one chance to make a first impression “
        Whether your home is modern or traditional the exterior color scheme is so important.`}/>
                    <MethodCard title={'Carefully Planned'} body={'We plan everything according to what you wish. We keep everything in mind and create a tailor-made design.'}/>
                    <MethodCard title={'Smartly Execute'} body={'Finish touches: Making your rooms come feel harmonious and cohesive is vital, this is achieved with window dressings, blinds, rugs, cushions, accessories and bedding.'}/>
                </motion.div>
                }
            </ScrollTrigger>
        </div>
    </>
  )
}

export default Methods