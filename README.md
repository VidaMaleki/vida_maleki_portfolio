## 🚀 Vida's Developer Portfolio – Setup Guide (Next.js + Tailwind CSS + TypeScript)

This project is a custom developer portfolio built with:
- **Next.js** – React framework using the App Router structure
- **Tailwind CSS** – Utility-first CSS framework for styling
- **TypeScript** – Typed superset of JavaScript for better DX and safety

---

### 📦 Getting Started

#### 1. **Clone the Repository**
```bash
git clone https://github.com/VidaMaleki/vida_maleki_portfolio.git
cd vida_maleki_portfolio
```

#### 2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

#### 3. **Run the Development Server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

### 📁 Project Structure
```
vida_maleki_portfolio/
├── public/
│   ├── images/               # Project screenshots, logos, etc.
│   └── favicon.ico           # Website icon
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Global layout: fonts, <Navbar />, <Footer />
│   │   ├── page.tsx          # Homepage with intro & call-to-actions
│   │   ├── about/
│   │   │   └── page.tsx      # About Me page
│   │   ├── projects/
│   │   │   └── page.tsx      # Portfolio Projects page
│   │   └── contact/
│   │       └── page.tsx      # Contact form or email/social links
│   ├── components/
│   │   ├── Navbar.tsx        # Top nav with links
│   │   ├── Footer.tsx        # Footer with social/contact links
│   │   └── ProjectCard.tsx   # Reusable card component for projects
│   ├── data/
│   │   └── projects.ts       # Array of project data (title, description, links, image, tech stack)
│   ├── styles/
│   │   └── globals.css       # Tailwind + global styles
│   └── utils/ (optional)     # For helper functions (like date formatters, slug builders, etc.)
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

### 🛠️ Tech Stack
- **React** with **Next.js (App Router)** for modern file-based routing
- **TypeScript** for type-safe code
- **Tailwind CSS** for styling and responsiveness
- **Framer Motion** (optional) for subtle animations
- **Vercel** for deployment (recommended)

---

### 🌍 Deployment (Vercel)
1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com/), sign in with GitHub, and import your repository.
3. Set project settings if needed → click **Deploy**.

---

### ✨ Customization Tips
- Change the color theme in `tailwind.config.js`
- Add your projects and info in `src/data/projects.ts`
- Replace the default avatar/logo in `public/images/`

