import { useMemo, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import { operatingSystems, categories, badgeMeta, catalogStats } from '../data/osCatalog'

function monogram(name) {
  if (name.startsWith('Windows')) return 'Win'
  if (name.startsWith('elementary')) return 'e'
  return name.replace(/[^A-Za-z]/g, '').slice(0, 1).toUpperCase()
}

export default function OSCatalog() {
  const [active, setActive] = useState('all')
  const reduce = useReducedMotion()

  const list = useMemo(
    () =>
      active === 'all'
        ? operatingSystems
        : operatingSystems.filter((os) => os.category === active),
    [active]
  )

  return (
    <section className="section" id="catalog">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Operating systems</span>
          <h2 className="section__title">
            {catalogStats.families} systems, {catalogStats.versions}+ versions — and growing.
          </h2>
          <p className="section__lead">
            From the latest Windows and Ubuntu LTS to Arch, Kali and lightweight
            Alpine. The catalog updates over the air, so new entries appear without
            a reinstall.
          </p>
        </Reveal>

        <Reveal className="filters" role="tablist" aria-label="Filter operating systems">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={active === c.id}
              className={`filters__btn ${active === c.id ? 'is-active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
              <span className="filters__count">
                {c.id === 'all'
                  ? operatingSystems.length
                  : operatingSystems.filter((o) => o.category === c.id).length}
              </span>
            </button>
          ))}
        </Reveal>

        <motion.ul className="oslist" layout>
          <AnimatePresence mode="popLayout">
            {list.map((os) => {
              const badge = badgeMeta[os.badge]
              return (
                <motion.li
                  key={os.id}
                  layout
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="oscard"
                  style={{ '--c': os.color }}
                >
                  <div className="oscard__top">
                    <span className="oscard__logo" aria-hidden="true">
                      {monogram(os.name)}
                    </span>
                    {badge && (
                      <span className="oscard__badge" style={{ '--b': badge.color }}>
                        {badge.label}
                      </span>
                    )}
                  </div>
                  <h3 className="oscard__name">{os.name}</h3>
                  <p className="oscard__desc">{os.description}</p>
                  <div className="oscard__meta mono">
                    <span>{os.versions} version{os.versions > 1 ? 's' : ''}</span>
                    <span className="oscard__cat">{os.category}</span>
                  </div>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  )
}
