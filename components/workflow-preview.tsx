"use client";

import { useState } from "react";
import { FLOW_MAP } from "@/components/workflow-flows";
import { BarChart3, Bot, FileSpreadsheet, HandCoins, Share2, LineChart, BellRing, Replace, Mail, BrainCircuit } from "lucide-react";

const WORKFLOWS = [
  { id: "01", icon: BarChart3, title: "Seguimiento de Leads",       tag: "VENTAS",      desc: "Captura leads de WhatsApp y formularios, los puntúa con IA y actualiza tu CRM en tiempo real." },
  { id: "02", icon: Bot, title: "Chatbots con IA",             tag: "ATENCIÓN",    desc: "Bot conversacional con NLP que responde consultas, escala al humano cuando es necesario." },
  { id: "03", icon: FileSpreadsheet, title: "Relleno Automático de Datos", tag: "DATOS",       desc: "Extrae campos de emails y PDFs, normaliza el esquema y sincroniza con tu base de datos." },
  { id: "04", icon: HandCoins, title: "Automatización Contable",     tag: "FINANZAS",    desc: "Genera facturas, envía al cliente, registra en el libro contable y produce reportes mensuales." },
  { id: "05", icon: Share2, title: "Redes Sociales",              tag: "MARKETING",   desc: "Genera contenido con IA y lo publica simultáneamente en Instagram, Facebook y LinkedIn." },
  { id: "06", icon: LineChart, title: "Reportes Automáticos",        tag: "ANÁLISIS",    desc: "Agrega datos de CRM y ventas, genera insights con IA y distribuye el reporte en PDF semanal." },
  { id: "07", icon: BellRing, title: "Notificaciones Inteligentes", tag: "ALERTAS",     desc: "Clasifica eventos por urgencia y los enruta a WhatsApp, Email o Slack según prioridad." },
  { id: "08", icon: Replace, title: "Sincronización de Sistemas",  tag: "INTEGRACIÓN", desc: "Mapea contactos del CRM al ERP, Google Sheets y notifica por WhatsApp automáticamente." },
  { id: "09", icon: Mail, title: "Mensajes Automáticos",        tag: "MENSAJERÍA",  desc: "Secuencia de nurturing: email día 1, WhatsApp día 3, oferta especial día 7 hasta la conversión." },
  { id: "10", icon: BrainCircuit, title: "Inteligencia Artificial",     tag: "IA",          desc: "Agente IA con NLP que ejecuta acciones y se retroalimenta en un loop de mejora continua." },
];

export function WorkflowPreview() {
  const [active, setActive] = useState(WORKFLOWS[0]);
  const [fading, setFading] = useState(false);

  function select(item: typeof WORKFLOWS[0]) {
    if (item.id === active.id) return;
    setFading(true);
    setTimeout(() => {
      setActive(item);
      setFading(false);
    }, 180);
  }

  const FlowComp = FLOW_MAP[active.id];

  return (
    <div className="flex flex-col md:grid md:grid-cols-[1fr_1.2fr] gap-4 md:gap-8 py-8">
      {/* Right: animated SVG flow (Shown first on mobile) */}
      <div className="order-first md:order-last flex flex-col border border-border p-4 gap-4 relative mt-4 md:mt-0">
        {/* HUD corner brackets */}
        <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-primary/50 pointer-events-none" />
        <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-primary/50 pointer-events-none" />
        <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-primary/50 pointer-events-none" />
        <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-primary/50 pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between px-1">
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">VISTA_PREVIA_FLUJO</span>
          <span className="font-mono text-[9px] text-primary tracking-widest uppercase border border-primary/30 px-1.5 py-0.5">{active.tag}</span>
        </div>

        {/* Flow SVG */}
        <div
          className="flex-1 border border-border/40 bg-[#04090f] overflow-hidden transition-opacity duration-200 rounded-sm"
          style={{ opacity: fading ? 0 : 1, minHeight: 180 }}
        >
          {FlowComp && <FlowComp />}
        </div>

        {/* Description */}
        <div
          className="space-y-1 px-1 transition-opacity duration-200"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <p className="font-display text-sm text-white tracking-tight flex items-center gap-2">
            <active.icon className="w-4 h-4 text-primary" />
            {active.title}
          </p>
          <p className="font-mono text-[10px] text-slate-400 leading-relaxed">{active.desc}</p>
        </div>

        {/* CTA */}
        <a
          href="#contacto"
          className="font-mono text-[10px] text-primary border border-primary/40 px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-all tracking-widest uppercase self-start"
        >
          Implementar este flujo →
        </a>
      </div>

      {/* Left: list (Shown second on mobile) */}
      <div className="order-last md:order-first divide-y divide-border border-b md:border-b-0">
        {WORKFLOWS.map((item) => {
          const isActive = item.id === active.id;
          return (
            <button
              key={item.id}
              onClick={() => select(item)}
              data-cursor-glow="false"
              className={`group w-full text-left flex items-center justify-between py-3.5 px-1 transition-all duration-200 border-l-2 ${
                isActive
                  ? "bg-primary/[0.06] border-l-primary pl-2"
                  : "hover:bg-primary/[0.03] border-l-transparent pl-2"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`font-mono text-[10px] tabular-nums w-6 ${isActive ? "text-primary" : "text-muted-foreground/40"}`}>
                  {item.id}
                </span>
                <span className="flex items-center justify-center w-5">
                  <item.icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary/70"}`} />
                </span>
                <span className={`text-sm font-display tracking-tight transition-colors ${isActive ? "text-primary" : "group-hover:text-primary"}`}>
                  {item.title}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`hidden sm:inline font-mono text-[9px] border px-1.5 py-0.5 tracking-widest transition-colors ${
                  isActive ? "border-primary/50 text-primary" : "border-border text-muted-foreground/50"
                }`}>
                  {item.tag}
                </span>
                <span className={`font-mono text-xs text-primary transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}>
                  →
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
