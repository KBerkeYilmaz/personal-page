"use client";

import { ButtonProps } from "@/libs/types";


const Button: React.FC<ButtonProps> = ({className, children, onClick}) => {
  return (
    <div className="flex items-center justify-center w-full my-10" onClick={onClick}>
      <button
        className={`${className} rounded-full p-4 transition duration-300 ease-in-out`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;