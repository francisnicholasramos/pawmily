import React from 'react';
import Image from 'next/image';
import Button from './components/Button'; // Ensure this is correct
import SilverDog from '@/assets/images/silver-retriever.png';
import Logo from '@/assets/images/logo.png';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { ImYahoo } from 'react-icons/im';

const Login = () => {
  return (
    <div className='p-8'> {/* root containers */}
      <div className='flex justify-center'>

        <div>
          <div className='flex flex-col  bg-[rgba(233,227,220,0.19)] shadow-[0px_4px_10px_0px_rgba(184,165,141,1)]  p-10 rounded-tl-[73] rounded-bl-[73]'>
            <div className='flex items-center space-x-5 max-w-md'> {/* header */}
              <div className='flex items-center rounded-full px-1 bg-[#334a4f] h-[95] shadow-[0px_4px_7px_0px_rgba(107,110,111,0.98)]'>
                <Image
                  src={Logo}
                  alt='logo'
                />
              </div>

              <div>
                <h2 className='font-bold text-xl text-[#344B50]'>WELCOME TO PAWMILY!</h2>
                <p className='text-[#344B50]'>Donec vel egestas dolor, nec dignissim metus</p>
              </div>
            </div>

            <br />

            <div className='border-t border-[#D8B696]'></div> {/* line div */}

            <br />

            <div className='flex rounded-full bg-[#ede8e4]'>
              <Button className='w-full flex justify-center rounded-full shadow-none py-3'>Login</Button>
              <Button className='w-full flex justify-center rounded-full shadow-none py-3 text-black bg-[#ede8e4] hover:bg-[#ede8e4]'>Sign Up</Button>
            </div>

            <br />

            <div className='w-full'>
              <form className='flex flex-col'>
                <label htmlFor="email" className='text-[#344B50] ml-[20]'>EMAIL</label>
                <input type="email" id='email' placeholder='Enter your email' className='border border-[#344B5030] bg-[#E9E3DC36] p-5 rounded-full outline-none' />

                <br />

                <label htmlFor="password" className='text-[#344B50] ml-[20]'>PASSWORD</label>
                <input type="password" id='password' placeholder='Enter your password' className='border border-[#344B5030] bg-[#E9E3DC36] p-5 rounded-full outline-none' />

                <br /><br />
                <Button className='w-full flex justify-center rounded-full p-4'>Login</Button>
              </form>

              <br />

              {/* Socials */}
              <div className='flex justify-center space-x-3'>
                <div className='flex items-center space-x-2 text-[#344B50] p-5 rounded-full border border-[#344B5030] '>
                  <FaGoogle />
                  <p>Google</p>
                </div>

                <div className='flex items-center space-x-2 text-[#344B50] p-5 rounded-full border border-[#344B5030] '>
                  <FaFacebookF />
                  <p>Facebook</p>
                </div>

                <div className='flex items-center space-x-2 text-[#344B50] p-5 rounded-full border border-[#344B5030] '>
                  <ImYahoo />
                  <p>Yahoo</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div 
          className='rounded-tr-3xl rounded-br-3xl ml-[-7]'
          style={{
            backgroundImage: `url(${SilverDog.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '50%',
          }}
        >
        </div>

      </div>


    </div>
  )
}

export default Login
