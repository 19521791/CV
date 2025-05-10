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
import FolderIcon from '@/components/icons/FolderIcon'
import RubyIcon from '@/components/icons/RubyIcon'
import RailsIcon from '@/components/icons/RailsIcon'
import PostgresIcon from '@/components/icons/PostgresIcon'
import RedisIcon from '@/components/icons/RedisIcon'
import SidekiqIcon from '@/components/icons/SidekiqIcon'
import CapIcon from '@/components/icons/CapIcon'
import { Terminal } from 'lucide-react'

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

const iconAnimationConfig = {
  xPercent: 0,
  direction: -1,
  speed: 0.1
}

const Landing = () => {
  const { setIsEverythingReady } = useContext(AnimationContext)
  const { images } = useContext(ImageContext)

  const textSliderRef = useRef(null)
  const firstTextRef = useRef(null)
  const secondTextRef = useRef(null)

  const iconSliderRef = useRef(null)
  const firstIconRef = useRef(null)
  const secondIconRef = useRef(null)

  useGSAP(() => {
    const animateText = () => {
      if (!firstTextRef.current || !secondTextRef.current || !firstIconRef.current || !secondIconRef.current) return

      if (textAnimationConfig.xPercent < -100) {
        textAnimationConfig.xPercent = 0
      } else if (textAnimationConfig.xPercent > 0) {
        textAnimationConfig.xPercent = -100
      }

      if (iconAnimationConfig.xPercent < -100) {
        iconAnimationConfig.xPercent = 0
      } else if (iconAnimationConfig.xPercent > 0) {
        iconAnimationConfig.xPercent = -100
      }

      gsap.set([firstTextRef.current, secondTextRef.current], {
        xPercent: textAnimationConfig.xPercent
      })

      gsap.set([firstIconRef.current, secondIconRef.current], {
        xPercent: iconAnimationConfig.xPercent
      })

      textAnimationConfig.xPercent += textAnimationConfig.speed * textAnimationConfig.direction
      iconAnimationConfig.xPercent += iconAnimationConfig.speed * iconAnimationConfig.direction
      requestAnimationFrame(animateText)
    }

    if (textSliderRef.current) {
      gsap.to(textSliderRef.current, {
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

    if (iconSliderRef.current) {
      gsap.to(iconSliderRef.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: e => {
            iconAnimationConfig.direction = e.direction * -1
          }
        },
        x: '-500px'
      })
    }

    const frameId = requestAnimationFrame(animateText)

    const debouncTimer = setTimeout(() => {
      if (!textSliderRef.current || !iconSliderRef.current) return
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
        <div className="absolute top-[24%] left-[33%] xl:left-[38%] font-mono p-6 rounded-xl max-w-[800px] mx-auto mt-20">
          <div className='flex flex-row items-center text-[#FFFFFF] gap-2 mb-2'>
            <GearIcon />
            <div className='landing-icon relative flex items-center justify-center'>
              <p className='text-2xl font-semibold'>Nguyen Phi Long</p>
              <div className='indicator -right-[20%]' />
            </div>
          </div>

          <div className='text-[#A5D8FF] flex items-center gap-2 mb-3 ml-5'>
            <DBIcon />
            <div className='landing-icon relative flex items-center justify-center'>
              <p className="text-xl">Backend Developer</p>
              <div className='indicator -right-[20%]' />
            </div>
          </div>

          <div className='text-[#E8E8E8] flex items-center gap-2 ml-10'>
            <RocketIcon />
            <div className='landing-icon relative flex items-center justify-center'>
              <p className="text-lg italic">Ruby, Rails, PostgreSQL, Redis, Sidekiq, Capistrano</p>
              <div className='indicator -right-[8%]' />
            </div>

          </div>
        </div>
      </div>

      <div className='hidden xm:block lg:hidden'>
        <div className="absolute top-[20%] right-0 font-mono p-6 rounded-xl mx-auto mt-20">
          <div className='flex flex-row items-center justify-end text-[#e0e0e0] gap-2 mb-2 mr-5'>
            <div className='flex items-center'>
              <FolderIcon />
              <span className='text-blue-500 font-semibold text-xl ml-[1px]'>~</span>
            </div>
            <p className='text-2xl font-semibold drop-shadow-[0_0_4px_#00ffff]'>Nguyen Phi Long</p>
          </div>

          <div className='text-[#d6f1ff] flex items-center justify-end gap-4 mb-3 mr-10'>
            <Terminal size={20} className='text-green-400' />
            <p className="text-base">Backend Developer</p>
          </div>

          <div className='text-[#f5f5f5] flex flex-col items-center gap-4'>
            {/* <Terminal size={20} className='text-green-400' /> */}
            <span className="text-base italic">Ruby, Rails</span>
            <span className="text-base italic ml-16">PostgreSQL, Redis</span>
            <span className="text-base italic ml-24">Sidekiq, Capistrano</span>
          </div>
        </div>
      </div>

      <div className='block xm:hidden'>
        <div className='absolute top-[20%] left-[20%] font-mono p-6 rounded-xl mx-auto mt-20'>
          <p className='text-white'>test</p>

        </div>

        <div className='absolute bottom-[8%] sm:bottom-[10%] w-full overflow-hidden'>
          <div
            ref={iconSliderRef}
            className='relative flex w-full gap-5 sm:gap-10'
          >
            <div
              ref={firstIconRef}
              className='relative w-full flex flex-row items-center gap-5 sm:gap-10'
            >
              <RubyIcon className='w-20 h-20' fill='#f5f5f5' />
              <RailsIcon className='w-40 h-40' fill='#f5f5f5' />
              <PostgresIcon className='w-20 h-20' fill='#f5f5f5' />
              <RedisIcon className='w-20 h-20' fill='#f5f5f5' />
              <SidekiqIcon className='w-48 h-48' fill='#f5f5f5' />
              <CapIcon className='w-20 h-20' />
            </div>
            <div
              ref={secondIconRef}
              className='absolute w-full left-[calc(100%+1rem)] top-0 flex items-center gap-5 sm:gap-10'
            >
              <RubyIcon className='w-20 h-20' fill='#f5f5f5' />
              <RailsIcon className='w-40 h-40' fill='#f5f5f5' />
              <PostgresIcon className='w-20 h-20' fill='#f5f5f5' />
              <RedisIcon className='w-20 h-20' fill='#f5f5f5' />
              <SidekiqIcon className='w-48 h-48' fill='#f5f5f5' />
              <CapIcon className='w-20 h-20' />
            </div>
          </div>
        </div>
      </div>

      <div className='landing-slider-container hidden xm:block'>
        <div ref={textSliderRef} className='landing-slider'>
          <p ref={firstTextRef}>Backend Developer -</p>
          <p ref={secondTextRef}>Backend Developer -</p>
        </div>
      </div>
    </motion.main>
  )
}

export default Landing
