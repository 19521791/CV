/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const text = {
  initial: {
    opacity: 1
  },
  enter: {
    opacity: 0,
    top: -100,
    transition: {
      duration: .75,
      delay: .35,
      ease: [0.76, 0, 0.24, 1]
    },
    transitionEnd: { top: '37.5%' }
  },
  exit: {
    opacity: 1,
    top: '25%',
    transition: {
      duration: .5,
      delay: .4,
      ease: [0.33, 1, 0.68, 1]
    }
  }
}

const routes = {
  '/': 'Home',
  '/profile': 'About',
  '/work': 'Work',
  '/cover-letter': 'Cover Letter',
  '/model': 'Model'
}

const anim = (variants) => ({
  variants,
  initial: 'initial',
  animate: 'enter',
  exit: 'exit'
})


const curve = (initialPath, targetPath) => {
  return {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: { duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: initialPath,
      transition: { duration: .75, ease: [0.76, 0, 0.24, 1] }
    }
  }
}

const translate = {
  initial: {
    top: '-300px'
  },
  enter: {
    top: '-100vh',
    transition: { duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd : {
      top: '100vh'
    }
  },
  exit: {
    top: '-300px',
    transition: { duration: .75, ease: [0.76, 0, 0.24, 1] }
  }
}

const SVG = ({ height, width }) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `

  return (
    <motion.svg
      className='absolute top-0 left-0 w-full h-full pointer-events-none'
      style={{ zIndex: 'var(--z-loader-curve)' }}
      {...anim(translate)}
    >
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  )
}

const LoaderCurve = ({ children, backgroundColor }) => {
  const location = useLocation()
  const [dimensions, setDimensions] = useState({ width: null, height: null })

  useEffect(() => {
    function resize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <>
      <div
        className='fixed top-0 left-0 w-screen h-[calc(100vh+600px)] pointer-events-none'
        style={{ backgroundColor, zIndex: 'var(--z-loader-curve)' }}
      >
        <div style={{ opacity: dimensions.width == null ? 1 : 0 }} className='absolute inset-0 bg-black transition-opacity delay-100' />
        <motion.p
          className='absolute left-1/2 top-[25%] text-white text-[46px] transform -translate-x-1/2 text-center pointer-events-none'
          style={{
            zIndex: 'var(--z-loader-curve-content)',
            transform: 'translateX(-50%)'
          }}
          {...anim(text)}
        >
          {routes[location.pathname]}
        </motion.p>
        {dimensions.width != null && <SVG {...dimensions} />}
      </div>
      {children}
    </>
  )
}

export default LoaderCurve
