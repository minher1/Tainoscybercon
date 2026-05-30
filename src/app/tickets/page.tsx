import WhyAttend from "@/components/WhyAttend";
import Tickets from "@/components/Tickets";

export const metadata = {
  title: "Billets — Tainos Cyber Con 2026",
  description: "Obtenez votre billet pour la conférence internationale de cybersécurité du 29 août 2026.",
};

export default function TicketsPage() {
  return (
    <>
      <WhyAttend />
      <Tickets />
    </>
  );
}
