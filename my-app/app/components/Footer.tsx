import React from 'react'
import Image from 'next/image'
import LeftPaw from '../../assets/images/leftPaw.png'
import MiddlePaw from '../../assets/images/middlePaw.png'
import RightPaw from '../../assets/images/rightPaw.png'
import '../../assets/styles/footer.scss'

const Footer = () => {
  return (
    <div className='flex justify-center relative overflow-hidden bg-[#344B50] min-h-[300px]'>
      <div className='flex flex-col justify-center items-center max-w-[565px] text-center gap-8'>
        <h2 className='text-[#D8B696] text-xl'>Lorem Ipsum Dolor Sit Amet.</h2>
        <p className='text-[#F9DAC65E] text-sm'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
        <input type="text"  className='text-[#F9DAC65E] outline-none border border-[#F9DAC6] rounded-full pl-[20] py-[10] w-full' placeholder='Email'/>
      </div>
      <Image src={LeftPaw} alt='left-paw' className='absolute bottom-[-70] left-0 object-cover w-[170px]'/>
      <Image src={MiddlePaw} alt='left-paw' className='absolute right-[150] bottom-[-10] object-cover w-[225px]'/>
      <Image src={RightPaw} alt='left-paw' className='absolute right-0 top-[-30] object-cover w-[200px]'/>
    </div>
  )
}

export default Footer 
