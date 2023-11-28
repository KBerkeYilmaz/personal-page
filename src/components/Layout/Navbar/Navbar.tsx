"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "@root/globals.css";

const listItems = [
  { placeholder: "Home", id: "home-btn", href: "/" },
  { placeholder: "About Me", id: "about-btn", href: "/about" },
  { placeholder: "Works", id: "works-btn", href: "/works" },
  { placeholder: "Résumé", id: "cv-btn", href: "/" },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const handleItemClick = (key: number) => {
    setActiveItem(key);
  };

  return (
    <nav className="absolute top-0 right-0 left-0 ">
      {/* <motion.nav
    //   initial={{ opacity: 0, y: 30 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.8, delay: 3.5 }}
    // > */}
      <ul className="text-text  bg-transparent text-xl flex p-10 h-fit gap-24">
        {listItems.map((item, index) => {
          const isActive = activeItem === index;
          return (
            <li
              id={item.id}
              key={index}
              className={`li-hover-animate from-primary-to-accent cursor-pointer will-change-transform ${
                isActive
                  ? "scale-105 -translate-y-1"
                  : "hover:-translate-y-1 hover:scale-105"
              } transition duration-300 ease-out`}
              onClick={() => handleItemClick(index)}
            >
              <Link href={item.href}>
                <div
                  className={`${
                    isActive ? "text-accent pointer-events-none" : ""
                  }`}
                >
                  {item.placeholder}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* </motion.nav> */}
    </nav>
  );
};

export default Navbar;
