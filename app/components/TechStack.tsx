"use client"

import React, { useState } from "react"
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
} from "react-icons/si"
import { TfiMicrosoftAlt } from "react-icons/tfi"
import { BiLogoMicrosoftTeams } from "react-icons/bi"
import { RiFileExcel2Fill } from "react-icons/ri"
import { FaAws } from "react-icons/fa"
import { VscAzure } from "react-icons/vsc"
import { BsFileBarGraph } from "react-icons/bs"

const groupedTechnologies = [
  {
    category: '📈 Gestão e Análise',
    items: [
      { title: 'Microsoft Office', icon: <TfiMicrosoftAlt color="#217346" size={30} /> },
      { title: 'Google Workspace', icon: <SiGoogle color="#4285F4" size={30} /> },
      { title: 'Jira', icon: <SiJira color="#0052CC" size={30} /> },
      { title: 'Confluence', icon: <SiConfluence color="#172B4D" size={30} /> },
      { title: 'Notion', icon: <SiNotion color="#000000" size={30} /> },
      { title: 'Trello', icon: <SiTrello color="#007AC2" size={30} /> },
      { title: 'Miro', icon: <SiMiro color="#FFDD33" size={30} /> },
      { title: 'Slack', icon: <SiSlack color="#3F0F3F" size={30} /> },
      { title: 'Teams', icon: <BiLogoMicrosoftTeams color="#4f42b5" size={30} /> },
      { title: 'Power BI', icon: <BsFileBarGraph color="#F2C811" size={30} /> },
      { title: 'Excel', icon: <RiFileExcel2Fill color="#217346" size={30} /> },
    ],
  },
  {
    category: '⚙️ Desenvolvimento',
    items: [
      { title: 'React', icon: <SiReact color="#61DAFB" size={30} /> },
      { title: 'Next.js', icon: <SiNextdotjs color="#000000" size={30} /> },
      { title: 'JavaScript', icon: <SiJavascript color="#F7DF1E" size={30} /> },
      { title: 'TypeScript', icon: <SiTypescript color="#3178C6" size={30} /> },
      { title: 'Angular', icon: <SiAngular color="#DD0031" size={30} /> },
      { title: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" size={30} /> },
      { title: 'Git', icon: <SiGit color="#F05032" size={30} /> },
      { title: 'WordPress', icon: <SiWordpress color="#21759B" size={30} /> },
      { title: 'AWS', icon: <FaAws color="#FF9900" size={30} /> },
      { title: 'Azure', icon: <VscAzure color="#0078D4" size={30} /> },
      { title: 'Python', icon: <SiPython color="#3776AB" size={30} /> },
      { title: 'Selenium', icon: <SiSelenium color="#43B02A" size={30} /> },
    ],
  },
  {
    category: '🎨 Design e criação',
    items: [
      { title: 'Figma', icon: <SiFigma color="#F24E1E" size={40} /> },
      { title: 'Canva', icon: <SiCanva color="#00C4CC" size={40} /> },
      { title: 'Photoshop', icon: <SiAdobephotoshop color="#001833" size={40} /> },
      { title: 'CorelDraw', icon: <SiCoreldraw color="#F6821F" size={40} /> },
    ],
  },
  {
    category: '💼 CRM &  ERP',
    items: [
      { title: 'Salesforce', icon: <SiSalesforce color="#00A1E0" size={40} /> },
      { title: 'TOTVS', icon: <SiTotvs color="#F58634" size={40} /> },
    ],
  },
]

export default function TecnologiasPage() {
  const [filter, setFilter] = useState<string>("Todas")

  // Junta todos os ícones para o filtro "Todas"
  const allItems = groupedTechnologies.flatMap((g) => g.items).slice(0, 29)

  const filteredGroups =
    filter === "Todas"
      ? groupedTechnologies
      : groupedTechnologies.filter((g) => g.category === filter)

  return (
    <main className="container px-4 py-20 mx-auto text-center">
      <span className="chip">Stack</span>
      <h1 className="my-10 text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tighter">
        Tecnologias
      </h1>

      {/* Botões de filtro */}
      <div className="mb-6 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setFilter("Todas")}
          className={`px-4 py-2 rounded-full font-semibold ${
            filter === "Todas"
              ? "bg-pink-400 text-white"
              : "bg-pink-200 text-gray-800 hover:bg-pink-300"
          }`}
        >
          Todas
        </button>

        {groupedTechnologies.map(({ category }) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full font-semibold ${
              filter === category
                ? "bg-pink-400 text-white"
                : "bg-pink-200 text-gray-800 hover:bg-pink-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Lista de tecnologias */}
      <div className="space-y-10">
        {filter === "Todas" ? (
          // Quando for "Todas", usa o grid com coração
          <div className="heart-shape mx-auto max-w-[460px]">
            {allItems.map(({ title, icon }) => (
              <div
                key={title}
                title={title}
                className="flex items-center justify-center cursor-pointer p-2 rounded-md transition-transform duration-200 hover:scale-110 hover:bg-pink-50"
                style={{ width: 48, height: 48 }}
              >
                {icon}
              </div>
            ))}
          </div>
        ) : (
          // Se não, mostra por categoria normal
          filteredGroups.map(({ items }) => (
            <section key={items[0].title}>
              <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                {items.map(({ title, icon }) => (
                  <div
                    key={title}
                    className="flex flex-col items-center justify-center gap-2 cursor-pointer p-2 rounded-md transition-transform duration-200 hover:scale-110 hover:bg-pink-50"
                    style={{ minWidth: "120px", maxWidth: "120px" }}
                    title={title}
                  >
                    <div>{icon}</div>
                    <span className="text-sm font-semibold text-gray-900 hover:text-pink-500">{title}</span>
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </main>
  )
}
