"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";

export default function About() {
    return (
        <section className="relative w-full min-h-[90dvh] flex items-center justify-center px-[6dvw] py-[10dvh] overflow-hidden text-white">

            <div className="relative z-10 w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-[8dvw] items-center" id="about">

                {/* LEFT */}
                <div className="flex flex-col gap-[3dvh]">

                    <div className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#acaba8] ">
                        <Sparkles
                            size={16}
                            strokeWidth={1.5}
                        />

                        <span>
                            Sobre a You Make
                        </span>
                    </div>

                    <h2 className="text-[10dvw] sm:text-[7dvw] lg:text-[5vw] font-semibold leading-[0.95] tracking-[-0.04em]">

                        Você tem a ideia.

                        <br />

                        <span className="playfair-display-900 text-[#8f8f8f]">
                            Nós criamos.
                        </span>

                    </h2>

                    <div className="lines" />

                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-[4dvh]">

                    <p className="text-[4.5dvw] sm:text-[2.5dvw] lg:text-[1.45vw] leading-[1.5] text-white/80">

                        A{" "}

                        <strong className="text-white">
                            You Make
                        </strong>{" "}

                        nasceu de uma ideia simples: tecnologia deve existir
                        para resolver problemas reais.

                    </p>

                    <p className="text-[3.8dvw] sm:text-[2dvw] lg:text-[1.15vw] leading-[1.7] text-[#999999]">

                        Criamos soluções digitais sob medida para transformar
                        ideias, processos e necessidades em produtos que
                        realmente funcionam — de sistemas e aplicações a
                        automações, integrações, dados e inteligência artificial.

                    </p>

                    <p className="text-[3.8dvw] sm:text-[2dvw] lg:text-[1.15vw] leading-[1.7] text-[#999999]">

                        Não acreditamos em soluções genéricas para problemas
                        específicos. Por isso, começamos entendendo o que você
                        precisa, como seu negócio funciona e onde a tecnologia
                        pode fazer a diferença.

                    </p>

                    {/* SLOGAN */}
                    <div className="group relative mt-[2dvh] border border-[#333333] rounded-2xl p-[5dvw] sm:p-[2.5dvw] transition-all duration-500 hover:border-[#666666]">

                        <div className="flex items-end justify-between gap-6">

                            <div>

                                <span className="block text-[3.5dvw] sm:text-[2dvw] lg:text-[1.3vw] uppercase tracking-[0.2em] text-[#666666] mb-3">
                                    Our philosophy
                                </span>

                                <span className="block text-[6dvw] sm:text-[3.5dvw] lg:text-[2.2vw] font-medium tracking-[-0.03em]">
                                    You Make It.
                                </span>

                                <span className="playfair-display-900 block text-[6dvw] sm:text-[3.5dvw] lg:text-[2.2vw] tracking-[-0.03em] text-[#777777]">
                                    We Create.
                                </span>

                            </div>

                            <ArrowUpRight
                                className="shrink-0 text-[#777777] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                                size={32}
                                strokeWidth={1.5}
                            />

                        </div>

                    </div>

                    {/* GUAÍBA */}
                    <div className="flex flex-col gap-[2dvh]">

                        <div className="flex items-center gap-3 text-[0.7rem] sm:text-[0.8rem] uppercase tracking-[0.25em] text-[#666666]">

                            <span className="h-px w-[30px] bg-[#666666]" />

                            <span>
                                Guaíba • RS
                            </span>

                        </div>

                        <p className="text-[3.8dvw] sm:text-[2dvw] lg:text-[1.1vw] leading-[1.7] text-[#777777]">

                            Nascemos em{" "}

                            <span className="text-[#cccccc]">
                                Guaíba, Rio Grande do Sul
                            </span>
                            , criando tecnologia para negócios e pessoas da
                            nossa região e de qualquer lugar.

                            {" "}Da primeira ideia ao produto final, unimos{" "}

                            <span className="text-[#cccccc]">
                                desenvolvimento, design, dados e tecnologia
                            </span>{" "}

                            para transformar necessidades reais em soluções
                            digitais. 


                        </p>
                        <span className="text-[3.8dvw] sm:text-[2dvw] lg:text-[1.1vw] leading-[1.7] text-[#cccccc]">
                            Contato : black.wrapper.industry@gmail.com
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
}