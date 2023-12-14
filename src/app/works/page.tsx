"use client";

import { useState, useRef } from "react";
import { NextPage } from "next";
import Carrousel from "@/components/UI/Carrousel";
import Card from "@/components/UI/Card";

const workItems = [
  {
    id: "api-server-card",
    title: "API Server With CRUD Capabilities",
    images: ["images/API_Server_SS0.webp", "images/API_Server_SS1.webp"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "connect-four",
    title: "Connect Four Game",
    images: ["images/API_Server_SS0.webp", "images/API_Server_SS1.webp"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Works: NextPage = () => {
  return (
    <div className="flex flex-col justify-start h-fit items-center w-full pt-[20rem] lg:pt-0 gap-10 text-white">
      <div className="flex w-full py-4">
        <h1 className="text-4xl">Works</h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-fit">
        {workItems.map((item, index) => (
          <Card
            // id={item.id}
            key={index}
            className=" h-[400px] lg:h-[500px]"
          >
            {" "}
            <div className="relative lg:h-1/2 overflow-hidden cursor-pointer ">
              <Carrousel images={item.images} />
            </div>
            <div className="h-1/2">
              <h2 className="p-4 lg:text-2xl">{item.title}</h2>
              <p className="p-4">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Works;
