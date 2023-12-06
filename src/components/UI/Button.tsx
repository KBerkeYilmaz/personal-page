"use client";

import { Props } from "@/libs/types";


const Button: React.FC<Props> = ({className, children}) => {
  return (
    <div className="flex items-center justify-center w-full my-10">
      <button
        className={`${className} rounded-full p-4 transition duration-300 ease-in-out`}
        onClick={() => (window.location.href = "mailto:kberkeyilmaz@gmail.com")}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;