import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Mail, Github, Instagram, Facebook, MapPin, Send,
  User, MessageSquare, AtSign, CheckCircle2, Building2
} from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // En réel : envoyer au backend. Ici on simule + on ouvre le mailto
    const body = `Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`
    window.location.href = `mailto:teampixelbuilders@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${body}`
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const channels = [
    {
      icon: Mail,
      label: 'Email principal',
      value: 'contact@smartexamguarden.com',
      href: 'mailto:contact@smartexamguarden.com',
      tag: 'PRIMARY',
    },
    {
      icon: AtSign,
      label: 'Email équipe',
      value: 'teampixelbuilders@gmail.com',
      href: 'mailto:teampixelbuilders@gmail.com',
      tag: 'TEAM',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Malekmouelh',
      href: 'https://github.com/Malekmouelh',
      tag: 'CODE',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@smart.exam.guarden',
      href: 'https://instagram.com/smart.exam.guarden',
      tag: 'SOCIAL',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'Smart Exam Guarden',
      href: 'https://facebook.com/smartexamguarden',
      tag: 'SOCIAL',
    },
    {
      icon: Building2,
      label: 'Université',
      value: 'ESPRIT — Tunis, Tunisie',
      href: 'https://esprit.tn',
      tag: 'INSTITUTION',
    },
  ]

  return (
    <motion.div
      className="page contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* =========== HEADER =========== */}
      <section className="contact-header">
        <div className="container">
          <div className="header-meta mono">
            <span>CHANNEL // OPEN</span>
            <span className="sep">//</span>
            <span>REPLY // &lt; 48H</span>
            <span className="sep">//</span>
            <span className="blink">● READY</span>
          </div>

          <span className="label">Contact</span>
          <h1 className="contact-title">
            Entrer en <em>contact</em>.
          </h1>
          <p className="contact-intro">
            Une question sur le projet ? Une opportunité de collaboration ?
            Nous sommes joignables via plusieurs canaux. Choisissez celui
            qui vous convient le mieux.
          </p>
        </div>
      </section>

      {/* =========== MAIN GRID =========== */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* LEFT — FORM */}
            <motion.div
              className="contact-form-wrap"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="form-head">
                <MessageSquare size={20} />
                <div>
                  <div className="form-head-title">Envoyer un message</div>
                  <div className="form-head-sub mono">SECURE // ENCRYPTED</div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label className="mono">NOM</label>
                    <div className="input-wrap">
                      <User size={14} />
                      <input
                        type="text"
                        required
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="mono">EMAIL</label>
                    <div className="input-wrap">
                      <Mail size={14} />
                      <input
                        type="email"
                        required
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-field">
                  <label className="mono">SUJET</label>
                  <div className="input-wrap">
                    <AtSign size={14} />
                    <input
                      type="text"
                      required
                      placeholder="Objet de votre message"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="mono">MESSAGE</label>
                  <textarea
                    required
                    rows="6"
                    placeholder="Votre message..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={sent}>
                  {sent ? (
                    <>
                      <CheckCircle2 size={16} />
                      <span>MESSAGE ENVOYÉ</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>ENVOYER</span>
                    </>
                  )}
                </button>

                <div className="form-note mono">
                  <span className="blink">●</span> OUVRE VOTRE CLIENT MAIL PAR DÉFAUT
                </div>
              </form>
            </motion.div>

            {/* RIGHT — CHANNELS */}
            <motion.div
              className="channels-wrap"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="form-head">
                <MapPin size={20} />
                <div>
                  <div className="form-head-title">Autres canaux</div>
                  <div className="form-head-sub mono">06 POINTS DE CONTACT</div>
                </div>
              </div>

              <div className="channels-list">
                {channels.map((ch, i) => {
                  const Icon = ch.icon
                  return (
                    <a
                      key={i}
                      href={ch.href}
                      target={ch.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="channel-card"
                    >
                      <div className="channel-icon">
                        <Icon size={18} />
                      </div>
                      <div className="channel-info">
                        <div className="channel-label mono">{ch.label}</div>
                        <div className="channel-value">{ch.value}</div>
                      </div>
                      <div className="channel-tag mono">{ch.tag}</div>
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========== MAP / LOCATION ========== */}
      <section className="section">
        <div className="container">
          <div className="location-box">
            <div className="location-text">
              <span className="label">Localisation</span>
              <h2 className="location-title">
                ESPRIT — <em>Tunis</em>.
              </h2>
              <p>
                École Supérieure Privée d'Ingénierie et de Technologie.
                Basée dans la capitale tunisienne, notre équipe travaille
                depuis les locaux de l'université sur ce projet.
              </p>
              <div className="location-meta mono">
                <div>
                  <span className="lm-lbl">LATITUDE</span>
                  <span className="lm-val">36.8997° N</span>
                </div>
                <div>
                  <span className="lm-lbl">LONGITUDE</span>
                  <span className="lm-val">10.1897° E</span>
                </div>
                <div>
                  <span className="lm-lbl">TIMEZONE</span>
                  <span className="lm-val">GMT+1 (CET)</span>
                </div>
              </div>
            </div>

            <div className="location-visual">
              <div className="loc-grid" />
              <div className="loc-pin">
                <div className="pin-pulse" />
                <div className="pin-pulse" style={{animationDelay: '1s'}} />
                <div className="pin-dot" />
              </div>
              <div className="loc-coords mono">
                <div>36.8997°N / 10.1897°E</div>
                <div className="loc-sub">TUNIS // TUNISIA</div>
              </div>
              <div className="loc-corner tl"></div>
              <div className="loc-corner tr"></div>
              <div className="loc-corner bl"></div>
              <div className="loc-corner br"></div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
