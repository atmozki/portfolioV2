import { useCallback, useEffect, useState } from 'react'

/* Light is the default; the inline script in index.html applies a saved
   dark preference before first paint. This hook keeps React, the <html>
   class, localStorage and the browser theme-color in sync. */
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* private browsing */
    }
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.content = theme === 'dark' ? '#14110e' : '#f4f1ea'
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  return [theme, toggle]
}
