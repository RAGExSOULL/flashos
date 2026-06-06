import { motion, useReducedMotion } from 'framer-motion'
import { HexLogo, Download, Github, Usb, Check } from './Icons'
import { GITHUB_URL, RELEASES_URL } from '../data/site'
import { catalogStats } from '../data/osCatalog'

const stages = [
  { label: 'Downloading ISO', done: true },
  { label: 'Partitioning (GPT + UEFI)', done: true },
  { label: 'Copying files', active: true },
  { label: 'Installing bootloader', done: false },
]

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid">
        <div className="hero__copy">
          <a
            className="hero__pill"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            <span className="hero__pill-dot" />
            Free &amp; open source · MIT
          </a>

          <h1 className="hero__title">
            Pick an OS. Plug in a&nbsp;USB.
            <br />
            <span className="grad">Flash it in one click.</span>
          </h1>

          <p className="hero__sub">
            FlashOS downloads the operating system, detects your USB drive, and
            writes a bootable installer automatically. No manual ISO hunting, no
            Rufus, no command line.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary btn--lg" href={RELEASES_URL} target="_blank" rel="noreferrer">
              <Download width={19} height={19} />
              Download for free
            </a>
            <a className="btn btn--ghost btn--lg" href={GITHUB_URL} target="_blank" rel="noreferrer">
              <Github width={18} height={18} />
              View source
            </a>
          </div>

          <dl className="hero__stats">
            <div>
              <dt>{catalogStats.families}+</dt>
              <dd>operating systems</dd>
            </div>
            <div>
              <dt>{catalogStats.versions}+</dt>
              <dd>versions &amp; editions</dd>
            </div>
            <div>
              <dt>3</dt>
              <dd>platforms supported</dd>
            </div>
          </dl>
        </div>

        {/* App window mockup */}
        <motion.div
          className="mock"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, rotateX: 6 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mock__bar">
            <span className="mock__dot" style={{ background: '#3a3a40' }} />
            <span className="mock__dot" style={{ background: '#4a4a52' }} />
            <span className="mock__dot" style={{ background: '#5a5a64' }} />
            <span className="mock__title">
              <HexLogo size={14} /> FlashOS
            </span>
            <span className="mock__firmware">GPT · UEFI</span>
          </div>

          <div className="mock__body">
            <div className="mock__row">
              <div className="mock__os" style={{ '--c': '#e95420' }}>U</div>
              <div className="mock__osinfo">
                <strong>Ubuntu 24.04 LTS</strong>
                <span>ubuntu-24.04-desktop.iso · 6.0 GB</span>
              </div>
              <span className="mock__usb">
                <Usb width={15} height={15} /> SanDisk 32GB
              </span>
            </div>

            <div className="mock__progress">
              <div className="mock__progress-head">
                <span>Flashing…</span>
                <span className="mono">68%</span>
              </div>
              <div className="mock__track">
                <motion.div
                  className="mock__fill"
                  initial={{ width: reduce ? '68%' : '4%' }}
                  animate={{ width: '68%' }}
                  transition={{ duration: 1.6, delay: 0.5, ease: 'easeInOut' }}
                />
              </div>
            </div>

            <ul className="mock__stages">
              {stages.map((s) => (
                <li
                  key={s.label}
                  className={
                    s.active ? 'is-active' : s.done ? 'is-done' : 'is-pending'
                  }
                >
                  <span className="mock__stage-ico">
                    {s.done ? <Check width={13} height={13} /> : s.active ? <span className="spin" /> : <span className="dot" />}
                  </span>
                  {s.label}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="hero__trust">
        <span>Works with</span>
        <b>Windows</b><i>·</i><b>Ubuntu</b><i>·</i><b>Fedora</b><i>·</i><b>Arch</b><i>·</i><b>Mint</b><i>·</i><b>Kali</b><i>·</i><b>Debian</b>
      </div>
    </section>
  )
}
