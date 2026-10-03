"use client";

import { useEffect, useRef, useState } from "react";

export default function SiteHeader() {
    const [hasScrolled, setHasScrolled] = useState(false);


    useEffect(() => {
      function updateBackground() {
        setHasScrolled(window.scrollY > 8);
      }

      updateBackground();
          window.addEventListener("scroll", updateBackground, { passive: true });
          return () => window.removeEventListener("scroll", updateBackground);
      }, []);

    function irParaServiços() {
        document.getElementById("Carrousel")?.scrollIntoView({
            behavior: "smooth", 
            block: "start",
        });
    }

    function irParaContato() {
        document.getElementById("contato")?.scrollIntoView({
            behavior: "smooth", 
            block: "start",
        });
    }

    function irParaAbout() {
        document.getElementById("about")?.scrollIntoView({
            behavior: "smooth", 
            block: "start",
        });
    }

    function irParaExemplos() {
        document.getElementById("contato")?.scrollIntoView({
            behavior: "smooth", 
            block: "start",
        });
    }

  return (
    <header
      className={`sticky top-0 z-50 min-h-[10dvh] flex flex-col flex-nowrap md:grid md:grid-cols-3 items-center gap-6 md:gap-0 p-6 md:p-10 transition-all duration-300 ease-in-out ${
        hasScrolled
          ? "w-[calc(100%-1rem)] md:w-[calc(100%-3rem)] translate-y-6 rounded-2xl border border-white/10 bg-black/35 shadow-xl shadow-black/50 backdrop-blur-xl"
          : "w-full translate-y-0 rounded-none border border-transparent bg-transparent shadow-none backdrop-blur-none"
      }`}
    >
      <nav className="w-full md:justify-self-start">
        <ul className="flex flex-nowrap gap-3 list-none raleway text-lg justify-center md:gap-5">
          <li><button className="btn-shine" onClick={() => {irParaServiços()}}>Serviços</button></li>
          <li><button className="btn-shine" onClick={() => {irParaAbout()}}>Sobre</button></li>
          <li><button className="btn-shine" onClick={() => {irParaExemplos()}}>Exemplos</button></li>
          <li><button className="btn-shine" onClick={() => {irParaContato()}}>Contato</button></li>
        </ul>
      </nav>

      <span className="md:justify-self-center flex items-center gap-2 md:gap-4 title">
        <div className="lines" />
        <div className="flex flex-col items-center typewriter">
          <h1 className="text-3xl md:text-4xl playfair-display-900-italic text-white">YouMake</h1>
          <h3 className="text-xl md:text-2xl raleway text-white">I Create</h3>
        </div>
        <div className="lines" />
      </span>
    </header>
  );
}