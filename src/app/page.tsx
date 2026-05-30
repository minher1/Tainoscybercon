import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ThreatTicker from "@/components/ThreatTicker";
import About from "@/components/About";
import Terminal from "@/components/Terminal";
import Themes from "@/components/Themes";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import Tickets from "@/components/Tickets";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ThreatTicker />
        <About />
        <Terminal />
        <Themes />
        <Speakers />
        <Schedule />
        <Tickets />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
