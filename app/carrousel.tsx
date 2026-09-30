"use client";

import "./carrousel.css";

import Image from "next/image";
import Link from "next/link";

import {
    ChevronLeft,
    ChevronRight,
    Workflow,
    ChartColumn,
    PenTool,
    Code,
    Rocket,
    ArrowUpRight
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

const slides = [
    {
        title: "Automação",
        description:
            "Automatize tarefas repetitivas, reduza processos manuais e ganhe mais tempo para o que realmente importa no seu negócio.",
        image: "/automation.png",
        icon: Workflow,
    },
    {
        title: "Análise de Dados",
        description:
            "Transforme dados em informações claras com dashboards, indicadores e análises que ajudam você a tomar decisões melhores.",
        image: "/dataAnalis.png",
        icon: ChartColumn,
    },
    {
        title: "UI Design",
        description:
            "Crie interfaces modernas, intuitivas e funcionais, pensadas para oferecer uma experiência consistente e agradável.",
        image: "/UiDesing.png",
        icon: PenTool,
    },
    {
        title: "Desenvolvimento",
        description:
            "Transforme sua ideia em software com sistemas, plataformas e aplicações desenvolvidas sob medida para sua necessidade.",
        image: "/Dev.png",
        icon: Code,
    },
    {
        title: "Aplicações Sob Demanda",
        description:
            "Desenvolvemos soluções personalizadas para processos específicos, conectando tecnologia, negócio e experiência.",
        image: "/google.png",
        icon: Rocket,
    },
];

const COPIES = [0, 1, 2];

export default function Carrousel() {
    const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
    const trackRef = useRef<HTMLDivElement>(null);

    const [ativo, setAtivo] = useState<number>(0);
    const [slideCentralizado, setSlideCentralizado] = useState<number | null>(null);

    function irPara(index: number) {
        slidesRef.current[index]?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "center",
        });
    }

    function irParaReal(i: number) {
        irPara(slides.length + i);
    }

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        const n = slides.length;

        let timeout: ReturnType<typeof setTimeout>;

        function getPeriod() {
            const first = track!.children[0] as HTMLElement;
            const second = track!.children[n] as HTMLElement;

            return second.offsetLeft - first.offsetLeft;
        }

        function jump(delta: number) {
            track!.style.scrollBehavior = "none";
            track!.style.scrollSnapType = "none";

            track!.scrollLeft += delta;

            requestAnimationFrame(() => {
                track!.style.scrollSnapType = "";
                track!.style.scrollBehavior = "";
            });
        }

        jump(getPeriod());

        function recenter() {
            const period = getPeriod();

            if (track!.scrollLeft < period * 0.5) {
                jump(period);
            } else if (track!.scrollLeft > period * 1.5) {
                jump(-period);
            }
        }

        function onScroll() {
            clearTimeout(timeout);
            timeout = setTimeout(recenter, 120);
        }

        function onWheel(event: WheelEvent) {
            if (event.deltaX !== 0 || event.shiftKey) {
                event.preventDefault();
            }
        }

        track.addEventListener("scroll", onScroll, { passive: true });
        track.addEventListener("wheel", onWheel, { passive: false });

        return () => {
            clearTimeout(timeout);
            track.removeEventListener("scroll", onScroll);
            track.removeEventListener("wheel", onWheel);
        };
    }, []);

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(
                            (entry.target as HTMLElement).dataset.index
                        );

                        setAtivo(index % slides.length);
                        setSlideCentralizado(index);
                    }
                });
            },
            {
                root: track,
                rootMargin: "0px -49% 0px -49%",
                threshold: 0,
            }
        );

        slidesRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="Carrousel" className="sectionIn w-full flex flex-col items-center justify-center gap-6 p-10">

            <h2 className="tituloNosso px-5 md:px-10 text-2xl md:text-3xl text-[#aca8a8] raleway w-full md:w-1/2">
                Nossos Serviços
            </h2>

            <div className="relative w-[100dvw] sm:w-[95dvw] md:w-[90dvw] lg:w-[85dvw] xl:w-[80dvw] 2xl:w-[75dvw]">

                <div
                    ref={trackRef}
                    className="carrousel p-5 md:p-0 relative flex flex-row flex-nowrap w-full h-[60dvh] md:h-[65dvh] gap-[5dvw] sm:gap-[1.5dvw] md:gap-[2.5dvw] lg:gap-[3dvw] xl:gap-[3.5dvw] 2xl:gap-[3.6dvw] overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >

                    {COPIES.map((copy) =>
                        slides.map((slide, i) => {
                            const index = copy * slides.length + i;
                            const Icon = slide.icon;

                            return (
                                <div
                                    key={`${copy}-${slide.title}`}
                                    ref={(el) => {
                                        slidesRef.current[index] = el;
                                    }}
                                    id={`slide${index}`}
                                    data-index={index}
                                    aria-hidden={copy !== 1}
                                    onClick={() => irPara(index)}
                                    className={`slide relative shrink-0 snap-center h-full w-full rounded-3xl md:w-1/4 md:rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 ${
                                        slideCentralizado === index
                                            ? "opacity-100 scale-100"
                                            : "md:opacity-50 md:scale-[0.96]"
                                    }`}
                                >

                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        sizes="(min-width: 768px) 25vw, 100vw"
                                        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                                        preload={index === 0}
                                    />

                                    <div
                                        className={`Description_of_the_product ${
                                            slideCentralizado === index
                                                ? "is-focused"
                                                : ""
                                        }`}
                                    >

                                        <section className="Description_Section w-full h-[22dvh] md:h-[20dvh]">

                                            <header className="flex items-center gap-2 mb-2">

                                                <Icon
                                                    size={23}
                                                    strokeWidth={1.5}
                                                    aria-hidden="true"
                                                    className="shrink-0"
                                                />

                                                <h1 className="description-title font-bold text-start text-lg md:text-xl">
                                                    {slide.title}
                                                </h1>

                                            </header>

                                            <p className="description-text text-justify text-sm md:text-lg">
                                                {slide.description}
                                            </p>

                                            <Link
                                                href="/form"
                                                onClick={(e) => e.stopPropagation()}
                                                className="btn-shine-variant gradient-border inline-flex items-center"
                                            >
                                                Fale sobre seu projeto
                                                <ArrowUpRight
                                                    size={17}
                                                    strokeWidth={1.8}
                                                    className="ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                                />
                                            </Link>

                                        </section>

                                    </div>

                                </div>
                            );
                        })
                    )}

                </div>

                <button
                    type="button"
                    aria-label="Slide anterior"
                    onClick={() =>
                        irParaReal(
                            (ativo + slides.length - 1) % slides.length
                        )
                    }
                    className="absolute left-1 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white transition-all hover:bg-black/70 hover:scale-105"
                >
                    <ChevronLeft
                        aria-hidden="true"
                        size={20}
                        strokeWidth={2.5}
                    />
                </button>

                <button
                    type="button"
                    aria-label="Próximo slide"
                    onClick={() =>
                        irParaReal((ativo + 1) % slides.length)
                    }
                    className="absolute right-1 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white transition-all hover:bg-black/70 hover:scale-105"
                >
                    <ChevronRight
                        aria-hidden="true"
                        size={20}
                        strokeWidth={2.5}
                    />
                </button>

            </div>

            <div
                id="menuIndicator"
                className="flex flex-row justify-center items-center gap-2 md:gap-4"
            >
                {slides.map((slide, index) => (
                    <button
                        key={slide.title}
                        id={`indicator${index + 1}`}
                        aria-label={`Ir para ${slide.title}`}
                        onClick={() => irParaReal(index)}
                        className={`size-3 rounded-full cursor-pointer transition-all duration-300 ${
                            ativo === index
                                ? "bg-white scale-110"
                                : "bg-gray-600 hover:bg-gray-400"
                        }`}
                    />
                ))}
            </div>

        </section>
    );
}