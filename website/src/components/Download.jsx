import Reveal from './Reveal'
import { Windows, Linux, Apple, Download as DownloadIcon } from './Icons'
import { RELEASES_URL, APP_VERSION } from '../data/site'

const platforms = [
  { icon: Windows, name: 'Windows', file: 'FlashOS-Setup.exe', note: 'Run as Administrator' },
  { icon: Linux, name: 'Linux', file: 'FlashOS.AppImage', note: 'chmod +x then run' },
  { icon: Apple, name: 'macOS', file: 'FlashOS.dmg', note: 'Drag to Applications' },
]

export default function Download() {
  return (
    <section className="section section--alt" id="download">
      <div className="container">
        <Reveal className="cta">
          <div className="cta__glow" aria-hidden="true" />
          <span className="eyebrow">Download</span>
          <h2 className="cta__title">Make a bootable USB in the next five minutes.</h2>
          <p className="cta__lead">
            Free, open source, and available for every major platform. Grab the
            installer for your OS — version {APP_VERSION}.
          </p>

          <div className="platforms">
            {platforms.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal
                  as="a"
                  key={p.name}
                  delay={i * 0.07}
                  className="platform"
                  href={RELEASES_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="platform__icon">
                    <Icon width={26} height={26} />
                  </span>
                  <span className="platform__name">{p.name}</span>
                  <span className="platform__file mono">{p.file}</span>
                  <span className="platform__note">{p.note}</span>
                  <span className="platform__dl">
                    <DownloadIcon width={16} height={16} /> Download
                  </span>
                </Reveal>
              )
            })}
          </div>

          <p className="cta__fine">
            Antivirus note: tools that write to raw disk are sometimes flagged as
            false positives. The full source is public and auditable — or build it
            yourself.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
