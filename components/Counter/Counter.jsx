import React,{useState} from 'react'
import CountUp from 'react-countup';
import CounterCard from './CounterCard';
import {motion} from 'framer-motion';
import ScrollTrigger from 'react-scroll-trigger';



const Counter = () => {

    const [showCards, setShowCards] = useState(false)

  return (
    <>
        <div className='w-full p-10 flex items-center justify-center text-black'>
            <ScrollTrigger onEnter={() => setShowCards(true)}>
            {showCards && 
                <motion.div 
                initial={{
                    y: 50,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1
                }}
                className='flex justify-between flex-col   md:flex-row md:space-x-[8rem]'>
                    <CounterCard countTo={100} caption={'HAPPY CLIENTS'}/>
                    <CounterCard countTo={145} caption={'AMAZING WORKS'}/>
                    <CounterCard countTo={16} caption={'OPERATED YEARS'}/>
                </motion.div> 
            }
            </ScrollTrigger>
        </div>
    </>
  )
}

export default Counter