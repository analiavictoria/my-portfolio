'use client';

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  
  const phoneNumber = "5541991483191";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return alert("Por favor, preencha nome e mensagem");

    const text = encodeURIComponent(`Olá, meu nome é ${name}. ${message}`);
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="container px-4 py-20 mx-auto text-center max-w-lg">
      <span className="chip">Conecte-se</span>
      <h1 className="my-10 text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tighter">
        Contate-me
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8 text-left">
        <label className="block">
          <span className="text-zinc-700 dark:text-zinc-300 font-semibold mb-1 block">
            Nome
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
            placeholder="Seu nome"
            required
          />
        </label>

        <label className="block">
          <span className="text-zinc-700 dark:text-zinc-300 font-semibold mb-1 block">
            Sua mensagem
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
            placeholder="Digite sua mensagem"
            rows={4}
            required
          />
        </label>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition"
        >
          <FaWhatsapp size={20} />
          Enviar pelo WhatsApp
        </button>
      </form>
    </div>
  );
}
