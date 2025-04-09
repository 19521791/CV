/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useContext, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { motion } from 'framer-motion'
import { ImageContext } from '@/contexts/ImageContext'
import { AnimationContext } from '@/contexts/AnimationContext'

gsap.registerPlugin(ScrollTrigger)

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

const textAnimationConfig = {
  xPercent: 0,
  direction: -1,
  speed: 0.1
}

const Landing = () => {
  const { setIsEverythingReady } = useContext(AnimationContext)
  const { images } = useContext(ImageContext)
  const sliderRef = useRef(null)
  const firstTextRef = useRef(null)
  const secondTextRef = useRef(null)

  useGSAP(() => {
    const animateText = () => {
      if (!firstTextRef.current || !secondTextRef.current) return

      if (textAnimationConfig.xPercent < -100) {
        textAnimationConfig.xPercent = 0
      } else if (textAnimationConfig.xPercent > 0) {
        textAnimationConfig.xPercent = -100
      }

      gsap.set([firstTextRef.current, secondTextRef.current], {
        xPercent: textAnimationConfig.xPercent
      })

      textAnimationConfig.xPercent += textAnimationConfig.speed * textAnimationConfig.direction
      requestAnimationFrame(animateText)
    }

    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: e => {
            textAnimationConfig.direction = e.direction * -1
          },
          markers: import.meta.env.VITE_ENV === 'development'
        },
        x: '-500px'
      })
    }

    const frameId = requestAnimationFrame(animateText)

    const debouncTimer = setTimeout(() => {
      if (!sliderRef.current) return
    }, 300)

    return () => {
      cancelAnimationFrame(frameId)
      clearTimeout(debouncTimer)
    }
  }, [])

  useEffect(() => {
    if (!images?.landing) return

    let timer
    let img

    const handleReady = () => {
      clearTimeout(timer)
      setIsEverythingReady(true)
    }

    img = new Image()
    img.src = images.landing

    timer = setTimeout(handleReady, 2000)

    img.onload = handleReady
    img.onerror = handleReady

    return () => {
      clearTimeout(timer)
      img.onload = img.onerror = null
    }
  }, [images?.landing])

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className='landing'
    >
      <div className='landing-image-container'>
        <div className='hidden lg:block'>
          <img
            src={images?.landing}
            className='landing-image'
            alt='background'
            loading='eager'
          />
        </div>
        <div className='block lg:hidden'>
          <img
            src={images?.myselflite}
            className='absolute lg:hidden landing-image-lite'
            alt='background'
            loading='eager'
          />
        </div>
      </div>
      <div className='landing-slider-container'>
        <div ref={sliderRef} className='landing-slider'>
          <p ref={firstTextRef}>Backend Developer -</p>
          <p ref={secondTextRef}>Backend Developer -</p>
        </div>
      </div>
    </motion.main>
  )
}

export default Landing
