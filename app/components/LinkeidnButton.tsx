'use client';

import Link from "next/link";

const LinkedinButton = () => {
      return(
          <Link href="https://www.linkedin.com/in/analiavictoria/" target="_blank" rel="noopener noreferrer">
            <img
              src="/linkedin.svg"
              alt="Meu perfil do Linkedin"
              className="w-8 h-8"
            />
          </Link>

      )
};

export default LinkedinButton;