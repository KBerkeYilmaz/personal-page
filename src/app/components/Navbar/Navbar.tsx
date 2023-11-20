"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "../../globals.css";

const Navbar = () => {
  const listItems = [
    { placeholder: "Home", key: 0 },
    { placeholder: "About Me", key: 1 },
    { placeholder: "Works", key: 2 },
    { placeholder: "Résumé", key: 3 },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 3.5 }}
    >
      <ul className="text-text  bg-transparent text-3xl flex p-10 flex-col border-r-2 border-primary shadow-right h-fit gap-24">
        {listItems.map((item) => {
          return (
            <li
              key={item.key}
              className="li-hover-animate from-primary-to-accent cursor-pointer hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out"
            >
              <button>{item.placeholder}</button>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
