import Carrousel from "./carrousel"

export default function Home() {
  return (
    <main className="flex flex-col flex-nowrap items-center justify-between">
      <header className="w-full flex flex-col flex-nowrap md:grid md:grid-cols-3 items-center gap-6 md:gap-0 p-6 md:p-10">
        <nav className="w-full md:justify-self-start">
          <ul className="sticky flex flex-nowrap gap-3 list-none raleway text-lg justify-center md:gap-5">
            <li><button className="btn-shine">Serviços</button></li>
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

      <section className="w-full h-full flex flex-col items-center justify-center gap-10">
        <div className="w-full h-full flex flex-col items-start gap-6">
          <Carrousel />
        </div>
      </section>
    </main>
  );
}