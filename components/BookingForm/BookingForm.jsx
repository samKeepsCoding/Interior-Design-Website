import React, {useState,useRef} from 'react'
import emailjs from '@emailjs/browser'
import {motion} from 'framer-motion'
import {BsFacebook} from 'react-icons/bs'
import {SiInstagram} from 'react-icons/si'
import {IoLogoSnapchat} from 'react-icons/io'
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai'
import {RiCloseFill} from 'react-icons/ri'




const BookingForm = () => {
  const [emailResults, setEmailResults] = useState(null)
  const [sentAlert, setSentAlert] = useState(false)
  
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_tgoch4r', 'template_nx2kotn', form.current, 'QfAQ2IyF5axDJ07FH')
    .then((result) => {
          setEmailResults(result.text);
          console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      setSentAlert(true)
      e.target.reset()
    };
    
    const datePickerId= new Date().toISOString().split("T")[0];


  return (
    <>
      <div className='relative flex flex-col lg:flex-row justify-center items-center lg:items-start text-black p-10'>

          <div className='mt-3 lg:w-1/2 text-lg font-medium text-gray-400 flex-col  md:justify-start items-start p-4 md:p-10 '>
            <h1 className='text-xl text-black mb-3'>Who are You?</h1>
           <p>Contact Unlimited Touch Today so we can help you with your project.</p>
           <div className='mt-10 flex items-center space-x-3'>
            <AiOutlineMail/>
            <p >Unlimitedtouchbydesign@gmail.com</p>  
           </div>
           <div className='flex items-center space-x-3'>
            <AiOutlinePhone/>
            <p>(444) 444-4444</p>

           </div>
            <div className='flex flex-row justify-start items-center mt-10 space-x-4 text-black'>
              <BsFacebook size={20} className='cursor-pointer hover:text-sky-700 duration-500'/>
              <SiInstagram size={20} className='cursor-pointer hover:fill-[#8a3ab9] duration-500'/>
              <IoLogoSnapchat size={20} className='cursor-pointer hover:fill-[#FFFC00] duration-500'/>
            </div>
          </div>


          <div className='w-full lg:w-1/2 text-lg font-medium text-gray-400 flex-col justify-start items-start py-3'>
            <div className=' text-lg font-medium text-black flex-col justify-start items-start  md:p-10'>
              
              <form id='form' ref={form} onSubmit={sendEmail} className='text-gray-400'>
                <label>Name</label>
                <div className='flex md:space-y-0 space-x-1 mb-3 mt-3'>
                      <input className=' bg-gray-100 rounded-lg py-3 px-2 w-1/2' type="text" name="first_name" id="" placeholder='First*' required />
                      <input  className=' bg-gray-100 rounded-lg py-3 px-2 w-1/2'type="text" name="last_name" id="" placeholder='Last*'required />
                </div>
                <label className='mt-10'>Phone</label>
                <div className='flex justify-start items-center space-x-6 my-4 '>

                  <input type="tel" placeholder='xxx-xxx-xxxx'maxLength={10} required name='phone_number' className='border bg-gray-100 p-3 rounded-lg'/>
                </div>

                <label htmlFor="">Email *</label>
                <div className='flex md:space-y-0 space-x-2 my-3'>
                  <input className=' bg-gray-100 rounded-lg py-3 px-2 w-full' type="email" name="user_email" id="email" placeholder='Email' required/>           
                </div>
                <label htmlFor="">When would You like to talk?*</label>
                <div className='flex md:space-y-0 space-x-2 my-3'>
                  <input className=' bg-gray-100 rounded-lg py-3 px-2 w-ful max-w-lgl' type="date" min={datePickerId} name="call_date" id="email" required/>           
                </div>

                <label htmlFor="message">Message*</label>
                <p className='text-sm font-light my-2'>How can we help?</p>
                <div className='flex md:space-y-0 space-x-2 my-3'>
                  <textarea className=' bg-gray-100 rounded-lg py-3 px-2 w-full' name="message" required/>           
                </div>
                <input className='w-full bg-[#af938f] py-3 rounded-md text-white font-semibold md:hover:opacity-40 duration-500 cursor-pointer' type="submit" value="Send"/>
              </form>
            </div>
          </div>
          {sentAlert && 
            <motion.div className='absolute bottom-10 right-5 flex flex-row justify-center items-center  p-3 bg-green-600 rounded-lg space-x-3'
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
            >
                <div >
                    <p className='italic text-white'>Email Sent!</p>
                </div>
                <div>
                    <RiCloseFill size={20} className='cursor-pointer fill-white' onClick={() => setSentAlert(false)}/>
                </div>
            </motion.div>
          }
      </div>
    </>
  )
}

export default BookingForm