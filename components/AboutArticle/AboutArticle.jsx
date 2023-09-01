import React from 'react';
import Image from 'next/image';
import Certificate from '../../assets/Certificate.png';
import White from '../../assets/unlimitedTouchPictures/white.jpg'
import Daisy from '../../assets/unlimitedTouchPictures/Daisy-2.jpg'

const AboutArticle = () => {
  return (
    <>
    {/* THis worked */}
        <div className=' text-gray-500 text-xl font-medium flex flex-col md:flex-row justify-center md:justify-center md:space-x-8 py-8 md:pl-[1rem] leading-8'>
            <div className='flex flex-col p-8 max-w-3xl mt-8'>
                <h1 className='text-4xl text-black font-semibold ml-4'>Our Story</h1>
                <div className='border-t-2 border-orange-200 mt-5'> </div>
                <div className='py-8 pr-[5rem] pl-6 space-y-8'>
                    <p>
                        As a Decorator & ReDesigner™, and visionary, we believe in making homes look beautiful; that is our passion.
                    </p>

                    <p>At <span className='font-semibold text-[#ffa127] text-2xl'> Unlimited Touch By Design</span>, we believe in taking the stress off of you by providing an end-to-end decoration solution. Our ethos aligns with doing the right thing for our clients every time! Whether it is just space planning, sourcing, are looking for a one-stop shop for an entire home or individual items to maximize the potential in your home space,
                        we are here to make the process simple.</p>
                </div>
                <h1 className='text-4xl text-black font-semibold ml-4'>DAISY MONZELLA HARRIS</h1>
                <div className='border-t-2 border-black-200 mt-5'> </div>
                <div className='py-8 pr-[5rem] pl-6 space-y-8'>
                    <p>As a gifted intuitive, clairvoyant, and soul alignment designer, Daisy Harris has experience working with deeply rooted blocks. Daisy is a graduate of Ultimate Academy®, receiving a UDRC Certified Ultimate Decorator and ReDesigner™ certification. She has a BS in Bachelor of Science in Management from Belhaven University, ready to manage your project. Daisy has been providing design services for over 15 years. She works closely with clients and transforms their homes into their dream homes with tailor-made designs. She resides in McDonough, GA servicing all of 
                        Metro Atlanta.</p>
                </div>
                <div className='pl-6'>
                    <button onClick={() => window.open("https://ultimateacademy.com/")}>
                        <Image
                        src={Certificate}
                        width={200}
                        height={200}
                        />
                    </button>
                        <p className='text-sm'>Certified Ultimate Decorator & ReDesigner™</p>
                
                </div>


            </div>

            <div className='flex justify-center items-start max-w-2xl z-10 px-7'>

                <div className=' md:h-[500px] md:w-[400px] bg-cover mt-8 z-10 drop-shadow-lg  ' 
                    // style={{backgroundImage: "url('https://unlimitedtouchbydesign.com/wp-content/uploads/2022/03/Daisy-2.jpg')"}}
                    >
                        <Image
                            src={Daisy}
                            width={600}
                            height={600}
                            className='rounded-lg'
                        />
                </div>
                <div className='ml-[-280px] md:ml-[-225px] md:mt-[130px]   '>
                    <Image
                        src={White}
                        width={550}
                        height={600}
                        className='opacity-10 sm:max-w-[200px] '
                    />
                </div>
               
            </div>

        </div>
    </>
  )
}

export default AboutArticle