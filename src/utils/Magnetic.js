import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Magnetic = ({ children, strength = 0.2, hoverScale = 1.05, className = '' }) => {
  const magnetic = useRef(null)
  const animationRef = useRef({ x: null, y: null, scale: null })

  useEffect(() => {
    const element = magnetic.current
    if (!element) return

    gsap.set(element, {
      x: 0,
      y: 0,
      scale: 1,
      transformStyle: 'preserve-3d'
    })

    animationRef.current.x = gsap.quickTo(element, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    })
    animationRef.current.y = gsap.quickTo(element, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    })
    animationRef.current.scale = gsap.quickTo(element, 'scale', {
      duration: 0.5,
      ease: 'power2.out'
    })

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { height, width, left, top } = element.getBoundingClientRect()
      const x = (clientX - (left + width/2)) * strength
      const y = (clientY - (top + height/2)) * strength

      animationRef.current.x(x)
      animationRef.current.y(y)
      animationRef.current.scale(hoverScale)
    }

    const handleMouseLeave = () => {
      animationRef.current.x(0)
      animationRef.current.y(0)
      animationRef.current.scale(1)
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)

      gsap.to(element, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5
      })
    }
  }, [strength, hoverScale])

  return React.cloneElement(React.Children.only(children), {
    ref: magnetic,
    className: `${children.props.className || ''} ${className} will-change-transform`
  })
}

export default Magnetic