"use client";

import { useState } from "react";
import { NextPage } from "next";
import Card from "@/components/UI/Card";
import Image from "next/image";
import ScrollBar from "@/components/UI/ScrollBar";

const Works: NextPage = () => {
  const [activeElement, setActiveElement] = useState(null);

  const handleSetActive = (elementId) => {
    setActiveElement(elementId);
  };

  const workItems = [
    {
      id: 1,
      title: "Web API Server with CRUD Capabilities",
      images: ["/API_Server_SS0.png", "/API_Server_SS1.png"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <ScrollBar>
      <div className="flex flex-col justify-start items-center gap-10">
        <div className="flex w-full p-4">
          <h1 className="text-4xl">Works</h1>
        </div>
        <div className="w-full grid grid-cols-2 gap-10 mb-24">
          {workItems.map((item) => (
            <Card key={item.id}>
              {item.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  width={1000}
                  height={100}
                  alt={`Image for ${item.title}`}
                />
              ))}
              <h2 className="p-4">{item.title}</h2>
              <p className="p-4">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </ScrollBar>
  );
};

export default Works;
