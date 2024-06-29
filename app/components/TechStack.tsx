'use client';

import React from "react";
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

export default function Stack() {
  const list = [
    {
      title: "Javascript",
      img: "/icons/javascript2.png",
    },
    {
      title: "Typescript",
      img: "/icons/typescript2.png",
    },
    {
      title: "Angular",
      img: "/icons/angular2.png",
    },
    {
      title: "React",
      img: "/icons/react.png",
    },
    {
      title: "C#",
      img: "/icons/csharp.png",
    },
    {
      title: "Nextjs",
      img: "/icons/nextjs2.png",
    },
    {
      title: "Git",
      img: "/icons/git2.png",
    },
    {
      title: "Tailwind",
      img: "/icons/tailwindcss2.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <span className="chip">Stack</span>
      <h1 className="my-4 py-4 text-5xl md:text-4xl leading-tight font-bold tracking-tighter">
        Tecnologias
      </h1>
      <div className="flex justify-center w-full">
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
          {list.map((item, index) => (
            <Card
              className="shadow-lg p-10 mb-4 transition-transform transform hover:scale-105 rounded-lg"
              key={index}
            >
              <CardBody className="flex justify-center items-center p-4">
                <Image
                  width={50}
                  height={50}
                  alt={item.title}
                  className="object-cover"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="flex justify-center items-center">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
