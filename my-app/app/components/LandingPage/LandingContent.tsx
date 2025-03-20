import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Button"; // custom reusable button
import Puppy from '@/assets/images/puppy.png';
import Puppies from '@/assets/images/two-puppies.png';

const LandingContent = () => {
  return (
    <div className="flex mx-auto">
      {/* div1 */}
      <div className="flex flex-col ml-[125px] py-[100px] gap-[100px]">
        <div className="max-w-[700px] mb-[-80]">
          <h2 className="text-[28px]">LOREM IPSUM DOLORES</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco
          </p> 
          
          <br/>
          
          <Button variant="primary" className="rounded-[75px] py-[10px] px-[25px] gap-[20px]">
            PawPal Program <FaArrowRight />
          </Button>
        </div>

        <div className="flex items-center max-w-[700px]">
          <Image src={Puppy} width={700} height={400} alt="puppy" className="object-cover"/>

          <div>
            <h1 className="text-[#AFAFAF] pb-2">UT ENIM AD MINIM VENIAM</h1>
            <h2 className="text-[#344B50] font-medium pb-2">Lorem Ipsum Dolor Sit Amet</h2> 
            <p className="text-[#9D9595] pb-2">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
  
            <Button variant='primary' className=' rounded-[25px] py-[5px] px-[10px]'>
              FOSTER ME <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>

      {/* div2 */}
      <div className="flex">
        <Image 
          className="object-cover"
          src={Puppies}
          width={1100}
          height={0}
          alt="two-puppies"
        />
      </div>
    </div>
  );
};

export default LandingContent;
