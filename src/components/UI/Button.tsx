"use client";

const Button = (className) => {
  return (
    <div className="flex items-center justify-center w-full my-10">
      <button
        className="text-text text-2xl w-44 h-20 bg-primary rounded-full p-4 hover:shadow-3xl hover:shadow-primary hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out"
        onClick={() => (window.location.href = "mailto:kberkeyilmaz@gmail.com")}
      >
        Contact
      </button>
    </div>
  );
};

export default Button;