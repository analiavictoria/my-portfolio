'use client';

import React, { useState } from 'react';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import {
  SiGoogle,
  SiGit,
  SiJira,
  SiConfluence,
  SiFigma,
  SiWordpress,
  SiSalesforce,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiTailwindcss,
  SiPython,
  SiSelenium,
  SiCanva,
  SiAdobephotoshop,
  SiCoreldraw,
  SiTotvs,
  SiNotion,
  SiTrello,
  SiMiro,
  SiSlack,
} from 'react-icons/si';
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { BsFileBarGraph } from "react-icons/bs";

const technologies = [
  {
    category: 'Gestão de Projetos, Análise de dados e relatórios',
    items: [
      { title: 'Microsoft Office', icon: <TfiMicrosoftAlt color="#217346" size={32} /> },
      { title: 'Google Workspace', icon: <SiGoogle color="#4285F4" size={32} /> },
      { title: 'Jira', icon: <SiJira color="#0052CC" size={32} /> },
      { title: 'Confluence', icon: <SiConfluence color="#172B4D" size={32} /> },
      { title: 'Notion', icon: <SiNotion color="#000000" size={32} /> },
      { title: 'Trello', icon: <SiTrello color="#007AC2" size={32} /> },
      { title: 'Miro', icon: <SiMiro color="#FFDD33" size={32} /> },
      { title: 'Slack', icon: <SiSlack color="#3F0F3F" size={32} /> },
      { title: 'Teams', icon: <BiLogoMicrosoftTeams color="#4f42b5" size={32} /> },
      { title: 'Power BI', icon: <BsFileBarGraph color="#F2C811" size={32} /> },
      { title: 'Excel', icon: <RiFileExcel2Fill color="#217346" size={32} /> },
    ],
  },
  {
    category: 'Desenvolvimento, automação e testes',
    items: [
      { title: 'React', icon: <SiReact color="#61DAFB" size={32} /> },
      { title: 'Next.js', icon: <SiNextdotjs color="#000000" size={32} /> },
      { title: 'JavaScript', icon: <SiJavascript color="#F7DF1E" size={32} /> },
      { title: 'TypeScript', icon: <SiTypescript color="#3178C6" size={32} /> },
      { title: 'Angular', icon: <SiAngular color="#DD0031" size={32} /> },
      { title: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" size={32} /> },
      { title: 'Git', icon: <SiGit color="#F05032" size={32} /> },
      { title: 'WordPress', icon: <SiWordpress color="#21759B" size={32} /> },
      { title: 'AWS', icon: <FaAws color="#FF9900" size={32} /> },
      { title: 'Azure', icon: <VscAzure color="#0078D4" size={32} /> },
      { title: 'Python', icon: <SiPython color="#3776AB" size={32} /> },
      { title: 'Selenium', icon: <SiSelenium color="#43B02A" size={32} /> },
    ],
  },
  {
    category: 'Ferramentas de design e criação',
    items: [
      { title: 'Figma', icon: <SiFigma color="#F24E1E" size={32} /> },
      { title: 'Canva', icon: <SiCanva color="#00C4CC" size={32} /> },
      { title: 'Photoshop', icon: <SiAdobephotoshop color="#001833" size={32} /> },
      { title: 'CorelDraw', icon: <SiCoreldraw color="#F6821F" size={32} /> },
    ],
  },
  {
    category: 'CRM &  ERP',
    items: [
      { title: 'Salesforce', icon: <SiSalesforce color="#00A1E0" size={32} /> },
      { title: 'TOTVS', icon: <SiTotvs color="#F58634" size={32} /> },
    ],
  },
];

export default function Stack() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 text-center pb-20 max-w-4xl mx-auto">
      <span className="chip mb-4">Stack</span>
      <h1 className="my-10 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-center">
        Tecnologias
      </h1>

      {technologies.map(({ category, items }, index) => (
        <div key={category} className="w-full mb-8">
<button
  onClick={() => toggle(index)}
  className="w-60 mx-auto px-6 py-4 text-center text-lg font-semibold flex justify-center items-center gap-2 whitespace-nowrap
    hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors rounded-md"
  aria-expanded={openIndex === index}
>
  {category}
  <span
  className={`transform transition-transform duration-300 ${
    openIndex === index ? 'rotate-180 text-pink-500' : ''
  }`}
>
  ▼
</span>
</button>

          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out px-6 ${
              openIndex === index ? 'max-h-[1000px] py-6' : 'max-h-0 py-0'
            }`}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {items.map(({ title, icon }) => (
                <Card
                  key={title}
                  className="rounded-lg p-3 shadow-sm transform transition-transform hover:scale-110 flex flex-col items-center justify-center min-w-[80px]"
                  isHoverable
                  isPressable
                  style={{ width: 90, height: 90 }}
                >
                  <CardBody className="flex justify-center items-center p-1">{icon}</CardBody>
                  <CardFooter className="justify-center p-1 text-center">
                    <small className="text-xs font-medium">{title}</small>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
