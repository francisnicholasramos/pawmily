import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DirectoryLinks from '../components/DirectoryLinks'
import LandingContent from '../components/LandingContent'

const page = () => {
  return (
    <div>
      <Navbar />
      <LandingContent />
      <Footer />
      <DirectoryLinks />
    </div>
  )
}

export default page
