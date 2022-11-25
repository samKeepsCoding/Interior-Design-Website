import React from 'react'
import { useState } from 'react'
import {motion} from 'framer-motion'
import NavbarDrawer from './NavbarDrawer'
import Image from 'next/image'
import Link from 'next/link';
import Logo from '../../assets/Logo.png'
import {BsFacebook} from 'react-icons/bs'
import {SiInstagram} from 'react-icons/si'
import {IoLogoSnapchat} from 'react-icons/io'
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import {AiOutlineClose} from 'react-icons/ai'




const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen)
    console.log(drawerOpen)
  }

  return (
    <>
    <div className='fixed w-full bg-black z-20 drop-shadow-xl'>

      <nav className='px-10 py-1 shadow md:flex md:items-center md:justify-between'>

        <div className='flex justify-between items-center'>
          <span className='text-2xl cursor-pointer w-20 '>
            <Image
            alt='Logo'
            src={Logo}
            // height={130}
            // width={130}
            />
          </span>
          <motion.div className='transition-opacity ease-out'>
            {drawerOpen === false ? (
               <AiOutlineMenu className='md:hidden cursor-pointer 	' size={40} onClick={() => handleDrawer()} />
            ) : (<AiOutlineClose className='md:hidden cursor-pointer' color='white' size={40} onClick={() => handleDrawer()} />  )}
           

          </motion.div>

         
        </div>

        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-transparent w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li className="mx-3 my-6 md:my-0">
            <Link href='/'>
              <a className="text-sm lg:text-lg text-font-bold hover:text-orange-200 duration-500">HOME</a>
            </Link>
          </li>
          <li className="mx-3 my-6 md:my-0">
            <Link href='/about'>
              <a  className="text-sm lg:text-lg text-font-bold hover:text-orange-200 duration-500">ABOUT</a>
            </Link>
          </li>
          <li className="mx-3 my-6 md:my-0">
            <Link href='/services'>
              <a href="#" className="text-sm lg:text-lg text-font-bold hover:text-orange-200 duration-500">SERVICES</a>
            </Link>
          </li>
          <li className="mx-3 my-6 md:my-0">
            <Link href='/portfolio'>
              <a href="#" className="text-sm lg:text-lg text-font-bold hover:text-orange-200 duration-500">PORTFOLIO</a>
            </Link>
          </li>
          <li className="mx-3 my-6 md:my-0">
            <Link href='/bookConsultation'>
              <a href="#" className="text-sm lg:text-lg text-font-bold hover:text-orange-200 duration-500">CONTACT</a>
            </Link>
          </li>
        </ul>
        
        <div className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-transparent w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 space-x-5' >
          
            {/* <BsFacebook className='mx-2 hover:text-orange-200 duration-500 cursor-pointer' size={17} />
            <SiInstagram className='mx-2  hover:text-orange-200 duration-500 cursor-pointer' size={17} />
            <IoLogoSnapchat className='mx-2  hover:text-orange-200 duration-500 cursor-pointer' size={19} /> */}
            <BsFacebook size={18} className='cursor-pointer hover:text-sky-700 duration-500'/>
            <SiInstagram size={18} className='cursor-pointer hover:fill-[#8a3ab9] duration-500'/>
            <IoLogoSnapchat size={18} className='cursor-pointer hover:fill-[#FFFC00] duration-500'/>
          
        </div>
        {drawerOpen==true ? (<NavbarDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>) :(

          <>
          </>
        ) }
      </nav>
    </div>


        
      
         

    </>
  )
}

export default Navbar