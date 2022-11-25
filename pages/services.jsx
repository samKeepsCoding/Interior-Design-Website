import React from 'react'
import Navbar from '../components/Header/Navbar'
import { ServicesHeader, DiscoveryCall, Packages, OurBelief, Quote, Form, Footer } from '../components'


const servives = () => {
  return (
    <>
     
        <Navbar/>

        {/* Services Header */}
        <section>
          <ServicesHeader/>
        </section>

        {/* Discovery Call */}
        <section>
          <DiscoveryCall/>
        </section>

        {/* Service Packages */}
        <section>
          <Packages/>
        </section>

        {/* Our Belif */}
        <section>
          <OurBelief/>
        </section>

        {/* Get A Quote Section*/}
        <section>
          <Quote/>
        </section>

        {/* Form */}
        <section>
          <Form/>
        </section>

        {/* Footer */}
        <section>
          <Footer/>
        </section>
    </>
  )
}

export default servives