import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/images/logo.png'
import Link from 'next/link'
import '../../assets/styles/navbar.scss'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-[30px]'>
      <div className='flex items-center'>
        <Image src={Logo} alt='logo'/>
        <h2 className='text-[#344B50] font-bold text-xl'>PAWMILY</h2>
      </div>

      <div className='flex gap-[20px]'>
        <Link href="#" className='links'>Home</Link>
        <Link href="#" className='links'>About Us</Link>
        <Link href="#" className='links'>PawStories</Link>
        <Link href="#" className='links'>PawMatch</Link>
        <Link href="#" className='links'>More</Link>
      </div>

      <div className='flex items-center gap-[30px]'>
        <Link href='#' className='links'>Log In</Link>
        <Link href='#' className='signup-link'>Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar 
