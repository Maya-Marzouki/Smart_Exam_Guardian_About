# Smart_Exam_Guardian_About
=======
# 🛡️ Smart Exam Guardian — Site Web Officiel

Site web officiel du projet **Smart Exam Guardian**, développé par l'équipe **PixelBuilders** à ESPRIT.

![Smart Exam Guardian](./public/logo.png)

## 🎯 À propos du projet

**Smart Exam Guardian** est un système de surveillance intelligente des examens combinant intelligence artificielle, vision par ordinateur, analyse audio et Internet des Objets pour assister — sans jamais remplacer — les surveillants humains.

## 🚀 Démarrage rapide

### Prérequis

- **Node.js** version 18 ou supérieure ([télécharger](https://nodejs.org))
- **npm** (inclus avec Node.js) ou **yarn**
- Un éditeur de code : **VS Code** ou **Antigravity**

### Installation

```bash
# 1. Cloner ou extraire le projet
cd smart-exam-guardian

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site sera automatiquement ouvert sur **http://localhost:5173**

### Build de production

```bash
# Générer la version optimisée pour production
npm run build

# Prévisualiser le build
npm run preview
```

Le dossier `dist/` contient le site compilé, prêt à être déployé.

## 📁 Structure du projet

```
smart-exam-guardian/
├── public/
│   ├── logo.png                      # Logo du projet
│   └── downloads/
│       └── Cahier_des_Specifications.docx
├── src/
│   ├── assets/
│   │   ├── logo.png                  # Logo utilisé dans le code
│   │   └── team/                     # Photos des membres
│   │       ├── ali.jpg
│   │       ├── maya.jpg
│   │       ├── najd.png
│   │       ├── salsabil.jpg
│   │       └── malek.jpg
│   ├── components/
│   │   ├── Navbar.jsx/.css
│   │   ├── Footer.jsx/.css
│   │   └── ScanlineOverlay.jsx/.css
│   ├── pages/
│   │   ├── Home.jsx/.css             # Page d'accueil
│   │   ├── Project.jsx/.css          # Détails du projet
│   │   ├── Team.jsx/.css              # L'équipe PixelBuilders
│   │   ├── Download.jsx/.css         # Téléchargement de l'app
│   │   └── Contact.jsx/.css          # Formulaire de contact
│   ├── styles/
│   │   └── global.css                # Design system complet
│   ├── App.jsx                       # Routing principal
│   └── main.jsx                      # Point d'entrée
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Design System

Le site adopte une esthétique **cyber-surveillance / tactique** inspirée du logo :

- **Palette** : Fonds sombres (crimson `#b83a3a`, noir tactique)
- **Typographie** : Syne (display), JetBrains Mono (code), Inter (body)
- **Effets** : Scanlines CRT, grilles tactiques, glow crimson, animations blink/scan
- **Composants** : Brackets, data-points, télémétrie temps-réel

## ⚙️ Configuration à personnaliser

### 1. Lien de téléchargement de l'application

Dans `src/pages/Download.jsx`, remplace :

```javascript
const APP_DOWNLOAD_URL = 'https://drive.google.com/YOUR_SHARE_LINK_HERE'
```

Par ton vrai lien (Google Drive, GitHub Releases, Mega, etc.).

### 2. Réseaux sociaux

Dans `src/pages/Contact.jsx`, vérifie et ajuste les liens Instagram et Facebook.

### 3. Liens des membres de l'équipe

Dans `src/pages/Team.jsx`, ajoute les vrais liens GitHub/LinkedIn/email de chaque membre.

## 📦 Technologies

- **React 18** — Framework UI
- **Vite** — Build tool rapide
- **React Router** — Navigation SPA
- **Framer Motion** — Animations
- **Lucide React** — Icônes

## 👥 Équipe PixelBuilders

| Membre | Rôle |
|---|---|
| Ali Belkadhi | Full-Stack Developer |
| Maya Marzouki | UI/UX Designer |
| Najd Nagati | AI Engineer |
| Salsabil Hafsi | Mobile Developer |
| Mouhamed Malek Mouelhi | Tech Lead |

**Université** : ESPRIT — Tunis, Tunisie
**GitHub** : [github.com/Malekmouelh](https://github.com/Malekmouelh)
**Contact** : contact@smartexamguarden.com · teampixelbuilders@gmail.com

## 📄 Licence

Ce projet est distribué sous licence MIT à des fins éducatives et de démonstration académique.

---

<p align="center">
  <strong>🛡️ SMART EXAM GUARDIAN — 2026</strong><br/>
  <em>Surveillance Active · Assisted by AI</em>
</p>
(Smart_Exam_Guardian_About)
