/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Magnetic from '../utils/Magnetic'

const RoundedButton = ({ children, backgroundColor='#455CE9', ...attribute }) => {
  const circle = useRef(null)

  let timeline = useRef(null)
  let timeoutId = null

  useEffect( () => {
    timeline.current = gsap.timeline({ paused: true })
    timeline.current
      .to(circle.current, { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' }, 'enter')
      .to(circle.current, { top: '-150%', width: '125%', duration: 0.25 }, 'exit')
  }, [])

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit')
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout( () => {
      timeline.current.play()
    }, 300)
  }

  return (
    <Magnetic>
      <div
        className='rounded-button'
        style={{ overflow: 'hidden' }}
        onMouseEnter={() => { manageMouseEnter() }}
        onMouseLeave={() => { manageMouseLeave() }}
        { ...attribute }
      >
        {children}
        <div ref={circle} style={backgroundColor} className='circle'></div>
      </div>
    </Magnetic>
  )
}

export default RoundedButton