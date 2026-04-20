"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface HudCardProps {
  index: string;
  status?: string;
  uptime?: string;
  title: string;
  desc: string;
  bars?: { label: string; value: number }[];
  tag: string;
  // Back face
  solution: string;
  solutionDesc: string;
  solutionBadge?: string;
  className?: string;
}

export function HudCard({
  index,
  status = "SYS.STATUS: ACTIVO",
  uptime = "IMPACTO: CRÍTICO",
  title,
  desc,
  bars = [],
  tag,
  solution,
  solutionDesc,
  solutionBadge = "SYNCROM_FIX",
  className,
}: HudCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={cn("relative min-h-[280px] cursor-pointer group", className)}
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((f) => !f)}
      title={flipped ? "Click para ver problema" : "Click para ver solución"}
    >
      {/* flip inner */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "280px",
        }}
      >
        {/* ────── FRONT FACE ────── */}
        <div
          className="absolute inset-0 flex flex-col bg-[#060e1c] border border-primary/30 hover:border-primary/70 transition-all duration-300 overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Diagonal glow */}
          <div
            className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.13] transition-opacity duration-700 pointer-events-none"
            style={{ background: "linear-gradient(135deg, transparent 20%, rgba(16,185,129,0.5) 50%, transparent 80%)" }}
          />

          {/* Corner brackets */}
          <span className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-primary/70 pointer-events-none" />
          <span className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-primary/70 pointer-events-none" />
          <span className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-primary/70 pointer-events-none" />
          <span className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-primary/70 pointer-events-none" />

          {/* Flip hint */}
          <span className="absolute top-2.5 left-1/2 -translate-x-1/2 font-mono text-[8px] text-primary/30 tracking-widest select-none">
            ↻ CLICK
          </span>

          <div className="relative z-10 flex flex-col h-full p-5 gap-3">
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] text-primary tracking-widest uppercase">{status}</span>
              <span className="font-mono text-[9px] text-slate-400 tracking-widest uppercase">{uptime}</span>
            </div>

            <div className="h-px bg-primary/20" />

            {/* Title + desc */}
            <div className="flex-1 space-y-2 py-1">
              <h3 className="font-display tracking-tight text-sm md:text-base text-white leading-tight">{title}</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">{desc}</p>
            </div>

            {/* Progress bars */}
            {bars.length > 0 && (
              <div className="space-y-2.5 py-1">
                {bars.map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">{bar.label}</span>
                      <span className="font-mono text-[9px] text-primary font-bold">{bar.value}%</span>
                    </div>
                    <div className="h-[3px] bg-white/10 overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${bar.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom */}
            <div className="flex items-end justify-between pt-2 border-t border-primary/15">
              <span className="font-mono text-[38px] font-black text-white/10 leading-none tabular-nums select-none">{index}</span>
              <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">{tag}</span>
            </div>
          </div>
        </div>

        {/* ────── BACK FACE ────── */}
        <div
          className="absolute inset-0 flex flex-col bg-[#04110a] border border-primary overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Strong glow on back */}
          <div
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            style={{ background: "linear-gradient(135deg, transparent 20%, rgba(16,185,129,0.6) 50%, transparent 80%)" }}
          />

          {/* Green corner brackets — brighter on back */}
          <span className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-primary pointer-events-none" />
          <span className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-primary pointer-events-none" />
          <span className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-primary pointer-events-none" />
          <span className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-primary pointer-events-none" />

          {/* Flip hint */}
          <span className="absolute top-2.5 left-1/2 -translate-x-1/2 font-mono text-[8px] text-primary/50 tracking-widest select-none">
            ↻ CLICK
          </span>

          <div className="relative z-10 flex flex-col h-full p-5 gap-3">
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] text-primary tracking-widest uppercase">SOLUCIÓN_SYNCROM</span>
              <span className="font-mono text-[9px] text-primary/60 tracking-widest uppercase">{solutionBadge}</span>
            </div>

            <div className="h-px bg-primary/40" />

            {/* Solution content */}
            <div className="flex-1 space-y-3 py-1">
              <h3 className="font-display tracking-tight text-base text-primary leading-tight">{solution}</h3>
              <p className="text-[11px] text-slate-300 leading-relaxed">{solutionDesc}</p>

              {/* Checkmarks */}
              <ul className="space-y-1.5 pt-1">
                {["Implementación en 1-2 semanas", "Sin conocimientos técnicos", "Soporte incluido"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[10px] text-slate-400">
                    <span className="text-primary text-xs">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom CTA */}
            <div className="pt-2 border-t border-primary/20 flex items-center justify-between gap-2">
              <span className="font-mono text-[9px] text-primary/60">PROBLEMA_{index}_RESUELTO</span>
              <a
                href="#contacto"
                onClick={(e) => e.stopPropagation()}
                className="font-mono text-[9px] text-primary border border-primary/60 px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-all tracking-widest uppercase"
              >
                Automatizar →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
