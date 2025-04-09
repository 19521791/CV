import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)')
    const scrollBehavior = mediaQuery.matches ? 'auto' : 'smooth'

    window.scrollTo({
      top: 0,
      behavior: scrollBehavior
    })

    const handleResize = (e) => {
      const newBehavior = e.matches ? 'auto' : 'smooth'
      window.scrollTo({ top: 0, behavior: newBehavior })
    }

    mediaQuery.addEventListener('change', handleResize)
    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [pathname])

  return null
}

export default ScrollToTop