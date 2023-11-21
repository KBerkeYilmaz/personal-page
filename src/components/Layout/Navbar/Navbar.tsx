"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "@root/globals.css";

const listItems = [
  { placeholder: "Home", key: 0, href: "/" },
  { placeholder: "About Me", key: 1, href: "/about" },
  { placeholder: "Works", key: 2, href: "/works" },
  { placeholder: "Résumé", key: 3, href: "/" },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (key) => {
    setActiveItem(key);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 3.5 }}
    >
      <ul className="text-text  bg-transparent text-2xl flex p-10 flex-col border-r-2 border-primary shadow-right h-fit gap-24">
        {listItems.map((item) => {
          const isActive = activeItem === item.key;
          return (
            <li
              key={item.key}
              className={`li-hover-animate from-primary-to-accent cursor-pointer ${
                isActive ? "scale-105" : "hover:-translate-y-1 hover:scale-105"
              } transition duration-300 ease-out`}
              onClick={() => !isActive && handleItemClick(item.key)}
            >
              <Link
                href={item.href}
                className={isActive ? "text-accent pointer-events-none" : ""}
              >
                {item.placeholder}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
