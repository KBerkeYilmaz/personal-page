"use client";

import { useState, useRef } from "react";
import { NextPage } from "next";
import Card from "@/components/UI/Card.server";
import ScrollBar from "@/components/UI/ScrollBar";
import Carrousel from "@/components/UI/Carrousel";
import Button from "@/components/UI/Button";

const workItems = [
  {
    id: "api-server-card",
    title: "API Server With CRUD Capabilities",
    images: ["/API_Server_SS0.webp", "/API_Server_SS1.webp"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "connect-four",
    title: "Connect Four Game",
    images: ["/API_Server_SS0.webp", "/API_Server_SS1.webp"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Works: NextPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <ScrollBar>
      <div className="flex flex-col justify-start items-center w-full gap-10 pt-40">
        <div className="flex w-full p-4">
          <h1 className="text-4xl">Works</h1>
        </div>
        <div className="w-full grid grid-cols-2 gap-10 mb-24 min-h-fit">
            {workItems.map((item, index) => (
              <Card
                // id={item.id}
                key={index}
              >
                {" "}
                <div className="relative h-[300px] overflow-hidden cursor-pointer">
                  <Carrousel images={item.images} />
                </div>
                <h2 className="p-4">{item.title}</h2>
                {<p className="p-4">{item.description}</p>}
              </Card>
            ))}
          </div>
      </div>
    </ScrollBar>
  );
};

export default Works;
