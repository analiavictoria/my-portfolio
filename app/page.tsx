import Image from "next/image";
import DownloadButton from "./components/DownloadButton";
import LinkedinButton from "./components/LinkedinButton";
import GithubButton from "./components/GithubButton";
import Stack from "./components/TechStack";
import PageVisits from "./components/PageVisits";
import About from "./components/About";

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
              <a className="link" href="#">Início</a>
            </li>
            <li className="mr-6">
              <a className="link" href="#">Sobre</a>
            </li>
            <li className="mr-6">
              <a className="link" href="#">Stack</a>
            </li>
            <li className="mr-6">
              <a className="link" href="#">Projetos</a>
            </li>
            <li className="mr-6">
              <a className="link" href="#">Contato</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="px-4">
       <PageVisits/>
      </div>
      

      {/*HERO*/}
      <div className="flex flex-col md:flex-row justify-center items-center py-20 md:py-28">
        
      <div className="w-full md:w-1/2 px-4 flex justify-end">
          <Image
            src="/pixel (1).png"
            className="justify-center"
            alt="Avatar em pixel da Analia"
            width={500}
            height={300}
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <span className="chip">Olá</span>
          <h1 className="my-4 text-xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">Bem-vindo(a)!</h1>
          <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">Prazer! Sou Analia, desenvolvedora front-end.<br/> Seja muito bem vindo e confira o meu portfólio!</p>

          <div className="flex flex-wrap space-x-4">
            <DownloadButton/>
            <button className="btn btn-outline">Contate-me</button>
          </div>
          <div className="flex m-6">
            <GithubButton/>
            <LinkedinButton/>
          </div>
        </div>
      </div>


      {/*ABOUT*/}
      <section className="w-full px-4 mx-auto my-4">
        <About/>
      </section>
      
      {/*STACK*/}
     <section className="w-full">
        <Stack/>
      </section>
      

     {/*PROJECTS*/}
     <section className="w-full px-4 mx-auto my-4">
        <div className="container px-4 mx-auto">
          <span className="chip">Projetos</span>
          <h1 className="flex my-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter justify-center">Meus projetos</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8"><h1>em construção</h1>
            </div>
          </div>
        </div>
      </section>

      {/*CONTACT*/}
      <section className="w-full px-4 mx-auto my-4">
        <div className="container px-4 mx-auto">
          <span className="chip">Conecte-se</span>
          <h1 className="flex my-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter justify-center">Contate-me</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8"><h1>em construção</h1>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

