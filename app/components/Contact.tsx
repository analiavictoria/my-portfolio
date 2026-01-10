'use client';

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [email, setEmail] = useState("");

  const phoneNumber = "5541991483191";
  const emailAddress = "analiavictoire@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return alert("Por favor, preencha nome e mensagem");

    if (contactMethod === "whatsapp") {
      const text = encodeURIComponent(`Olá, meu nome é ${name}. ${message}`);
      const url = `https://wa.me/${phoneNumber}?text=${text}`;
      window.open(url, "_blank");
    } else {
      if (!email) return alert("Por favor, preencha o email para contato");
      // Abre o cliente de email com os dados preenchidos no assunto e corpo
      const subject = encodeURIComponent(`Contato via site - ${name}`);
      const body = encodeURIComponent(message);
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className="container px-4 py-20 mx-auto text-center max-w-lg">
      <span className="chip">Conecte-se</span>
      <h1 className="my-10 text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tighter">
        Contate-me
      </h1>

      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-full font-semibold ${
            contactMethod === "whatsapp"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setContactMethod("whatsapp")}
        >
          <FaWhatsapp className="inline mr-2" /> WhatsApp
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold ${
            contactMethod === "email"
              ? "bg-pink-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setContactMethod("email")}
        >
          <FaEnvelope className="inline mr-2" /> Email
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
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

        {contactMethod === "email" && (
          <label className="block">
            <span className="text-zinc-700 dark:text-zinc-300 font-semibold mb-1 block">
              Seu email
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
              placeholder="seu@email.com"
              required={contactMethod === "email"}
            />
          </label>
        )}

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
          className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition text-white ${
            contactMethod === "whatsapp" ? "bg-green-500 hover:bg-green-600" : "bg-pink-500 hover:bg-pink-600"
          }`}
        >
          {contactMethod === "whatsapp" ? <FaWhatsapp size={20} /> : <FaEnvelope size={20} />}
          {contactMethod === "whatsapp" ? "Enviar pelo WhatsApp" : "Enviar por Email"}
        </button>
      </form>
    </div>
  );
}
