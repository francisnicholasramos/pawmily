"use client";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import cardData from "@/app/paw-match/cardData";
import Button from "../Button";
import { motion, useMotionValue, useTransform } from "framer-motion";

const PawMatchContent = () => {
  const [cards, setCards] = useState<Card[]>(cardData);

  return (
    <div className="grid place-items-center mx-[125px] py-[125]">
      {cards.map((card) => {
        return (
          <Card key={card.id} cards={cards} setCards={setCards} {...card} />
        );
      })}

      <div className="flex justify-center space-x-10 mt-10">
        <Button className="rounded-full p-[20]">
          <MdClose className="text-2xl" />
        </Button>

        <Button className="rounded-full p-[20]">
          <FaHeart className="text-2xl" />
        </Button>
      </div>
    </div>
  );
};

const Card = ({
  id,
  image,
  cards,
  setCards,
}: {
  id: number;
  image: string;

  setCards: Dispatch<SetStateAction<Card[]>>;
  cards: Card[];
}) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? -1 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.img
      src={image}
      className="h-96 w-110 object-cover rounded-lg hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
      }}
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default PawMatchContent;
