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

  const modalContainer = useRef(null)
  const cursor = useRef(null)
  const cursorLabel = useRef(null)
  let animationFrameId = useRef(null)

  const offsetY = 10

  useEffect(() => {
    if (!modalContainer.current || !cursor.current || !cursorLabel.current) return

    const moveContainerX = gsap.quickTo(modalContainer.current, 'left', { duration: 0.8, ease: 'power3' })
    const moveContainerY = gsap.quickTo(modalContainer.current, 'top', { duration: 0.8, ease: 'power3' })
    const moveCursorX = gsap.quickTo(cursor.current, 'left', { duration: 0.5, ease: 'power3' })
    const moveCursorY = gsap.quickTo(cursor.current, 'top', { duration: 0.5, ease: 'power3' })
    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, 'left', { duration: 0.45, ease: 'power3' })
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, 'top', { duration: 0.45, ease: 'power3' })

    const handleMouseMove = (e) => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)

      animationFrameId.current = requestAnimationFrame(() => {
        const { clientX, clientY } = e
        moveContainerX(clientX)
        moveContainerY(clientY - offsetY)
        moveCursorX(clientX)
        moveCursorY(clientY - offsetY)
        moveCursorLabelX(clientX)
        moveCursorLabelY(clientY - offsetY)
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial={'initial'}
        animate={active ? 'open' : 'closed'}
        className="h-0 w-0 lg:h-[300px] lg:w-[330px] xl:h-[380px] xl:w-[410px] 2xl:h-[460px] 2xl:w-[480px] flex items-center justify-center fixed overflow-hidden pointer-events-none z-50"
      >

        <div style={{ top: index * -100 + '%' }} className="h-full w-full fixed transition-[top] duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
          {
            projects.map((project, index) => {
              const { signed_url, color } = project
              return <div style={{ backgroundColor: color }} key={`modal_${index}`} className="relative h-full flex items-center justify-center">
                <img
                  src={signed_url}
                  alt="Image"
                  className='lg:h-[150px] lg:w-[270px] xl:h-[200px] xl:w-[330px] 2xl:w-[380px]'
                  loading='eager'
                />
              </div>
            })
          }
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className='w-[80px] h-[80px] rounded-full bg-[#455CE9] text-white fixed flex items-center justify-center text-base 2xl:text-lg font-normal 2xl:font-medium pointer-events-none z-[60]'
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'open' : 'closed'}
      >
      </motion.div>
      <motion.div
        ref={cursorLabel}
        className='w-[80px] h-[80px] rounded-full bg-transparent text-white fixed flex items-center justify-center text-base 2xl:text-lg font-normal 2xl:font-medium pointer-events-none z-[61]'
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'open' : 'closed'}
      >
        View
      </motion.div>
    </>
  )
}

export default Modal
