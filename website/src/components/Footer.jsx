import { HexLogo, Github } from './Icons'
import { GITHUB_URL, RELEASES_URL } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="nav__brand" href="#top">
            <HexLogo size={24} />
            <span>FlashOS</span>
          </a>
          <p>One-click OS downloader and USB flasher. Pick, plug in, flash.</p>
        </div>

        <nav className="footer__cols" aria-label="Footer">
          <div>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#catalog">Operating systems</a>
            <a href={RELEASES_URL} target="_blank" rel="noreferrer">Download</a>
          </div>
          <div>
            <h4>Project</h4>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`${GITHUB_URL}/issues`} target="_blank" rel="noreferrer">Issues</a>
            <a href={`${GITHUB_URL}/blob/main/README.md`} target="_blank" rel="noreferrer">Docs</a>
            <a href={`${GITHUB_URL}/blob/main/LICENSE`} target="_blank" rel="noreferrer">License (MIT)</a>
          </div>
        </nav>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} FlashOS · MIT licensed</span>
        <div className="footer__social">
          <span className="footer__warn">Always double-check the target drive before flashing.</span>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github width={18} height={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
