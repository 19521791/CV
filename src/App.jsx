import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '@/components/NavBar'
import Loader from "@/components/Loader";

import { Model } from "@/pages";
import { About } from "@/pages";
import { Projects } from "@/pages";
import { Experience } from "@/pages";
import { Skills } from "@/pages";
import NotFound from "@/components/NotFound";
import { CoverLetter } from "@/pages";

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
            <Route exact path='/' element={<Model />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/experience' element={<Experience />} />
            <Route exact path='/skills' element={<Skills />} />
            <Route exact path='/cover-letter' element={<CoverLetter />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        )}
      </Router>
    </main>
  )
}

export default App