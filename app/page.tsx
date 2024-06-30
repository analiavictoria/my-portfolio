import Stack from "./components/TechStack";
import About from "./components/About";
import Hero from "./components/Hero";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/*NAV BAR*/}
      <nav id="nav" className="flex justify-between p-6 px-4">
        <div className="flex justify-between items-center w-full">
          <div className="w-1/2 xl:w-1/3">
            <p className="text-lg font-bold">Analia Silva</p>
          </div>
          <ul className="hidden xl:flex xl:justify-center">
            <li className="mr-6">
              <a className="link" href="#inicio">Início</a>
            </li>
            <li className="mr-6">
              <a className="link" href="#sobre">Sobre</a>
            </li>
            <li className="mr-6">
              <a className="link" href="#stack">Stack</a>
            </li>
            <li className="mr-6">
              <a className="link" href="#projetos">Projetos</a>
            </li>
            <li className="mr-6">
              <a className="link" href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </nav>

      {/*HERO*/}
      <Hero />

      {/*ABOUT*/}
      <section id="sobre" className="w-full px-4 mx-auto my-4">
        <About />
      </section>

      {/*STACK*/}
      <section id="stack" className="w-full">
        <Stack />
      </section>

      {/* PROJECTS */}
      <section id="projetos" className="w-full px-4 mx-auto my-4">
        <div className="container px-4 mx-auto text-center">
          <span className="chip">Projetos</span>
          <h1 className="my-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">Meus projetos</h1>
          <div className="flex flex-wrap justify-center items-center -mx-4">
            <div className="px-4 mb-8">
              <p className="flex justify-center border-b border-gray-300 p-6 lg:static lg:w-auto lg:rounded-xl lg:border">
                <code className="font-mono">em construção</code>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="w-full px-4 mx-auto my-4">
        <div className="container px-4 mx-auto text-center">
          <span className="chip">Conecte-se</span>
          <h1 className="my-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">Contate-me</h1>
          <div className="flex flex-wrap justify-center items-center -mx-4">
            <div className="px-4 mb-8">
              <p className="flex justify-center border-b border-gray-300 p-6 lg:static lg:w-auto lg:rounded-xl lg:border">
                <code className="font-mono">em construção</code>
              </p>
            </div>
          </div>
        </div>
      </section>


      {/*FOOTER*/}
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-center">
          <Link href="#nav" className="pr-5">Início
          </Link>
          <div className="flex space-x-4">
            <a href="https://github.com/analiavictoria" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/analiavictoria" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="container mx-auto text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Analia Silva</p>
        </div>
      </footer>
    </>
  );
}
