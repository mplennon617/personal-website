import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Blogs from './pages/Blogs';
import Designs from './pages/Designs';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <div className=" min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white fixed inset-0 -z-10"></div>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<h2>Contact Page</h2>} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
