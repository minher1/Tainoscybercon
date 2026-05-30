import Themes from "@/components/Themes";
import Schedule from "@/components/Schedule";

export const metadata = {
  title: "Programme 2026 — Tainos Cyber Con",
  description: "Thèmes et horaire de la journée du 29 août 2026 à Mascouche QC.",
};

export default function ProgrammePage() {
  return (
    <>
      <Themes />
      <Schedule />
    </>
  );
}
