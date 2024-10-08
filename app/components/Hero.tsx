'use client';

import Image from "next/image";
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Hero() {

  const handleDownload = () => {
    window.open('/CV Fullstack Analia Silva.pdf');
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-20 md:py-28">
      <div className="relative w-full md:w-1/2 px-4 flex justify-center">
          <Image
            src="/icons/pixelavatar2.png"
            alt="Avatar em pixel da Analia"
            width={560}
            height={400}
            className="relative"
          />
      </div>

      <div className="w-full md:w-1/2 px-4">
        <span className="chip">Olá</span>
        <h1 className="my-4 text-5xl md:text-6xl lg:text-7xl leading-tight font-bold tracking-tight">Bem-vindo(a)!</h1>
        <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">Prazer! Sou Analia, Analista de Sistemas.<br /> Seja muito bem vindo e confira o meu portfólio!</p>

        <div className="flex flex-wrap space-x-4">
          <button className="btn btn-primary" onClick={handleDownload}>
            Download CV
          </button>
          <a className="btn btn-outline" href="#contato">Contate-me</a>
        </div>
        <div className="flex my-6">
          <Link href="https://linkedin.com/in/analiavictoria" target="_blank" rel="noopener noreferrer" className="text-[#e46292] hover:text-black mr-4">
            <FaLinkedin size={30} />
          </Link>
          <Link href="https://github.com/analiavictoria" target="_blank" rel="noopener noreferrer" className="text-[#e46292] hover:text-black">
            <FaGithub size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}


