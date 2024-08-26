'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function About() {
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    const handleCertification = () => {
        window.open('https://drive.google.com/file/d/1DQKu1scTSg1ornkhXk60WK0SGiRIC_W5/view?usp=sharing');
    };

    return (
        <div className="justify-center items-center px-4 text-center pb-20">
            <span className="chip">Sobre</span>
            <h1 className="my-10 text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tighter">
                Sobre Mim
            </h1>
                <p className="flex items-center justify-center text-base px-20 pb-20 text-justify ">
                    Nascida em 1998, natural de Manaus, sou formada em Sistemas de Informação pelo Centro Universitário Fametro e como Programadora Web pela FPF Tech. Sou bilíngue e falo português nativo e inglês C1. Minha trajetória acadêmica e profissional abrange mais de 3 anos de prática em desenvolvimento de software e 2 anos em gerenciamento de projetos, após estagiar no Sidia Instituto de Ciência e Tecnologia atuando em celulares e tablets da Samsung. Atualmente sou aluna AWS re/Start.
                </p>
           
            {/*CARDS*/}
            <div className="flex flex-wrap justify-center gap-20">
                <div className="md:[30rem] h-auto px-12 mb-8 shadow-lg p-10 transition-transform transform hover:scale-105 rounded-lg">
                    <div className="inline-flex h-16 w-16 mb-7 mx-auto">
                        <img src="/icons/curriculo.png" alt="Icone de graduação" />
                    </div>
                    <h3 className="mb-3 text-xl md:text-2xl leading-tight font-bold">
                        Experiência
                    </h3>
                    <p className="text-coolGray-500 font-medium">
                        3+ anos de experiência em Desenv. de Software <br />
                        e 2 anos de experiência em Gerenc. de Projetos
                    </p>
                </div>
                <div className="md:[30rem] h-auto px-12 mb-8 shadow-lg p-10 transition-transform transform hover:scale-105 rounded-lg">
                    <div className="inline-flex h-16 w-16 mb-7 mx-auto">
                        <img src="/icons/diploma2.png" alt="Icone de graduação" />
                    </div>
                    <h3 className="mb-3 text-xl md:text-2xl leading-tight font-bold">
                        Educação
                    </h3>
                    <p className="text-coolGray-500 font-medium">
                        Bacharel em Sistemas de Informação
                    </p>
                    <p className="text-coolGray-500">
                        Centro Universitário Fametro (2020-2023)
                    </p>
                    <div className="relative group">
                        <a
                            className="cursor-pointer underline text-coolGray-500 font-medium mt-2 relative z-10"
                            onClick={handleCertification}
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}
                        >
                            Programador Web
                        </a>
                        {isTooltipVisible && (
                            <div className="absolute bg-pink-400 text-white text-sm px-2 py-1 rounded-md whitespace-nowrap shadow-lg top-full left-1/2 transform -translate-x-1/2 opacity-100 pointer-events-auto transition-opacity duration-300">
                                Clique para conferir o meu certificado!
                            </div>
                        )}
                    </div>
                    <p className="text-coolGray-500">
                        FPF Tech (2019, 5 meses)
                    </p>
                </div>
            </div>


        </div>
    );
}
