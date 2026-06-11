import { motion, useScroll, useSpring } from 'framer-motion'

/* 1px reading-progress hairline along the very top edge. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-ink"
      style={{ scaleX }}
    />
  )
}
