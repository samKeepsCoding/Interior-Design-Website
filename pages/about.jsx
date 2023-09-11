import React from 'react'
import Navbar from '../components/Header/Navbar'
import { AboutHeader, AboutArticle, Form, Footer, AboutGallery } from '../components'

const About = () => {
  return (
    <>
        
        <Navbar/>

        {/* About Header */}
       <section>
            <AboutHeader/>
       </section>

        {/* About Article section */}
        <section>
            <AboutArticle/>
        </section>

        {/* About Gallery */}
        {/* <section>
            <AboutGallery/>
        </section> */}

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

export default About