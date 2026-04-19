import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, Hexagon } from 'lucide-react'
import aliImg from '../assets/team/ali.jpg'
import mayaImg from '../assets/team/maya.jpg'
import najdImg from '../assets/team/najd.png'
import salsabilImg from '../assets/team/salsabil.jpg'
import malekImg from '../assets/team/malek.jpg'
import './Team.css'

export default function Team() {
  const members = [
    {
      name: 'Ali Belkadhi',
      role: 'Full-Stack Developer',
      specialty: 'Architecture Backend & IoT',
      img: aliImg,
      code: 'M-01',
      github: 'https://github.com/Ali-belkadhi',
      linkedin: null,
      email: 'Ali.belkadhi@esprit.tn',
    },
    {
      name: 'Maya Marzouki',
      role: 'UI/UX Designer',
      specialty: 'Design d\'interface & Expérience',
      img: mayaImg,
      code: 'M-02',
      github: 'https://github.com/Maya-Marzouki',
      linkedin: null,
      email: 'marzoukimaya3@gmail.com',
    },
    {
      name: 'Najd Nagati',
      role: 'AI Engineer',
      specialty: 'Vision par ordinateur & Deep Learning',
      img: najdImg,
      code: 'M-03',
      github: 'https://github.com/nagati10',
      linkedin: null,
      email: null,
    },
    {
      name: 'Salsabil Hafsi',
      role: 'Mobile Developer',
      specialty: 'Application mobile & Notifications',
      img: salsabilImg,
      code: 'M-04',
      github: 'https://github.com/Salsabil-23',
      linkedin: 'https://www.linkedin.com/in/salsabil-hafsi-7a56bb277/',
      email: 'salsabilhafsi2@gmail.com',
    },
    {
      name: 'Mouhamed Malek Mouelhi',
      role: 'Tech Lead',
      specialty: 'Coordination technique & DevOps',
      img: malekImg,
      code: 'M-05',
      github: 'https://github.com/Malekmouelh',
      linkedin: 'https://www.linkedin.com/in/malek-mouelhi-b6242b386/',
      email: 'malekmouelhi.2003@gmail.com',
    },
  ]

  return (
    <motion.div
      className="page team-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* =========== HEADER =========== */}
      <section className="team-header">
        <div className="container">
          <div className="header-meta mono">
            <span>TEAM_ID // PXB-2026</span>
            <span className="sep">//</span>
            <span>MEMBERS // 05</span>
            <span className="sep">//</span>
            <span>UNIV // ESPRIT</span>
          </div>

          <span className="label">L'équipe</span>

          <div className="team-title-wrap">
            <h1 className="team-title">
              Pixel<em>Builders</em>
            </h1>
            <div className="team-hex">
              <Hexagon size={48} strokeWidth={1} />
              <Hexagon size={48} strokeWidth={1} />
              <Hexagon size={48} strokeWidth={1} />
            </div>
          </div>

          <p className="team-intro">
            Cinq étudiants d'ESPRIT réunis autour d'une vision : rendre
            la surveillance des examens plus juste, plus fiable et plus
            éthique grâce à l'intelligence artificielle.
          </p>
        </div>
      </section>

      {/* =========== MEMBERS GRID =========== */}
      <section className="section">
        <div className="container">
          <div className="members-grid">
            {members.map((member, i) => (
              <motion.div
                key={i}
                className={`member-card ${i === 4 ? 'lead' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="member-top mono">
                  <span>{member.code}</span>
                  <span className="blink">●</span>
                </div>

                <div className="member-photo-wrap">
                  <div className="photo-frame">
                    <img src={member.img} alt={member.name} />
                    <div className="photo-scan" />
                  </div>
                  <div className="photo-corners">
                    <span className="pc tl"></span>
                    <span className="pc tr"></span>
                    <span className="pc bl"></span>
                    <span className="pc br"></span>
                  </div>
                </div>

                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <div className="member-role mono">{member.role}</div>
                  <p className="member-specialty">{member.specialty}</p>

                  <div className="member-links">
                    {member.github ? (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`GitHub de ${member.name}`}
                        title="GitHub"
                      >
                        <Github size={16} />
                      </a>
                    ) : (
                      <span className="link-disabled" title="Non disponible">
                        <Github size={16} />
                      </span>
                    )}

                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`LinkedIn de ${member.name}`}
                        title="LinkedIn"
                      >
                        <Linkedin size={16} />
                      </a>
                    ) : (
                      <span className="link-disabled" title="Non disponible">
                        <Linkedin size={16} />
                      </span>
                    )}

                    {member.email ? (
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email de ${member.name}`}
                        title={member.email}
                      >
                        <Mail size={16} />
                      </a>
                    ) : (
                      <span className="link-disabled" title="Non disponible">
                        <Mail size={16} />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========== PHILOSOPHY =========== */}
      <section className="section philo-section">
        <div className="container">
          <div className="philo-box">
            <div className="philo-grid-bg" />
            <span className="label">Notre philosophie</span>
            <blockquote>
              <span className="quote-mark">"</span>
              Nous ne construisons pas un système qui <em>juge</em>.
              Nous construisons un système qui <em>observe</em>,
              qui <em>alerte</em>, et qui laisse l'humain décider.
              <span className="quote-mark">"</span>
            </blockquote>
            <div className="philo-sign mono">
              — THE PIXELBUILDERS TEAM / 2026
            </div>
          </div>
        </div>
      </section>

      {/* =========== UNI =========== */}
      <section className="section">
        <div className="container">
          <div className="uni-card">
            <div>
              <span className="label">Établissement</span>
              <h2 className="uni-title">
                École Supérieure Privée<br/>
                d'Ingénierie et de Technologie
              </h2>
              <p className="uni-desc">
                <span className="mono">ESPRIT</span> — Tunis, Tunisie.
                Formation d'ingénieurs en technologies de l'information,
                spécialisation en intelligence artificielle et systèmes embarqués.
              </p>
            </div>
            <div className="uni-stats">
              <div>
                <div className="us-num">05</div>
                <div className="us-lbl mono">étudiants</div>
              </div>
              <div>
                <div className="us-num">01</div>
                <div className="us-lbl mono">vision</div>
              </div>
              <div>
                <div className="us-num">∞</div>
                <div className="us-lbl mono">idées</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
