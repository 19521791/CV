/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const scaleAnimation = {
  initial: { scale: 0, opacity: 0, x: '-50%', y: '-50%' },
  open: { scale: 1, opacity: 1, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, opacity: 0, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

const Modal = ({ modal, projects }) => {
  const { active, index } = modal
  const container = useRef(null)
  let animationFrameId = useRef(null)

  useEffect(() => {
    if (!container.current) return

    const moveContainerX = gsap.quickTo(container.current, 'left', { duration: 0.5, ease: 'power3' })
    const moveContainerY = gsap.quickTo(container.current, 'top', { duration: 0.5, ease: 'power3' })

    const handleMouseMove = (e) => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)

      animationFrameId.current = requestAnimationFrame(() => {
        moveContainerX(e.clientX)
        moveContainerY(e.clientY)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  return (
    <motion.div
      ref={container}
      variants={scaleAnimation}
      initial={'initial'}
      animate={active ? 'open' : 'closed'}
      className="h-0 w-0 lg:h-[300px] lg:w-[330px] flex items-center justify-center absolute overflow-hidden pointer-events-none"
    >
      <div style={{ top: index * -100 + '%' }} className="h-full w-full absolute transition-[top] duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
        {
          projects.map((project, index) => {
            const { signed_url, color } = project
            return <div style={{ backgroundColor: color }} key={`modal_${index}`} className="relative h-full flex items-center justify-center">
              <img
                src={signed_url}
                alt="Image"
                className='lg:h-[200px] lg:w-[250px]'
                loading='eager'
              />
            </div>
          })
        }
      </div>
    </motion.div>
  )
}

export default Modal
