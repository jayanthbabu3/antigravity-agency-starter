import { Terminal, Shield, ArrowUpRight, Cpu, Layers, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090A] text-[#F2F4F7] px-6 py-12 md:px-16 md:py-20 flex flex-col justify-between max-w-7xl mx-auto">
      {/* Top Header */}
      <header className="flex justify-between items-center pb-8 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-[#00E5FF] rotate-45" />
          <span className="font-extrabold tracking-tight uppercase text-lg">
            Agency Starter
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-[#858994] hidden md:inline">
            ANTIGRAVITY // REPO-SCOPED RULES ACTIVE
          </span>
          <a
            href="#quickstart"
            className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-white text-black font-bold hover:opacity-90 transition-opacity"
          >
            How To Use
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00E5FF] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
          Antigravity Premium Web Engine
        </div>

        {/* Strict Single Cohesive Font Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter max-w-4xl mb-8 leading-[0.95]">
          Built for teams shipping premium client web.
        </h1>

        <p className="text-lg md:text-xl text-[#858994] max-w-2xl leading-relaxed mb-12">
          This repository is pre-configured with Antigravity skills, strict
          single-font typography rules, and modern stack defaults. Clone it,
          open it with your team, and ship without generic AI templates.
        </p>

        {/* 3 Foundation Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10" id="quickstart">
          <div className="p-6 bg-[#101216] border border-white/10">
            <div className="flex items-center gap-3 mb-4 text-[#00E5FF]">
              <Layers className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider">01 // Skills Pre-Installed</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Taste & UI/UX Pro Max</h2>
            <p className="text-sm text-[#858994]">
              Located in <code className="text-white text-xs">.agents/skills/</code>. Antigravity loads them automatically when anyone on your team prompts for UI or design decisions.
            </p>
          </div>

          <div className="p-6 bg-[#101216] border border-white/10">
            <div className="flex items-center gap-3 mb-4 text-[#00E5FF]">
              <Terminal className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider">02 // Repo Rules Active</span>
            </div>
            <h2 className="text-xl font-bold mb-2">AGENTS.md Enforced</h2>
            <p className="text-sm text-[#858994]">
              Enforces single-font headlines, Next.js + Tailwind v4, Lucide icons (no emojis), and mandatory font selection at Checkpoint 1.
            </p>
          </div>

          <div className="p-6 bg-[#101216] border border-white/10">
            <div className="flex items-center gap-3 mb-4 text-[#00E5FF]">
              <Shield className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider">03 // Zero Teammate Setup</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Git-Tracked Consistency</h2>
            <p className="text-sm text-[#858994]">
              Anyone who clones this repo gets the exact same quality bar without having to configure personal settings on their machine.
            </p>
          </div>
        </div>
      </section>

      {/* Telemetry Footer */}
      <footer className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-xs text-[#525660]">
        <div>ANTIGRAVITY STARTER REPO · NEXT.JS 15 · TAILWIND V4</div>
        <div className="flex items-center gap-6">
          <span>CABINET GROTESK + PLUS JAKARTA</span>
          <span>100% VECTOR SVGS</span>
        </div>
      </footer>
    </main>
  );
}
