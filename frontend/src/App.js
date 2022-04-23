import './App.css';
import Navbar from './components/navbar/Navbar.js'
import Home from './pages/home/Home.js'
import About from './pages/about/About.js'
import Projects from './pages/projects/Projects.js'
import Resume from './pages/resume/Resume.js'

//Router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
