// Decorative brand-gradient SVG silhouettes used across sections

/** Large shield + lock — Hero background right */
export function ShieldSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 220" fill="none" className={className} aria-hidden>
      <path
        d="M100 8 L180 40 L180 110 C180 158 140 198 100 212 C60 198 20 158 20 110 L20 40 Z"
        fill="url(#logoGrad)" opacity="0.18"
      />
      {/* Lock body */}
      <rect x="78" y="100" width="44" height="36" rx="6" fill="url(#logoGrad)" opacity="0.35" />
      {/* Lock shackle */}
      <path
        d="M86 100 L86 88 Q100 72 114 88 L114 100"
        stroke="url(#logoGrad)" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.35"
      />
      {/* Keyhole */}
      <circle cx="100" cy="115" r="5" fill="#07091a" opacity="0.8" />
      <rect x="97" y="115" width="6" height="10" rx="2" fill="#07091a" opacity="0.8" />
    </svg>
  );
}

/** Network nodes grid — About / Themes background */
export function NetworkSilhouette({ className = "" }: { className?: string }) {
  const nodes = [
    [40, 40], [120, 30], [200, 55], [270, 40],
    [20, 110], [90, 120], [160, 100], [240, 115], [310, 95],
    [50, 185], [130, 190], [210, 175], [280, 185],
  ];
  const edges = [
    [0,1],[1,2],[2,3],[0,4],[1,5],[2,6],[3,7],[4,5],[5,6],[6,7],[7,8],
    [4,9],[5,10],[6,11],[7,12],[9,10],[10,11],[11,12],
  ];
  return (
    <svg viewBox="0 0 330 220" fill="none" className={className} aria-hidden>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="url(#logoGradH)" strokeWidth="1.5" opacity="0.25"
        />
      ))}
      {nodes.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="url(#logoGrad)" opacity="0.4" />
      ))}
    </svg>
  );
}

/** Speaker at podium silhouette */
export function SpeakerSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 200" fill="none" className={className} aria-hidden>
      {/* Head */}
      <circle cx="80" cy="38" r="22" fill="url(#logoGrad)" opacity="0.22" />
      {/* Body */}
      <path
        d="M50 70 Q50 60 80 60 Q110 60 110 70 L120 130 L40 130 Z"
        fill="url(#logoGrad)" opacity="0.22"
      />
      {/* Arms */}
      <path d="M50 80 L20 115 L30 120 L58 90" fill="url(#logoGrad)" opacity="0.22" />
      <path d="M110 80 L140 115 L130 120 L102 90" fill="url(#logoGrad)" opacity="0.22" />
      {/* Podium */}
      <rect x="55" y="130" width="50" height="8" rx="2" fill="url(#logoGrad)" opacity="0.3" />
      <path d="M60 138 L50 185 L110 185 L100 138 Z" fill="url(#logoGrad)" opacity="0.2" />
      {/* Mic stand */}
      <rect x="78" y="108" width="4" height="24" rx="2" fill="url(#logoGrad)" opacity="0.35" />
      <ellipse cx="80" cy="107" rx="6" ry="8" fill="url(#logoGrad)" opacity="0.4" />
    </svg>
  );
}

/** Circuit trace — decorative corner element */
export function CircuitTrace({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      <path
        d="M10 60 H40 V20 H80 V40 H100 V80 H70 V100 H30 V70 H10 Z"
        stroke="url(#logoGrad)" strokeWidth="2" fill="none" opacity="0.35"
      />
      {([[40,20],[80,20],[80,40],[100,40],[100,80],[70,80],[70,100],[30,100],[30,70]] as [number,number][]).map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="url(#logoGrad)" opacity="0.5" />
      ))}
    </svg>
  );
}

/** Binary / data stream — Schedule / Ticket section accent */
export function BinaryStream({ className = "" }: { className?: string }) {
  const rows = ["10110100", "01001011", "11010010", "00101101", "10011010"];
  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden>
      {rows.map((row, ri) =>
        row.split("").map((ch, ci) => (
          <text
            key={`${ri}-${ci}`}
            x={ci * 22 + 8}
            y={ri * 24 + 20}
            fontSize="14"
            fontFamily="monospace"
            fill={ch === "1" ? "url(#logoGrad)" : "#7b35b0"}
            opacity={ch === "1" ? 0.35 : 0.15}
          >
            {ch}
          </text>
        ))
      )}
    </svg>
  );
}

/** Taino sun symbol — cultural nod, used in footer */
export function TainoSun({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    const x1 = 50 + 22 * Math.cos(angle);
    const y1 = 50 + 22 * Math.sin(angle);
    const x2 = 50 + 40 * Math.cos(angle);
    const y2 = 50 + 40 * Math.sin(angle);
    return { x1, y1, x2, y2 };
  });
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      {rays.map((r, i) => (
        <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
          stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      ))}
      <circle cx="50" cy="50" r="18" fill="url(#logoGrad)" opacity="0.3" />
      <circle cx="50" cy="50" r="10" fill="url(#logoGrad)" opacity="0.5" />
    </svg>
  );
}

/** Eye / visibility icon — cybersecurity awareness theme */
export function EyeSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 100" fill="none" className={className} aria-hidden>
      <path
        d="M10 50 Q100 -20 190 50 Q100 120 10 50 Z"
        fill="url(#logoGrad)" opacity="0.15"
        stroke="url(#logoGrad)" strokeWidth="2" />
      <circle cx="100" cy="50" r="22" fill="url(#logoGrad)" opacity="0.25" />
      <circle cx="100" cy="50" r="12" fill="url(#logoGrad)" opacity="0.4" />
      <circle cx="106" cy="44" r="4" fill="#07091a" opacity="0.6" />
    </svg>
  );
}
