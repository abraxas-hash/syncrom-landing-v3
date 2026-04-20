"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ShieldCheck, X, ChevronRight } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show only if consent hasn't been given
    const consent = localStorage.getItem("syncrom_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000); // Delayed entry for effect
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("syncrom_cookie_consent", "true");
    setIsVisible(false);
  };

  const decline = () => {
    localStorage.setItem("syncrom_cookie_consent", "false");
    setIsVisible(false);
  };

  if (!mounted || !isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-sm z-[100] animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="bg-[#050b14]/95 backdrop-blur-md border border-primary/30 p-5 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden group">
        
        {/* HUD scanline effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-sm border border-primary/20">
              <ShieldCheck className="size-5 text-primary" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-primary tracking-widest uppercase">SEGURIDAD_DATOS</p>
              <h4 className="font-display text-sm tracking-tight text-white uppercase">Control de Cookies</h4>
            </div>
          </div>

          <p className="font-mono text-[10px] text-slate-400 leading-relaxed mb-6">
            Utilizamos tecnología de rastreo para optimizar tu experiencia y analizar el tráfico de <span className="text-primary/70">SYNCROM_AI</span>. 
            ¿Permites el acceso a los datos de navegación?
          </p>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={decline}
              className="font-mono text-[9px] uppercase tracking-widest py-2.5 border border-border/50 text-muted-foreground hover:bg-white/5 transition-all"
            >
              RECHAZAR
            </button>
            <button
              onClick={accept}
              className="font-mono text-[9px] uppercase tracking-widest py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              ACEPTAR <ChevronRight className="size-3" />
            </button>
          </div>

          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-0 right-0 p-1 text-muted-foreground/30 hover:text-primary transition-colors"
          >
            <X className="size-3" />
          </button>
        </div>

        {/* Decorative corner brackets */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50" />
      </div>
    </div>
  );
}
