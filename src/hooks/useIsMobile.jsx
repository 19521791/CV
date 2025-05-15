import { useEffect, useState } from 'react'

export const useIsMobile = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return isMobile
}

export const useIsDesktop = (breakpoint = 1024) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= breakpoint)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return isDesktop
}
