"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";
import { ArrowUpRight } from "lucide-react";


export default function ContactForm() {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const inputsRef = [
        "entry.207167730",
        "entry.540822482",
        "entry.605193171",
        "entry.838022859",
        "entry.1444417084",
        "entry.1108434416"
    ]

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        setSending(true);

        const form = e.currentTarget;
        const data = new FormData(form);

        const googleFormUrl =
            "https://docs.google.com/forms/d/e/1FAIpQLSd598exR11bBeHnoiAS_-z3DDVxL4kbGOFW2GUenW1iHHGKqg/formResponse";

        try {
            await fetch(googleFormUrl, {
                method: "POST",
                mode: "no-cors",
                body: data,
            });

            form.reset();
            setSent(true);
        } catch (error) {
            console.error("Erro ao enviar formulário:", error);
        } finally {
            setSending(false);
        }
    }

    return (
        <section className="w-full px-[6dvw] py-[12dvh] text-white">

            <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-[8dvw] lg:grid-cols-2">

                <div>
                    <div className="mb-[3dvh] flex items-center gap-3">
                        <span className="lines" />

                        <span className="text-[0.75rem] uppercase tracking-[0.3em] text-[#acaba8]">
                            Start a project
                        </span>
                    </div>

                    <h2 className="contact-heading text-[11dvw] font-semibold leading-[0.9] tracking-[-0.05em] sm:text-[8dvw] lg:text-[5vw]">
                        Vamos criar
                        <br />
                        <span className="playfair-display-900 text-[#777777]">
                            algo juntos.
                        </span>
                    </h2>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-[3dvh]"
                >

                    <input
                        name="entry.207167730"
                        type="text"
                        placeholder="Seu nome"
                        required
                        className="w-full border-b border-[#333333] bg-transparent py-4 text-[1rem] text-white outline-none transition-colors placeholder:text-[#555555] focus:border-white"
                    />

                    <input
                        name="entry.605193171"
                        type="email"
                        placeholder="Seu email"
                        required
                        className="w-full border-b border-[#333333] bg-transparent py-4 text-[1rem] text-white outline-none transition-colors placeholder:text-[#555555] focus:border-white"
                    />

                    <input
                        name="entry.1444417084"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="WhatsApp com DDD"
                        required
                        className="w-full border-b border-[#333333] bg-transparent py-4 text-[1rem] text-white outline-none transition-colors placeholder:text-[#555555] focus:border-white"
                    />

                    <select
                        name="entry.1108434416"
                        defaultValue=""
                        required
                        aria-label="Serviço de interesse"
                        className="w-full border-b border-[#333333] bg-transparent py-4 text-[1rem] text-white outline-none transition-colors focus:border-white [&>option]:bg-[#121212]"
                    >
                        <option value="" disabled>Selecione um serviço</option>
                        <option value="Automação">Automação</option>
                        <option value="Análise de Dados">Análise de Dados</option>
                        <option value="UI Design">UI Design</option>
                        <option value="Desenvolvimento">Desenvolvimento</option>
                        <option value="Aplicações Sob Demanda">Aplicações Sob Demanda</option>
                        <option value="Outro">Outro</option>
                    </select>

                    <input
                        name="entry.838022859"
                        type="text"
                        placeholder="Empresa"
                        className="w-full border-b border-[#333333] bg-transparent py-4 text-[1rem] text-white outline-none transition-colors placeholder:text-[#555555] focus:border-white"
                    />

                    <textarea
                        name="entry.540822482"
                        placeholder="Conte um pouco sobre o seu projeto..."
                        required
                        rows={5}
                        className="w-full resize-none border-b border-[#333333] bg-transparent py-4 text-[1rem] text-white outline-none transition-colors placeholder:text-[#555555] focus:border-white"
                    />

                    <button
                        type="submit"
                        disabled={sending}
                        className="btn-shine group mt-[2dvh] flex w-fit items-center gap-3"
                    >
                        {sending
                            ? "Enviando..."
                            : sent
                                ? "Projeto enviado ✓"
                                : "Enviar projeto"}

                        {!sending && !sent && (
                            <ArrowUpRight
                                size={18}
                                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        )}
                    </button>

                </form>

            </div>

        </section>
    );
}