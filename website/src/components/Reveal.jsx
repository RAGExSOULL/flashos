import { motion, useReducedMotion } from 'framer-motion'

// Scroll-triggered fade/slide-up wrapper. Respects prefers-reduced-motion.
export default function Reveal({
  children,
  delay = 0,
  y = 20,
  as = 'div',
  className,
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
