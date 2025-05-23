/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ScrollIndicator = ({ contentRef }) => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const node = contentRef.current
    if (!node) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = node
      const progress = scrollTop / (scrollHeight - clientHeight)
      setScrollProgress(progress)
      setHasScrolled(scrollTop > 10)
    }

    node.addEventListener('scroll', handleScroll)
    return () => node.removeEventListener('scroll', handleScroll)
  }, [contentRef])

  // Tính toán vị trí dựa trên scroll progress
  const yPosition = scrollProgress * -50 // Di chuyển lên trên tối đa 50px

  return (
    <AnimatePresence>
      {!hasScrolled && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 30 + yPosition // Kết hợp vị trí ban đầu và di chuyển khi scroll
          }}
          exit={{
            y: -window.innerHeight * 0.8,
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: 'easeIn'
            }
          }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            bottom: '20%',
            right: '1%',
            zIndex: 50
          }}
        >
          {/* Giữ nguyên animation gốc */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-widest text-black relative"
            style={{ writingMode: 'vertical-rl' }}
          >
            scroll
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                marginTop: '4px',
                height: '40px',
                overflow: 'hidden',
                transform: 'translateX(-50%)'
              }}
            >
              <motion.div
                initial={{ y: '-100%' }}
                animate={{
                  y: '100%',
                  opacity: scrollProgress < 0.9 ? 1 : 0 // Ẩn khi gần đến đáy
                }}
                transition={{
                  delay: 0.8,
                  duration: 1.2,
                  ease: [0.2, 0.4, 0.3, 1],
                  repeat: scrollProgress < 0.9 ? Infinity : 0, // Ngừng lặp khi gần đáy
                  repeatDelay: 1
                }}
                style={{
                  width: '2px',
                  height: '100%',
                  background: 'black',
                  borderRadius: 2
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollIndicator