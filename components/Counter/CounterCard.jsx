import React,{useState} from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';



const CounterCard = ({countTo, caption}) => {
    const [counterOn, setCounterOn] = useState(false)
    
  return (
    <>
        <div 
        className='flex flex-col justify-between text-center space-y-2 mt-4 text-black'>
            <ScrollTrigger onEnter={() => setCounterOn(true)} >
                {counterOn && 
                <div className='flex flex-row justify-center items-center'>

                    <CountUp 
                        end={countTo}
                        start={0}
                        duration={2.75}
                        className='text-6xl font-thin' 
                    ></CountUp> 
                    <h1 className='text-lg ml-2'>+</h1>
                </div>
                }
            </ScrollTrigger>
            <p className='text-xl text-gray-500'>{caption}</p>
        </div>
    </>
  )
}

export default CounterCard