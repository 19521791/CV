import { useState, useCallback, useLayoutEffect } from 'react'

const useScrollableDetection = (contentRef) => {
  const [isScrollable, setIsScrollable] = useState(false)

  const checkScrollable = useCallback(() => {
    if (contentRef.current) {
      const { scrollHeight, clientHeight } = contentRef.current
      const canScroll = scrollHeight > clientHeight + 5 // +5 để tránh sai số do padding
      setIsScrollable(canScroll)
    }
  }, [contentRef])

  // Chạy kiểm tra khi:
  useLayoutEffect(() => {
    if (!contentRef.current) return

    // 1. Ngay lập tức
    checkScrollable()

    // 2. Khi resize
    const resizeObserver = new ResizeObserver(checkScrollable)
    resizeObserver.observe(contentRef.current)

    // 3. Khi ảnh load (nếu có)
    const images = contentRef.current.querySelectorAll('img')
    const loadListeners = Array.from(images).map(img => {
      img.addEventListener('load', checkScrollable)
      return () => img.removeEventListener('load', checkScrollable)
    })

    return () => {
      resizeObserver.disconnect()
      loadListeners.forEach(cleanup => cleanup())
    }
  }, [checkScrollable])

  return isScrollable
}

export default useScrollableDetection