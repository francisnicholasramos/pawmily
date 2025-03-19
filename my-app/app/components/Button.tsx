import React from "react";

interface ButtonProps {
  variant?: 'primary';
  className?: string;
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', children, className }: ButtonProps) => {
  const variants = {
    primary: "flex items-center bg-[#344B50] font-normal hover:bg-[#47656c] text-[#F9DAC6FA]  cursor-pointer shadow-[0px_4px_3px_rgba(0,0,0,0.25)]",
  };

  return (
    <div className="button-container">
      <button className={`${variants[variant]} ${className}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
