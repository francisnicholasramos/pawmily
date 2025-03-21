import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/images/logo.png'
import Button from './Button'
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
        <Link href="../home" className='links'>Home</Link>
        <Link href="#" className='links'>About Us</Link>
        <Link href="#" className='links'>PawStories</Link>
        <Link href="../paw-match" className='links'>PawMatch</Link>
        <Link href="#" className='links'>More</Link>
        <Link href="../adopt" className='links'>Adoption</Link>
      </div>

      <div className='flex items-center gap-[30px]'>
        <Link href='#' className='links'>Log In</Link>
        <Button variant='primary' className='rounded-[15px] py-[5px] px-[10px]'>Sign Up</Button>
      </div>
    </div>
  )
}

export default Navbar 
