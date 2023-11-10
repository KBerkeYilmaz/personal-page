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
  }
];




export default function App() {
  const [index, set] = useState(0);
  const onClick = () => set((state) => (state + 1) % 4);
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
