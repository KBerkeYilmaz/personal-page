"use client";

import React, { useState, CSSProperties, useEffect } from "react";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";
import styles from "./styles.module.css";

const pages: ((
  props: AnimatedProps<{ style: CSSProperties }>
) => React.ReactElement)[] = [
  ({ style }) => (
    <animated.div style={{ ...style, background: "black" }}>
      Hi, I'm Berke
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "teal" }}>
      a critical thinker
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightgreen" }}>
      an Interpreter
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "red" }}>
      a Developer
    </animated.div>
  ),
];

const transitionsConfig = [
  {
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-100%,0,0)" },
  },
  {
    from: { opacity: 0, transform: "translate3d(0,100%,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-100%,0)" },
  },
  {
    from: { opacity: 0, transform: "translate3d(0,-100%,0)" },
    leave: { opacity: 0, transform: "translate3d(0,100%,0)" },
  },
  {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(100%,0,0)" },
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [slideshowComplete, setSlideshowComplete] = useState(false);
  const onClick = () => {
    const nextIndex = (index + 1) % 4;
    setIndex(nextIndex);

    // Check if the slideshow is complete
    if (nextIndex === 0) {
      setSlideshowComplete(true);
    }
  };
  const transRef = useSpringRef();

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: transitionsConfig[index].from,
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: transitionsConfig[index].leave,
  });
  useEffect(() => {
    transRef.start();
  }, [index]);

  if (slideshowComplete) {
    // Render the landing page content
    return (
      <div className="landing-page bg-slate-100 w-screen h-screen">
        <nav className="landing-navbar h-[10vh] w-full border-black border-b-4 text-black flex justify-end items-end">
          <ul className="flex justify-center items-center gap-8 cursor-pointer p-4 text-2xl h-full ">
            <li className="hover:text-teal-200">About</li>
            <li className="hover:text-teal-200">Portfolio</li>
            <li className="hover:text-teal-200">Contact</li>
            <li className="hover:text-teal-200">Blog</li>
          </ul>
        </nav>
      </div>
    );
  } else {
    // Render the slideshow
    return (
      <div
        className={`flex fill ${styles.container}`}
        onClick={onClick}
      >
        {transitions((style, i) => {
          const Page = pages[i];
          return <Page style={style} />;
        })}
      </div>
    );
  }
}
