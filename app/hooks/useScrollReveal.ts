// src/app/hooks/useScrollReveal.ts
import { useEffect, useRef } from 'react'

export function useScrollReveal(className = 'visible') {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add(className)
        } else {
          element.classList.remove(className)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => observer.unobserve(element)
  }, [className])

  return ref
}
