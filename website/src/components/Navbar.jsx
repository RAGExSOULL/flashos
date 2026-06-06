import { useEffect, useState } from 'react'
import { HexLogo, Github, Download } from './Icons'
import { GITHUB_URL, RELEASES_URL } from '../data/site'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#catalog', label: 'Operating systems' },
  { href: '#download', label: 'Download' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" aria-label="FlashOS home">
          <HexLogo size={26} />
          <span>FlashOS</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--ghost btn--icon"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="FlashOS on GitHub"
          >
            <Github width={18} height={18} />
            <span className="nav__star">Star</span>
          </a>
          <a className="btn btn--primary" href={RELEASES_URL} target="_blank" rel="noreferrer">
            <Download width={17} height={17} />
            Download
          </a>
        </div>
      </div>
    </header>
  )
}
