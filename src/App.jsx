
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import NavBar from '@/components/navbar/NavBar'
import Preloader from '@/components/loading/Preloader'
import LoaderCurve from '@/components/loading/LoaderCurve'
import { Model, About, Projects, CoverLetter, Landing } from '@/pages'
import NotFound from '@/pages/NotFound'
import { ImageProvider } from '@/contexts/ImageContext'
import { AnimationProvider } from '@/contexts/AnimationContext'
import { AnimatePresence } from 'framer-motion'
import gsap from 'gsap'

const AnimatedRoutes = ({ showCurve }) => {
  const location = useLocation()

  return (
    <>
      {showCurve && (
        <AnimatePresence mode='wait'>
          <LoaderCurve key={location.pathname}>
            <Routes location={location}>
              <Route exact path='/' element={<Landing />} />
              <Route exact path='/profile' element={<About />} />
              <Route exact path='/work' element={<Projects />} />
              <Route exact path='/model' element={<Model />} />
              <Route exact path='/cover-letter' element={<CoverLetter />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LoaderCurve>
        </AnimatePresence>
      )}
    </>
  )
}

const App = () => {
  const [isPreloadDone, setIsPreloadDone] = useState(() => {
    return sessionStorage.getItem('hasSeenPreloader') === 'true'
  })
  const [startCurveAnimation, setStartCurveAnimation] = useState(() => {
    return sessionStorage.getItem('hasSeenPreloader') === 'true'
  })

  useEffect(() => {
    if (sessionStorage.getItem('hasSeenPreloader') === 'true') return

    const tl = gsap.timeline()

    tl.to('.preloader', {
      duration: 1.6,
      onComplete: () => {
        setStartCurveAnimation(true)
        sessionStorage.setItem('hasSeenPreloader', 'true')
        setIsPreloadDone(true)
      }
    })
  }, [])

  return (
    <main className='bg-slate-300/20 min-h-[100vh]'>
      <Router>
        <AnimationProvider>
          <ImageProvider>
            {!isPreloadDone && <Preloader />}
            {isPreloadDone && <NavBar />}
            <AnimatedRoutes showCurve={startCurveAnimation} />
          </ImageProvider>
        </AnimationProvider>
      </Router>
    </main>
  )
}


export default App