import About from "./about";
import Creator from "./aboutme";
import Carrousel from "./carrousel"
import SiteHeader from "./site-header";

export default function Home() {
  return (
    <main className="flex flex-col flex-nowrap items-center justify-between relative">
      <SiteHeader />
      <section className="w-full min-h-[100dvh] flex flex-col items-center justify-start gap-10">
        <div className="w-full flex flex-col items-start gap-6">
          <About/>
          <Carrousel/>
          <Creator/>
        </div>
      </section>
    </main>
  );
}