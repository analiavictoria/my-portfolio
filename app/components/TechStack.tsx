'use client';

import React from "react";
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

export default function Stack() {
  const list = [
    {
      title: "Angular",
      img: "/icons/angular.png",
    },
    {
      title: "Azure",
      img: "/icons/azure.png",
    },
    {
      title: "C#",
      img: "/icons/csharp.png",
    },
    {
      title: "Git",
      img: "/icons/git.png",
    },
    {
      title: "Javascript",
      img: "/icons/javascript.png",
    },
    {
      title: "Material UI",
      img: "/icons/mui.png",
    },
    {
      title: "Next.js",
      img: "/icons/nextjs.png",
    },
    {
      title: "SQL",
      img: "/icons/sql.png",
    },
    {
      title: "Tailwind",
      img: "/icons/tailwindcss.png",
    },
    {
      title: "Typescript",
      img: "/icons/typescript.png",
    },
  ];

  return (
    <div className="flex flex-col px-4 justify-center items-center text-center pb-20">
      <span className="chip">Stack</span>
      <h1 className="my-10 mb-20 text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tighter">
        Tecnologias
      </h1>
      
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
          {list.map((item, index) => (
            <Card
              className="shadow-lg p-10 mb-4 transition-transform transform hover:scale-105 rounded-lg"
              key={index}
            >
              <CardBody className="p-4">
                <Image
                  width={50}
                  height={50}
                  alt={item.title}
                  className="object-cover"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="flex justify-center">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
    </div>
  );
}
