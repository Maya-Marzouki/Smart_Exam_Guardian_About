import { Link } from 'react-router-dom'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid-bg" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="SEG" className="footer-logo" />
            <h3 className="footer-title">SMART EXAM GUARDIAN</h3>
            <p className="footer-desc">
              Surveillance intelligente d'examens par intelligence artificielle
              et Internet des Objets.
            </p>
            <div className="footer-sys-info mono">
              <div><span>SYS/</span> OPERATIONAL</div>
              <div><span>VER/</span> 1.0.0-BETA</div>
              <div><span>UPD/</span> 2026.04</div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/project">Le Projet</Link></li>
              <li><Link to="/team">L'Équipe</Link></li>
              <li><Link to="/download">Application</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Technologies</h4>
            <ul>
              <li>YOLOv8 / MediaPipe</li>
              <li>Silero VAD / YAMNet</li>
              <li>ESP32-CAM / RPi</li>
              <li>React / Flutter</li>
              <li>Edge Computing</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={14} />
                <span>Tunis, Tunisie</span>
              </li>
              <li>
                <Mail size={14} />
                <a href="mailto:contact@smartexamguardian.tn">
                  contact@smartexamguardian.tn
                </a>
              </li>
              <li>
                <Github size={14} />
                <a href="#" target="_blank" rel="noreferrer">github.com/seg</a>
              </li>
              <li>
                <Linkedin size={14} />
                <a href="#" target="_blank" rel="noreferrer">linkedin.com/seg</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="mono">
            © 2026 SMART EXAM GUARDIAN // TOUS DROITS RÉSERVÉS
          </p>
          <p className="mono footer-tagline">
            <span className="blink">●</span> SURVEILLANCE ACTIVE / ASSISTED BY AI
          </p>
        </div>
      </div>
    </footer>
  )
}
