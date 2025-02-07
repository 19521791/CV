import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Home, About, Projects, Experience, Skills } from './pages'

const App = () => {
  return (
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
  )
}

export default App