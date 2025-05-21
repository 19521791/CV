
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import NavBar from '@/components/navbar/NavBar'
import LoaderProgress from '@/components/loading/LoaderProgress'
import LoaderCurve from '@/components/loading/LoaderCurve'
import { Model, About, Projects, CoverLetter, Landing, Work } from '@/pages'
import NotFound from '@/pages/NotFound'
import { AnimationContext } from '@/contexts/AnimationContext'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from '@/components/ScrollToTop'

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
              {/* <Route exact path='/work' element={<Projects />} /> */}
              <Route exact path='/work' element={<Work />} />
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
  const [hasSeenPreloader, setHasSeenPreloader] = useState(() => {
    return sessionStorage.getItem('hasSeenPreloader') === 'true'
  })
  const [startCurveAnimation, setStartCurveAnimation] = useState(() => {
    return sessionStorage.getItem('hasSeenPreloader') === 'true'
  })

  const { isPreloadDone } = useContext(AnimationContext)

  useEffect(() => {
    if (sessionStorage.getItem('hasSeenPreloader') === 'true') return

    if (isPreloadDone) {
      setStartCurveAnimation(true)
      sessionStorage.setItem('hasSeenPreloader', 'true')
      setHasSeenPreloader(true)
    }
  }, [isPreloadDone])

  return (
    <main className='bg-slate-300/20 min-h-[100vh]'>
      <Router>
        {!hasSeenPreloader && <LoaderProgress />}
        {hasSeenPreloader && <NavBar />}
        <ScrollToTop />
        <AnimatedRoutes showCurve={startCurveAnimation} />
      </Router>
    </main>
  )
}


export default App
