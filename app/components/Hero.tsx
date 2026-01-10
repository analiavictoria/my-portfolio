'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AVATAR_SRC = '/icons/pixelavatar2.png';
const CV_PATH = '/Analia Silva CV.pdf';
const LINKEDIN_URL = 'https://linkedin.com/in/analiavictoria';
const GITHUB_URL = 'https://github.com/analiavictoria';

export default function Hero() {
  const handleDownload = () => window.open(CV_PATH);

  return (
    <section className="flex flex-col md:flex-row justify-center items-center py-20 md:py-28">
      {/* Avatar */}
      <div className="relative w-full md:w-1/2 px-4 flex justify-center">
        <Image
          src={AVATAR_SRC}
          alt="Avatar em pixel da Analia"
          width={560}
          height={400}
          className="relative"
        />
      </div>

      {/* Text and Buttons */}
      <div className="w-full md:w-1/2 px-4">
        <span className="chip">Olá</span>
        <h1 className="my-4 text-5xl md:text-6xl lg:text-7xl leading-tight font-bold tracking-tight">
          Bem-vindo(a)!
        </h1>
        <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
          Prazer! Sou Analia, Analista de Sistemas.
          <br />
          Seja muito bem vindo e confira o meu portfólio!
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap space-x-4">
          <button className="btn btn-primary" onClick={handleDownload}>
            Download CV
          </button>
          <a className="btn btn-outline" href="#contato">
            Contate-me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex my-6">
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e46292] hover:text-black mr-4"
          >
            <FaLinkedin size={30} />
          </Link>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e46292] hover:text-black"
          >
            <FaGithub size={30} />
          </Link>
        </div>
      </div>
    </section>
  );
}
