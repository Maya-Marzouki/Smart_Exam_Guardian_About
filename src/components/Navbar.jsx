import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Shield } from 'lucide-react'
import logo from '../assets/logo.png'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Accueil', code: '01' },
    { to: '/project', label: 'Projet', code: '02' },
    { to: '/team', label: 'Équipe', code: '03' },
    { to: '/download', label: 'Application', code: '04' },
    { to: '/contact', label: 'Contact', code: '05' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="nav-brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Smart Exam Guardian" className="nav-logo" />
          <div className="nav-brand-text">
            <span className="nav-brand-name">SMART EXAM</span>
            <span className="nav-brand-sub">GUARDIAN</span>
          </div>
          <div className="nav-status">
            <span className="status-dot blink"></span>
            <span className="status-text">LIVE</span>
          </div>
        </Link>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                <span className="nav-code">{link.code}</span>
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  )
}
