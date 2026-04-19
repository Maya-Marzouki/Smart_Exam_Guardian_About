import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Project from './pages/Project'
import Team from './pages/Team'
import Download from './pages/Download'
import Contact from './pages/Contact'
import ScanlineOverlay from './components/ScanlineOverlay'

function App() {
  return (
    <div className="app">
      <ScanlineOverlay />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/team" element={<Team />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
