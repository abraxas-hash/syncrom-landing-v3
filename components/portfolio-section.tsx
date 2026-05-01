"use client";

import { Container } from "@/components/zippystarter/container";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Monitor, MessageSquare, Database, Zap } from "lucide-react";
import { useState } from "react";

interface PortfolioProject {
  id: string;
  type: "AGENTE_IA" | "WEB_APP" | "DASHBOARD" | "AUTOMATIZACION";
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: "ONLINE" | "COMPLETADO" | "DEMO_ACTIVO";
}

const projects: PortfolioProject[] = [
  {
    id: "01",
    type: "AGENTE_IA",
    title: "Motor Render Kling (AI Video)",
    description: "Motor automático en Python/FFmpeg que recibe JSON de n8n, procesa videos de Kling AI, sincroniza audio y exporta en 9:16.",
    tech: ["Python", "n8n", "FFmpeg", "FastAPI"],
    github: "https://github.com/abraxas-hash/motor-render-kling",
    status: "ONLINE",
  },
  {
    id: "02",
    type: "AUTOMATIZACION",
    title: "ORES Travel (n8n Engine)",
    description: "Sistema de cotizaciones turísticas automatizado. Conecta formularios complejos con n8n para cálculos de tarifas en tiempo real.",
    tech: ["n8n", "JavaScript", "HTML5"],
    github: "https://github.com/abraxas-hash/ores-travel-forms-",
    status: "DEMO_ACTIVO",
  },
  {
    id: "03",
    type: "WEB_APP",
    title: "Arthur Salón (Fidelización)",
    description: "Plataforma premium con sistema de sellos digitales vía QR y panel administrativo para gestión de lealtad de clientes.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    github: "https://github.com/abraxas-hash/arthur-landing",
    status: "COMPLETADO",
  },
  {
    id: "04",
    type: "DASHBOARD",
    title: "HVH Inmobiliario Demo",
    description: "Dashboard interactivo para la visualización de métricas de ventas y gestión de leads en el sector inmobiliario.",
    tech: ["React", "Lucide", "CSS3"],
    github: "https://github.com/abraxas-hash/hvh-dashboard-demo",
    status: "DEMO_ACTIVO",
  },
  {
    id: "05",
    type: "WEB_APP",
    title: "Telegram Sales WebApp",
    description: "Sistema de ventas integrado directamente en Telegram como WebApp, facilitando la compra de productos naturales.",
    tech: ["Telegram API", "n8n", "JavaScript"],
    github: "https://github.com/abraxas-hash/telegram-webapp-ventas",
    status: "ONLINE",
  },
  {
    id: "06",
    type: "AUTOMATIZACION",
    title: "Gestión v3 (n8n + Supabase)",
    description: "Sistema centralizado de gestión para ventas masivas, integrando bases de datos en tiempo real y flujos de trabajo en n8n.",
    tech: ["n8n", "Supabase", "PostgreSQL"],
    github: "https://github.com/abraxas-hash/productos-naturales-sistema-v3",
    status: "COMPLETADO",
  },
];

export function PortfolioSection() {
  return (
    <Container
      id="portafolio"
      component="section"
      wrapperClassName="border-t border-border bg-[#02060a]"
      className="mx-auto max-w-7xl"
    >
      {/* Section header */}
      <div className="flex items-center justify-between py-5 border-b border-border">
        <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
          LABORATORIO_DE_PROYECTOS
        </h2>
        <span className="font-mono text-[10px] text-primary animate-pulse">● SYSTEM_LIVE</span>
      </div>

      {/* Title */}
      <div className="py-8">
        <h3 className="text-3xl md:text-5xl font-display tracking-tighter leading-none mb-2">
          Soluciones <span className="text-primary">Ejecutadas</span>
        </h3>
        <p className="text-muted-foreground font-mono text-xs">Explora mis despliegues recientes de IA y automatización</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="border-t border-border py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] text-muted-foreground max-w-md">
          <span className="text-primary">»</span> Cada proyecto ha sido diseñado para optimizar procesos operativos y escalar la capacidad de respuesta del negocio.
        </p>
        <a 
          href="https://github.com/abraxas-hash" 
          target="_blank" 
          rel="noreferrer"
          className="group flex items-center gap-2 font-mono text-xs text-slate-300 hover:text-primary transition-colors"
        >
          <Github className="size-4" /> VER_TODO_EL_GITHUB_➔
        </a>
      </div>
    </Container>
  );
}

function PortfolioCard({ project }: { project: PortfolioProject }) {
  const Icon = {
    AGENTE_IA: Zap,
    WEB_APP: Monitor,
    DASHBOARD: Database,
    AUTOMATIZACION: Zap,
  }[project.type];

  return (
    <div className="group relative bg-[#060e1c] border border-border/50 hover:border-primary/50 transition-all duration-300 p-6 flex flex-col gap-4 overflow-hidden">
      {/* Scanning effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 -translate-y-full group-hover:translate-y-full transition-all duration-[1.5s] pointer-events-none" />
      
      {/* Corner Brackets */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/30 group-hover:border-primary transition-colors" />
      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/30 group-hover:border-primary transition-colors" />
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/30 group-hover:border-primary transition-colors" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/30 group-hover:border-primary transition-colors" />

      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="size-4 text-primary" />
          </div>
          <span className="font-mono text-[9px] text-slate-500 tracking-widest">{project.type}</span>
        </div>
        <span className={cn(
          "font-mono text-[8px] px-2 py-0.5 border rounded-full tracking-tighter",
          project.status === "DEMO_ACTIVO" ? "text-accent border-accent/30 bg-accent/5" : "text-primary border-primary/30 bg-primary/5"
        )}>
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h4 className="font-display text-lg text-white group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </h4>
        <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[8px] bg-white/5 px-1.5 py-0.5 text-slate-500">
            #{t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="pt-4 border-t border-border/50 flex items-center justify-between">
        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors" title="Ver código">
              <Github className="size-4" />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary transition-colors" title="Ver demo">
              <ExternalLink className="size-4" />
            </a>
          )}
        </div>
        <a 
          href={project.github || "#"} 
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] text-primary hover:underline underline-offset-4 tracking-tighter"
        >
          {project.status === "DEMO_ACTIVO" ? "[ PROBAR_DEMO ]" : "[ VER_DETALLES ]"}
        </a>
      </div>
    </div>
  );
}
