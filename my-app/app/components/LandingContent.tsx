import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";

const LandingContent = () => {
  return (
    <div>
      <div>
        <h2 className="text-[28px]">LOREM IPSUM DOLORES</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco
        </p>

        <Button variant="primary"> 
          PawPal Program <FaArrowRight />
        </Button>
        
      </div>
    </div>
  );
};

export default LandingContent;
