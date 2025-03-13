import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Loader from "components/Loader";

import { Model } from "pages";
import { About } from "pages";
import { Projects } from "pages";
import { Experience } from "pages";
import { Skills } from "pages";
import NotFound from "components/NotFound";
import { CoverLetter } from "pages";

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className='bg-slate-300/20 min-h-[100vh]'>
      <Router>
        <NavBar />
        { isLoading ? ( <Loader /> ) :(
          <Routes>
          <Route path='/' element={<Model />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/cover-letter' element={<CoverLetter />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        )}
      </Router>
    </main>
  )
}

export default App