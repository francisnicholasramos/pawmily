import React from 'react'
import Navbar from '../components/Navbar'
import AdoptionPage from '../components/Adoption/AdoptionPage'
import Footer from '../components/Footer'
import DirectoryLinks from '../components/DirectoryLinks'

const page = () => {
  return (
    <div>
      <Navbar />
      <AdoptionPage />
      <Footer />
      <DirectoryLinks />
    </div>
  )
}

export default page
