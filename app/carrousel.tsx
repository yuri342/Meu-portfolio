"use client";
import "./carrousel.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Workflow, ChartColumn, PenTool, Code, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const slides = [
    {
        title: "Automação",
        description: "Automatize tarefas e processos repetitivos para reduzir o trabalho manual e aumentar a eficiência do seu negócio.",
        image: "/automation.png",
        icon: Workflow,
    },
    {
        title: "Análise de Dados",
        description: "Transforme dados em informações claras através de dashboards, indicadores e soluções personalizadas para apoiar suas decisões.",
        image: "/dataAnalis.png",
        icon: ChartColumn,
    },
    {
        title: "UI Design",
        description: "Criação de interfaces modernas, intuitivas e funcionais, pensadas para oferecer uma experiência simples e agradável aos usuários.",
        image: "/UiDesing.png",
        icon: PenTool,
    },
    {
        title: "Desenvolvimento",
        description: "Desenvolvimento de sistemas e aplicações sob medida para transformar suas ideias e necessidades em soluções digitais.",
        image: "/Dev.png",
        icon: Code,
    },
    {
        title: "Aplicações Sob Demanda",
        description: "Soluções personalizadas desenvolvidas de acordo com os processos, objetivos e necessidades específicas do seu negócio.",
        image: "/google.png",
        icon: Rocket,
    },
];
const COPIES = [0, 1, 2]; // [A][B real][C]

export default function Carrousel() {
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);
  const [ativo, setAtivo] = useState<number>(0); // 0 a 4
  const [slideCentralizado, setSlideCentralizado] = useState<number | null>(null);

  // Rola até o slide (índice global 0 a 14)
  function irPara(index: number) {
    slidesRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  }

  // Clique no indicador: vai para a cópia do meio (real)
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

    // Salto INSTANTÂNEO (sem animação e sem snap)
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

    // Só recentraliza quando o scroll terminou
    function recenter() {
      const period = getPeriod();
      if (track!.scrollLeft < period * 0.5) jump(period);
      else if (track!.scrollLeft > period * 1.5) jump(-period);
    }

    function onScroll() {
      clearTimeout(timeout);
      timeout = setTimeout(recenter, 120);
    }

    function onWheel(event: WheelEvent) {
      if (event.deltaX !== 0 || event.shiftKey) event.preventDefault();
    }

    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      clearTimeout(timeout);
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("wheel", onWheel);
    };
  }, []);

  // Descobre qual slide está no centro para destacar o indicador
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setAtivo(index % slides.length);
            setSlideCentralizado(index);
          }
        });
      },
      {
        root: track,
        // faixa fina no centro do track
        rootMargin: "0px -49% 0px -49%",
        threshold: 0,
      },
    );

    slidesRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sectionIn w-full flex flex-col items-center justify-center gap-6">
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
              const index = copy * slides.length + i; // índice global (0 a 14)
              const Icon = slide.icon
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
                  className="slide relative shrink-0 snap-center h-full w-full rounded-3xl md:w-1/4 md:rounded-[2rem] overflow-hidden cursor-pointer"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    className={`Description_of_the_product ${slideCentralizado === index ? "is-focused" : ""}` }>
                    <section className='Description_Section w-full h-[22dvh] md:h-[20dvh]'>
                        <header className="flex items-center gap-2 mb-1">
                            <Icon size={24} strokeWidth={1.5} aria-hidden="true" className="shrink-0" />
                            <h1 className="description-title font-bold text-start text-lg md:text-xl">
                                {slide.title}
                            </h1>
                        </header>
                        <p className="description-text text-justify text-sm md:text-lg ">{slide.description}</p>
                    </section>
                  </div>
                </div>
              );
            }),
          )}
        </div>

        {/* fade esquerda */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 md:w-24 bg-gradient-to-r from-[#121212] to-transparent" />
        <button
          type="button"
          aria-label="Slide anterior"
          onClick={() =>
            irParaReal((ativo + slides.length - 1) % slides.length)
          }
          className="absolute left-1 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-3xl leading-none text-white transition-colors hover:bg-black/70"
        >
          <ChevronLeft aria-hidden="true" size={20} strokeWidth={2.5} />
        </button>

        {/* fade direita */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 md:w-24 bg-gradient-to-l from-[#121212] to-transparent" />
        <button
          type="button"
          aria-label="Próximo slide"
          onClick={() => irParaReal((ativo + 1) % slides.length)}
          className="absolute right-1 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-3xl leading-none text-white transition-colors hover:bg-black/70"
        >
          <ChevronRight aria-hidden="true" size={20} strokeWidth={2.5} />
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
            className={`size-3 rounded-full cursor-pointer transition-colors duration-300 ${
              ativo === index ? "bg-white" : "bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
