import React from 'react'
import Image from 'next/image'
import PawHeart from '@/assets/images/pawHeart.png'
import cardData from '@/app/adopt/cardData'

const AdoptionPage = () => {
  return (
    <div className='mx-[125px] py-[125]'>
      <div className='flex justify-between items-center pb-[70]'>
        <div>
          <h2 className='text-5xl pb-3'>Adopt a pet</h2>
          <p className='text-base text-[#9D9595]'>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor.
          </p>
        </div>

        <button className='bg-[#e9e3dd] hover:bg-[#e1d9d1] px-[60] py-[10] rounded-[15] cursor-pointer shadow-[0px_4px_2px_rgba(0,0,0,0.25)]'>All pets</button>
      </div>

      <div className='grid grid-cols-3 gap-10 min-h-[625px]'>
        {cardData.map((card, index) => (
          <div
            key={index}
            className="rounded-[23px] max-w-[475px] min-h-[625px] shadow-lg flex flex-grow justify-center"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='flex flex-col p-5 justify-between h-full w-full'>
              <div className='flex justify-end m-0'>
                <Image
                  src={PawHeart}
                  alt={card.alt}
                  className='flex justify-end object-cover w-[50]'
                />
              </div>

              <div className='flex flex-col justify-items-end'>
                <div className='flex justify-between p-5'>
                  <h3>{card.color}</h3>
                  <h3>{card.age}</h3>
                </div>

                <button className='bg-[#f5f2f0] hover:bg-[#ebe4e0] cursor-pointer rounded-[75] text-[25px] py-3 shadow-[0px_4px_3px_0px_rgba(0,0,0,0.36)]'>ADOPT</button>
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default AdoptionPage