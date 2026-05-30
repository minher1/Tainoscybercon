"use client";
import { useEffect, useState } from "react";

interface Props {
  lines: string[];
  speed?: number; // ms per char
  pauseMs?: number; // pause between lines
  className?: string;
}

export default function Typewriter({ lines, speed = 40, pauseMs = 1200, className = "" }: Props) {
  const [display, setDisplay] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    if (pausing) {
      const t = setTimeout(() => {
        const next = (lineIdx + 1) % lines.length;
        setLineIdx(next);
        setCharIdx(0);
        setDisplay("");
        setPausing(false);
      }, pauseMs);
      return () => clearTimeout(t);
    }

    const line = lines[lineIdx];
    if (charIdx < line.length) {
      const t = setTimeout(() => {
        setDisplay(line.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      setPausing(true);
    }
  }, [charIdx, lineIdx, lines, pausing, pauseMs, speed]);

  return (
    <span className={className}>
      {display}
      <span className="animate-pulse text-[#4a6cf7]">█</span>
    </span>
  );
}
