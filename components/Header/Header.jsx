import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"


const Header = () => {
  return (
    <>
        <Navbar/>
        <div className='relative flex justify-center items-center bg-center h-screen w-full bg-cover' style={{backgroundImage:`url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80')`}}>
          <div className='absolute h-full w-full bg-black opacity-20'>

          </div>
          <motion.div
          initial={{
            x: -50,
            opacity: 0,
            
          }}
          animate={{
            x: 0,
            opacity: .7,
            
          }}
          transition={{
            duration: .5
          }}
          className='flex flex-col text-center opacity-40 tracking-[.45em] hover:tracking-[1.45em] cursor-pointer transition-all ease-in duration-300'>
             <h1 className='text-white text-center text-md md:text-6xl uppercase tracking-[.25em]'>Unlimited Touch</h1>
             <h4 className=''>by Design</h4>
          </motion.div>
        </div>

        

        
    </>
  )
}

export default Header