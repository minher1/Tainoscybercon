// Shared SVG gradient definition — render once in layout, reference everywhere
export default function BrandDefs() {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#e84444" />
          <stop offset="50%"  stopColor="#c03880" />
          <stop offset="100%" stopColor="#7b35b0" />
        </linearGradient>
        <linearGradient id="logoGradH" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#e84444" />
          <stop offset="50%"  stopColor="#c03880" />
          <stop offset="100%" stopColor="#7b35b0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
