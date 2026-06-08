import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Camera, Mic, Brain, Bell, ShieldCheck, Activity,
  ArrowUpRight, Eye, Cpu, Radio, ChevronRight
} from 'lucide-react'
import logo from '../assets/logo.png'
import './Home.css'

export default function Home() {
  const features = [
    { icon: Camera, title: 'Vision par Ordinateur', desc: 'Détection d\'objets, postures et déplacements anormaux en temps réel.', code: 'F-01' },
    { icon: Mic, title: 'Analyse Audio IA', desc: 'Détection des chuchotements et classification sonore intelligente.', code: 'F-02' },
    { icon: Brain, title: 'Intelligence Artificielle', desc: 'YOLOv8, MediaPipe, Silero VAD et YAMNet combinés.', code: 'F-03' },
    { icon: Bell, title: 'Alertes Contextuelles', desc: 'Notifications push vers l\'application mobile du surveillant.', code: 'F-04' },
    { icon: ShieldCheck, title: 'Éthique & Confidentialité', desc: 'Minimisation des données, chiffrement, rétention limitée.', code: 'F-05' },
    { icon: Activity, title: 'Supervision Temps Réel', desc: 'État des capteurs, latence réseau, alertes techniques.', code: 'F-06' },
  ]

  const stats = [
    { num: '<2s', label: 'Latence d\'alerte' },
    { num: '99%', label: 'Disponibilité' },
    { num: '5+', label: 'Modèles IA' },
    { num: '200', label: 'Étudiants / salle' },
  ]

  return (
    <motion.div
      className="page home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-grid" />

        {/* Corner brackets */}
        <div className="corner tl"></div>
        <div className="corner tr"></div>
        <div className="corner bl"></div>
        <div className="corner br"></div>

        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-meta mono">
              <span className="meta-item"><span className="blink">●</span> SYSTEM ONLINE</span>
              <span className="meta-item">PROJECT // 2026</span>
              <span className="meta-item">ZONE // TN</span>
            </div>

            <h1 className="hero-title">
              Surveillance<br/>
              <span className="hero-title-accent">intelligente</span><br/>
              des examens.
            </h1>

            <p className="hero-sub">
              Smart Exam Guardian assiste les surveillants humains grâce à
              l'intelligence artificielle et l'Internet des Objets.
              Détection automatique, alertes temps réel, décision humaine.
            </p>

            <div className="hero-actions">
              <Link to="/project" className="btn btn-primary">
                Découvrir le projet <ArrowUpRight size={16} />
              </Link>
              <Link to="/download" className="btn">
                Télécharger l'app <ChevronRight size={16} />
              </Link>
            </div>

            <div className="hero-tags mono">
              <span>#IA</span>
              <span>#IoT</span>
              <span>#COMPUTER_VISION</span>
              <span>#EDGE_COMPUTING</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="logo-frame">
              <div className="logo-glow" />
              <img src={logo} alt="SEG Logo" className="hero-logo" />
              <div className="scan-line" />

              {/* Data points around logo */}
              <div className="data-point dp-1">
                <span className="dp-dot"></span>
                <span className="dp-label mono">CAM_01</span>
              </div>
              <div className="data-point dp-2">
                <span className="dp-dot"></span>
                <span className="dp-label mono">AUDIO</span>
              </div>
              <div className="data-point dp-3">
                <span className="dp-dot"></span>
                <span className="dp-label mono">AI_CORE</span>
              </div>
              <div className="data-point dp-4">
                <span className="dp-dot"></span>
                <span className="dp-label mono">ALERT</span>
              </div>
            </div>

            <div className="hero-telemetry mono">
              <div className="telemetry-row">
                <span>CAMERAS</span><span className="tm-val">04 / 04</span>
              </div>
              <div className="telemetry-row">
                <span>AUDIO_CH</span><span className="tm-val">ACTIVE</span>
              </div>
              <div className="telemetry-row">
                <span>LATENCY</span><span className="tm-val">847ms</span>
              </div>
              <div className="telemetry-row">
                <span>AI_STATUS</span><span className="tm-val ok">OPERATIONAL</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hero-scroll mono">
          <span>SCROLL</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="stat-num">{stat.num}</div>
                <div className="stat-label mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="label">À propos du système</span>
              <h2 className="section-title">
                L'œil qui ne cligne <em>jamais</em>.
              </h2>
            </motion.div>

            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p>
                La surveillance traditionnelle présente des limites face à des
                comportements discrets : chuchotements, déplacements suspects,
                usage furtif du téléphone. Le surveillant humain fait face à
                une surcharge cognitive importante et à des zones d'ombre.
              </p>
              <p>
                <strong>Smart Exam Guardian</strong> assiste — sans jamais remplacer —
                le surveillant humain. Le système capte, analyse et alerte.
                La décision finale reste <em>toujours</em> humaine.
              </p>
              <div className="about-pillars">
                <div className="pillar">
                  <Eye size={20} />
                  <span>Détection</span>
                </div>
                <div className="pillar">
                  <Cpu size={20} />
                  <span>Analyse</span>
                </div>
                <div className="pillar">
                  <Radio size={20} />
                  <span>Alerte</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <span className="label">Capacités du système</span>
            <h2 className="section-title">
              Six modules. <em>Un seul objectif.</em>
            </h2>
          </div>

          <div className="features-grid">
            {features.map((feat, i) => {
              const Icon = feat.icon
              return (
                <motion.div
                  key={i}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="feature-head">
                    <Icon size={24} className="feature-icon" />
                    <span className="feature-code mono">{feat.code}</span>
                  </div>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                  <div className="feature-bottom mono">
                    <span className="blink">●</span> ACTIVE
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-grid-bg" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="label">Prêt à déployer ?</span>
              <h2 className="cta-title">
                Explorez le projet, téléchargez<br/>l'application, rejoignez-nous.
              </h2>
              <div className="cta-actions">
                <Link to="/project" className="btn btn-primary">
                  Le projet en détail <ArrowUpRight size={16} />
                </Link>
                <Link to="/contact" className="btn">
                  Nous contacter
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
