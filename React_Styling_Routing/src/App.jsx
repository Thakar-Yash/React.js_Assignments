import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {

  return (
    <>
      {/* Task 1: Set up a basic React Router with two routes: one for a Home page and one for
        an About page. Display the appropriate content based on the URL. */}

      {/* Task 2: Create a navigation bar using React Router’s Link component that allows users to
        switch between the Home, About, and Contact pages. */}


{/* Navigation Bar */}
      <nav style={{ padding: '1rem', background: '#f4f4f4' }}>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: 'none', color: '#007bff' }}>About</Link>
          </li>
          <li>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#007bff' }}>Contact</Link>
          </li>
        </ul>
      </nav>


      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App