interface Project {
  imageUrl: string;
  title: string;
  description: string;
  sourceCodeUrl: string;
  livePreviewUrl: string;
}

const projects: Project[] = [
  {
    imageUrl: '/icons/calcfree.png',
    title: 'Calculadora Freelancer',
    description: 'Projeto-desafio para o processo seletivo do Reprograma, feito com HTML, CSS e vanilla Javascript.',
    sourceCodeUrl: 'https://github.com/analiavictoria/desafio-reprograma',
    livePreviewUrl: 'https://calculadorareprograma-analia.netlify.app'
  },
  {
    imageUrl: '/icons/coinli.png',
    title: 'Coin Literacy',
    description: 'Trabalho de Conclusão de Curso, um sistema web para educação financeira em tecnologias disruptivas como blockchain e criptomoedas. Feito com React e Material UI.',
    sourceCodeUrl: 'https://github.com/analiavictoria/coin_literacy',
    livePreviewUrl: 'https://coin-literacy.vercel.app'
  },
  {
    imageUrl: '/icons/meaw.png',
    title: 'Meawdota',
    description: 'Projeto acadêmico em Angular, um site organizado para adoção, com o intuito de reduzir a necessidade de divulgação em redes sociais.',
    sourceCodeUrl: 'https://github.com/analiavictoria/meawdota',
    livePreviewUrl: 'https://meawdota.netlify.app/home'
  },
  
  
];

const Projects: React.FC = () => {
  return (
    <div className="container px-4 py-20 mx-auto text-center">
      <span className="chip">Projetos</span>
      <h1 className="my-10 text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tighter">
        Meus projetos
      </h1>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg p-4 transition-transform transform hover:scale-105 mx-auto sm:mx-0">
              <img className="w-full" src={project.imageUrl} alt={project.title} />
              <div className="px-6 py-6">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base">{project.description}</p>
              </div>
              <div className="px-6 pb-8 flex justify-evenly">
                <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Github
                </a>
                <a href={project.livePreviewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
