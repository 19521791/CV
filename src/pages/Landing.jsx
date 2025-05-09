/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useContext, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { motion } from 'framer-motion'
import { ImageContext } from '@/contexts/ImageContext'
import { AnimationContext } from '@/contexts/AnimationContext'
import GearIcon from '@/components/icons/GearIcon'
import DBIcon from '@/components/icons/DBIcon'
import RocketIcon from '@/components/icons/RocketIcon'

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
          }
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
      <div className='hidden lg:block'>
        <div className="bg-transparent absolute top-[24%] left-[33%] xl:left-[38%] font-mono p-6 rounded-xl max-w-[800px] mx-auto mt-20">
          <div className='flex flex-row items-center text-[#e0e0e0] gap-2 mb-2'>
            <GearIcon />
            <p className='text-2xl font-semibold'>Nguyen Phi Long</p>
          </div>
          <div className='text-[#d6f1ff] flex items-center gap-2 mb-3 ml-5'>
            <DBIcon />
            <p className="text-xl">Backend Developer</p>
          </div>
          <div className='text-[#f5f5f5] flex items-center gap-2 ml-10'>
            <RocketIcon />
            <p className="text-lg italic">Ruby, Rails, PostgreSQL, Redis, Sidekiq, Capistrano</p>
          </div>
        </div>
      </div>

      <div className='landing-slider-container'>
        <div ref={sliderRef} className='landing-slider'>
          <p ref={firstTextRef}>Backend Developer -</p>
          <p ref={secondTextRef}>Backend Developer -</p>
        </div>
      </div>

      {/* <div className='block lg:hidden'>
        <div className="bg-transparent absolute top-[24%] left-[33%] xl:left-[38%] font-mono p-6 rounded-xl max-w-[800px] mx-auto mt-20">
          <div className='flex flex-row items-center text-[#e0e0e0] gap-4 mb-2'>
            <FolderIcon />
            <p className='text-2xl font-semibold drop-shadow-[0_0_4px_#00ffff]'>Nguyen Phi Long</p>
          </div>
          <div className='text-[#d6f1ff] flex items-center gap-4 mb-3 ml-5'>
            <Terminal size={20} />
            <p className="text-base">Backend Developer</p>
          </div>
          <div className='text-[#f5f5f5] flex items-center gap-4 ml-10'>
            <Terminal size={20} />
            <p className="text-base italic">Ruby, Rails, PostgreSQL, Redis, Sidekiq, Capistrano</p>
          </div>
        </div>
      </div> */}
    </motion.main>
  )
}

export default Landing
