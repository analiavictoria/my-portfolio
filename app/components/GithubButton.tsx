'use client';

import Link from 'next/link';

const GithubButton = () => {
    return (
        <Link href="https://github.com/analiavictoria" target="_blank" rel="noopener noreferrer">
            <img 
                src="/github-mark/github-mark.svg" 
                alt="Meu perfil do GitHub"
                className="w-7 h-7 mr-4"
            />
        </Link>
    );
}

export default GithubButton;
