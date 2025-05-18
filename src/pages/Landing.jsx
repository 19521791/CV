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
import LogoIcon from '@/components/icons/LogoIcon'
import { useIsMobile, useIsDesktop } from '@/hooks/useIsMobile'
import { Terminal, MoveRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const slideUp = {
  initial: { y: 0, opacity: 0 },

  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
  },
  exit: { y: 100, opacity: 0, transition: { duration: 0.5 } }
}

const textAnimationConfig = { xPercent: 0, direction: -1, speed: 0.1 }

const iconAnimationConfig = { xPercent: 0, direction: -1, speed: 0.15 }

const SLIDER_BOUNDARY = { MIN: -100, MAX: 0, RESET: 0, MOVE_DISTANCE: '-500px' }

const Landing = () => {
  const { setIsEverythingReady } = useContext(AnimationContext)
  const { images } = useContext(ImageContext)

  const smallerLgScreen = useIsMobile(1024)
  const biggerLgScreen = useIsDesktop(1024)
  const biggerXmScreen = useIsDesktop(896)
  const smallerXmScreen = useIsMobile(896)

  const textSliderRef = useRef(null)
  const firstTextRef = useRef(null)
  const secondTextRef = useRef(null)

  const iconSliderRef = useRef(null)
  const firstIconRef = useRef(null)
  const secondIconRef = useRef(null)

  const navigate = useNavigate()

  useGSAP(() => {
    const animateText = () => {
      if (!firstTextRef.current || !secondTextRef.current || !firstIconRef.current || !secondIconRef.current) return

      if (textAnimationConfig.xPercent < SLIDER_BOUNDARY.MIN) {
        textAnimationConfig.xPercent = SLIDER_BOUNDARY.RESET
      } else if (textAnimationConfig.xPercent > SLIDER_BOUNDARY.MAX) {
        textAnimationConfig.xPercent = SLIDER_BOUNDARY.MIN
      }

      if (iconAnimationConfig.xPercent < SLIDER_BOUNDARY.MIN) {
        iconAnimationConfig.xPercent = SLIDER_BOUNDARY.RESET
      } else if (iconAnimationConfig.xPercent > SLIDER_BOUNDARY.MAX) {
        iconAnimationConfig.xPercent = SLIDER_BOUNDARY.MIN
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
          onUpdate: (e) => {
            textAnimationConfig.direction = e.direction * -1
          }
        },
        x: SLIDER_BOUNDARY.MOVE_DISTANCE
      })
    }

    if (iconSliderRef.current) {
      gsap.to(iconSliderRef.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => {
            iconAnimationConfig.direction = e.direction * -1
          }
        },
        x: SLIDER_BOUNDARY.MOVE_DISTANCE
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

    let fallbacktimer
    let img

    const handleLoadComplete = () => {
      clearTimeout(fallbacktimer)
      setIsEverythingReady(true)
    }

    img = new Image()
    img.src = images.landing

    fallbacktimer = setTimeout(handleLoadComplete, 2000)

    img.onload = handleLoadComplete
    img.onerror = handleLoadComplete

    return () => {
      clearTimeout(fallbacktimer)
      img.onload = img.onerror = null
    }
  }, [images?.landing])

  return (
    <motion.section
      variants={slideUp}
      initial='initial'
      animate='enter'
      className='landing'>
      <div className='landing-image-container'>
        <img
          src={smallerLgScreen ? images?.myselflite : images?.landing}
          className={`${smallerLgScreen ? 'absolute landing-image-lite' : 'landing-image'}`}
          alt='Background'
          loading='eager'
        />
      </div>

      <div className="absolute -top-[4%] left-[2%] xl:-top-[2%] xl:left-[4%] w-full box-border items-center">
        <LogoIcon />
      </div>

      {biggerLgScreen && (
        <div className='absolute top-[24%] left-[32%] xl:left-[35%] 3xl:left-[38%] font-mono p-6 rounded-xl max-w-[800px] mx-auto mt-20'>
          <div className='flex flex-row items-center text-[#FFFFFF] gap-2 mb-2'>
            <GearIcon />
            <div className='landing-icon relative flex items-center justify-center'>
              <p className='text-2xl font-semibold'>Nguyen Phi Long</p>
              <div className='indicator -right-[10%] top-1/2' />
            </div>
          </div>

          <div className='text-[#A5D8FF] flex items-center gap-2 mb-3 ml-5'>
            <DBIcon />
            <div className='landing-icon relative flex items-center justify-center'>
              <p className='text-xl'>Backend Developer</p>
              <div className='indicator -right-[10%] top-1/2' />
            </div>
          </div>

          <div className='text-[#E8E8E8] flex items-center gap-2 ml-10 mb-3'>
            <RocketIcon />
            <div className='landing-icon relative flex items-center justify-center'>
              <p className='text-base italic'>
                Ruby, Rails, PostgreSQL, Redis, Sidekiq, Capistrano
              </p>
              <div className='indicator -right-[4%] top-1/2' />
            </div>
          </div>

          <div
            className='text-[#E8E8E8] flex items-center gap-2 ml-16 cursor-pointer'
            onClick={() => navigate('/profile')}
          >
            <MoveRight />
            <p>See More</p>
          </div>
        </div>
      )}

      {biggerXmScreen && smallerLgScreen && (
        <div className='absolute top-[20%] right-0 font-mono py-6 px-4 rounded-xl mx-auto mt-16'>
          <div className='flex flex-row items-center justify-end text-[#e0e0e0] gap-2 mb-2 mr-5'>
            <div className='flex items-center'>
              <FolderIcon />
              <span className='text-green-400 font-semibold text-xl ml-[1px]'>
                ~
              </span>
            </div>
            <p className='text-2xl font-semibold'>
              Nguyen Phi Long
            </p>
          </div>

          <div className='text-[#d6f1ff] flex items-center justify-end gap-2 mb-3 mr-10'>
            <Terminal size={20} className='text-green-400' />
            <p className='text-base'>Backend Developer</p>
          </div>

          <div className='text-[#f5f5f5] flex flex-col items-center gap-4 mb-3'>
            <span className='text-sm italic'>Ruby - Rails</span>
            <span className='text-sm italic ml-16'>PostgreSQL - Redis</span>
            <span className='text-sm italic ml-24'>Sidekiq - Capistrano</span>
          </div>

          <div
            className='text-[#E8E8E8] text-xs flex items-center gap-2 ml-28 cursor-pointer'
            onClick={() => navigate('/profile')}
          >
            <MoveRight />
            <p>See More</p>
          </div>
        </div>
      )}

      {smallerXmScreen && (
        <div className='absolute top-[40%] left-1/2 -translate-x-1/2 sm:top-[30%] md:top-[25%] sm:left-auto sm:translate-x-0 sm:right-0 font-mono md:p-4 rounded-xl mt-20 w-[90%] max-w-xs text-center pl-10'>
          <p className='text-2xl text-[#e0e0e0] font-semibold mb-3'>
            Nguyen Phi Long
          </p>
          <p className='text-base text-[#d6f1ff] mb-3'>Backend Developer</p>
          <p className='text-base text-[#d6f1ff] mb-3'>
            Ruby - Rails - Postgres
          </p>

          <div
            className='text-[#E8E8E8] text-xs flex justify-center items-center gap-2 mt-4 cursor-pointer'
            onClick={() => navigate('/profile')}
          >
            <MoveRight />
            <p>See More</p>
          </div>
        </div>
      )}

      <div className='block xm:hidden'>
        <div className='absolute bottom-[8%] sm:bottom-[10%] w-max'>
          <div
            ref={iconSliderRef}
            className='relative w-max'>
            <div
              ref={firstIconRef}
              className='flex w-full items-center gap-5 sm:gap-10 m-0 pr-[20px]'
            >
              <RubyIcon className='w-16 h-16' fill='#f5f5f5' />
              <RailsIcon className='w-40 h-40' fill='#f5f5f5' />
              <PostgresIcon className='w-20 h-20' fill='#f5f5f5' />
              <RedisIcon className='w-20 h-20' fill='#f5f5f5' />
              <SidekiqIcon className='w-48 h-48' fill='#f5f5f5' />
              <CapIcon className='w-20 h-20' />
            </div>
            <div
              ref={secondIconRef}
              className='w-full absolute left-full top-0 flex items-center gap-5 sm:gap-10 m-0'
            >
              <RubyIcon className='w-16 h-16' fill='#f5f5f5' />
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
    </motion.section>
  )
}

export default Landing
