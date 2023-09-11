import React from 'react'
import {RiDoubleQuotesL} from 'react-icons/ri'
import {AiFillStar} from 'react-icons/ai'
import Image from 'next/image'
import sussane from '../../assets/sussane.jpg'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';






const Testimonial = () => {


    const slideLeft = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 3000;
      };
    
      const slideRight = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 1000;
      };

  return (
    <>
    
       

        <div className='relative w-full md:h-screen flex justify-center items-center bg-cover bg-center ' 
            style={{backgroundImage: 'url("https://cdn.pixabay.com/photo/2015/04/20/21/05/stool-732232_960_720.jpg")'}}>

            <div className='absolute top-0 left-0 w-full bg-black h-full opacity-50'></div>

            {/* <MdChevronLeft color='white' size={50} className=' absolute hidden md:inline-block left-1/4 top-3/4 xl:top-1/2 cursor-pointer z-10' onClick={() => slideLeft()}/>
            <MdChevronRight color='white' size={50} className='absolute hidden md:inline-block left-3/4 top-3/4 xl:top-1/2 cursor-pointer z-10' onClick={() => slideRight()}/> */}


            {/* Card Container */}
            <div className='inline-flex max-w-xl overflow-x-scroll scroll-smooth scrollbar-hide ' id='slider'>

                {/* Cards */}

                <div className='relative flex flex-col justify-center items-center min-w-full text-center space-y-6 px-4 py-6'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Testimonial</h1>
                    <RiDoubleQuotesL size={70}/>
                    <p className='md:text-xl leading-9'>From the moment I discussed my ideas with Daisy she has a real understanding of my design requirements, Daisy has transformed my home beautifully. I wouldn’t hesitate to recommend Daisy and truly 
                        appreciate her expertise. This was an enjoyable experience with an extreme successful outcome
                    </p>
                    <div className='flex flex-col items-center'>
                        <Image
                            src={sussane}
                            height={60}
                            width={60}
                            className='rounded-full'
                        />
                            <div>
                                <p>Sussane Smith</p>
                                <div className='flex flex-row'>
                                    <AiFillStar size={25} className='text-[#ffa127]'/>
                                    <AiFillStar size={25} className='text-[#ffa127]'/>
                                    <AiFillStar size={25} className='text-[#ffa127]'/>
                                    <AiFillStar size={25} className='text-[#ffa127]'/>
                                    <AiFillStar size={25} className='text-[#ffa127]'/>
                                </div>
                            </div>
                    </div>
                </div>



                {/* <div className='relative flex flex-col justify-center items-center min-w-full text-center space-y-6 px-4 py-6'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Testimonial</h1>
                    <RiDoubleQuotesL size={70}/>
                    <p className='md:text-xl leading-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vel facilis, sed amet, nostrum ea eligendi ipsam odio, eaque praesentium eum
                    ! Harum commodi itaque ducimus omnis doloremque magni nisi ipsam.
                    </p>
                    <div>
                        <Image
                            src={sussane}
                            height={60}
                            width={60}
                            className='rounded-full'
                        />
                            <div>
                                <p>Sussane Smith</p>
                                <div className='flex flex-row'>
                                    <AiFillStar size={25} className='text-[#ffa127]'/>
                                    <AiFillStar size={25} className='text-[#ffa127]'/>
                                    <AiFillStar size={25} className='text-[#ffa127]'/>
                                    <AiFillStar size={25} className='text-[#ffa127]'/>
                                    <AiFillStar size={25} className='text-[#ffa127]'/>
                                </div>
                            </div>
                    </div>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Testimonial