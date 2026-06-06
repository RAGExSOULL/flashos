import Reveal from './Reveal'

const steps = [
  { n: '01', title: 'Pick an operating system', body: 'Choose from 14+ systems and dozens of versions. FlashOS fetches the official ISO for you.' },
  { n: '02', title: 'Plug in your USB drive', body: 'Drives are detected automatically. Select the right one — a confirmation guards against mistakes.' },
  { n: '03', title: 'FlashOS detects firmware', body: 'It picks GPT + UEFI or MBR + BIOS and the correct filesystem based on your machine and ISO size.' },
  { n: '04', title: 'Partition, format & copy', body: 'The drive is partitioned and formatted, files are copied, and install.wim is split if it exceeds 4 GB.' },
  { n: '05', title: 'Bootloader installed — done', body: 'The bootloader is written and your USB is ready to boot. The whole thing took one click.' },
]

const firmware = [
  { fw: 'UEFI (modern PC)', scheme: 'GPT', fs: 'FAT32', note: 'Windows ISOs split via wimlib' },
  { fw: 'BIOS (older PC)', scheme: 'MBR', fs: 'FAT32 / NTFS', note: 'NTFS for ISOs over 4 GB' },
  { fw: 'macOS', scheme: 'GPT', fs: '—', note: 'Uses dd directly' },
]

export default function HowItWorks() {
  return (
    <section className="section section--alt" id="how">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">How it works</span>
          <h2 className="section__title">Five steps. You only do the first two.</h2>
          <p className="section__lead">
            Everything after “plug in the drive” is automatic. Here is exactly what
            happens under the hood.
          </p>
        </Reveal>

        <ol className="steps">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.06} className="steps__item">
              <span className="steps__num mono">{s.n}</span>
              <div className="steps__content">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="fwtable" delay={0.1}>
          <div className="fwtable__head">
            <span className="eyebrow">Partition logic</span>
            <h3>Picks the right scheme automatically</h3>
          </div>
          <div className="fwtable__grid" role="table" aria-label="Partition logic by firmware">
            <div className="fwtable__row fwtable__row--head" role="row">
              <span role="columnheader">Firmware</span>
              <span role="columnheader">Scheme</span>
              <span role="columnheader">Filesystem</span>
              <span role="columnheader">Notes</span>
            </div>
            {firmware.map((r) => (
              <div className="fwtable__row" role="row" key={r.fw}>
                <span role="cell" data-label="Firmware">{r.fw}</span>
                <span role="cell" data-label="Scheme" className="mono">{r.scheme}</span>
                <span role="cell" data-label="Filesystem" className="mono">{r.fs}</span>
                <span role="cell" data-label="Notes" className="fwtable__note">{r.note}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
