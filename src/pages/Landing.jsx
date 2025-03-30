import { useRef, useLayoutEffect, useContext, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { motion } from 'framer-motion'
import { ImageContext } from '@/utils/ImageGallery'

const slideUp = {
  initial: { y: 0, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.5 }
  }
}

const Landing = () => {
  const firstText = useRef(null)
  const secondText = useRef(null)
  const slider = useRef(null)

  const xPercent = useRef(0) // Lưu trạng thái qua các renders
  const direction = useRef(-1) // Lưu trạng thái direction

  const { images } = useContext(ImageContext)

  // ✅ Sử dụng useCallback để không re-create hàm animate
  const animate = useCallback(() => {
    if (xPercent.current < -100) {
      xPercent.current = 0
    } else if (xPercent.current > 0) {
      xPercent.current = -100
    }

    gsap.set(firstText.current, { xPercent: xPercent.current })
    gsap.set(secondText.current, { xPercent: xPercent.current })

    requestAnimationFrame(animate)

    xPercent.current += 0.1 * direction.current
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => {
          direction.current = e.direction * -1
        }
      },
      x: '-500px'
    })

    requestAnimationFrame(animate)
  }, [animate]) // ✅ Thêm animate vào dependency array

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className='landing'>
      <div className='landing-image-container'>
        <img src={images['landing']} className='landing-image' alt='background' />
      </div>
      <div className='landing-slider-container'>
        <div ref={slider} className='landing-slider'>
          <p ref={firstText}>Backend Developer -</p>
          <p ref={secondText}>Backend Developer -</p>
        </div>
      </div>
    </motion.main>
  )
}

export default Landing
