import Hero from "@/components/Hero";
import ThreatTicker from "@/components/ThreatTicker";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <>
      <Hero />
      <ThreatTicker />
      <StatsBar />
      <About />
      <Terminal />
    </>
  );
}
