import React from "react";
import "../../assets/styles/button.scss";

interface ButtonProps {
  variant?: 'primary';
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', children }: ButtonProps) => {
  const variants = {
    primary: "flex items-center space-x-[5px] bg-[#334a4f] text-[#F9DAC6FA] rounded-[75px] px-[20px] py-[20px]",
  };

  return (
    <>
      <button className={`${variants[variant]}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
