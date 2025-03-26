"use client";
import React from "react";
import cardData from "@/app/components/Gallery/cardData";
import { motion } from "framer-motion";

// infinite scroll - framer motion (it should not reset while scrolling)
// horizontal scroll - framer motion

const InfiniteScroll = () => {
  console.log(`test:`, cardData);

  return (
    <div className="bg-orange-400  mx-auto">
      <div className="border">
        <motion.div
          className="flex flex-shrink-0"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {cardData.map((image, index) => {
            return <img src={image.name} key={index} height={50} width={100} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
