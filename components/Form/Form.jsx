import React, {useRef, useState} from 'react'
import {motion} from 'framer-motion'
import {RiCloseFill} from 'react-icons/ri'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
import Logo from '../../assets/Logo.png'

const Form = () => {

    const [emailResults, setEmailResults] = useState(null)
    const [alert, setAlert] = useState(false)

    const [fistName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [firstNameErr, setFirstNameErr] = useState({})
    const [lastNameErr, setLastNameErr] = useState({})
    const [phoneNumberErr, setphoNumberErr] = useState({})
    const[emailErr, setEmailErr] = useState({})
    const[messageErr, setMessageErr] = useState({})


    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_tgoch4r', 'template_ar2odrm', form.current, 'QfAQ2IyF5axDJ07FH')
        .then((result) => {
            setEmailResults(result.text);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setAlert(true)
        e.target.reset();
    };



    // const onSubmit = (e) => {
    //     const isValid = formValidation()

    //     if (isValid === false) {
    //         e.stopPropation()
    //         e.preventDefault()
    //         return 'Error'

    //     } else if (isVallid) {
    //         sendEmail();
    //         setAlert(true)
    //         e.target.reset();
    //     }
    // }


    // const formValidation = () => {
    //     const firstNameEr = {}
    //     const lastNameEr = {}
    //     const emailEr = {}
    //     const messageEr ={}
    //     let isValid = true

    //     if(firstName.trim().length == 0){
    //         firstNameEr.noFirstName = 'Please enter your first name.'
    //         isValid = false
    //     }

    //     if(lastName.trim().length == 0){
    //         lastNameEr.noLastName = 'Please enter your last name'
    //         isValid = false
    //     }

    //     if(!email.trim().includes('@') || !email.trim().includes('.com')) {
    //         emailEr.invalid = 'Invalid Email'
    //         isValid = false
    //     }

    //     if(message.trim().length < 1) {
    //         messageEr.noMessage = 'Please enter your message you would like to send.'
    //         isValid = false
    //     }

    //     setFirstNameErr(firstNameErr)
    //     setLastNameErr(lastNameErr)
    //     setEmailErr(emailEr)
    //     setMessageErr(messageEr)

    //     return isValid
    // }

  return (
    <>
        <div className='relative bg-[#151414] flex flex-col md:flex-row justify-center px-10 z-30'>
            <div className='flex justify-center items-center'>
                <Image
                src={Logo}
                height={600}
                width={600}
                alt='Logo'
                />
            </div>
            <form className='flex flex-col space-y-2 justify-center mx-auto text-gray-400 pt-3' id='form' 
            ref={form} onSubmit={sendEmail}
            >
                <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
                    <input className='formInput' type="text" name="first_name" id="first_name" placeholder='First Name*' required
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input  className='formInput'type="text" name="last_name" id="last_name" placeholder='Last Name*' required
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <input className='formInput' type="text" name="user_email" id="email" placeholder='Email*' required
                onChange={(e)=> setEmail(e.target.value)}
                />
                <input className='formInput' type="tel" name="phone_number" id="phone" placeholder='Phone #' 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                />
                <input className='formInput' type="text" name="subject" id="subject" placeholder='Subject*'/>
                <textarea className='formInput' name="message" id="" placeholder='Message*' 
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <input className='w-full bg-[#af938f] py-3 rounded-md text-white font-semibold cursor-pointer ' value='Send' type='submit' />
            </form>
        {alert &&
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
                    <p className='italic'>Email Sent!</p>
                </div>
                <div>
                    <RiCloseFill size={20} className='cursor-pointer' onClick={() => setAlert(false)}/>
                </div>
            </motion.div>
        }

        {/* {Object.keys(firstNameErr).map((key) => {
            <div>
                <p className='text-red-500 italic'>{firstNameErr[key]}</p>
            </div>
        })} */}

        </div>
    </>
  )
}

export default Form