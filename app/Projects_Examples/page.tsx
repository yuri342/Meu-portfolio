"use client";

import Image from "next/image";
import {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";

type Project = {
    number: string;
    title: string;
    category: string;
    description: string;
    images: string[];
    technologies: string[];
    href: string;
    featured: boolean;
};

const projects: Project[] = [
    {
        number: "01",
        title: "HavenAI",
        category: "AI / WEB APPLICATION",
        description:
            "Aplicação web desenvolvida para explorar experiências conversacionais utilizando inteligência artificial, combinando frontend, backend, APIs e autenticação.",
        images: [
            "/Heaven1.png",
            "/Heaven2.png",
            "/Heaven3.png",
            "/Heaven4.png",
        ],
        technologies: [
            "React",
            "Node.js",
            "Express",
            "AI",
        ],
        href: "https://github.com/yuri342",
        featured: true,
    },

    {
        number: "02",
        title: "Data Automation",
        category: "AUTOMATION / DATA",
        description:
            "Soluções desenvolvidas para automatizar processos, integrar dados e reduzir tarefas manuais através de scripts e integrações e integraçoes com analise de dados.",
        images: [
            "/DesktopAPP.png",
            "/BIExample.png",
        ],
        technologies: [
            "Python",
            "API",
            "Excel",
            "Automation",
        ],
        href: "#",
        featured: false,
    },

    {
        number: "03",
        title: "Data Analytics",
        category: "DATA / BUSINESS INTELLIGENCE",
        description:
            "Dashboards e soluções de análise de dados desenvolvidos para transformar informações complexas em indicadores mais claros.",
        images: [
            "/BI1.png",
            "/BI2.png   ",
        ],
        technologies: [
            "Power BI",
            "DAX",
            "SQL",
            "Data",
        ],
        href: "#",
        featured: false,
    },

    {
        number: "04",
        title: "Custom Software",
        category: "SOFTWARE DEVELOPMENT",
        description:
            "Aplicação desenvolvida sob medida para atender necessidades específicas, utilizando arquitetura moderna e integração com banco de dados.",
        images: [
            "/Crizelimg.png",
            "/CrizelImg2.png",
            "/Grao1.png",
            "/Grao2.png",
            "/Grao3.png",
            "/Grao4.png",
            "/Vans1.png",
            "/Vans2.png",
        ],
        technologies: [
            "Java",
            "Spring",
            "PostgreSQL",
            "React",
            "Next.js",
            "Node.js"
        ],
        href: "#",
        featured: true,
    },
];

export default function Projects() {

    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null);

    const [currentImage, setCurrentImage] = useState(0);


    /*
    |--------------------------------------------------------------------------
    | ABRIR PROJETO
    |--------------------------------------------------------------------------
    */

    function openProject(project: Project) {
        setSelectedProject(project);
        setCurrentImage(0);
    }


    /*
    |--------------------------------------------------------------------------
    | FECHAR GALERIA
    |--------------------------------------------------------------------------
    */

    function closeProject() {
        setSelectedProject(null);
        setCurrentImage(0);
    }


    /*
    |--------------------------------------------------------------------------
    | PRÓXIMA IMAGEM
    |--------------------------------------------------------------------------
    */

    function nextImage() {

        if (!selectedProject) return;

        setCurrentImage((current) =>
            current === selectedProject.images.length - 1
                ? 0
                : current + 1
        );
    }


    /*
    |--------------------------------------------------------------------------
    | IMAGEM ANTERIOR
    |--------------------------------------------------------------------------
    */

    function previousImage() {

        if (!selectedProject) return;

        setCurrentImage((current) =>
            current === 0
                ? selectedProject.images.length - 1
                : current - 1
        );
    }


    /*
    |--------------------------------------------------------------------------
    | TECLADO
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (!selectedProject) return;

        function handleKeyDown(event: KeyboardEvent) {

            if (event.key === "Escape") {
                closeProject();
            }

            if (event.key === "ArrowRight") {
                nextImage();
            }

            if (event.key === "ArrowLeft") {
                previousImage();
            }
        }

        document.addEventListener(
            "keydown",
            handleKeyDown
        );

        document.body.style.overflow = "hidden";

        return () => {

            document.removeEventListener(
                "keydown",
                handleKeyDown
            );

            document.body.style.overflow = "";
        };

    }, [selectedProject]);


    return (

        <>

            {/* =========================================================
                PROJECT SECTION
            ========================================================= */}

            <section
                className="
                    relative
                    w-full
                    px-[6dvw]
                    py-[14dvh]
                    text-white
                "
            >

                <div
                    className="
                        mx-auto
                        w-full
                        max-w-[1500px]
                    "
                >

                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <header
                        className="
                            mb-[8dvh]
                            flex
                            flex-col
                            gap-[2dvh]
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >

                            <span
                                className="
                                    h-px
                                    w-[35px]
                                    bg-[#777777]
                                "
                            />

                            <span
                                className="
                                    text-[0.7rem]
                                    uppercase
                                    tracking-[0.3em]
                                    text-[#888888]
                                "
                            >
                                Selected work
                            </span>

                        </div>


                        <div
                            className="
                                grid
                                grid-cols-1
                                gap-[5dvw]
                                lg:grid-cols-2
                            "
                        >

                            <h2
                                className="
                                    text-[11dvw]
                                    font-semibold
                                    leading-[0.9]
                                    tracking-[-0.05em]
                                    sm:text-[8dvw]
                                    lg:text-[5vw]
                                "
                            >

                                Projetos

                                <br />

                                <span
                                    className="
                                        playfair-display-900
                                        text-[#777777]
                                    "
                                >
                                    selecionados.
                                </span>

                            </h2>


                            <div
                                className="
                                    flex
                                    items-end
                                "
                            >

                                <p
                                    className="
                                        max-w-[550px]
                                        text-[4dvw]
                                        leading-[1.7]
                                        text-[#777777]
                                        sm:text-[2.2dvw]
                                        lg:text-[1.2vw]
                                    "
                                >
                                    Uma seleção de projetos desenvolvidos
                                    através de software, automação, dados,
                                    inteligência artificial e experiências
                                    digitais.
                                </p>

                            </div>

                        </div>

                    </header>


                    {/* =================================================
                        PROJECT GRID
                    ================================================= */}

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-[4dvh]
                            lg:grid-cols-2
                            lg:gap-[2dvw]
                        "
                    >

                        {projects.map((project) => (

                            <article
                                key={project.number}
                                className={`
                                    group
                                    relative

                                    ${
                                        project.featured
                                            ? "lg:col-span-2"
                                            : ""
                                    }
                                `}
                            >

                                {/* =====================================
                                    IMAGE
                                ===================================== */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        openProject(project)
                                    }
                                    className="
                                        relative
                                        block
                                        w-full
                                        cursor-pointer
                                        overflow-hidden
                                        rounded-[1.5rem]
                                        border
                                        border-[#292929]
                                        bg-[#0b0b0b]
                                        text-left
                                    "
                                >

                                    <div
                                        className={`
                                            relative
                                            w-full
                                            ${
                                                project.featured
                                                    ? "aspect-[2/1]"
                                                    : "aspect-[1.25/1]"
                                            }
                                        `}
                                    >

                                        <Image
                                            src={
                                                project.images[0]
                                            }
                                            alt={
                                                project.title
                                            }
                                            fill
                                            sizes={
                                                project.featured
                                                    ? "(min-width: 1024px) 90vw, 100vw"
                                                    : "(min-width: 1024px) 45vw, 100vw"
                                            }
                                            className="
                                                object-cover
                                                transition-transform
                                                duration-700
                                                ease-out
                                                group-hover:scale-[1.04]
                                            "
                                        />


                                        {/* OVERLAY */}

                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                bg-black/0
                                                transition-all
                                                duration-500
                                                group-hover:bg-black/25
                                            "
                                        />


                                        {/* OPEN ICON */}

                                        <div
                                            className="
                                                absolute
                                                right-5
                                                top-5
                                                flex
                                                size-11
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-white/20
                                                bg-black/40
                                                backdrop-blur-sm
                                                opacity-0
                                                translate-y-2
                                                transition-all
                                                duration-500
                                                group-hover:translate-y-0
                                                group-hover:opacity-100
                                            "
                                        >

                                            <ArrowUpRight
                                                size={19}
                                                strokeWidth={1.5}
                                            />

                                        </div>


                                        {/* IMAGE COUNT */}

                                        {project.images.length > 1 && (

                                            <div
                                                className="
                                                    absolute
                                                    bottom-5
                                                    right-5
                                                    rounded-full
                                                    border
                                                    border-white/20
                                                    bg-black/50
                                                    px-3
                                                    py-1.5
                                                    text-[0.65rem]
                                                    tracking-[0.15em]
                                                    text-white
                                                    backdrop-blur-md
                                                "
                                            >
                                                {String(
                                                    project.images.length
                                                ).padStart(2, "0")}{" "}
                                                IMAGENS
                                            </div>

                                        )}

                                    </div>

                                </button>


                                {/* =====================================
                                    PROJECT INFORMATION
                                ===================================== */}

                                <div
                                    className="
                                        flex
                                        flex-col
                                        gap-4
                                        px-1
                                        py-6
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                        "
                                    >

                                        <span
                                            className="
                                                text-[0.65rem]
                                                tracking-[0.25em]
                                                text-[#666666]
                                            "
                                        >
                                            {project.number}
                                            {" / "}
                                            {project.category}
                                        </span>


                                        <button
                                            type="button"
                                            onClick={() =>
                                                openProject(project)
                                            }
                                            className="
                                                flex
                                                cursor-pointer
                                                items-center
                                                gap-1
                                                text-[0.7rem]
                                                uppercase
                                                tracking-[0.15em]
                                                text-[#777777]
                                                transition-colors
                                                hover:text-white
                                            "
                                        >

                                            Ver projeto

                                            <ArrowUpRight
                                                size={13}
                                                strokeWidth={1.5}
                                            />

                                        </button>

                                    </div>


                                    <h3
                                        className="
                                            text-[7dvw]
                                            font-medium
                                            tracking-[-0.04em]
                                            sm:text-[4dvw]
                                            lg:text-[2.2vw]
                                        "
                                    >
                                        {project.title}
                                    </h3>


                                    <p
                                        className="
                                            max-w-[700px]
                                            text-[3.7dvw]
                                            leading-[1.7]
                                            text-[#777777]
                                            sm:text-[1.8dvw]
                                            lg:text-[1vw]
                                        "
                                    >
                                        {project.description}
                                    </p>


                                    {/* TECHNOLOGIES */}

                                    <div
                                        className="
                                            flex
                                            flex-wrap
                                            gap-2
                                            pt-1
                                        "
                                    >

                                        {project.technologies.map(
                                            (technology) => (

                                                <span
                                                    key={technology}
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-[#292929]
                                                        px-3
                                                        py-1.5
                                                        text-[0.6rem]
                                                        uppercase
                                                        tracking-[0.15em]
                                                        text-[#666666]
                                                    "
                                                >
                                                    {technology}
                                                </span>

                                            )
                                        )}

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>


                    {/* =================================================
                        FOOTER
                    ================================================= */}

                    <div
                        className="
                            mt-[10dvh]
                            flex
                            flex-col
                            items-start
                            justify-between
                            gap-6
                            border-t
                            border-[#292929]
                            pt-8
                            sm:flex-row
                            sm:items-center
                        "
                    >

                        <p
                            className="
                                text-[0.75rem]
                                uppercase
                                tracking-[0.2em]
                                text-[#555555]
                            "
                        >
                            Mais projetos em desenvolvimento
                        </p>


                        <a
                            href="https://github.com/yuri342"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                flex
                                items-center
                                gap-2
                                text-sm
                                text-[#888888]
                                transition-colors
                                hover:text-white
                            "
                        >

                            Ver GitHub

                            <ArrowUpRight
                                size={16}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:-translate-y-1
                                    group-hover:translate-x-1
                                "
                            />

                        </a>

                    </div>

                </div>

            </section>


            {/* =========================================================
                FULLSCREEN GALLERY
            ========================================================= */}

            {selectedProject && (

                <div
                    className="
                        fixed
                        inset-0
                        z-[100]
                        flex
                        items-center
                        justify-center
                        bg-black/95
                        px-[4dvw]
                        py-[4dvh]
                        backdrop-blur-md
                    "
                    onMouseDown={(event) => {

                        if (
                            event.target ===
                            event.currentTarget
                        ) {
                            closeProject();
                        }

                    }}
                >

                    {/* =================================================
                        CLOSE
                    ================================================= */}

                    <button
                        type="button"
                        onClick={closeProject}
                        aria-label="Fechar galeria"
                        className="
                            absolute
                            right-6
                            top-6
                            z-30
                            flex
                            size-11
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#333333]
                            bg-black/50
                            text-white
                            transition-colors
                            hover:bg-white
                            hover:text-black
                        "
                    >

                        <X
                            size={20}
                            strokeWidth={1.5}
                        />

                    </button>


                    {/* =================================================
                        GALLERY CONTENT
                    ================================================= */}

                    <div
                        className="
                            flex
                            h-full
                            w-full
                            max-w-[1500px]
                            flex-col
                            gap-5
                        "
                    >

                        {/* HEADER */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                pr-16
                            "
                        >

                            <div>

                                <span
                                    className="
                                        block
                                        text-[0.65rem]
                                        uppercase
                                        tracking-[0.25em]
                                        text-[#666666]
                                    "
                                >
                                    {selectedProject.number}
                                    {" / "}
                                    {selectedProject.category}
                                </span>


                                <h2
                                    className="
                                        mt-2
                                        text-2xl
                                        font-medium
                                        tracking-[-0.03em]
                                        sm:text-3xl
                                    "
                                >
                                    {selectedProject.title}
                                </h2>

                            </div>


                            <span
                                className="
                                    text-sm
                                    tracking-[0.15em]
                                    text-[#666666]
                                "
                            >
                                {String(
                                    currentImage + 1
                                ).padStart(2, "0")}
                                {" / "}
                                {String(
                                    selectedProject.images.length
                                ).padStart(2, "0")}
                            </span>

                        </div>


                        {/* MAIN IMAGE */}

                        <div
                            className="
                                relative
                                min-h-0
                                flex-1
                                overflow-hidden
                                rounded-2xl
                                border
                                border-[#222222]
                                bg-[#080808]
                            "
                        >

                            <Image
                                key={
                                    selectedProject.images[
                                        currentImage
                                    ]
                                }
                                src={
                                    selectedProject.images[
                                        currentImage
                                    ]
                                }
                                alt={`${selectedProject.title} - imagem ${
                                    currentImage + 1
                                }`}
                                fill
                                sizes="95vw"
                                className="
                                    object-contain
                                    p-2
                                    sm:p-5
                                "
                            />


                            {/* PREVIOUS */}

                            {selectedProject.images.length > 1 && (

                                <button
                                    type="button"
                                    onClick={previousImage}
                                    aria-label="Imagem anterior"
                                    className="
                                        absolute
                                        left-4
                                        top-1/2
                                        flex
                                        size-11
                                        -translate-y-1/2
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-black/60
                                        text-white
                                        backdrop-blur-md
                                        transition-colors
                                        hover:bg-white
                                        hover:text-black
                                    "
                                >

                                    <ChevronLeft
                                        size={21}
                                    />

                                </button>

                            )}


                            {/* NEXT */}

                            {selectedProject.images.length > 1 && (

                                <button
                                    type="button"
                                    onClick={nextImage}
                                    aria-label="Próxima imagem"
                                    className="
                                        absolute
                                        right-4
                                        top-1/2
                                        flex
                                        size-11
                                        -translate-y-1/2
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-black/60
                                        text-white
                                        backdrop-blur-md
                                        transition-colors
                                        hover:bg-white
                                        hover:text-black
                                    "
                                >

                                    <ChevronRight
                                        size={21}
                                    />

                                </button>

                            )}

                        </div>


                        {/* =================================================
                            THUMBNAILS
                        ================================================= */}

                        {selectedProject.images.length > 1 && (

                            <div
                                className="
                                    flex
                                    gap-2
                                    overflow-x-auto
                                    pb-1
                                    [scrollbar-width:none]
                                    [&::-webkit-scrollbar]:hidden
                                "
                            >

                                {selectedProject.images.map(
                                    (image, index) => (

                                        <button
                                            key={image}
                                            type="button"
                                            onClick={() =>
                                                setCurrentImage(
                                                    index
                                                )
                                            }
                                            className={`
                                                relative
                                                h-[60px]
                                                w-[90px]
                                                shrink-0
                                                overflow-hidden
                                                rounded-lg
                                                border
                                                transition-all
                                                duration-300

                                                ${
                                                    currentImage ===
                                                    index
                                                        ? "border-white opacity-100"
                                                        : "border-[#292929] opacity-50 hover:opacity-80"
                                                }
                                            `}
                                        >

                                            <Image
                                                src={image}
                                                alt=""
                                                fill
                                                sizes="90px"
                                                className="object-cover"
                                            />

                                        </button>

                                    )
                                )}

                            </div>

                        )}


                        {/* PROJECT LINK */}

                        {selectedProject.href !== "#" && (

                            <div className="flex justify-end">

                                <a
                                    href={
                                        selectedProject.href
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        uppercase
                                        tracking-[0.2em]
                                        text-[#777777]
                                        transition-colors
                                        hover:text-white
                                    "
                                >

                                    Abrir projeto

                                    <ExternalLink
                                        size={14}
                                    />

                                </a>

                            </div>

                        )}

                    </div>

                </div>

            )}

        </>

    );
}