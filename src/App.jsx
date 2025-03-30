import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '@/components/NavBar'
import Loader from '@/components/Loader'

import { Model, About, Projects, CoverLetter, Landing } from '@/pages'
import NotFound from '@/components/NotFound'
import { ImageProvider } from '@/utils/ImageGallery'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
    (
      async () => {
        setTimeout( () => {
          setIsLoading(false)
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0)
        }, 2000)
      }
    )()
  }, [])

  return (
    <main className='bg-slate-300/20 min-h-[100vh]'>
      <Router>
        <ImageProvider>
          <NavBar />
          { isLoading ? ( <Loader /> ) :(
            <Routes>
              <Route exact path='/' element={<Landing />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/work' element={<Projects />} />
              <Route exact path='/model' element={<Model />} />
              <Route exact path='/cover-letter' element={<CoverLetter />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </ImageProvider>
      </Router>
    </main>
  )
}

export default App