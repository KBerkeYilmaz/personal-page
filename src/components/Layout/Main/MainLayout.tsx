"use client";

import React, { useState, useEffect } from "react";
import MouseTracker from "@/components/Effects/mouseTracker";
import Navbar from "../Navbar/Navbar";

const MainLayout = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollY(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundColor = `rgba(0, 0, 0, ${Math.min(scrollY / 1000, 0.5)})`;
  return (
    <div
      className="landing-page bg-background w-screen h-screen flex flex-col items-center"
      style={{ backgroundColor, transition: "background-color 0.3s ease" }}
    >
      <MouseTracker />
      <main className="w-3/4 h-full flex justify-center">
        <div className="w-1/2 h-full flex flex-col items-start justify-center">
          {children}
        </div>
        <div className="w-1/2 min-h-full h-fit flex items-center justify-end">
          <Navbar />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
