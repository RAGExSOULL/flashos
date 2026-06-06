// FlashOS supported operating systems — derived from the app's os-catalog.js.
// `editions` / `versions` are counts shown on the catalog cards.

export const operatingSystems = [
  {
    id: 'windows',
    name: 'Windows',
    category: 'windows',
    color: '#0078d4',
    badge: 'latest',
    editions: 9,
    versions: 13,
    description:
      "Microsoft's desktop OS — 11, 10, 8.1, 7, Vista, XP, plus Server & LTSC builds.",
  },
  {
    id: 'ubuntu',
    name: 'Ubuntu',
    category: 'linux',
    color: '#e95420',
    badge: 'lts',
    editions: 6,
    versions: 18,
    description:
      'The most popular Linux distribution. Beginner-friendly and well-supported.',
  },
  {
    id: 'debian',
    name: 'Debian',
    category: 'linux',
    color: '#a80030',
    badge: 'stable',
    editions: 2,
    versions: 6,
    description:
      'The universal OS. Free, stable, the foundation many distros are built on.',
  },
  {
    id: 'fedora',
    name: 'Fedora',
    category: 'linux',
    color: '#3c6eb4',
    badge: 'latest',
    editions: 3,
    versions: 7,
    description:
      'Cutting-edge Linux backed by Red Hat. New releases every six months.',
  },
  {
    id: 'arch',
    name: 'Arch Linux',
    category: 'linux',
    color: '#1793d1',
    badge: 'rolling',
    editions: 1,
    versions: 1,
    description:
      'Rolling release with a minimal base. Build it your way. Not for beginners.',
  },
  {
    id: 'mint',
    name: 'Linux Mint',
    category: 'linux',
    color: '#87cf3e',
    badge: 'lts',
    editions: 4,
    versions: 7,
    description:
      'Elegant and familiar. Most popular pick for people switching from Windows.',
  },
  {
    id: 'popos',
    name: 'Pop!_OS',
    category: 'linux',
    color: '#48b9c7',
    badge: 'lts',
    editions: 2,
    versions: 2,
    description:
      'Made by System76. Tiling windows, great GPU support, developer-focused.',
  },
  {
    id: 'manjaro',
    name: 'Manjaro',
    category: 'linux',
    color: '#35bf5c',
    badge: 'rolling',
    editions: 3,
    versions: 3,
    description:
      'Arch-based but user-friendly. Rolling release with polished defaults.',
  },
  {
    id: 'kali',
    name: 'Kali Linux',
    category: 'linux',
    color: '#367bf0',
    badge: 'security',
    editions: 2,
    versions: 3,
    description:
      'For security pros. Pre-loaded with 600+ penetration testing tools.',
  },
  {
    id: 'elementary',
    name: 'elementary OS',
    category: 'linux',
    color: '#64baff',
    badge: 'stable',
    editions: 1,
    versions: 1,
    description:
      'Beautiful and polished. macOS-like, privacy-focused, pay-what-you-want.',
  },
  {
    id: 'opensuse',
    name: 'openSUSE',
    category: 'linux',
    color: '#73ba25',
    badge: 'rolling',
    editions: 2,
    versions: 2,
    description:
      'Solid Linux from Germany. YaST is famously good for system configuration.',
  },
  {
    id: 'mxlinux',
    name: 'MX Linux',
    category: 'linux',
    color: '#5a5a8a',
    badge: 'stable',
    editions: 2,
    versions: 2,
    description:
      'Debian-based with XFCE. Top rated on DistroWatch for years running.',
  },
  {
    id: 'alpine',
    name: 'Alpine Linux',
    category: 'linux',
    color: '#0d597f',
    badge: 'stable',
    editions: 1,
    versions: 1,
    description:
      'Tiny, secure Linux popular for containers. Full ISO is only ~210 MB.',
  },
  {
    id: 'endeavour',
    name: 'EndeavourOS',
    category: 'linux',
    color: '#7f3f97',
    badge: 'rolling',
    editions: 1,
    versions: 1,
    description:
      'Arch made easy. Friendly installer but stays close to vanilla Arch.',
  },
]

export const badgeMeta = {
  latest: { label: 'Latest', color: '#a78bfa' },
  lts: { label: 'LTS', color: '#60a5fa' },
  stable: { label: 'Stable', color: '#4ade80' },
  rolling: { label: 'Rolling', color: '#86efac' },
  legacy: { label: 'Legacy', color: '#fbbf24' },
  security: { label: 'Security', color: '#f472b6' },
  server: { label: 'Server', color: '#7dd3fc' },
}

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'windows', label: 'Windows' },
  { id: 'linux', label: 'Linux' },
]

// Aggregate stats for the hero / catalog header.
export const catalogStats = {
  families: operatingSystems.length,
  versions: operatingSystems.reduce((n, os) => n + os.versions, 0),
}
