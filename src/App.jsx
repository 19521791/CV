import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Loader from "components/Loader";

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Projects = lazy(() => import("./pages/Projects"))
const Experience = lazy(() => import("./pages/Experience"))
const Skills = lazy(() => import("./pages/Skills"))
const NotFound = lazy(() => import("./components/NotFound"))

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Suspense fallback={<Loader />}>
      <main className='bg-slate-300/20 min-h-[100vh]'>
        <Router>
          <NavBar />
          { isLoading ? ( <Loader /> ) :(
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          )}
        </Router>
      </main>
    </Suspense>
  )
}

export default App