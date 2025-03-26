"use client";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Card from "./Card";
import cardData from "@/app/paw-match/cardData";
import Button from "../Button";

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

export default PawMatchContent;
