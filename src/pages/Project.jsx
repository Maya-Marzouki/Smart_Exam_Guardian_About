import { motion } from 'framer-motion'
import {
  Eye, Mic2, Cpu, Bell, FileBarChart2, Camera, Radio,
  AlertTriangle, CheckCircle2, XCircle, Server, Wifi, Lock
} from 'lucide-react'
import './Project.css'

export default function Project() {
  const detectionModules = [
    { behavior: 'Chuchotements', method: 'Analyse audio (Silero VAD)', severity: 'medium' },
    { behavior: 'Déplacements anormaux', method: 'Vision par ordinateur', severity: 'high' },
    { behavior: 'Regroupements', method: 'Analyse de distances', severity: 'high' },
    { behavior: 'Utilisation du téléphone', method: 'Détection d\'objets (YOLOv8)', severity: 'critical' },
    { behavior: 'Regard anormal', method: 'Analyse direction du regard', severity: 'medium' },
  ]

  const aiModels = [
    { name: 'YOLOv8', purpose: 'Détection du téléphone', license: 'AGPL', icon: Camera },
    { name: 'MediaPipe Pose', purpose: 'Posture et déplacements', license: 'Apache 2.0', icon: Eye },
    { name: 'Silero VAD', purpose: 'Détection de voix', license: 'MIT', icon: Mic2 },
    { name: 'YAMNet', purpose: 'Classification sonore', license: 'Apache 2.0', icon: Radio },
  ]

  const inScope = [
    'Captation audio/vidéo via caméras et microphones',
    'Analyse intelligente en temps réel (edge computing)',
    'Génération automatique d\'alertes contextualisées',
    'Application mobile, desktop et web',
    'Historique des alertes par session',
    'Génération de rapports post-examen (PDF/CSV)',
  ]

  const outScope = [
    'Reconnaissance faciale ou identification nominative',
    'Transcription complète des conversations',
    'Actions coercitives automatiques',
    'Brouillage ou interception des communications',
    'Verdict automatique de triche (décision humaine obligatoire)',
  ]

  const nfReqs = [
    { crit: 'Temps réel', req: 'Latence < 2 secondes', icon: Cpu },
    { crit: 'Sécurité', req: 'Données chiffrées de bout en bout', icon: Lock },
    { crit: 'Disponibilité', req: '≥ 99 % pendant les examens', icon: Server },
    { crit: 'Confidentialité', req: 'Minimisation & rétention limitée', icon: Eye },
    { crit: 'Traçabilité', req: 'Journalisation de toutes les actions', icon: FileBarChart2 },
    { crit: 'Scalabilité', req: 'Plusieurs salles simultanées', icon: Wifi },
  ]

  return (
    <motion.div
      className="page project-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* =========== HEADER =========== */}
      <section className="project-header">
        <div className="container">
          <div className="header-meta mono">
            <span>DOC_ID // SEG-2026-001</span>
            <span className="sep">//</span>
            <span>CLASSIFICATION // TECHNICAL</span>
            <span className="sep">//</span>
            <span className="blink">● LIVE</span>
          </div>
          <span className="label">Le Projet</span>
          <h1 className="project-title">
            Cahier des <em>spécifications</em>.
          </h1>
          <p className="project-intro">
            Smart Exam Guardian combine intelligence artificielle, vision par
            ordinateur, analyse audio et Internet des Objets pour assister les
            surveillants humains — sans jamais les remplacer.
          </p>
        </div>
      </section>

      {/* =========== CONTEXTE =========== */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="label">01 / Contexte</span>
              <h2 className="h2">Le problème que<br/>nous résolvons.</h2>
            </div>
            <div className="col-text">
              <p>
                La surveillance des examens en présentiel repose principalement
                sur des surveillants humains. Cette approche présente plusieurs
                limites critiques :
              </p>
              <ul className="bullet-list">
                <li>
                  <AlertTriangle size={14} />
                  Difficulté à détecter les comportements discrets (chuchotements, regards répétés, usage furtif du téléphone)
                </li>
                <li>
                  <AlertTriangle size={14} />
                  Surcharge cognitive du surveillant sur de grandes salles
                </li>
                <li>
                  <AlertTriangle size={14} />
                  Subjectivité et absence de traçabilité des incidents
                </li>
              </ul>
              <p className="highlight">
                Notre objectif : <em>assister</em> les surveillants grâce à
                un système intelligent, sans jamais se substituer à leur
                jugement final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========== SCOPE =========== */}
      <section className="section scope-section">
        <div className="container">
          <div className="section-head">
            <span className="label">02 / Périmètre</span>
            <h2 className="h2">Ce que le système <em>fait</em>,<br/>et ce qu'il ne fait <em>pas</em>.</h2>
          </div>

          <div className="scope-grid">
            <div className="scope-card scope-in">
              <div className="scope-head">
                <CheckCircle2 size={22} />
                <h3>IN-SCOPE</h3>
                <span className="mono">05 fonctions</span>
              </div>
              <ul>
                {inScope.map((item, i) => (
                  <li key={i}>
                    <span className="scope-code mono">{String(i+1).padStart(2, '0')}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="scope-card scope-out">
              <div className="scope-head">
                <XCircle size={22} />
                <h3>OUT-OF-SCOPE</h3>
                <span className="mono">05 exclusions</span>
              </div>
              <ul>
                {outScope.map((item, i) => (
                  <li key={i}>
                    <span className="scope-code mono">{String(i+1).padStart(2, '0')}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========== DETECTION =========== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="label">03 / Détection intelligente</span>
            <h2 className="h2">Cinq comportements.<br/><em>Cinq méthodes IA.</em></h2>
          </div>

          <div className="detection-table">
            <div className="dt-header mono">
              <span>COMPORTEMENT</span>
              <span>MÉTHODE DE DÉTECTION</span>
              <span>SÉVÉRITÉ</span>
            </div>
            {detectionModules.map((mod, i) => (
              <motion.div
                key={i}
                className="dt-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className="dt-behavior">{mod.behavior}</span>
                <span className="dt-method mono">{mod.method}</span>
                <span className={`dt-severity sev-${mod.severity}`}>
                  {mod.severity.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========== AI MODELS =========== */}
      <section className="section ai-section">
        <div className="container">
          <div className="section-head">
            <span className="label">04 / Stack IA</span>
            <h2 className="h2">Des modèles <em>éprouvés</em>,<br/>combinés intelligemment.</h2>
          </div>

          <div className="ai-grid">
            {aiModels.map((model, i) => {
              const Icon = model.icon
              return (
                <motion.div
                  key={i}
                  className="ai-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="ai-icon-wrap">
                    <Icon size={28} />
                  </div>
                  <div className="ai-license mono">LICENSE // {model.license}</div>
                  <h3>{model.name}</h3>
                  <p>{model.purpose}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========== HARDWARE =========== */}
      <section className="section hw-section">
        <div className="container">
          <div className="section-head">
            <span className="label">05 / Matériel requis</span>
            <h2 className="h2">Du prototype à la<br/><em>production</em>.</h2>
          </div>

          <div className="hw-grid">
            <div className="hw-card">
              <div className="hw-tag mono">PRODUCTION</div>
              <h3>Caméras IP PoE</h3>
              <ul className="hw-list">
                <li><span className="mono">SM</span> Petite salle (20–40) : 2–4 caméras</li>
                <li><span className="mono">MD</span> Salle moyenne (40–80) : 4–6 caméras</li>
                <li><span className="mono">LG</span> Grand amphi (80–200) : 6–12 caméras</li>
              </ul>
              <div className="hw-note">
                Accessoires : supports mur/plafond, boîtiers de protection
              </div>
            </div>

            <div className="hw-card">
              <div className="hw-tag mono tag-proto">PROTOTYPE</div>
              <h3>ESP32-CAM + RPi</h3>
              <ul className="hw-list">
                <li><span className="mono">V1</span> ESP32-CAM (stream MJPEG)</li>
                <li><span className="mono">A1</span> Raspberry Pi + microphone</li>
                <li><span className="mono">AI</span> Exécution sur Edge / Serveur</li>
              </ul>
              <div className="hw-note">
                Utilisé uniquement comme capteur — IA déportée côté edge/serveur
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== NON-FUNCTIONAL =========== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="label">06 / Exigences non-fonctionnelles</span>
            <h2 className="h2">Performance, sécurité,<br/><em>confidentialité</em>.</h2>
          </div>

          <div className="nf-grid">
            {nfReqs.map((req, i) => {
              const Icon = req.icon
              return (
                <motion.div
                  key={i}
                  className="nf-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Icon size={20} className="nf-icon" />
                  <div className="nf-crit mono">{req.crit}</div>
                  <div className="nf-req">{req.req}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========== DOWNLOAD SPEC =========== */}
      <section className="section">
        <div className="container">
          <div className="spec-download">
            <div>
              <span className="label">Document officiel</span>
              <h2 className="h2-small">Cahier des spécifications complet</h2>
              <p>
                Téléchargez le document officiel contenant tous les détails
                techniques, diagrammes d'architecture et spécifications
                fonctionnelles.
              </p>
            </div>
            <a
              href="/downloads/Cahier_des_Specifications.docx"
              download
              className="btn btn-primary"
            >
              Télécharger (.docx)
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
