# Antigravity Premium Agency Starter

A production-grade **Next.js (App Router) + Tailwind CSS v4** starter repository pre-configured with **Google Antigravity rules, skills, and typography systems**.

Designed for agencies and development teams shipping high-end client websites. When anyone on your team opens this repo in Antigravity, the skills and rules activate **automatically with zero manual setup**.

---

## 🚀 How to Set Up on GitHub (One-Time Setup)

Follow these steps to make this your agency's reusable starter template:

### 1. Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Name the repository: `antigravity-agency-starter` (or `agency-nextjs-starter`).
3. Set visibility to **Public** or **Private**.
4. Leave *"Initialize with README"* **unchecked**.
5. Click **Create repository**.

### 2. Push this Code to Your GitHub Repository
Run these commands in your terminal from this folder:

```bash
cd /Users/jayanthbabusomineni/.gemini/antigravity/scratch/antigravity-agency-starter

# Initialize git
git init
git add .
git commit -m "feat: initial commit with Antigravity skills, rules, and Next.js starter"

# Rename branch to main
git branch -M main

# Link to your GitHub repo and push
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### 3. Enable "Template Repository" on GitHub
1. Open your repository on GitHub.
2. Click **Settings** (tab at the top).
3. Under the **General** section, check the box: **"Template repository"**.

🎉 **Done!** You now have an official GitHub Template for your agency.

---

## 👥 How You and Your Team Use This

### Step 1: Start a New Client Project (1 Click)
Whenever someone on your team starts a new client build:
1. Go to your `antigravity-agency-starter` repo on GitHub.
2. Click the green button: **"Use this template"** → **"Create a new repository"**.
3. Name it after your client (e.g., `client-acme-website`).
4. Clone it to your local machine:
   ```bash
   git clone https://github.com/<your-username>/client-acme-website.git
   cd client-acme-website
   npm install
   ```

### Step 2: Open in Antigravity
Open the cloned folder in Antigravity (Antigravity IDE or desktop app).

**That's it!** You don't need to configure settings, install skills, or explain rules. Antigravity automatically detects:
- `.agents/skills/taste`
- `.agents/skills/ui-ux-pro-max`
- `.agents/skills/impeccable-polish`
- `AGENTS.md` (Stack defaults, single-font rule, kickoff checkpoints)

---

## 📋 How It Works in Action

When you prompt Antigravity inside this repository:

### 1. Checkpoint 1 (Kickoff & Font Selection)
The agent will **always pause** before writing code to present the design token plan and ask you to choose between:
- **Option 1**: `Cabinet Grotesk` (800) + `Plus Jakarta Sans` *(Swiss Brutalism / Modernist Precision)*
- **Option 2**: `Italiana` (400) + `Plus Jakarta Sans` *(Tall High-Fashion / Continental Luxury)*
- **Option 3**: Custom selection from the library.

### 2. Checkpoint 2 (First Build Pass)
The agent builds components with:
- Strict single-font headlines.
- 100% vector SVG icons via `lucide-react` (zero emoji bullets).
- Spring-physics micro-interactions via `motion/react`.
- Complete 8-state interaction coverage (hover, focus, active, disabled, skeleton loading).

### 3. Checkpoint 3 (Impeccable Polish)
Before handoff, it audits:
- Responsive breakpoints (`375px`, `768px`, `1024px`, `1440px`).
- Real copy (zero lorem ipsum).
- WCAG AA accessibility & OS reduced-motion preferences.

---

## 📦 What's Inside This Starter

```text
├── .agents/
│   └── skills/
│       ├── taste/               # Aesthetics, bespoke typography & anti-AI clichés
│       ├── ui-ux-pro-max/       # Layout systems, 8-state elements & accessibility
│       └── impeccable-polish/   # Pre-handoff quality gate checklist
├── AGENTS.md                    # Git-tracked rules, stack defaults & checkpoints
├── src/
│   └── app/
│       ├── layout.tsx           # Pre-configured Google & Fontshare font loaders
│       ├── page.tsx             # Clean starter demo page
│       └── globals.css          # Tailwind CSS v4 & custom design tokens
├── package.json                 # Next.js 15, React 19, Tailwind v4, Lucide, Motion
└── tsconfig.json
```

---

## 💡 Example Prompts to Give Antigravity Inside This Repo

- *"Build the hero section and navigation for a boutique architectural practice."*
- *"Create an interactive pricing matrix comparing three enterprise plans."*
- *"Design a high-converting waitlist landing page for an AI developer tool."*
- *"Run the impeccable-polish checklist on our homepage before we send it to the client."*
