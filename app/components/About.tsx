'use client';

import React, { useState } from 'react';

export default function About() {
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    const handleCertification = () => {
        window.open('https://drive.google.com/file/d/1DQKu1scTSg1ornkhXk60WK0SGiRIC_W5/view?usp=sharing');
    };

    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="container px-4 mx-auto text-center">
                <span className="chip">Sobre</span>
            </div>
            <h1 className="flex my-4 text-3xl md:text-5xl leading-tight font-bold tracking-tighter justify-center">
                Sobre Mim
            </h1>
            <div className="pb-8">
                <button onClick={toggle} className='flex items-center space-x-2 px-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="play" className="w-5 h-5">
                        <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
                    </svg>
                    <span>Saiba mais</span>
                </button>

                <p style={{ display: showMe ? "block" : "none" }} className='flex items-center space-x-2 px-20 py-5'>
                    Nascida em 1998, natural de Manaus, sou formada em Sistemas de Informação pelo Centro Universitário Fametro e como Programadora Web pela FPF Tech. Sou bilíngue e falo português nativo e inglês C1. Minha experiência acadêmica e profissional abrange mais de 3 anos de prática em desenvolvimento de software e 2 anos em gerenciamento de projetos.
                </p>
            </div>
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-8">
                    <div className="h-full p-8 text-center">
                        <div className="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center">
                            <img src="/curriculo.png" alt="Icone de graduação" />
                        </div>
                        <h3 className="mb-3 text-xl md:text-2xl leading-tight font-bold">
                            Experiência
                        </h3>
                        <p className="text-coolGray-500 font-medium">
                            3+ anos de experiência em Desenv. de Software <br />
                            e 2 anos de experiência em Gerenc. de Projetos
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-8">
                    <div className="h-full p-8 text-center rounded-md">
                        <div className="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center">
                            <img src="/diploma2.png" alt="Icone de graduação" />
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
        </div>
    );
}
