import React from 'react'
import Navbar from '../components/Header/Navbar'
import { PortfolioHeader, PortfolioGallery, Form, Footer } from '../components'

const portfolio = () => {
  return (
    <>
        <Navbar/>

        <section>
            <PortfolioHeader/>
        </section>

        <section>
            <PortfolioGallery/>
        </section>

        <section>
            <Form/>
        </section>

        <section>
            <Footer/>
        </section>

    </>
  )
}

export default portfolio