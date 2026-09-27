
export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-between">
      <header className="w-full flex flex-col md:grid md:grid-cols-3 items-center gap-6 md:gap-0 p-6 md:p-10">
        <nav className="md:justify-self-start ">
          <ul className="flex gap-3 list-none raleway text-lg flex-wrap justify-center md:gap-10 bt-n-shine">
            <li><button className="btn-shine">Meu Trabalho</button></li>
            <li><button className="btn-shine">Sobre</button></li>
            <li><button className="btn-shine">Exemplos</button></li>
            <li><button className="btn-shine">Contato</button></li>
          </ul>
        </nav>

        <span className="md:justify-self-center flex items-center gap-2 md:gap-4 title">
          <div className="lines" />
          <div className="flex flex-col items-center typewriter">
            <h1 className="text-3xl md:text-4xl playfair-display-900">YouMake</h1>
            <h3 className="text-xl md:text-2xl raleway">I Create</h3>
          </div>
          <div className="lines" />
        </span>
      </header>

      <section className="grid grid-cols-2 grid-rows-5 gap-2">
        <div className="aboutme flex flex-col items-center justify-center gap-6 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl raleway">Sobre Mim</h2>
          <p className="text-lg md:text-xl raleway text-center">
            Sou um desenvolvedor web apaixonado por criar experiências digitais envolventes e funcionais. Com habilidades em HTML, CSS, JavaScript e frameworks modernos, busco constantemente aprimorar minhas competências para entregar soluções inovadoras e de alta qualidade.
          </p>
        </div>
      </section>
    </main>
  );
}