import React from 'react'
import Navbar from '../components/Navbar'
import PawMatchContent from '../components/PawMatch/PawMatchContent'
import Footer from '../components/Footer'
import DirectoryLinks from '../components/DirectoryLinks'

const page = () => {
  return (
    <div>
        <Navbar />
        <PawMatchContent />
        <Footer />
        <DirectoryLinks />
    </div>
  )
}

export default page
