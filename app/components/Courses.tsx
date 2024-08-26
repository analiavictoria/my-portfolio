'use client';

export default function Courses() {
  return (
    <div className="container px-4 py-20 mx-auto text-center">
      <span className="chip">Qualificações</span>
      <h1 className="my-10 text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tighter">Meus cursos</h1>

      <div className="w-full">
        <p className="bg-gray-100 border-l-4 border-pink-500 text-gray-700 p-4 rounded-lg hover:bg-pink-100 transition duration-300 w-3/5 mx-auto">
          Link de acesso disponível somente nos certificados que não constam dados sensíveis.
        </p>
      </div>
      <div className="flex justify-center p-10">
        <ul className="text-justify list-disc">
          <li>Inglês Upper Intermediate (Centro de Idiomas Martha Falcão, 4 anos, 2013)
          </li>
          <li><a className="link" href="https://drive.google.com/file/d/18cdU1DaMW3U0JgXumvlDATLcaLNHtOEP/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Certificado disponível">Ética Empresarial</a> (Fundação Getúlio Vargas - FGV, 5h, 2019)
          </li>
          <li>Relacionamento Interpessoal (Secretaria Municipal do Trabalho, Empreendedorismo e Inovação, 20h, 2019)</li>
          <li>Testes de Software Web (Instituto Flexpeak, 49h, 2022)
          </li>
          <li><a className="link" href="https://drive.google.com/file/d/1yd8Oz8BQIsjkC5gFhI9JdYY6so68qU9M/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Certificado disponível">Android Embarcardo</a> (Sidia Instituto de Ciência e Tecnologia, 20h, 2023)
          </li>
          <li><a className="link" href="https://drive.google.com/file/d/1fZ1Aur8exQ_1tG8qcVLsxY1rjvQXwxqR/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Certificado disponível">Leadership communication</a> (FIAP, 40h, 2024)
          </li>
          <li><a className="link" href="https://www.maismulheres.tech/certificates/oaduyedaml" target="_blank" rel="noopener noreferrer" title="Certificado disponível">Introdução à Cloud Computing & Azure</a> (WoMakersCode, 20h, 2024)</li>
          <li><a className="link" href="https://www.credly.com/badges/3a2a0524-3072-4b4d-a006-f3fe932c293e/public_url" target="_blank" rel="noopener noreferrer" title="Certificado disponível">Fundamentos de Gerenciamento de Projetos</a> (IBM SkillsBuild, 3h, 2024)
          </li>
        </ul>
      </div>

    </div>
  )
}