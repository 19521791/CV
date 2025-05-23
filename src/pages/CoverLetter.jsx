import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Coffee, PenLine, Code, Database, Cpu } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function CoverLetter() {
  const containerRef = useRef()
  const textBlocksRef = useRef([])
  const iconsRef = useRef([])

  const signatureRef = useRef()
  const [isHovering, setIsHovering] = useState(false)

  const decorIcons = [
    {
      icon: <Code className='w-8 h-8 text-accent-copper' />,
      pos: 'top-10 left-12'
    },
    {
      icon: <Database className='w-8 h-8 text-latte-600' />,
      pos: 'bottom-1/4 right-16'
    },
    {
      icon: <Cpu className='w-8 h-8 text-accent-rust' />,
      pos: 'top-1/3 right-20'
    },
    {
      icon: <PenLine className='w-8 h-8 text-latte-500' />,
      pos: 'bottom-20 left-20'
    }
  ]

  useEffect(() => {
    if (!signatureRef.current) return

    const signature = signatureRef.current
    const inkDrops = gsap.utils.toArray('.ink-drop')

    const tl = gsap.timeline({ paused: true })

    inkDrops.forEach((drop, i) => {
      tl.to(
        drop,
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          delay: i * 0.1,
          ease: 'power2.out'
        },
        0
      ).to(
        drop,
        {
          scale: 10,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.in'
        },
        i * 0.1
      )
    })

    signature.addEventListener('mouseenter', () => {
      setIsHovering(true)
      tl.restart()
    })

    return () => {
      signature.removeEventListener('mouseenter', () => tl.restart())
    }
  }, [])

  useEffect(() => {
    gsap.from(containerRef.current, {
      scaleY: 0.8,
      duration: 1.2,
      ease: 'back.out(1.2)'
    })

    textBlocksRef.current.forEach((block, i) => {
      gsap.from(block, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.1 + i * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: block,
          start: 'top 80%'
        }
      })
    })

    iconsRef.current.forEach((icon, i) => {
      gsap.to(icon, {
        y: i % 2 === 0 ? -10 : 10,
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    })
  }, [])

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-latte-50 to-latte-100 flex items-center justify-center p-4 md:p-8 font-neuetral overflow-hidden mx-auto !py-24'>
      {decorIcons.map((item, i) => (
        <div
          key={i}
          ref={(el) => (iconsRef.current[i] = el)}
          className={`absolute ${item.pos} opacity-20 hidden md:block`}>
          {item.icon}
        </div>
      ))}

      <div className="absolute inset-0 opacity-5 bg-[url('/images/coffee-ring-texture.png')]"></div>

      <div
        ref={containerRef}
        className='relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-latte-200 transform origin-center'>

        <div className='bg-latte-700 p-6 text-center relative overflow-hidden'>
          <div className="absolute inset-0 opacity-5 bg-[url('/images/code-texture.png')]"></div>
          <Coffee className='w-12 h-12 mx-auto text-latte-300 mb-4' />
          <h1 className='text-4xl md:text-5xl font-serif font-bold text-latte-100 tracking-wider'>
            COVER LETTER
          </h1>
          <div className='border-t border-latte-400/30 mt-6 w-3/4 mx-auto'></div>
        </div>

        <div className='p-6 md:p-10 text-latte-800'>
          <p className='text-right text-latte-500 mb-4 sm:mb-8'>
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>

          <p
            ref={(el) => (textBlocksRef.current[0] = el)}
            className='text-2xl md:text-3xl leading-snug mb-4 sm:mb-8'>
            <span className='text-5xl font-serif font-bold text-latte-600 align-top mr-1'>
              D
            </span>
            ear Hiring Manager,
          </p>

          <div className='space-y-6 text-lg md:text-xl leading-relaxed'>
            <p
              ref={(el) => (textBlocksRef.current[1] = el)}
              className='border-l-4 border-accent-copper pl-4 py-1'>
              As a{' '}
              <span className='font-semibold text-accent-copper'>
                backend developer
              </span>{' '}
              with expertise in Ruby on Rails, PostgreSQL, Sidekiq, Capistrano
              and Redis, I specialize in building secure, high-performance
              platforms that solve real business challenges. Whether it&apos;s
              processing sensitive transactions or scaling systems for growth, I
              focus on delivering both technical excellence and tangible impact.
            </p>

            <p
              ref={(el) => (textBlocksRef.current[2] = el)}
              className='relative pl-8 before:absolute before:left-2 before:top-3 before:w-1 before:h-1 before:rounded-full before:bg-accent-copper'>
              My recent projects demonstrate my ability to design{' '}
              <span className='italic text-latte-600'>
                authentication systems
              </span>{' '}
              that balance security and user experience, develop{' '}
              <span className='italic text-latte-600'>
                transaction processing pipelines
              </span>{' '}
              with built-in fraud detection, optimize APIs and{' '}
              <span className='italic text-latte-600'>
                third-party integrations
              </span>{' '}
              for better interoperability, and implement scalable solutions that
              adapt to business needs.
            </p>

            <p
              ref={(el) => (textBlocksRef.current[3] = el)}
              className='bg-latte-50 rounded-lg p-4 border border-latte-200'>
              What defines my approach:{' '}
              <span className='font-medium text-latte-700'>(1)</span> Breaking
              complexity into iterative deliverables,{' '}
              <span className='font-medium text-latte-700'>(2)</span> Writing
              documentation as part of the development process, and{' '}
              <span className='font-medium text-latte-700'>(3)</span> Treating
              performance as a feature, not an afterthought.
            </p>

            <p
              ref={(el) => (textBlocksRef.current[4] = el)}
              className='font-medium italic text-center mx-auto max-w-2xl'>
              &quot;I&apos;m particularly drawn to teams that value Collaboration between
              developers and business units, Iterative improvement of systems,
              and Data-driven decisions—If this resonates with your engineering
              culture, I&apos;d love to explore how I can contribute.&quot;
            </p>

            <div
              ref={el => textBlocksRef.current[5] = el}
              className="mt-12 pt-6 border-t border-latte-200 relative overflow-hidden"
            >
              <p className="font-medium">Best regards,</p>

              <div
                ref={signatureRef}
                className="flex items-center mt-4 cursor-pointer relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="ink-drop absolute w-2 h-2 rounded-full bg-accent-rust opacity-0 -top-4"
                    style={{
                      left: `${20 + i * 15}px`,
                      transform: 'translateY(-20px)'
                    }}
                  />
                ))}

                <div className="w-12 h-12 rounded-full bg-latte-200 flex items-center justify-center mr-4 z-10">
                  <PenLine className="w-6 h-6 text-latte-600" />
                </div>
                <div className="z-10">
                  <p className="font-serif text-xl text-latte-800 transition-all duration-300 transform hover:translate-x-2">
                Nguyen Phi Long
                  </p>
                  <p className="text-sm text-latte-500">Backend Developer</p>
                </div>
              </div>

              {isHovering && (
                <svg
                  className="absolute bottom-0 left-0 w-full h-8 opacity-20"
                  viewBox="0 0 500 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,50 Q125,150 250,50 T500,50 L500,100 L0,100 Z"
                    fill="#B87333"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-4 right-6 opacity-10 text-latte-600 font-serif text-8xl transform rotate-12 select-none hidden md:block'>
          PASSION
      </div>
    </div>
  )
}
