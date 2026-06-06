// Lucide-style inline SVG icons. 24x24 viewBox, currentColor stroke.
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const HexLogo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="hexg" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#9a9aa2" />
      </linearGradient>
    </defs>
    <path d="M16 2 27.7 8.5v15L16 30 4.3 23.5v-15L16 2Z" fill="url(#hexg)" />
    <path d="M18.4 8.5 10.8 17.6h4.2l-1.4 5.9 7.6-9.1h-4.2l1.4-5.9Z" fill="#08080a" />
  </svg>
)

export const Zap = (p) => (
  <svg {...base} {...p}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" /></svg>
)
export const Usb = (p) => (
  <svg {...base} {...p}>
    <circle cx="10" cy="7" r="1" /><circle cx="4" cy="20" r="2" />
    <path d="M4.7 18.6 10 7" /><path d="m14 10 3 3-3 3" />
    <path d="m17 13 4-1-1-2" /><path d="M10 7v9l4 1" />
  </svg>
)
export const Cpu = (p) => (
  <svg {...base} {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
  </svg>
)
export const Gauge = (p) => (
  <svg {...base} {...p}><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
)
export const Layers = (p) => (
  <svg {...base} {...p}>
    <path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" />
  </svg>
)
export const Globe = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" /><path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
  </svg>
)
export const ShieldCheck = (p) => (
  <svg {...base} {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" />
  </svg>
)
export const Download = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
  </svg>
)
export const Github = (p) => (
  <svg {...base} {...p}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-7a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.2-.3-4 1.4a13.4 13.4 0 0 0-7 0C5 .8 3.8 1.1 3.8 1.1a5 5 0 0 0-.1 3.7A5.4 5.4 0 0 0 2 8.5c0 5.5 3 6.7 6 7a3.4 3.4 0 0 0-1 2.6V22" />
  </svg>
)
export const ArrowRight = (p) => (
  <svg {...base} {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
)
export const Check = (p) => (
  <svg {...base} {...p}><path d="m5 13 4 4L19 7" /></svg>
)
export const Monitor = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" />
  </svg>
)
export const Terminal = (p) => (
  <svg {...base} {...p}><path d="m5 7 5 5-5 5" /><path d="M13 17h6" /></svg>
)
export const Apple = (p) => (
  <svg {...p} width={p.width || 24} height={p.height || 24} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.05 12.5c-.03-2.5 2.04-3.7 2.13-3.76-1.16-1.7-2.97-1.93-3.6-1.96-1.53-.15-3 .9-3.77.9-.78 0-1.97-.88-3.25-.86-1.67.03-3.21.97-4.07 2.47-1.74 3-.44 7.45 1.25 9.9.83 1.19 1.81 2.53 3.1 2.48 1.25-.05 1.72-.8 3.23-.8 1.5 0 1.93.8 3.25.78 1.34-.03 2.19-1.21 3-2.41.95-1.38 1.34-2.72 1.36-2.79-.03-.01-2.6-1-2.63-3.96ZM14.6 5.1c.68-.83 1.14-1.98 1.01-3.13-.98.04-2.17.65-2.88 1.48-.63.73-1.19 1.9-1.04 3.02 1.1.08 2.22-.55 2.91-1.37Z" />
  </svg>
)
export const Linux = (p) => (
  <svg {...p} width={p.width || 24} height={p.height || 24} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2c-1.9 0-3 1.7-3 3.6 0 1.2.4 1.9.4 3 0 .9-.7 1.6-1.5 2.9-.9 1.4-2 2.8-2 4.7 0 .7.3 1.2.8 1.5-.2.5-.3 1-.1 1.4.3.7 1.2.9 2.2 1 .8.1 1.6.4 2.3.8.4.2.9.2 1.3 0 .7-.4 1.5-.7 2.3-.8 1-.1 1.9-.3 2.2-1 .2-.4.1-.9-.1-1.4.5-.3.8-.8.8-1.5 0-1.9-1.1-3.3-2-4.7-.8-1.3-1.5-2-1.5-2.9 0-1.1.4-1.8.4-3C15 3.7 13.9 2 12 2Zm-1.2 4.1c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9Zm2.4 0c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9Zm-1.2 2.3c.8 0 1.6.5 1.6.9 0 .3-.5.5-1 .7-.2.1-.4.3-.6.3s-.4-.2-.6-.3c-.5-.2-1-.4-1-.7 0-.4.8-.9 1.6-.9Z" />
  </svg>
)
export const Windows = (p) => (
  <svg {...p} width={p.width || 24} height={p.height || 24} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 5.6 10.4 4.6V11.5H3V5.6ZM3 12.5H10.4V19.4L3 18.4V12.5ZM11.4 4.4 21 3V11.5H11.4V4.4ZM11.4 12.5H21V21L11.4 19.6V12.5Z" />
  </svg>
)
