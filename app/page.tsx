import React from 'react'
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/TechStack";
import Courses from "./components/Courses";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";


export default function Home() {
  return (
    <>
      {/*NAV BAR*/}
      <NavBar />

      {/*HERO*/}
      <section className="min-h-screen w-full px-4 mx-auto my-4 flex items-center justify-center">
        <Hero />
      </section>

      {/*ABOUT*/}
      <section id="sobre" className="min-h-screen w-full px-4 mx-auto my-4 flex items-center justify-center">
        <About />
      </section>

      {/*STACK*/}
      <section id="stack" className="min-h-screen w-full px-4 mx-auto my-4 flex items-center justify-center">
        <Stack />
      </section>

      {/*COURSES */}
      <section id="cursos" className="w-full px-4 mx-auto my-4 flex items-center justify-center">
       <Courses />
      </section>

      {/* PROJECTS */}
      <section id="projetos" className="w-full px-4 mx-auto my-4 flex items-center justify-center">
       <Projects />
      </section>

      {/* CONTACT */}
      <section id="contato" className="w-full px-4 mx-auto my-4 flex items-center justify-center">
       <Contact />
      </section>


      {/*FOOTER*/}
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-center">
          <Link href="#inicio" className="pr-5 hover:text-[#f54a88]">Início
          </Link>
          <div className="flex space-x-4">
            <a href="https://github.com/analiavictoria" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#f54a88]">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/analiavictoria" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#f54a88]">
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
