import React from 'react'
import Navbar from '../components/Header/Navbar'
import { PortfolioHeader, PortfolioGallery, Form, Footer } from '../components'
import { client } from '../lib/client'

export async function getStaticProps() {
    const profileImages = await client.fetch(`*[_type == "profileCard"]`)
  
    
    return {
      props: {
        profileImages
      }
    }
  }

const portfolio = ({ profileImages }) => {
  return (
    <>
        <Navbar/>

        <section>
            <PortfolioHeader/>
        </section>

        <section>
            <PortfolioGallery profileImages={profileImages}/>
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