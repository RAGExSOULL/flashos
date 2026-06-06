import Reveal from './Reveal'
import { Zap, Cpu, Layers, Gauge, Usb, Globe, ShieldCheck } from './Icons'

const features = [
  {
    icon: Zap,
    title: 'One-click flashing',
    body: 'Pick an OS, pick a drive, hit flash. FlashOS handles the download, partitioning, formatting and bootloader for you.',
    span: 'wide',
    accent: true,
  },
  {
    icon: Cpu,
    title: 'Auto firmware detection',
    body: 'Detects your machine and recommends GPT + UEFI or MBR + BIOS automatically — no guesswork.',
  },
  {
    icon: Layers,
    title: 'Handles the FAT32 4GB limit',
    body: 'Large Windows ISOs? FlashOS splits install.wim with wimlib so it fits FAT32 without you lifting a finger.',
  },
  {
    icon: Gauge,
    title: 'Live progress',
    body: 'Real-time download and flash progress with clear, stage-by-stage feedback so you always know what is happening.',
  },
  {
    icon: Usb,
    title: 'USB auto-detect',
    body: 'Plugged-in drives appear automatically and refresh every 5 seconds. Confirmation prompt before any write.',
  },
  {
    icon: Globe,
    title: 'Cross-platform',
    body: 'One codebase runs natively on Windows, Linux and macOS — with a matching CLI for headless setups.',
    span: 'wide',
  },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Why FlashOS</span>
          <h2 className="section__title">Everything Rufus does — without the homework.</h2>
          <p className="section__lead">
            FlashOS automates the tedious, error-prone parts of making a bootable
            USB so you can go from “I need to install an OS” to a working drive in
            minutes.
          </p>
        </Reveal>

        <div className="bento">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <Reveal
                key={f.title}
                delay={i * 0.06}
                className={`bento__card ${f.span === 'wide' ? 'bento__card--wide' : ''} ${
                  f.accent ? 'bento__card--accent' : ''
                }`}
              >
                <span className="bento__icon">
                  <Icon width={22} height={22} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
