import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Home, About, Projects, Contact, Experience, Skills, Cv } from './pages'

const App = () => {
  return (
    <main className='bg-slate-300/20 min-h-[100vh]'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/cv' element={<Cv />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App