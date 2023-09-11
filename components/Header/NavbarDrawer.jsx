import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';




const NavbarDrawer = () => {

  return (
    <>
        
        <motion.div 
            initial= {{
                y: -500,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            className='top-0 left-0 bg-black h-screen w-full flex items-center justify-center flex-col md:hidden'>
                <ul className="text-center relative top-50 ">
                    <li className="mx-4 my-10 md:my-0">
                        <Link legacyBehavior href='/'>
                            <a href="#" className=" text-4xl  md:text-lg text-font-bold ">HOME</a>
                        </Link>
                    </li>
                    <li className="mx-4 my-10 md:my-0">
                        <Link legacyBehavior href='/about'>
                            <a  className=" text-4xl md:text-lg text-font-bold ">ABOUT</a>
                        </Link>
                    </li>
                    <li className="mx-4 my-10 md:my-0">
                        <Link legacyBehavior href='/services'>
                            <a className=" text-4xl md:text-lg text-font-bold ">SERVICES</a>
                        </Link>
                    </li>
                    <li className="mx-4 my-10 md:my-0">
                        <Link legacyBehavior href='/portfolio'>
                            <a href="#" className=" text-4xl md:text-lg text-font-bold ">PORTFOLIO</a>
                        </Link>
                    </li>
                    <li className="mx-4 my-10 md:my-0">
                        <Link legacyBehavior href='/bookConsultation'>
                             <a href="#" className=" text-4xl md:text-lg text-font-bold ">CONTACT</a>
                        </Link>
                    </li>
                </ul>

            
        </motion.div>
    </>
  )
}

export default NavbarDrawer