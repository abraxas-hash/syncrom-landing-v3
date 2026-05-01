"use client";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/zippystarter/container";
import { HudCard } from "@/components/hud-card";
import { WorkflowPreview } from "@/components/workflow-preview";
import { ROICalculator } from "@/components/roi-calculator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail, MessageCircle, Database, Bell, Calendar, Bot, Zap, Cloud, Workflow, Link2, ChevronRight, Send, FolderCode } from "lucide-react";
import { PortfolioSection } from "@/components/portfolio-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">

      {/* ─── NAVBAR ───────────────────────────────────────────────── */}
      <Container
        component="header"
        wrapperClassName="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
        className="mx-auto max-w-7xl flex items-center justify-between h-16"
      >
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/syncrom_logo.png" alt="Syncrom AI" className="w-8 h-8 rounded-lg object-cover" />
          <span className="font-display text-xl tracking-tighter uppercase">
            SYNCROM<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          {[
            { href: "#productos", label: "n8n" },
            { href: "#servicios", label: "Servicios" },
            { href: "#portafolio", label: "Portafolio" },
            { href: "#proceso", label: "Proceso" },
            { href: "#faq", label: "FAQ" },
            { href: "#contacto", label: "Contacto" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-border/50 pr-4">
            <a
              href="https://web.facebook.com/profile.php?id=61579409871976"
              target="_blank" rel="noreferrer"
              aria-label="Facebook"
              className="group flex items-center justify-center text-muted-foreground hover:text-[#1877F2] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/syncrom_automation/"
              target="_blank" rel="noreferrer"
              aria-label="Instagram"
              className="group flex items-center justify-center text-muted-foreground hover:text-[#E1306C] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
          <a href="mailto:syncromai2@gmail.com" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors pl-1">
            <Mail className="size-3" /> syncromai2@gmail.com
          </a>
          <Link href="#contacto" className={cn(buttonVariants({ size: "sm" }), "font-mono text-xs uppercase")}>
            Consulta Gratis
          </Link>
        </div>

        <Link href="#contacto" className={cn(buttonVariants({ size: "sm" }), "flex md:hidden text-xs")}>
          Consulta
        </Link>
      </Container>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <Container
        wrapperClassName="relative min-h-screen flex items-center pt-16 overflow-hidden"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')", opacity: 0.12 }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* 2-column grid */}
        <div className="relative z-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* ── Left: copy ───────────────────────────── */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              AUTOMATIZACIÓN ACTIVADA // CONSULTA GRATUITA DISPONIBLE
            </div>

            <h1 className="text-5xl md:text-7xl font-display tracking-tighter leading-[0.9]">
              AUTOMATIZA<br />TU NEGOCIO<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                CON IA + N8N
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
              Libera <span className="text-white font-semibold">20+ horas semanales</span> sin contratar más personal. Convierte tu negocio en una máquina que trabaja sola.
            </p>

            <div className="h-1 w-24 bg-primary" />

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="#contacto" className={cn("uppercase", buttonVariants({ size: "lg" }))}>
                Agenda Consulta Gratis <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#productos"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "uppercase font-mono text-xs border-primary/50 hover:bg-primary/10 hover:text-primary hover:border-primary")}
              >
                ¿Qué es n8n?
              </Link>
            </div>


          </div>

          {/* ── Right: n8n Agent visualization ───────── */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[480px] h-[480px]">

              {/* HUD corner brackets */}
              <span className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/50" />
              <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
              <span className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/50" />
              <span className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/50" />

              {/* Status bar */}
              <div className="absolute top-6 left-10 right-10 flex justify-between items-center">
                <span className="font-mono text-[9px] text-primary tracking-widest">AGENT_ONLINE</span>
                <span className="font-mono text-[9px] text-slate-500 tracking-widest">N8N_RUNTIME v1.0</span>
              </div>

              {/* SVG graph */}
              <svg
                viewBox="0 0 480 480"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Glow filters */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <filter id="glow-strong">
                    <feGaussianBlur stdDeviation="6" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                {/* Center of orbits moved to cy=210 instead of 240 to leave bottom space */}
                {/* Outer orbit ring */}
                <circle cx="240" cy="210" r="145" fill="none" stroke="#10b981" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 8"/>

                {/* Inner orbit ring */}
                <circle cx="240" cy="210" r="90" fill="none" stroke="#10b981" strokeOpacity="0.12" strokeWidth="1"/>

                {/* Connection lines — center to each satellite (Radius ~145) */}
                {[
                  [240, 65],   // top
                  [365, 137],  // top-right
                  [365, 283],  // bottom-right
                  [240, 355],  // bottom (safely away from overlay)
                  [115, 283],  // bottom-left
                  [115, 137],  // top-left
                ].map(([x, y], i) => (
                  <g key={i}>
                    <line x1="240" y1="210" x2={x} y2={y}
                      stroke="#10b981" strokeOpacity="0.2" strokeWidth="1"/>
                    {/* Flowing dot */}
                    <circle r="3" fill="#10b981" opacity="0.9" filter="url(#glow)">
                      <animateMotion
                        dur={`${1.8 + i * 0.4}s`}
                        repeatCount="indefinite"
                        path={`M240,210 L${x},${y} L240,210`}
                      />
                    </circle>
                  </g>
                ))}

                {/* ── Center node: n8n Agent ──────────── */}
                <circle cx="240" cy="210" r="48" fill="#0A1124" stroke="#10b981" strokeWidth="1.5" filter="url(#glow)"/>
                <circle cx="240" cy="210" r="38" fill="#060e1c" stroke="#10b981" strokeOpacity="0.3" strokeWidth="1"/>
                {/* Pulsing ring */}
                <circle cx="240" cy="210" r="48" fill="none" stroke="#10b981" strokeWidth="2" strokeOpacity="0.6">
                  <animate attributeName="r" values="48;58;48" dur="2.5s" repeatCount="indefinite"/>
                  <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                {/* n8n text */}
                <text x="240" y="205" textAnchor="middle" fill="#10b981" fontSize="13" fontFamily="monospace" fontWeight="bold">n8n</text>
                <text x="240" y="221" textAnchor="middle" fill="#10b981" fontSize="8" fontFamily="monospace" opacity="0.7">AGENT</text>

                {/* ── Satellite nodes ─────────────────── */}
                <g filter="url(#glow)">
                  <circle cx="240" cy="65" r="26" fill="#0A1124" stroke="#25D366" strokeWidth="1.5"/>
                  <MessageCircle x={230} y={51} size={20} color="#25D366" strokeWidth={1.5} />
                  <text x="240" y="83" textAnchor="middle" fill="#25D366" fontSize="6.5" fontFamily="monospace">WA</text>
                </g>
                <g filter="url(#glow)">
                  <circle cx="365" cy="137" r="26" fill="#0A1124" stroke="#fde047" strokeWidth="1.5"/>
                  <Mail x={355} y={123} size={20} color="#fde047" strokeWidth={1.5} />
                  <text x="365" y="155" textAnchor="middle" fill="#fde047" fontSize="6.5" fontFamily="monospace">EMAIL</text>
                </g>
                <g filter="url(#glow)">
                  <circle cx="365" cy="283" r="26" fill="#0A1124" stroke="#38bdf8" strokeWidth="1.5"/>
                  <Database x={355} y={269} size={20} color="#38bdf8" strokeWidth={1.5} />
                  <text x="365" y="301" textAnchor="middle" fill="#38bdf8" fontSize="6.5" fontFamily="monospace">DATA</text>
                </g>
                <g filter="url(#glow)">
                  <circle cx="240" cy="355" r="26" fill="#0A1124" stroke="#e879f9" strokeWidth="1.5"/>
                  <Bell x={230} y={341} size={20} color="#e879f9" strokeWidth={1.5} />
                  <text x="240" y="373" textAnchor="middle" fill="#e879f9" fontSize="6.5" fontFamily="monospace">NOTIF</text>
                </g>
                <g filter="url(#glow)">
                  <circle cx="115" cy="283" r="26" fill="#0A1124" stroke="#fb923c" strokeWidth="1.5"/>
                  <Calendar x={105} y={269} size={20} color="#fb923c" strokeWidth={1.5} />
                  <text x="115" y="301" textAnchor="middle" fill="#fb923c" fontSize="6.5" fontFamily="monospace">CRM</text>
                </g>
                <g filter="url(#glow)">
                  <circle cx="115" cy="137" r="26" fill="#0A1124" stroke="#a78bfa" strokeWidth="1.5"/>
                  <Bot x={105} y={123} size={20} color="#a78bfa" strokeWidth={1.5} />
                  <text x="115" y="155" textAnchor="middle" fill="#a78bfa" fontSize="6.5" fontFamily="monospace">AI</text>
                </g>

                {/* Processing arcs around center */}
                <circle cx="240" cy="210" r="66" fill="none" stroke="#10b981" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="30 120">
                  <animateTransform attributeName="transform" type="rotate" from="0 240 210" to="360 240 210" dur="8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="240" cy="210" r="66" fill="none" stroke="#fde047" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="20 200">
                  <animateTransform attributeName="transform" type="rotate" from="360 240 210" to="0 240 210" dur="12s" repeatCount="indefinite"/>
                </circle>
              </svg>


            </div>
          </div>

        </div>

        {/* ── Bottom: Full-width Stats ───────────────── */}
        <div className="relative z-10 w-full max-w-5xl mx-auto pb-10 mt-12 md:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-border/30">
            {[
              { value: "100+", label: "Automatizaciones\nentregadas", color: "text-primary" },
              { value: "50+",  label: "Clientes\nsatisfechos", color: "text-primary" },
              { value: "20h+", label: "Ahorradas/semana", color: "text-primary" },
              { value: "300%", label: "ROI promedio", color: "text-primary" },
            ].map((stat) => (
              <div key={stat.label} className="group text-left px-4">
                <div className={`text-3xl md:text-5xl font-display ${stat.color} mb-2 group-hover:-translate-y-1 transition-transform inline-block`}>{stat.value}</div>
                <div className="text-xs text-slate-400 font-mono leading-tight whitespace-pre-line">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/908776199" target="_blank" rel="noreferrer" title="Escríbenos por WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="white">
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.476-2.003A15.934 15.934 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.788-1.862l-.487-.289-5.03 1.188 1.21-4.908-.319-.503A13.266 13.266 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.874c-.398-.199-2.354-1.162-2.72-1.294-.365-.133-.63-.199-.896.199-.265.398-1.029 1.294-1.261 1.56-.232.265-.465.298-.863.1-.398-.199-1.681-.62-3.203-1.977-1.184-1.055-1.983-2.358-2.216-2.756-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.896-2.162-1.228-2.957-.323-.775-.65-.67-.896-.683l-.763-.013c-.265 0-.696.1-1.061.497-.365.398-1.394 1.361-1.394 3.32 0 1.959 1.427 3.851 1.626 4.117.199.265 2.808 4.286 6.802 6.013.951.41 1.693.655 2.272.838.954.303 1.823.26 2.509.158.765-.114 2.354-.962 2.686-1.891.332-.929.332-1.726.232-1.891-.1-.166-.365-.265-.763-.464z" />
        </svg>
      </a>

      {/* ─── SECCIÓN 2: ¿QUÉ ES N8N? ─────────────────────────────── */}
      <Container
        id="productos"
        component="section"
        wrapperClassName="py-20 md:py-28 border-t border-border bg-card/30 backdrop-blur-md"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-[380px]">
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full scale-110 -z-10" />
              <img src="/images/n8n_swiss_knife.png" alt="n8n - La navaja suiza de la automatización" className="w-full h-auto rounded-2xl opacity-95 drop-shadow-2xl" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display tracking-tighter mb-2">¿Qué es n8n?</h2>
              <p className="text-slate-300 text-lg font-mono">Su navaja suiza para automatizaciones por pasos</p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <p className="text-slate-300">
                Piense en <span className="font-bold text-white">n8n</span> como un potente conjunto de herramientas.
                Utiliza un editor visual donde puede enlazar <span className="font-bold text-primary">nodos</span> para
                crear un <span className="font-bold text-white">flujo de trabajo</span>.
              </p>
              <p className="text-slate-300">
                n8n es una <span className="font-bold text-white">herramienta de código abierto</span> diseñada para
                brindar flexibilidad. Puede escribir código, conectar bases de datos o integrar agentes de IA.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                "Conecte todo con todo: más de 1000 integraciones.",
                "Control total: aloje sus propios datos.",
                "Escale sin límites: automatice procesos complejos.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Integrations marquee */}
        <div className="border-t border-border pt-10">
          <h3 className="text-center font-display text-lg mb-6 tracking-tighter">
            Integraciones nativas con tus herramientas
          </h3>
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="py-4 flex items-center gap-16 animate-marquee whitespace-nowrap">
              {[
                { icon: Workflow, name: "n8n", hoverColor: "group-hover:text-[#10b981]" },
                { icon: Zap, name: "Make", hoverColor: "group-hover:text-[#a855f7]" },
                { icon: Bot, name: "OpenAI", hoverColor: "group-hover:text-white" },
                { icon: Link2, name: "HubSpot", hoverColor: "group-hover:text-[#f97316]" },
                { icon: Cloud, name: "Salesforce", hoverColor: "group-hover:text-[#38bdf8]" },
                { icon: MessageCircle, name: "WhatsApp Business", hoverColor: "group-hover:text-[#25D366]" },
                { icon: Mail, name: "Google", hoverColor: "group-hover:text-[#3b82f6]" },
                { icon: Workflow, name: "n8n", hoverColor: "group-hover:text-[#10b981]" },
                { icon: Zap, name: "Make", hoverColor: "group-hover:text-[#a855f7]" },
                { icon: Bot, name: "OpenAI", hoverColor: "group-hover:text-white" },
                { icon: Link2, name: "HubSpot", hoverColor: "group-hover:text-[#f97316]" },
                { icon: Cloud, name: "Salesforce", hoverColor: "group-hover:text-[#38bdf8]" },
                { icon: MessageCircle, name: "WhatsApp Business", hoverColor: "group-hover:text-[#25D366]" },
                { icon: Mail, name: "Google", hoverColor: "group-hover:text-[#3b82f6]" },
              ].map((item, i) => (
                <span key={i} className="group text-xl font-display tracking-tight text-slate-500 hover:text-slate-300 transition-colors cursor-default flex items-center gap-3 shrink-0">
                  <item.icon className={`size-6 transition-colors ${item.hoverColor}`} />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* ─── SECCIÓN 3: PAIN POINTS ───────────────────────────────── */}
      {/* ─── SECCIÓN 3: PAIN POINTS — HUD CARDS ───────────────────── */}
      <Container
        component="section"
        wrapperClassName="border-t border-border bg-[#04090f]"
        className="mx-auto max-w-7xl"
      >
        {/* Section header */}
        <div className="flex items-center justify-between py-5 border-b border-border">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            PROBLEMAS_DETECTADOS
          </h2>
          <span className="font-mono text-xs text-muted-foreground">06_ISSUES</span>
        </div>

        {/* Pull quote */}
        <div className="py-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-display tracking-tight md:whitespace-nowrap px-4 md:px-0">
            Estos problemas te están costando{" "}
            <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
              tiempo y dinero
            </span>{" "}
            cada día
          </p>
        </div>

        {/* HUD card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-8">
          <HudCard
            index="01"
            status="SYS.STATUS: CRÍTICO"
            uptime="ÁREA: VENTAS"
            title="Perdiendo Ventas por No Responder Rápido"
            desc="Tus clientes te escriben por WhatsApp y cuando respondes, ya se fueron con la competencia."
            bars={[
              { label: "RESP_TIME_LOSS", value: 87 },
              { label: "REVENUE_IMPACT", value: 73 },
            ]}
            tag="VENTAS"
            solution="Bot de WhatsApp con IA — responde al instante 24/7"
            solutionDesc="Implementamos un agente de IA que responde mensajes, califica leads y agenda citas automáticamente. Tu equipo solo cierra las ventas."
            solutionBadge="CHATBOT_AI"
          />
          <HudCard
            index="02"
            status="SYS.STATUS: ALERTA"
            uptime="ÁREA: TIEMPO"
            title="Atrapado en Tareas Repetitivas"
            desc="Pasas horas haciendo lo mismo: agendar citas, enviar cotizaciones, recordatorios."
            bars={[
              { label: "TIEMPO_PERDIDO", value: 60 },
              { label: "PRODUCTIVIDAD", value: 35 },
            ]}
            tag="TIEMPO"
            solution="Workflows n8n que ejecutan tus procesos en segundos"
            solutionDesc="Diseñamos flujos automáticos que agenden, notifiquen y hagan seguimiento por ti. Libera 20h semanales desde la primera semana."
            solutionBadge="WORKFLOW_AUTO"
          />
          <HudCard
            index="03"
            status="SYS.STATUS: ALERTA"
            uptime="ÁREA: DATOS"
            title="Sin Control de Tus Datos"
            desc="Información dispersa en WhatsApp, Excel, papeles. Tomas decisiones a ciegas."
            bars={[
              { label: "DATA_DISPERSAL", value: 91 },
              { label: "DECISION_ACCURACY", value: 28 },
            ]}
            tag="DATOS"
            solution="Dashboard unificado en tiempo real con todos tus datos"
            solutionDesc="Conectamos WhatsApp, CRM, formularios y ventas en un solo panel. Siempre sabes qué está pasando en tu negocio."
            solutionBadge="DATA_SYNC"
          />
          <HudCard
            index="04"
            status="SYS.STATUS: CRÍTICO"
            uptime="ÁREA: CARGA"
            title="Trabajando Más de lo que Deberías"
            desc="Tu negocio depende 100% de ti. Si no trabajas, no hay ventas."
            bars={[
              { label: "DEPENDENCIA", value: 100 },
              { label: "AUTONOMÍA", value: 12 },
            ]}
            tag="CARGA"
            solution="Automatización que opera mientras tú descansas"
            solutionDesc="Tu negocio funcionará 24/7 sin que estés presente. Generación de leads, atención y facturación en piloto automático."
            solutionBadge="AUTONOMY_AI"
          />
          <HudCard
            index="05"
            status="SYS.STATUS: WARNING"
            uptime="ÁREA: CALIDAD"
            title="Errores Humanos Costosos"
            desc="Citas olvidadas, seguimientos sin hacer, clientes molestos."
            bars={[
              { label: "ERROR_RATE", value: 68 },
              { label: "RETENTION", value: 44 },
            ]}
            tag="CALIDAD"
            solution="Cero errores con procesos 100% automatizados"
            solutionDesc="Las máquinas no olvidan. Recordatorios, seguimientos y confirmaciones se envían solos en el momento preciso, sin fallo."
            solutionBadge="ZERO_ERRORS"
          />
          <HudCard
            index="06"
            status="SYS.STATUS: ALERTA"
            uptime="ÁREA: COSTOS"
            title="No Puedes Contratar Más Personal"
            desc="Sueldos, prestaciones, capacitación. Necesitas crecer sin aumentar costos fijos."
            bars={[
              { label: "FIXED_COSTS", value: 82 },
              { label: "SCALE_LIMIT", value: 55 },
            ]}
            tag="COSTOS"
            solution="Escala x10 sin contratar — la IA es tu empleado digital"
            solutionDesc="Un agente de IA hace el trabajo de 3 personas: atiende clientes, procesa pedidos y genera reportes, por una fracción del costo."
            solutionBadge="COST_REDUCE"
          />
        </div>

        {/* Footer CTA */}
        <div className="border-t border-border py-5 flex items-center justify-between flex-wrap gap-3">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">✓</span> Syncrom automatiza la solución a cada uno de estos problemas.
          </p>
          <a
            href="#contacto"
            className="font-mono text-xs text-primary border border-primary/40 px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all tracking-widest uppercase"
          >
            Consulta_Gratis →
          </a>
        </div>
      </Container>

      {/* ─── SECCIÓN 4: AUTOMATIZACIONES / SERVICIOS ──────────────── */}
      <Container
        id="servicios"
        component="section"
        wrapperClassName="border-t border-border"
        className="mx-auto max-w-7xl"
      >
        <div className="flex items-center justify-between py-5 border-b border-border">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            AUTOMATIZACIONES_DISPONIBLES
          </h2>
          <span className="font-mono text-xs text-muted-foreground">10_WORKFLOWS</span>
        </div>

        <div className="py-8 border-b border-border">
          <p className="text-2xl md:text-4xl font-display tracking-tighter max-w-3xl">
            ¿Qué puedes automatizar con <span className="text-primary">n8n</span>?
          </p>
          <p className="text-muted-foreground font-mono text-sm mt-2">Automatizaciones reales para negocios reales</p>
        </div>

        {/* Grid: workflow list + preview */}
        <WorkflowPreview />
      </Container>

      {/* ─── SECCIÓN: PORTAFOLIO / LABORATORIO ───────────────────── */}
      <PortfolioSection />

      {/* ─── SECCIÓN 5: CÓMO FUNCIONA ─────────────────────────────── */}
      <Container
        id="proceso"
        component="section"
        wrapperClassName="border-t border-border"
        className="mx-auto max-w-7xl"
      >
        <div className="flex items-center justify-between py-5 border-b border-border">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            PROCESO_DE_IMPLEMENTACIÓN
          </h2>
          <span className="font-mono text-xs text-muted-foreground">04_PASOS</span>
        </div>

        <div className="py-8 border-b border-border">
          <p className="text-2xl md:text-4xl font-display tracking-tighter">Cómo Funciona</p>
          <p className="text-muted-foreground font-mono text-sm mt-2">De consulta gratuita a automatización funcionando en 4 pasos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
          {[
            { n: "01", title: "Consulta Gratis",  desc: "30 minutos de análisis personalizado. Identificamos qué automatizar para mayor impacto en tu negocio." },
            { n: "02", title: "Plan de Acción",   desc: "Te entregamos un plan claro con costos, tiempos y resultados esperados. Sin letra chica." },
            { n: "03", title: "Implementación",   desc: "Configuramos y probamos todo. No necesitas saber de tecnología, nosotros nos encargamos." },
            { n: "04", title: "Soporte Continuo", desc: "Tu negocio automatizado funcionando 24/7. Soporte cuando lo necesites." },
          ].map((step) => (
            <div key={step.n} className="group p-6 hover:bg-primary/[0.03] transition-colors">
              <div className="font-mono text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors mb-4 tabular-nums">
                {step.n}
              </div>
              <h3 className="font-display text-lg tracking-tight mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="py-5 flex justify-end">
          <a href="#contacto" className="font-mono text-xs text-primary border border-primary/40 px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest">
            Empezar_Ahora →
          </a>
        </div>
      </Container>

      {/* ─── SECCIÓN 6: FAQ ───────────────────────────────────────── */}
      <Container
        id="faq"
        component="section"
        wrapperClassName="border-t border-border"
        className="mx-auto max-w-7xl"
      >
        <div className="flex items-center justify-between py-5 border-b border-border">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            PREGUNTAS_FRECUENTES
          </h2>
          <span className="font-mono text-xs text-muted-foreground">06_FAQ</span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-24">
          {/* Column 1 */}
          <div className="divide-y divide-border">
            {[
              { q: "¿Cuánto cuesta automatizar mi negocio?",    a: "Ofrecemos soluciones desde $300 para automatizaciones simples hasta $800/mes para proyectos completos y personalizados. Te brindamos una consulta gratuita para entregarte un presupuesto a medida." },
              { q: "¿Cuánto tiempo toma implementar?",           a: "Las automatizaciones simples suelen estar listas en 1-2 semanas. Para proyectos más robustos, el tiempo es de 3-4 semanas. Sin embargo, notarás resultados tangibles desde la primera semana." },
              { q: "¿Necesito saber de tecnología?",             a: "No es necesario. Nosotros nos encargamos de todo el proceso técnico: desde la instalación y configuración hasta la capacitación de tu equipo." },
            ].map((item, i) => (
              <details key={i} className="group">
                <summary data-cursor-glow="false" className="flex items-center justify-between py-5 cursor-pointer list-none hover:bg-primary/[0.03] px-1 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-muted-foreground/40 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-display tracking-tight text-sm md:text-base text-accent group-open:text-primary transition-colors pr-4">
                      {item.q}
                    </h3>
                  </div>
                  <span className="font-mono text-primary flex-shrink-0 text-lg leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="pb-5 px-1 pl-10 pr-4">
                  <p className="text-sm text-muted-foreground leading-relaxed border-l border-primary/30 pl-4">{item.a}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Column 2 */}
          <div className="divide-y divide-border">
            {[
              { q: "¿Qué herramientas usan?",                    a: "Somos expertos en n8n, Make, Zapier, Claude AI, ChatGPT, WhatsApp, diversos CRMs y más. Seleccionamos la mejor tecnología según las necesidades de tu flujo de trabajo." },
              { q: "¿Ofrecen garantía?",                         a: "Sí. Ofrecemos una garantía de satisfacción de 30 días. Si no ves los resultados acordados en tu operación, te devolvemos tu dinero." },
              { q: "¿Trabajan con mi tipo de negocio?",          a: "Por supuesto. Tenemos experiencia trabajando con clínicas, spas, agencias, e-commerce, firmas legales y muchos otros sectores que buscan optimizar su tiempo." },
            ].map((item, i) => (
              <details key={i} className="group">
                <summary data-cursor-glow="false" className="flex items-center justify-between py-5 cursor-pointer list-none hover:bg-primary/[0.03] px-1 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-muted-foreground/40 tabular-nums">{String(i + 4).padStart(2, "0")}</span>
                    <h3 className="font-display tracking-tight text-sm md:text-base text-accent group-open:text-primary transition-colors pr-4">
                      {item.q}
                    </h3>
                  </div>
                  <span className="font-mono text-primary flex-shrink-0 text-lg leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="pb-5 px-1 pl-10 pr-4">
                  <p className="text-sm text-muted-foreground leading-relaxed border-l border-primary/30 pl-4">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>

      {/* ─── SECCIÓN 7: STATS ─────────────────────────────────────── */}
      <Container
        component="section"
        wrapperClassName="border-t border-border bg-card/20"
        className="mx-auto max-w-7xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border border-b border-border">
          {[
            { value: "100+",  label: "Automatizaciones\nentregadas", color: "text-primary" },
            { value: "50+",   label: "Clientes\nsatisfechos",        color: "text-primary" },
            { value: "20h+",  label: "Horas ahorradas\npor semana",  color: "text-accent"  },
            { value: "300%",  label: "ROI promedio\nprimer año",     color: "text-accent"  },
          ].map((s) => (
            <div key={s.label} className="group p-8 text-center hover:bg-primary/[0.03] transition-colors">
              <div className={`text-4xl md:text-5xl font-display ${s.color} mb-2 group-hover:scale-105 transition-transform inline-block`}>
                {s.value}
              </div>
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase whitespace-pre-line">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* ─── SECCIÓN 8: TESTIMONIALES ─────────────────────────────── */}
      <Container
        component="section"
        wrapperClassName="border-t border-border"
        className="mx-auto max-w-7xl"
      >
        <div className="flex items-center justify-between py-5 border-b border-border">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            TRANSMISIONES_DE_CLIENTES
          </h2>
          <span className="font-mono text-xs text-muted-foreground">03_REVIEWS</span>
        </div>

        <div className="py-6 border-b border-border">
          <p className="text-2xl md:text-3xl font-display tracking-tighter">Lo que dicen nuestros clientes</p>
          <p className="font-mono text-xs text-muted-foreground mt-1">Resultados reales de negocios reales</p>
        </div>

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
          {[
            { initial: "M", name: "María López",   role: "Dueña · Clínica Estética Lima",  stars: 5, text: "Antes perdíamos 3 horas al día respondiendo WhatsApps. Ahora el bot lo hace solo y nuestro equipo se enfoca en cerrar ventas. En 2 semanas ya recuperamos la inversión." },
            { initial: "C", name: "Carlos Mendoza", role: "CEO · Tienda Online Perú",       stars: 5, text: "Sincronizamos nuestro e-commerce con el inventario y las notificaciones de pago. Lo que antes tomaba horas de trabajo manual ahora sucede en segundos. Increíble." },
            { initial: "A", name: "Andrea Ríos",   role: "Gerente · Centro Médico Synergy", stars: 5, text: "El agente de IA agenda nuestras citas 24/7 y manda recordatorios por WhatsApp automáticamente. Bajamos las cancelaciones en un 40% el primer mes." },
          ].map((t) => (
            <div key={t.name} className="group p-6 flex flex-col gap-4 hover:bg-primary/[0.03] transition-colors">
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-accent text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-display text-primary text-sm">
                  {t.initial}
                </div>
                <div>
                  <p className="text-xs font-semibold">{t.name}</p>
                  <p className="font-mono text-[10px] text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* ─── SECCIÓN 9: CONTACTO + CALCULADORA ───────────────────── */}
      <Container
        id="contacto"
        component="section"
        wrapperClassName="border-t border-border"
        className="mx-auto max-w-7xl"
      >
        <div className="flex items-center justify-between py-5 border-b border-border">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            INITIATE_CONTACT
          </h2>
          <span className="font-mono text-xs text-muted-foreground/60">30min · 100% GRATIS</span>
        </div>

        <div className="py-8 border-b border-border">
          <p className="text-2xl md:text-4xl font-display tracking-tighter">
            Agenda Tu <span className="text-primary">Consulta Gratuita</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-2">30 minutos que pueden transformar tu negocio</p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 md:gap-8 py-8 border-b border-border">
          {/* Left: Form */}
          <div className="border border-border/50 p-6 md:p-8 mb-6 md:mb-0">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("¡Mensaje enviado! Te contactaremos pronto.");
              }}
            >
              <div>
                <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-1">
                  Nombre Completo *
                </label>
                <input
                  name="nombre"
                  type="text"
                  required
                  placeholder="Ej: Juan Pérez"
                  className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-1">WhatsApp *</label>
                  <input name="whatsapp" type="tel" required placeholder="5512345678"
                    className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors font-mono" />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-1">Email *</label>
                  <input name="email" type="email" required placeholder="juan@empresa.com"
                    className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors font-mono" />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-1">Tipo de Negocio *</label>
                <select name="tipo_negocio" required
                  className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors font-mono appearance-none cursor-pointer">
                  <option value="" disabled>Selecciona una opción...</option>
                  <option value="clinica-spa">Clínica / Spa</option>
                  <option value="e-commerce">E-commerce</option>
                  <option value="servicios">Servicios Profesionales</option>
                  <option value="agencia">Agencia / Marketing</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-1">¿Qué te gustaría automatizar?</label>
                <textarea name="mensaje" rows={3} placeholder="Cuéntanos brevemente sobre tu negocio..."
                  className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none font-mono" />
              </div>

              <button type="submit" data-cursor-glow="false"
                className="w-full bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest py-3 hover:bg-primary/90 transition-colors">
                Solicitar_Consulta_Gratuita →
              </button>

              <div className="text-center">
                <a href="https://wa.me/908776199" target="_blank" rel="noreferrer"
                  className="font-mono text-xs text-accent hover:text-primary transition-colors">
                  ✦ Hablar con Asistente IA directo →
                </a>
              </div>
            </form>
          </div>

          {/* Right: ROI Calculator */}
          <ROICalculator />
        </div>
      </Container>

      {/* ─── SECCIÓN 10: FOOTER ───────────────────────────────────── */}
      <Container
        component="footer"
        wrapperClassName="border-t border-border bg-card/20"
        className="mx-auto max-w-7xl"
      >
        <div className="grid md:grid-cols-[1fr_auto_auto_1.2fr] gap-10 py-12 border-b border-border">
          {/* Brand */}
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/syncrom_logo.png" alt="Syncrom AI" className="w-8 h-8 rounded-lg object-cover border border-primary/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]" />
              <span className="font-display text-xl tracking-tighter uppercase relative group">
                SYNCROM<span className="text-primary group-hover:animate-ping absolute ml-0.5">.</span><span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Automatizamos negocios hispanohablantes con <span className="font-bold text-white">n8n</span> e Inteligencia Artificial.
              Más eficiencia, menos trabajo manual.
            </p>
            <div className="space-y-3 pt-2">
              <a href="mailto:syncromai2@gmail.com" className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
                <Mail className="size-3.5 text-primary opacity-70 group-hover:opacity-100 transition-opacity" /> syncromai2@gmail.com
              </a>
              <a href="https://wa.me/908776199" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
                <MessageCircle className="size-3.5 text-primary opacity-70 group-hover:opacity-100 transition-opacity" /> WhatsApp: +90 877 6199
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="https://web.facebook.com/profile.php?id=61579409871976"
                target="_blank"
                rel="noreferrer"
                aria-label="Syncrom en Facebook"
                className="group flex items-center justify-center w-8 h-8 rounded border border-border/80 bg-background/50 hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(24,119,242,0.2)]"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-muted-foreground group-hover:fill-[#1877F2] transition-colors" aria-hidden="true">
                  <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/syncrom_automation/"
                target="_blank"
                rel="noreferrer"
                aria-label="Syncrom en Instagram"
                className="group flex items-center justify-center w-8 h-8 rounded border border-border/80 bg-background/50 hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(225,48,108,0.2)]"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-muted-foreground group-hover:fill-[#E1306C] transition-colors" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">SERVICIOS</h4>
            <ul className="space-y-3">
              {["Consultoría n8n", "Agentes IA", "Arquitectura de IA", "Mantenimiento"].map((s) => (
                <li key={s}>
                  <a href="#contacto" className="group font-mono text-xs text-muted-foreground hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="size-3 text-primary/50 group-hover:text-primary transition-colors group-hover:translate-x-1" /> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">LEGAL</h4>
            <ul className="space-y-3">
              {["Privacidad", "Aviso Legal", "Cookies"].map((s) => (
                <li key={s}>
                  <a href="#" className="group font-mono text-xs text-muted-foreground hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="size-3 text-primary/50 group-hover:text-primary transition-colors group-hover:translate-x-1" /> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">NEWSLETTER</h4>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed font-mono">
              Recibe tips de automatización e IA cada semana. Sin spam.
            </p>
            <div className="flex bg-[#04090f] border border-border/80 focus-within:border-primary/50 focus-within:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all rounded overflow-hidden">
              <input
                type="email"
                placeholder="tu@correo.com"
                className="bg-transparent px-3 py-2 text-xs font-mono text-foreground placeholder:text-muted-foreground/30 flex-1 focus:outline-none w-full"
              />
              <button className="group bg-primary/10 border-l border-border/80 hover:bg-primary px-4 text-primary hover:text-primary-foreground text-xs font-mono transition-all flex items-center gap-1.5 shrink-0">
                SEND <Send className="size-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            <p className="font-mono text-[9px] text-muted-foreground/40 mt-3">
              Al suscribirte aceptas nuestra política de privacidad.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-muted-foreground/50">
            © 2025 <span className="text-muted-foreground">Syncrom AI</span>. Todos los derechos reservados. 🇵🇪 Lima, Perú
          </p>

          {/* Bottom social row */}
          <div className="flex items-center gap-4">
            <a
              href="https://web.facebook.com/profile.php?id=61579409871976"
              target="_blank" rel="noreferrer"
              aria-label="Facebook"
              className="group flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground/50 hover:text-[#1877F2] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/syncrom_automation/"
              target="_blank" rel="noreferrer"
              aria-label="Instagram"
              className="group flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground/50 hover:text-[#E1306C] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground/50 border border-border/30 px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
            Todos los servicios operativos
          </div>
        </div>
      </Container>

    </div>
  );
}
