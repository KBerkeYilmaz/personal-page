"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "@root/globals.css";

const listItems = [
  { placeholder: "Home", id: "home-btn", href: "/" },
  { placeholder: "About Me", id: "about-btn", href: "/about" },
  { placeholder: "Works", id: "works-btn", href: "/works" },
  {
    placeholder: "Resume",
    id: "cv-btn",
    href: "/resume/KBerkeYilmazCV.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  
  const handleItemClick = useCallback((key: number) => {
    console.log(key)
    setActiveItem(key);
  }, []);

  return (
    <nav className="fixed top-0 right-0 left-0 md:w-screen flex justify-end lg:h-[7.8rem] ">
      <ul className="text-text  bg-transparent text-xl flex justify-between p-10 outline-2 w-full">
        <div className="flex gap-4">
          {/************* SVG 1 *********************/}
          <div>
            <a
              href="https://github.com/KBerkeYilmaz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white hover:scale-110 transition-all ease cursor-pointer hover:fill-orange-400"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                  >
                    <g
                      id="icons"
                      transform="translate(56.000000, 160.000000)"
                    >
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#142]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          {/************* SVG 2 *********************/}
          <div>
            <a
              href="https://www.linkedin.com/in/kutalmis-berke-yilmaz/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                className="fill-white hover:scale-110 transition-all ease-in cursor-pointer hover:fill-[#0072b1]"
                height="30px"
                width="30px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
                xmlSpace="preserve"
              >
                <path
                  d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
	              V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
	              C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
	              c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
	              "
                />
              </svg>
            </a>
          </div>
          {/************* SVG 3 *********************/}
          <div>
            <a
              href="https://twitter.com/KutalmisY"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 97.75 97.75"
                xmlSpace="preserve"
                className="fill-white hover:scale-110 transition-all ease-in cursor-pointer hover:fill-[#1DA1F2]"
              >
                <g>
                  <path
                    d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
		                M78.43,35.841c0.023,0.577,0.035,1.155,0.035,1.736c0,20.878-15.887,42.473-42.473,42.473c-8.127,0-16.04-2.319-22.883-6.708
		                c-0.143-0.091-0.202-0.268-0.145-0.427c0.057-0.158,0.218-0.256,0.383-0.237c1.148,0.137,2.322,0.205,3.487,0.205
		                c6.323,0,12.309-1.955,17.372-5.664c-6.069-0.512-11.285-4.619-13.161-10.478c-0.039-0.122-0.011-0.255,0.073-0.351
		                c0.085-0.096,0.215-0.138,0.339-0.115c1.682,0.319,3.392,0.34,5.04,0.072c-6.259-1.945-10.658-7.808-10.658-14.483l0.002-0.194
		                c0.003-0.127,0.072-0.243,0.182-0.306c0.109-0.064,0.245-0.065,0.355-0.003c1.632,0.906,3.438,1.488,5.291,1.711
		                c-3.597-2.867-5.709-7.213-5.709-11.862c0-2.682,0.71-5.318,2.054-7.623c0.06-0.103,0.166-0.169,0.284-0.178
		                c0.119-0.012,0.234,0.04,0.309,0.132c7.362,9.03,18.191,14.59,29.771,15.305c-0.193-0.972-0.291-1.974-0.291-2.985
		                c0-8.361,6.802-15.162,15.162-15.162c4.11,0,8.082,1.689,10.929,4.641c3.209-0.654,6.266-1.834,9.09-3.508
		                c0.129-0.077,0.291-0.065,0.41,0.028c0.116,0.094,0.164,0.25,0.118,0.394c-0.957,2.993-2.823,5.604-5.33,7.489
		                c2.361-0.411,4.652-1.105,6.831-2.072c0.146-0.067,0.319-0.025,0.424,0.098c0.104,0.124,0.113,0.301,0.023,0.435
		                C83.759,31.175,81.299,33.744,78.43,35.841z"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>

        {/******************* LIST ITEMS *******************/}
        <div className="flex gap-6 items-center">
          {listItems.map((item, index) => {
            const isActive = activeItem === index;
            return (
              <li
                id={item.id}
                key={index}
                className={`li-hover-animate from-primary-to-accent cursor-pointer will-change-transform p-2 flex h-full w-fit ${
                  isActive
                    ? "scale-105 -translate-y-[0.10rem]"
                    : "hover:-translate-y-1 hover:scale-105"
                } transition duration-300 ease-out`}
              >
                <Link
                  href={item.href}
                  target={item.target ? item.target : undefined}
                  rel={item.rel ? item.rel : undefined}
                  onClick={() => handleItemClick(index)}

                  className={` w-full h-full p-2 flex items-center justify-center 
                  ${
                    isActive ? "text-accent pointer-events-none" : ""
                  }`}
                >
                  {item.placeholder}
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
