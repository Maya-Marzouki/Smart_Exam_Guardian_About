import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Download as DownloadIcon, Smartphone, Monitor, Globe,
  FileText, ExternalLink, Package, Github, HardDrive, Shield, CheckCircle2
} from 'lucide-react'
import './Download.css'

export default function Download() {
  const [copied, setCopied] = useState(false)

  // ⚠️ REMPLACE ce lien par ton lien Google Drive / GitHub Release / Mega
  const APP_DOWNLOAD_URL = 'https://drive.google.com/YOUR_SHARE_LINK_HERE'
  const GITHUB_URL = 'https://github.com/Malekmouelh'

  const platforms = [
    {
      icon: Smartphone,
      name: 'Application Mobile',
      sub: 'Android / iOS',
      desc: 'Application surveillant — réception des alertes temps réel, classification, historique.',
      size: '~45 MB',
      version: 'v1.0.0-beta',
      tag: 'SURVEILLANT',
    },
    {
      icon: Monitor,
      name: 'Application Desktop',
      sub: 'Windows / macOS / Linux',
      desc: 'Console administrateur — gestion des sessions, configuration des capteurs, rapports.',
      size: '~120 MB',
      version: 'v1.0.0-beta',
      tag: 'ADMIN',
    },
    {
      icon: Globe,
      name: 'Application Web',
      sub: 'Navigateur moderne',
      desc: 'Dashboard web — supervision multi-salles, statistiques, export des rapports.',
      size: '~18 MB',
      version: 'v1.0.0-beta',
      tag: 'DASHBOARD',
    },
  ]

  const copyLink = () => {
    navigator.clipboard.writeText(APP_DOWNLOAD_URL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      className="page download-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* =========== HEADER =========== */}
      <section className="download-header">
        <div className="container">
          <div className="header-meta mono">
            <span>PKG_ID // SEG-RELEASE-001</span>
            <span className="sep">//</span>
            <span>BUILD // 2026.04</span>
            <span className="sep">//</span>
            <span className="blink">● READY</span>
          </div>

          <span className="label">Téléchargement</span>
          <h1 className="dl-title">
            Obtenir<br/>l'<em>application</em>.
          </h1>
          <p className="dl-intro">
            Smart Exam Guardian est disponible sous trois formats :
            mobile pour les surveillants, desktop pour l'administration,
            et web pour la supervision multi-salles.
          </p>
        </div>
      </section>

      {/* =========== MAIN DOWNLOAD BOX =========== */}
      <section className="section">
        <div className="container">
          <div className="main-download">
            <div className="md-grid-bg" />

            <div className="md-left">
              <Package size={32} className="md-icon" />
              <div className="md-tag mono">COMPLETE PACKAGE</div>
              <h2 className="md-title">
                Smart Exam Guardian<br/>
                <span className="md-title-accent">Suite Complète</span>
              </h2>
              <p className="md-desc">
                Téléchargez le pack complet contenant les trois applications
                (mobile, desktop, web), la documentation technique et les
                fichiers de configuration.
              </p>

              <div className="md-meta mono">
                <div>
                  <span className="mm-lbl">VERSION</span>
                  <span className="mm-val">1.0.0-BETA</span>
                </div>
                <div>
                  <span className="mm-lbl">TAILLE</span>
                  <span className="mm-val">~185 MB</span>
                </div>
                <div>
                  <span className="mm-lbl">FORMAT</span>
                  <span className="mm-val">ZIP</span>
                </div>
                <div>
                  <span className="mm-lbl">LICENCE</span>
                  <span className="mm-val">MIT</span>
                </div>
              </div>
            </div>

            <div className="md-right">
              <a
                href={APP_DOWNLOAD_URL}
                target="_blank"
                rel="noreferrer"
                className="mega-btn"
              >
                <DownloadIcon size={20} />
                <span>TÉLÉCHARGER</span>
                <span className="mb-size mono">~185 MB</span>
              </a>

              <button onClick={copyLink} className="copy-link mono">
                {copied ? <CheckCircle2 size={14} /> : <ExternalLink size={14} />}
                {copied ? 'LIEN COPIÉ' : 'COPIER LE LIEN'}
              </button>

              <div className="md-host mono">
                <HardDrive size={14} />
                HÉBERGÉ SUR // GOOGLE DRIVE
              </div>

              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="github-link">
                <Github size={16} />
                <span>Voir sur GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========== PLATFORMS =========== */}
      <section className="section platforms-section">
        <div className="container">
          <div className="section-head">
            <span className="label">Les 3 applications</span>
            <h2 className="h2">Une suite <em>complète</em>.</h2>
          </div>

          <div className="platforms-grid">
            {platforms.map((plat, i) => {
              const Icon = plat.icon
              return (
                <motion.div
                  key={i}
                  className="platform-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="plat-tag mono">{plat.tag}</div>
                  <Icon size={36} className="plat-icon" />
                  <h3>{plat.name}</h3>
                  <div className="plat-sub mono">{plat.sub}</div>
                  <p>{plat.desc}</p>
                  <div className="plat-meta mono">
                    <span>{plat.version}</span>
                    <span className="sep">•</span>
                    <span>{plat.size}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========== DOC =========== */}
      <section className="section">
        <div className="container">
          <div className="doc-grid">
            <a
              href="/downloads/Cahier_des_Specifications.docx"
              download
              className="doc-card"
            >
              <FileText size={28} />
              <div>
                <div className="doc-title">Cahier des Spécifications</div>
                <div className="doc-sub mono">DOCX • Document officiel</div>
              </div>
              <DownloadIcon size={18} className="doc-dl" />
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="doc-card"
            >
              <Github size={28} />
              <div>
                <div className="doc-title">Code Source (GitHub)</div>
                <div className="doc-sub mono">github.com/Malekmouelh</div>
              </div>
              <ExternalLink size={18} className="doc-dl" />
            </a>
          </div>
        </div>
      </section>

      {/* =========== INSTALL GUIDE =========== */}
      <section className="section install-section">
        <div className="container">
          <div className="section-head">
            <span className="label">Guide d'installation</span>
            <h2 className="h2">En <em>4 étapes</em>.</h2>
          </div>

          <div className="steps-grid">
            {[
              { n: '01', title: 'Télécharger', desc: 'Cliquez sur le bouton de téléchargement ci-dessus.' },
              { n: '02', title: 'Extraire', desc: 'Décompressez l\'archive ZIP dans le dossier de votre choix.' },
              { n: '03', title: 'Configurer', desc: 'Ouvrez le fichier README.md et suivez les instructions.' },
              { n: '04', title: 'Lancer', desc: 'Exécutez l\'application adaptée à votre rôle (mobile/desktop/web).' },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="step-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="step-num mono">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========== SECURITY NOTE =========== */}
      <section className="section">
        <div className="container">
          <div className="security-note">
            <Shield size={24} />
            <div>
              <div className="sn-title">Note de sécurité</div>
              <p>
                Cette application est en phase <strong>beta</strong>.
                Elle est distribuée à des fins de démonstration académique
                dans le cadre d'un projet ESPRIT. Aucune donnée personnelle
                n'est collectée ni transmise en dehors du réseau local de
                l'établissement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
