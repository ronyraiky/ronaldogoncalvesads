import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingCta from "./components/FloatingCta";
import Toast from "./components/Toast";
import Hero from "./sections/Hero";
import Problems from "./sections/Problems";
import Service from "./sections/Service";
import Benefits from "./sections/Benefits";
import Portfolio from "./sections/Portfolio";
import Process from "./sections/Process";
import Audience from "./sections/Audience";
import Faq from "./sections/Faq";
import FinalCta from "./sections/FinalCta";

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Problems />
        <Service />
        <Benefits />
        <Portfolio />
        <Process />
        <Audience />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCta />
      <Toast />
    </>
  );
}
