"use client";

import { useState } from "react";
import { CheckCircle, Hourglass } from "lucide-react";

const courses = [
  {
    title: "Inglês Upper Intermediate",
    url: "https://drive.google.com/file/d/1DhCi38IdiMu2iwzcyk3_eJ4YMklzY4rm/view?usp=sharing",
    institution: "Centro de Idiomas Martha Falcão",
    hours: "4 anos",
    year: "2013",
    category: "Idiomas",
    badgeCredly: false,
    status: "finalizado",
  },
  {
    title: "Relacionamento Interpessoal",
    url: "https://drive.google.com/file/d/1GX-w8Xlg9bSyJeqIFJUVy36CfeJZ92Bh/view?usp=sharing",
    institution: "Secretaria Municipal do Trabalho, Empreendedorismo e Inovação",
    hours: "20h",
    year: "2019",
    category: "Soft Skills",
    badgeCredly: false,
    status: "finalizado",
  },
  {
    title: "Ética Empresarial",
    url: "https://drive.google.com/file/d/18cdU1DaMW3U0JgXumvlDATLcaLNHtOEP/view?usp=sharing",
    institution: "Fundação Getúlio Vargas - FGV",
    hours: "5h",
    year: "2019",
    category: "Soft Skills",
    badgeCredly: false,
    status: "finalizado",
  },
  {
    title: "Noções de documentação e arquivo",
    url: "https://drive.google.com/file/d/19Ho4gUS5BmI2yLJKuRZ1Nml8rUzyc__A/view?usp=sharing",
    institution: "Grupo Fametro",
    hours: "4h",
    year: "2021",
    category: "Gestão",
    badgeCredly: false,
    status: "finalizado",
  },
  {
    title: "Testes de Software Web",
    url: "https://drive.google.com/file/d/1mePGtQj65A6LieQeNhrpihtp0wI6v4_Z/view?usp=sharing",
    institution: "Instituto Flexpeak",
    hours: "49h",
    year: "2022",
    category: "Tecnologia",
    badgeCredly: false,
    status: "finalizado",
  },
  {
    title: "Android Embarcardo",
    url: "https://drive.google.com/file/d/1yd8Oz8BQIsjkC5gFhI9JdYY6so68qU9M/view?usp=sharing",
    institution: "Sidia Instituto de Ciência e Tecnologia",
    hours: "20h",
    year: "2023",
    category: "Tecnologia",
    badgeCredly: false,
    status: "finalizado",
  },
  {
    title: "Leadership communication",
    url: "https://drive.google.com/file/d/1fZ1Aur8exQ_1tG8qcVLsxY1rjvQXwxqR/view?usp=sharing",
    institution: "FIAP",
    hours: "40h",
    year: "2024",
    category: "Gestão",
    badgeCredly: false,
    status: "finalizado",
  },
  {
    title: "Introdução à Cloud Computing & Azure",
    url: "https://www.maismulheres.tech/certificates/oaduyedaml",
    institution: "WoMakersCode",
    hours: "20h",
    year: "2024",
    category: "Tecnologia",
    badgeCredly: false,
    status: "finalizado",
  },
  {
    title: "Fundamentos de Gerenciamento de Projetos",
    url: "https://www.credly.com/badges/3a2a0524-3072-4b4d-a006-f3fe932c293e/public_url",
    institution: "IBM SkillsBuild",
    hours: "3h",
    year: "2024",
    category: "Gestão",
    badgeCredly: true,
    status: "finalizado",
  },
  {
    title: "Introdução ao FinOps",
    url: "http://verify.skilljar.com/c/hg2doxieg6or",
    institution: "The FinOps Foundation",
    hours: "1.5h",
    year: "2024",
    category: "Tecnologia",
    badgeCredly: true,
    status: "finalizado",
  },
  {
    title: "AWS re/Start",
    institution: "Campinho Digital",
    hours: "350h",
    category: "Tecnologia",
    badgeCredly: false,
    status: "cursando",
  },
];

const categoryColors: Record<string, string> = {
  Idiomas: "bg-purple-200 text-purple-800",
  "Soft Skills": "bg-yellow-200 text-yellow-800",
  Tecnologia: "bg-blue-200 text-blue-800",
  Gestão: "bg-green-200 text-green-800",
};

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(courses.map((c) => c.category)))];

  const filteredCourses =
    selectedCategory === "Todos"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <div className="container px-4 py-20 mx-auto text-center">
      <span className="chip">Qualificações</span>
      <h1 className="my-10 text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tighter">
        Meus cursos
      </h1>

      <div className="flex justify-center mb-10 gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full font-semibold transition ${
              selectedCategory === cat
                ? "bg-pink-400 text-white"
                : "bg-pink-200 text-gray-700 hover:bg-pink-300"
            }`}
            title={`Filtrar por categoria: ${cat}`}
          >
            {cat === "Idiomas" && "🌐 "}
            {cat === "Soft Skills" && "💬 "}
            {cat === "Tecnologia" && "🖥️ "}
            {cat === "Gestão" && "📊 "}
            {cat}
          </button>
        ))}
      </div>

      <ul className="text-justify max-w-xl mx-auto">
        {filteredCourses.map((course, i) => (
          <li key={i} className="mb-6 flex items-start gap-2">
            <span
              className="mt-1 text-pink-500"
              title={course.status === "cursando" ? "Cursando" : "Concluído"}
            >
              {course.status === "cursando" ? <Hourglass size={20} /> : <CheckCircle size={20} />}
            </span>

            <div>
              {course.url ? (
                <a
                  className="link font-semibold"
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {course.title}
                </a>
              ) : (
                <span className="font-semibold">{course.title}</span>
              )}

              <span
                className={`ml-3 px-2 py-0.5 rounded-full text-xs font-semibold align-middle ${
                  categoryColors[course.category] || "bg-gray-200 text-gray-800"
                }`}
                title={`Categoria: ${course.category}`}
              >
                {course.category}
              </span>

              <br />

              <span className="text-sm text-gray-700">
                {course.institution} • {course.hours}{" "}
                {course.year && (
                  <span className="ml-1" title="Ano de conclusão">
                    🎓 {course.year}
                  </span>
                )}
              </span>

              {course.badgeCredly && (
                <span
                  className="ml-2 px-2 py-0.5 text-xs bg-orange-500 text-white rounded-full font-semibold align-middle"
                  title="Certificado Credly"
                >
                  🏅 Credly
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
