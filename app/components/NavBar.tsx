'use client';
import { useState } from 'react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <li className="mr-6">
    <a className="link" href={href}>
      {label}
    </a>
  </li>
);

const MobileNavLink = ({ href, label }: { href: string; label: string }) => (
  <li className="my-2 w-full">
    <a className="block w-full px-2 py-1 link" href={href}>
      {label}
    </a>
  </li>
);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav id="inicio" className="flex justify-between p-6 px-4 relative z-50">
      <div className="flex justify-between items-center w-full">
        <div className="w-1/2 xl:w-1/3">
          <p className="text-lg font-bold link">Analia Silva</p>
        </div>

        {/* Desktop menu */}
        <ul className="hidden xl:flex xl:justify-center items-center">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="xl:hidden relative">
          <button
            onClick={toggleMenu}
            className="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-0 right-0 mt-12 bg-gray-100 shadow-lg rounded-lg p-4 w-30 z-50">
              <ul className="flex flex-col items-start">
                {navLinks.map((link) => (
                  <MobileNavLink key={link.href} {...link} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
