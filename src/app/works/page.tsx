"use client";

import { useState } from "react";
import { NextPage } from "next";
import Card from "@/components/UI/Card";
import ScrollBar from "@/components/UI/ScrollBar";
import Carrousel from "@/components/Utils/Carrousel";

const Works: NextPage = () => {
  const [activeElement, setActiveElement] = useState(null);

  const handleSetActive = (elementId) => {
    setActiveElement(elementId);
  };

  const workItems = [
    {
      id: "api-server-card",
      title: "Web API Server with CRUD Capabilities",
      images: ["/API_Server_SS0.webp", "/API_Server_SS1.webp"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <ScrollBar>
      <div className="flex flex-col justify-start items-center gap-10">
        <div className="flex w-full p-4">
          <h1 className="text-4xl">Works</h1>
        </div>
        <div className="w-full grid grid-cols-2 gap-10 mb-24 max-h-fit">
          {workItems.map((item, index) => (
            <Card
              // id={item.id}
              key={index}
            >
              {" "}
              <div className="relative h-[300px] overflow-hidden">
                <Carrousel />
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
