"use client";

import { useState } from "react";
import type { SubmitEvent } from "react";
import { ArrowUpRight } from "lucide-react";

type FormErrors = {
    name?: string;
    email?: string;
    whatsapp?: string;
    service?: string;
    project?: string;
};

export default function ContactForm() {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const googleFormUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSd598exR11bBeHnoiAS_-z3DDVxL4kbGOFW2GUenW1iHHGKqg/formResponse";

    function validateForm(data: FormData): FormErrors {
        const newErrors: FormErrors = {};

        const name = String(data.get("entry.207167730") || "").trim();
        const email = String(data.get("entry.605193171") || "").trim();
        const whatsapp = String(data.get("entry.1444417084") || "").trim();
        const company = String(data.get("entry.838022859") || "").trim();
        const project = String(data.get("entry.540822482") || "").trim();
        const service = String(data.get("entry.1108434416") || "").trim();

        // Nome
        if (!name) {
            newErrors.name = "Informe seu nome.";
        } else if (name.length < 3) {
            newErrors.name = "Digite seu nome completo.";
        }

        // E-mail
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!email) {
            newErrors.email = "Informe seu e-mail.";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Digite um e-mail válido.";
        }

        // WhatsApp
        const phoneNumbers = whatsapp.replace(/\D/g, "");

        if (!whatsapp) {
            newErrors.whatsapp = "Informe seu WhatsApp.";
        } else if (phoneNumbers.length < 10 || phoneNumbers.length > 13) {
            newErrors.whatsapp = "Digite um WhatsApp válido com DDD.";
        }

        // Serviço
        if (!service) {
            newErrors.service = "Selecione um serviço.";
        }

        // Projeto
        if (!project) {
            newErrors.project = "Conte um pouco sobre seu projeto.";
        } else if (project.length < 15) {
            newErrors.project =
                "Descreva um pouco melhor o que você precisa.";
        }

        // Empresa é opcional
        void company;

        return newErrors;
    }

    async function handleSubmit(
        e: SubmitEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        if (sending) return;

        const form = e.currentTarget;
        const data = new FormData(form);

        const validationErrors = validateForm(data);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setSending(true);
        setSent(false);

        try {
            await fetch(googleFormUrl, {
                method: "POST",
                mode: "no-cors",
                body: data,
            });

            form.reset();
            setErrors({});
            setSent(true);
        } catch (error) {
            console.error("Erro ao enviar formulário:", error);

            setErrors({
                project:
                    "Não foi possível enviar o formulário. Tente novamente.",
            });
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
                    noValidate
                    className="flex flex-col gap-[2.5dvh]"
                >

                    {/* NOME */}
                    <div>
                        <input
                            name="entry.207167730"
                            type="text"
                            placeholder="Seu nome"
                            autoComplete="name"
                            maxLength={100}
                            className={`w-full border-b bg-transparent py-4 text-[1rem] text-white outline-none transition-colors placeholder:text-[#555555] ${
                                errors.name
                                    ? "border-red-500"
                                    : "border-[#333333] focus:border-white"
                            }`}
                        />

                        {errors.name && (
                            <p className="mt-2 text-xs text-red-400">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* EMAIL */}
                    <div>
                        <input
                            name="entry.605193171"
                            type="email"
                            placeholder="Seu email"
                            autoComplete="email"
                            maxLength={150}
                            className={`w-full border-b bg-transparent py-4 text-[1rem] text-white outline-none transition-colors placeholder:text-[#555555] ${
                                errors.email
                                    ? "border-red-500"
                                    : "border-[#333333] focus:border-white"
                            }`}
                        />

                        {errors.email && (
                            <p className="mt-2 text-xs text-red-400">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* WHATSAPP */}
                    <div>
                        <input
                            name="entry.1444417084"
                            type="tel"
                            autoComplete="tel"
                            inputMode="tel"
                            placeholder="WhatsApp com DDD"
                            maxLength={20}
                            className={`w-full border-b bg-transparent py-4 text-[1rem] text-white outline-none transition-colors placeholder:text-[#555555] ${
                                errors.whatsapp
                                    ? "border-red-500"
                                    : "border-[#333333] focus:border-white"
                            }`}
                        />

                        {errors.whatsapp && (
                            <p className="mt-2 text-xs text-red-400">
                                {errors.whatsapp}
                            </p>
                        )}
                    </div>

                    {/* SERVIÇO */}
                    <div>
                        <select
                            name="entry.1108434416"
                            defaultValue=""
                            className={`w-full border-b bg-transparent py-4 text-[1rem] text-white outline-none transition-colors [&>option]:bg-[#121212] ${
                                errors.service
                                    ? "border-red-500"
                                    : "border-[#333333] focus:border-white"
                            }`}
                        >
                            <option value="" disabled>
                                Selecione um serviço
                            </option>

                            <option value="Automação">
                                Automação
                            </option>

                            <option value="Análise de Dados">
                                Análise de Dados
                            </option>

                            <option value="UI Design">
                                UI Design
                            </option>

                            <option value="Desenvolvimento">
                                Desenvolvimento
                            </option>

                            <option value="Aplicações Sob Demanda">
                                Aplicações Sob Demanda
                            </option>

                            <option value="Outro">
                                Outro
                            </option>
                        </select>

                        {errors.service && (
                            <p className="mt-2 text-xs text-red-400">
                                {errors.service}
                            </p>
                        )}
                    </div>

                    {/* EMPRESA */}
                    <div>
                        <input
                            name="entry.838022859"
                            type="text"
                            placeholder="Empresa (opcional)"
                            autoComplete="organization"
                            maxLength={150}
                            className="w-full border-b border-[#333333] bg-transparent py-4 text-[1rem] text-white outline-none transition-colors placeholder:text-[#555555] focus:border-white"
                        />
                    </div>

                    {/* PROJETO */}
                    <div>
                        <textarea
                            name="entry.540822482"
                            placeholder="Conte um pouco sobre o seu projeto..."
                            rows={5}
                            maxLength={2000}
                            className={`w-full resize-none border-b bg-transparent py-4 text-[1rem] text-white outline-none transition-colors placeholder:text-[#555555] ${
                                errors.project
                                    ? "border-red-500"
                                    : "border-[#333333] focus:border-white"
                            }`}
                        />

                        <div className="mt-2 flex justify-between">
                            {errors.project ? (
                                <p className="text-xs text-red-400">
                                    {errors.project}
                                </p>
                            ) : (
                                <span />
                            )}
                        </div>
                    </div>

                    {/* STATUS */}
                    {sent && (
                        <div className="border border-[#333333] rounded-xl px-4 py-3 text-sm text-white/70">
                            Projeto enviado com sucesso. Entraremos em
                            contato em breve.
                        </div>
                    )}

                    {/* BOTÃO */}
                    <button
                        type="submit"
                        disabled={sending}
                        className={`btn-shine group mt-[2dvh] flex w-fit items-center gap-3 ${
                            sending
                                ? "cursor-not-allowed opacity-50"
                                : ""
                        }`}
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