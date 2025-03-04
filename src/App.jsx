import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Projects = lazy(() => import("./pages/Projects"))
const Experience = lazy(() => import("./pages/Experience"))
const Skills = lazy(() => import("./pages/Skills"))

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className='bg-slate-300/20 min-h-[100vh]'>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/skills' element={<Skills />} />
          </Routes>
        </Router>
      </main>
    </Suspense>
  )
}

export default App