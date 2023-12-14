"use client";

import { ButtonProps } from "@/libs/types";


const Button: React.FC<ButtonProps> = ({className, children, onClick}) => {
  return (
    <button className="flex items-center justify-center w-full my-10 will-change-auto font-semibold" onClick={onClick}>
      <span
        className={`${className} rounded-full p-4 transition duration-300 ease-in-out`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;