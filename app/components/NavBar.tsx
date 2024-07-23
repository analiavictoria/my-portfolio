'use client';
import { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="inicio" className="flex justify-between p-6 px-4 relative z-50">
      <div className="flex justify-between items-center w-full">
        <div className="w-1/2 xl:w-1/3">
          <p className="text-lg font-bold link">Analia Silva</p>
        </div>

        {/* Menu for large screens */}
        <ul className="hidden xl:flex xl:justify-center items-center">
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

        {/* Mobile menu icon and dropdown */}
        <div className="xl:hidden relative">
          <button
            onClick={toggleMenu}
            className="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          {/* Mobile menu dropdown */}
          {isOpen && (
            <div className="absolute top-0 right-0 mt-12 bg-gray-100 shadow-lg rounded-lg p-4 w-30 z-50">
              <ul className="flex flex-col items-start">
                <li className="my-2 w-full">
                  <a className="block w-full px-2 py-1 link" href="#inicio">Início</a>
                </li>
                <li className="my-2 w-full">
                  <a className="block w-full px-2 py-1 link" href="#sobre">Sobre</a>
                </li>
                <li className="my-2 w-full">
                  <a className="block w-full px-2 py-1 link" href="#stack">Stack</a>
                </li>
                <li className="my-2 w-full">
                  <a className="block w-full px-2 py-1 link" href="#projetos">Projetos</a>
                </li>
                <li className="my-2 w-full">
                  <a className="block w-full px-2 py-1 link" href="#contato">Contato</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
