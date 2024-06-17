import Image from "next/image";
import DownloadButton from "./components/DownloadButton";
import LinkedinButton from "./components/LinkeidnButton";
import GithubButton from "./components/GithubButton";
import Certifications from "./components/Certifications";

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


      {/*HERO*/}
      <div className="flex flex-col md:flex-row justify-center items-center py-20 md:py-28">
      <div className="w-full md:w-1/2 px-4 flex justify-end">
          <Image
            src="/pixelavatar.png"
            className="justfy-center"
            alt="Avatar em pixel da Analia"
            width={300}
            height={300}
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <span className="chip">Olá</span>
          <h1 className="my-4 text-xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">Bem-vindo(a)!</h1>
          <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">Prazer! Sou Analia, desenvolvedora front-end.</p>
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
        <div className="container px-4 mx-auto">
          <span className="chip">Sobre</span>
          <h1 className="my-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">Sobre Mim</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="h-full p-8 text-center">
                <div className="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center">
                <img
                  src="/curriculo.png"
                  alt="Icone de graduação"
                  className=""
                />
                </div>
                <h3 className="mb-3 text-xl md:text-2xl leading-tight font-bold">Experiência</h3>
                <p className="text-coolGray-500 font-medium">3+ anos de experiência em Desenv. de Software <br/>
                e 2 anos de experiência em Gerenc. de Projetos</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="h-full p-8 text-center rounded-md">
                <div className="inline-flex h-16 w-16 mb-7 mx-auto items-center justify-center">
                <img
                  src="/diploma2.png"
                  alt="Icone de graduação"
                  className=""
                />
                </div>
                <h3 className="mb-3 text-xl md:text-2xl leading-tight font-bold">Educação</h3>
                <p className="text-coolGray-500 font-medium">Bacharel em Sistemas de Informação</p>
                <p className="text-coolGray-500">Centro Universitário Fametro (2020-2023)</p>
                <Certifications></Certifications>
                <p className="text-coolGray-500">FPF Tech (2019, 5 meses)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/*STACK*/}
     <section className="w-full px-4 mx-auto my-4">
        <div className="container px-4 mx-auto">
          <span className="chip">Stack</span>
          <h1 className="my-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">Tecnologias</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8"><h1>hi</h1>
            </div>
          </div>
        </div>
      </section>
      

     {/*PROJECTS*/}
     <section className="w-full px-4 mx-auto my-4">
        <div className="container px-4 mx-auto">
          <span className="chip">Stack</span>
          <h1 className="my-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">Meus projetos</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8"><h1>hi</h1>
            </div>
          </div>
        </div>
      </section>

      {/*CONTACT*/}
      <section className="w-full px-4 mx-auto my-4">
        <div className="container px-4 mx-auto">
          <span className="chip">Conecte-se</span>
          <h1 className="my-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">Contate-me</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8"><h1>hi</h1>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

