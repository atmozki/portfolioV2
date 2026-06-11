import { content } from '../content'

/* Slow skills ticker between hero and about. Duplicated track = seamless loop. */
export default function Marquee() {
  const items = content.marquee
  const Track = () => (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center whitespace-nowrap">
          <span className="font-display text-2xl font-light italic md:text-3xl">{item}</span>
          <span aria-hidden className="mx-8 h-1 w-1 rounded-full bg-ember md:mx-12" />
        </span>
      ))}
    </div>
  )

  return (
    <div aria-hidden className="overflow-hidden border-b border-line py-6">
      {/* four copies: the -50% loop unit is two copies wide (~3600px),
          so the reset stays seamless even on ultrawide screens */}
      <div className="marquee-track">
        <Track />
        <Track />
        <Track />
        <Track />
      </div>
    </div>
  )
}
