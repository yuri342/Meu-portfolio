import "./carrousel.css"

export default function Carrousel() {
    const items = ["item0", "item1", "item2", "item3", "item4", "item5", "item6"];
    const images = [
        "meu-portfolio/public/automation.png",
        "meu-portfolio/public/dataAnalis.png",
        "meu-portfolio/public/UiDesing.png",
        "meu-portfolio/public/google.png",
        "meu-portfolio/public/dev.png",
    ];


    return (
        <section className="sectionIn w-full flex flex-col items-center justify-center gap-6">
            <h2 className="px-5 md:px-10 text-2xl md:text-3xl text-[#aca8a8] raleway w-full md:w-1/2">
                Nossos Serviços
            </h2>

            <div
                className="
                    relative
                    w-[100dvw]
                    sm:w-[95dvw]
                    md:w-[90dvw]
                    lg:w-[85dvw]
                    xl:w-[80dvw]
                    2xl:w-[75dvw]
                "
            >
                <div className="carrousel flex flex-row flex-nowrap w-full h-[50dvh] md:h-[65dvh] gap-[2dvw] sm:gap-[2.5dvw] md:gap-[3dvw] lg:gap-[3.5dvw] xl:gap-[4dvw] 2xl:gap-[4.5dvw] overflow-x-auto snap-x snap-mandatory p-[2dvw]">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            id={`slide${index + 1}`}
                            className="slide shrink-0 snap-center h-full w-full aspect-[3/5] bg-blue-500 rounded-3xl md:w-1/4 md:rounded-[2rem] overflow-hidden"
                        >
                            <h1>{item}</h1>
                        </div>
                    ))}
                </div>

                {/* fade esquerda */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 md:w-24 bg-gradient-to-r from-[#121212] to-transparent" />

                {/* fade direita */}
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 md:w-24 bg-gradient-to-l from-[#121212] to-transparent" />
            </div>

            <div id="menuIndicator" className="flex flex-row justify-center items-center gap-2 md:gap-4">
                {items.map((_, index) => (
                    <button
                        key={index}
                        id={`indicator${index + 1}`}
                        className="size-3 rounded-full bg-gray-600 cursor-pointer hover:bg-gray-400 transition-colors duration-300"
                    ></button>
                ))}
            </div>
        </section>
    );
}