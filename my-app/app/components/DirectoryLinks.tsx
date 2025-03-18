import React from 'react'
import Link from 'next/link'
import '../../assets/styles/directory-links.scss'

const DirectoryLinks = () => {
  return (
    <div className='flex justify-between items-center bg-[#F4F1EF] min-h-[115px] pl-[30px] pr-[60px]'>
        <h2 className='text-[#344B50] font-bold text-xl'>PAWMILY</h2>

        <div className='space-x-[20px]'>
            <Link href='#' className='directory-links'>About Us</Link>
            <Link href='#' className='directory-links'>PawStories</Link>
            <Link href='#' className='directory-links'>PawMatch</Link>
        </div>
    </div>
  )
}

export default DirectoryLinks