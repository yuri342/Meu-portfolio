"use client";

import {
    ArrowUpRight,
    Code,
    Database,
    GitBranch,
    Briefcase,
    Mail,
    Sparkles,
    Code2,
} from "lucide-react";

export default function Creator() {
    return (
        <section className="relative w-full min-h-[100dvh] flex items-center justify-center px-[6dvw] py-[12dvh] overflow-hidden text-white" id="contato">

            <div className="relative z-10 w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-[8dvw] items-center">

                {/* LEFT */}
                <div className="flex flex-col gap-[3dvh]">

                    <div className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#acaba8]">

                        <Sparkles
                            size={16}
                            strokeWidth={1.5}
                        />

                        <span>
                            Sobre o criador
                        </span>

                    </div>

                    <h2 className="text-[11dvw] sm:text-[8dvw] lg:text-[5vw] font-semibold leading-[0.9] tracking-[-0.05em]">

                        Por trás da

                        <br />

                        <span className="playfair-display-900 text-[#777777]">
                            You Make.
                        </span>

                    </h2>

                    <div className="lines" />

                    <p className="max-w-[600px] text-[4dvw] sm:text-[2.2dvw] lg:text-[1.25vw] leading-[1.7] text-[#999999]">

                        Uma ideia pode ser o começo de um produto,
                        de uma empresa ou simplesmente de uma forma
                        melhor de fazer alguma coisa.

                        <br />
                        <br />

                        Eu sou{" "}

                        <span className="text-white">
                            Yuri Bertola
                        </span>

                        , desenvolvedor e criador da You Make.
                        Minha proposta é transformar essas ideias
                        em tecnologia que realmente possa ser utilizada.

                    </p>

                    {/* SOCIAL */}
                    <div className="flex flex-wrap items-center gap-3 pt-[1dvh]">

                        <a
                            href="https://www.linkedin.com/in/yuri-bertola/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 border border-[#333333] rounded-full px-4 py-2 text-[#888888] transition-all duration-300 hover:border-[#666666] hover:text-white"
                        >
                            <Briefcase size={16} strokeWidth={1.5} />

                            <span className="text-sm">
                                LinkedIn
                            </span>

                            <ArrowUpRight
                                size={14}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>

                        <a
                            href="https://github.com/yuri342"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 border border-[#333333] rounded-full px-4 py-2 text-[#888888] transition-all duration-300 hover:border-[#666666] hover:text-white"
                        >
                            <GitBranch size={16} strokeWidth={1.5} />

                            <span className="text-sm">
                                GitHub
                            </span>

                            <ArrowUpRight
                                size={14}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>

                        <a
                            href="mailto:black.wrapper.industry@gmail.com"
                            className="group flex items-center gap-2 border border-[#333333] rounded-full px-4 py-2 text-[#888888] transition-all duration-300 hover:border-[#666666] hover:text-white"
                        >
                            <Mail size={16} strokeWidth={1.5} />

                            <span className="text-sm">
                                Email
                            </span>

                            <ArrowUpRight
                                size={14}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                        

                        <a
                            href="/Projects_Examples"
                            className="group flex items-center gap-2 border border-[#333333] rounded-full px-4 py-2 text-[#888888] transition-all duration-300 hover:border-[#666666] hover:text-white"
                        >
                            <Code2 size={16} strokeWidth={1.5} />

                            <span className="text-sm">
                                Portfólio
                            </span>

                            <ArrowUpRight
                                size={14}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                    </div>

                </div>


                {/* RIGHT */}
                <div className="flex flex-col gap-[3dvh]">

                    {/* INTRO */}
                    <div className="border-l border-[#333333] pl-[5dvw] lg:pl-[3dvw]">

                        <p className="text-[5dvw] sm:text-[3dvw] lg:text-[2vw] leading-[1.3] tracking-[-0.03em] text-white/90">

                            Desenvolver é mais do que
                            escrever código.

                            <br />

                            <span className="playfair-display-900 text-[#777777]">
                                É transformar problemas
                                em possibilidades.
                            </span>

                        </p>

                    </div>


                    {/* EXPERIENCE */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                        <div className="group border border-[#2c2c2c] rounded-2xl p-[5dvw] sm:p-[2.5dvw] transition-all duration-500 hover:border-[#555555]">

                            <Code2
                                size={24}
                                strokeWidth={1.4}
                                className="mb-[3dvh] text-[#777777] group-hover:text-white transition-colors duration-300"
                            />

                            <span className="block text-[0.7rem] uppercase tracking-[0.25em] text-[#666666] mb-3">
                                Desenvolvimento
                            </span>

                            <h3 className="text-[5dvw] sm:text-[2.5dvw] lg:text-[1.7vw] font-medium tracking-[-0.03em]">
                                Software
                            </h3>

                            <p className="mt-3 text-[3.5dvw] sm:text-[1.6vw] lg:text-[0.95vw] leading-[1.6] text-[#777777]">
                                Sistemas, aplicações web, APIs e
                                soluções desenvolvidas sob medida.
                            </p>

                        </div>


                        <div className="group border border-[#2c2c2c] rounded-2xl p-[5dvw] sm:p-[2.5dvw] transition-all duration-500 hover:border-[#555555]">

                            <Database
                                size={24}
                                strokeWidth={1.4}
                                className="mb-[3dvh] text-[#777777] group-hover:text-white transition-colors duration-300"
                            />

                            <span className="block text-[0.7rem] uppercase tracking-[0.25em] text-[#666666] mb-3">
                                Experiência
                            </span>

                            <h3 className="text-[5dvw] sm:text-[2.5dvw] lg:text-[1.7vw] font-medium tracking-[-0.03em]">
                                Dados & Automação
                            </h3>

                            <p className="mt-3 text-[3.5dvw] sm:text-[1.6vw] lg:text-[0.95vw] leading-[1.6] text-[#777777]">
                                Automação de processos, integrações,
                                análise de dados e aplicações inteligentes.
                            </p>

                        </div>

                    </div>


                    {/* PROJECTS */}
                    <div onClick={() => window.location.href = "/Projects_Examples"} className=" cursor-pointer group relative border border-[#333333] rounded-2xl p-[5dvw] sm:p-[2.5dvw] transition-all duration-500 hover:border-[#666666]">

                        <div className="flex items-start justify-between gap-6">

                            <div>

                                <span className="block text-[0.7rem] uppercase tracking-[0.25em] text-[#666666] mb-4">
                                    Projetos
                                </span>

                                <h3 className="text-[6dvw] sm:text-[3.5dvw] lg:text-[2.2vw] font-medium tracking-[-0.04em]">
                                     Construído na prática.
                                </h3>

                                <p className="mt-4 max-w-[650px] text-[3.7dvw] sm:text-[1.8vw] lg:text-[1vw] leading-[1.7] text-[#777777]">

                                    De aplicações web e APIs a projetos
                                    envolvendo inteligência artificial,
                                    automação e dados.

                                    <span className="text-[#aaaaaa]">
                                        {" "}Cada projeto é uma oportunidade
                                        de transformar conhecimento em algo
                                        real.

                                    </span>

                                </p>

                            </div>

                            <ArrowUpRight
                                size={28}
                                strokeWidth={1.5}
                                className="shrink-0 text-[#666666] transition-all duration-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1"
                            />

                        </div>

                    </div>


                    {/* PROJECT HIGHLIGHTS */}
                    <div className="flex flex-wrap gap-2">

                        {[
                            "HavenAI",
                            "Web Apps",
                            "APIs",
                            "Automação",
                            "Data",
                            "IA",
                        ].map((item) => (

                            <span
                                key={item}
                                className="border border-[#292929] rounded-full px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.15em] text-[#666666]"
                            >
                                {item}
                            </span>

                        ))}

                    </div>


                    {/* PHILOSOPHY */}
                    <div className="mt-[1dvh] flex flex-col gap-3">

                        <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.25em] text-[#666666]">

                            <span className="h-px w-[30px] bg-[#666666]" />

                            <span>
                                Philosophy
                            </span>

                        </div>

                        <p className="playfair-display-900 text-[5dvw] sm:text-[3vw] lg:text-[2vw] leading-[1.1] text-[#777777]">

                            Aprender construindo.
                            <br />
                            Criar para resolver.

                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}