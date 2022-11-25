import React from 'react'
import Navbar from '../components/Header/Navbar'
import {BookingHeader, BookingForm, Footer} from '../components'

const bookConsultation = () => {
  return (
    <>
        <Navbar/>

        <section>
           <BookingHeader/>
        </section>

        <section>
            <BookingForm/>
        </section>

        <section>
            <Footer/>
        </section>


    </>
  )
}

export default bookConsultation