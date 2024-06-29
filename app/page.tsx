import Stack from "./components/TechStack";
import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      {/*NAV BAR*/}
      <nav className="flex justify-between p-6 px-4">
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
      <Hero/>

      {/*ABOUT*/}
      <section id="sobre" className="w-full px-4 mx-auto my-4">
        <About />
      </section>

      {/*STACK*/}
      <section id="stack" className="w-full">
        <Stack />
      </section>

      {/*PROJECTS*/}
      <section id="projetos" className="w-full px-4 mx-auto my-4">
        <div className="container px-4 mx-auto">
          <span className="chip">Projetos</span>
          <h1 className="flex my-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter justify-center">Meus projetos</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8"><h1>em construção</h1></div>
          </div>
        </div>
      </section>

      {/*CONTACT*/}
      <section id="contato" className="w-full px-4 mx-auto my-4">
        <div className="container px-4 mx-auto">
          <span className="chip">Conecte-se</span>
          <h1 className="flex my-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter justify-center">Contate-me</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8"><h1>em construção</h1></div>
          </div>
        </div>
      </section>

      {/*FOOTER*/}
      <section id="contato" className="w-full px-4 mx-auto my-4">
        <div className="container px-4 mx-auto">
          <span className="chip">Conecte-se</span>
          <h1 className="flex my-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter justify-center">Contate-me</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8"><h1>em construção</h1></div>
          </div>
        </div>
      </section>
    </>
  );
}
