'use client';

import React, { useState } from 'react';

export default function About() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [hovered, setHovered] = useState<'none' | 'experience' | 'education'>('none');

  const handleCertification = () => {
    window.open(
      'https://drive.google.com/file/d/19O9lSwrGHIYtGKpYw2SmPr2X0Rh_ww9_/view?usp=sharing',
    );
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 text-center">
      <span className="chip">Sobre</span>
      <h1 className="my-10 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-center">Sobre Mim</h1>
      <p className="text-[#222] text-justify leading-relaxed mb-16 px-4 md:px-0">
        Nascida em 1998, natural de Manaus, sou formada em Sistemas de Informação pelo Centro
        Universitário Fametro e em Programação Web pela FPF Tech. Sou bilíngue, com português
        nativo e inglês em nível C1. Minha trajetória acadêmica e profissional abrange mais
        de 3 anos de prática em desenvolvimento de software e 2 anos em gerenciamento de
        projetos, tendo estagiado no Sidia Instituto de Ciência e Tecnologia, onde atuei em
        projetos relacionados a celulares e tablets da Samsung. Atualmente, sou aluna do programa
        AWS re/Start. Possuo habilidades interpessoais desenvolvidas, com tendência à liderança,
        sendo prestativa, perspicaz e cordial. Tenho uma comunicação eficaz e não temo falar
        em público, o que me permite interagir de forma assertiva e colaborativa em diversos
        ambientes profissionais.
      </p>

      <ul className="flex flex-col sm:flex-row justify-center gap-12">
        {/* Educação */}
        <li
          onMouseEnter={() => setHovered('education')}
          onMouseLeave={() => setHovered('none')}
          className={`flex flex-col items-center cursor-pointer transform transition-transform duration-300 ${
            hovered === 'education' ? 'scale-105' : 'scale-100'

          }`}
        >
          <img
            src="/icons/diploma.png"
            alt="Ícone Diploma"
            className="w-12 h-12 mb-4"
            draggable={false}
          />
          <h3 className="mb-2 font-semibold text-xl text-gray-900">Educação</h3>
          <p className="mt-2 text-pink-500 font-semibold focus:outline-none">
            Bacharel em Sistemas de Informação
          </p>
          <p className="text-gray-700 font-normal max-w-xs">
            Centro Universitário Fametro (2020-2023)
          </p>
          <button
            onClick={handleCertification}
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
            className="mt-2 underline text-pink-500 font-semibold focus:outline-none"
          >
            Programador Web
          </button>
          {tooltipVisible && (
            <span className="block mt-1 text-xs text-white bg-pink-400 rounded px-2 py-1">
              Clique para conferir o meu certificado!
            </span>
          )}
          <p className="text-gray-500 mt-1 max-w-xs">FPF Tech (2019, 5 meses)</p>
        </li>

        {/* Experiência */}
        <li
          onMouseEnter={() => setHovered('experience')}
          onMouseLeave={() => setHovered('none')}
          className={`flex flex-col items-center cursor-pointer transform transition-transform duration-300 ${
             hovered === 'experience' ? 'scale-105' : 'scale-100'
          }`}
        >
          <img
            src="/icons/curriculo.png"
            alt="Ícone Currículo"
            className="w-12 h-12 mb-4"
            draggable={false}
          />
          <h3 className="mb-2 font-semibold text-xl text-gray-900">Experiência</h3>
          <p className="text-gray-600 max-w-xs leading-snug">
            3+ anos em Desenvolvimento de Software <br /><br />
            2 anos em Gerenciamento de Projetos
          </p>
        </li>
      </ul>
    </section>
  );
}
