import { motion } from 'framer-motion'

/* One easing curve everywhere: confident, decelerating, never bouncy. */
export const EASE = [0.625, 0.05, 0, 1]

/* Soft fade + rise on scroll into view. */
export default function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/* Text masked inside its own line-box, sliding up into view.
   The classic editorial reveal.
   The viewport trigger lives on the (unmoving) wrapper: the inner span starts
   clipped out of sight, so observing it directly would never fire. */
export function LineReveal({ children, delay = 0, className = '', once = true }) {
  return (
    <motion.span
      /* extra bottom padding (offset by negative margin) keeps descenders
         like j/g/y from being clipped by the mask at tight line-heights */
      className={`block overflow-hidden pb-[0.14em] -mb-[0.14em] ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-40px' }}
    >
      <motion.span
        className="block will-change-transform"
        variants={{ hidden: { y: '130%' }, show: { y: 0 } }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </motion.span>
  )
}

/* A hairline that draws itself across when it enters the viewport. */
export function RuleReveal({ delay = 0, className = '', dark = false }) {
  return (
    <motion.div
      aria-hidden
      className={`h-px w-full origin-left ${dark ? 'bg-line-dark' : 'bg-line'} ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 1.2, delay, ease: EASE }}
    />
  )
}
