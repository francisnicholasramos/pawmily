import React from 'react'
import Link from 'next/link'
import Navbar from './Navbar'
import LandingContent from './LandingContent'
import Footer from './Footer'
import DirectoryLinks from './DirectoryLinks'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <LandingContent />
      <Footer />
      <DirectoryLinks />
    </div>
  )
}

export default Landing   
