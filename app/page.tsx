import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-between">
      <header className="w-full grid grid-cols-3 items-center p-10">
        <nav className="justify-self-start">
          <ul className="flex gap-4 list-none raleway text-lg">
            <li><button className="btn-shine">Meu trabalho</button></li>
            <li><button className="btn-shine">Sobre</button></li>
            <li><button className="btn-shine">Exemplos</button></li>
            <li><button className="btn-shine">Contato</button></li>
          </ul>
        </nav>

        <span className="justify-self-center flex flex-col items-center">
          <h1 className="text-4xl playfair-display-900">YouMake</h1>
          <h3 className="text-2xl raleway">I Create</h3>
        </span>
        
      </header>

      <section className="flex-1 w-full flex items-center justify-center gap-4">
        {/* resto do conteúdo */}
      </section>
    </main>
  );
}