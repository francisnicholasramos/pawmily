import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import DirectoryLinks from './DirectoryLinks'
import Link from 'next/link'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Footer />
      <DirectoryLinks />
    </div>
  )
}

export default Landing   
