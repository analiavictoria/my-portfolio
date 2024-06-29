'use client';

import Image from "next/image";
import Link from 'next/link';

export default function Hero() {

    const handleDownload = () => {
        window.open('/CV PT BR Fullstack Analia Silva.pdf');
      };

    return (
        <div id="inicio" className="flex flex-col md:flex-row justify-center items-center py-20 md:py-28">
        <div className="w-full md:w-1/2 px-4 flex justify-end">
          <Image
            src="/pixel (1).png"
            alt="Avatar em pixel da Analia"
            width={500}
            height={300}
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <span className="chip">Olá</span>
          <h1 className="my-4 text-xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">Bem-vindo(a)!</h1>
          <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">Prazer! Sou Analia, desenvolvedora full stack.<br /> Seja muito bem vindo e confira o meu portfólio!</p>

          <div className="flex flex-wrap space-x-4">
          <button className="btn btn-primary" onClick={handleDownload}>
      Download CV
    </button>
            <a className="btn btn-outline" href="#contato">Contate-me</a>
          </div>
          <div className="flex m-6">
          <Link href="https://github.com/analiavictoria" target="_blank" rel="noopener noreferrer">
          <img 
              src="/github-mark/github-mark.svg" 
              alt="Meu perfil do GitHub"
              className="w-7 h-7 mr-4"
          />
      </Link>
      <Link href="https://www.linkedin.com/in/analiavictoria/" target="_blank" rel="noopener noreferrer">
            <img
              src="/linkedin.svg"
              alt="Meu perfil do Linkedin"
              className="w-8 h-8"
            />
          </Link>
          </div>
        </div>
      </div>
    );
}


