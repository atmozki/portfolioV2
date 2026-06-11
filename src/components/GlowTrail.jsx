import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/* Trails the cursor with the mood of the theme:
   dark mode emits light (ember glow), light mode makes a mark
   (a faint ink wash, like diluted ink shading the paper).
   Sits behind the content (negative z), so sections with their own
   background cover it naturally. */
export default function GlowTrail({ theme }) {
  const x = useMotionValue(-1000)
  const y = useMotionValue(-1000)
  const sx = useSpring(x, { stiffness: 50, damping: 18, mass: 0.7 })
  const sy = useSpring(y, { stiffness: 50, damping: 18, mass: 0.7 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  /* same halo size in both themes; only the mixing differs.
     Dark emits light. Light multiplies, like ink soaking into paper. */
  const wash =
    theme === 'dark'
      ? 'radial-gradient(circle, rgba(208,92,34,0.14), transparent 62%)'
      : 'radial-gradient(circle, rgba(23,20,16,0.12), transparent 65%)'

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 hidden h-[40rem] w-[40rem] rounded-full md:block"
      style={{
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
        zIndex: -1,
        background: wash,
        mixBlendMode: theme === 'dark' ? 'normal' : 'multiply',
      }}
    />
  )
}
