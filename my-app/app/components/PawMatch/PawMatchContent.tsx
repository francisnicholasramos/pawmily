"use client";
import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import cardData from "@/app/paw-match/cardData";
import Button from "../Button";

import SlapContainer from "@/assets/images/slap-container.png";
import PassContainer from "@/assets/images/pass-container.png";
import Slap from "@/assets/images/pawHeart.png";
import Pass from "@/assets/images/pass.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards"; // Ensure correct styles are imported
import { EffectCards } from "swiper/modules";

const PawMatchContent = () => {
  return (
    <div className="flex justify-center mx-[125px] py-[125]">
      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[400px] h-[600px] max-w-full"
        >
          {cardData.map((card, index) => (
            <SwiperSlide>
              <Image
                key={index}
                src={card.image}
                alt={card.alt}
                width={card.width}
                height={card.height}
                className="rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center space-x-10 mt-4">
          <Button className="rounded-full p-[20]">
            <MdClose className="text-2xl"/>
          </Button>

          <Button className="rounded-full p-[20]">
            <FaHeart className="text-2xl"/>
          </Button>
        </div>
      </div>

    </div>
  );
};

export default PawMatchContent;
