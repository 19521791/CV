import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { motion } from 'framer-motion'

const slideUp = {
  initial: {
    y: 0,
    opacity: 0
  },
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
  let xPercent = 0
  let direction = -1

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: '-500px'
    })
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    }
    else if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate)
    xPercent += 0.1 * direction
  }

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className='landing'>
      <div className='landing-image-container'>
        <img
          src='http://api.hub.douglusnguyen.site/local-assets/IMG_20210217_205953.jpg'
          className='landing-image'
          alt='background'
        />
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