"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function ROICalculator() {
  const [currency, setCurrency] = useState<"USD" | "PEN">("USD");
  const [hours, setHours] = useState(20);
  
  // Default rates based on currency type
  const [rateUSD, setRateUSD] = useState(40);
  const [ratePEN, setRatePEN] = useState(150);

  const rate = currency === "USD" ? rateUSD : ratePEN;
  const symbol = currency === "USD" ? "$" : "S/.";
  const rateMin = currency === "USD" ? 15 : 50;
  const rateMax = currency === "USD" ? 500 : 1500;
  const rateStep = currency === "USD" ? 5 : 10;

  const handleRateChange = (val: number) => {
    if (currency === "USD") setRateUSD(val);
    else setRatePEN(val);
  };

  const monthlySavings = hours * rate * 4;
  const yearlySavings = hours * rate * 48;

  return (
    <div className="border border-border/50 p-6 md:p-8 flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            CALCULADORA_DE_IMPACTO
          </span>
          <p className="font-display text-xl tracking-tight mt-1">¿Cuánto puedes ahorrar?</p>
        </div>

        {/* Currency Toggle */}
        <div className="flex bg-[#04090f] border border-border/50 p-1 rounded w-max">
          <button
            onClick={() => setCurrency("USD")}
            className={cn(
              "px-3 py-1.5 text-[10px] rounded-sm font-mono tracking-widest transition-all",
              currency === "USD"
                ? "bg-primary/20 text-primary border border-primary/30 font-bold"
                : "text-muted-foreground hover:text-foreground border border-transparent"
            )}
          >
            USD ($)
          </button>
          <button
            onClick={() => setCurrency("PEN")}
            className={cn(
              "px-3 py-1.5 text-[10px] rounded-sm font-mono tracking-widest transition-all",
              currency === "PEN"
                ? "bg-primary/20 text-primary border border-primary/30 font-bold"
                : "text-muted-foreground hover:text-foreground border border-transparent"
            )}
          >
            PEN (S/.)
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              Horas repetitivas / semana
            </label>
            <span className="font-mono text-sm text-accent font-bold">{hours}h</span>
          </div>
          <input
            type="range"
            min={5}
            max={60}
            step={1}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full accent-primary h-1 bg-border rounded appearance-none cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              Valor de tu hora ({symbol})
            </label>
            <span className="font-mono text-sm text-accent font-bold">
              {symbol} {rate}
            </span>
          </div>
          <input
            type="range"
            min={rateMin}
            max={rateMax}
            step={rateStep}
            value={rate}
            onChange={(e) => handleRateChange(Number(e.target.value))}
            className="w-full accent-primary h-1 bg-border rounded appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className="border border-border p-5 space-y-4 bg-card/50">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-1">
              Ahorro Mensual
            </p>
            <p className="font-display text-3xl text-primary tracking-tighter">
              {symbol} {monthlySavings.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-1">
              Ahorro Anual
            </p>
            <p className="font-display text-3xl text-accent tracking-tighter">
              {symbol} {yearlySavings.toLocaleString()}
            </p>
          </div>
        </div>
        <p className="font-mono text-[9px] text-muted-foreground/60 italic leading-relaxed">
          Estimación del valor del tiempo liberado que podrás reinvertir en escalar tu negocio.
        </p>
      </div>
    </div>
  );
}
