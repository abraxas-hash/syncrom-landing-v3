"use client";

import React from "react";

/* ══════════════════════════════════════════════
   BRAND COLORS (n8n integration palette)
   ══════════════════════════════════════════════ */
const C = {
  webhook:  "#F2AE47",
  openai:   "#412991",
  wa:       "#25D366",
  gmail:    "#EA4335",
  sheets:   "#34A853",
  hubspot:  "#FF7A59",
  slack:    "#4A154B",
  postgres: "#336791",
  http:     "#2563EB",
  n8n:      "#EA4B71",
  if_:      "#FF6D5A",
  set_:     "#6E54C8",
  merge:    "#0891B2",
  code:     "#3E4BBF",
  email:    "#E8375B",
  linkedin: "#0077B5",
  fb:       "#1877F2",
  ig:       "#E1306C",
  sap:      "#0077C8",
};

/* ══════════════════════════════════════════════
   PRIMITIVES
   ══════════════════════════════════════════════ */

function N({ x, y, w = 150, h = 58, ic, icon, name, sub,
  isTrigger = false, isIf = false, numOut = 1, noInput = false }: {
  x: number; y: number; w?: number; h?: number; ic: string; icon: string;
  name: string; sub: string; isTrigger?: boolean; isIf?: boolean;
  numOut?: number; noInput?: boolean;
}) {
  const cy = y + h / 2;
  const iw = 48;
  const cc = "#1E1E2E"; // connector fill
  const cs = "#6E54C8"; // connector stroke

  const ifTrue  = y + h / 3;
  const ifFalse = y + (2 * h) / 3;

  const fanStep = 24;
  const fanOffsets = numOut > 1
    ? Array.from({ length: numOut }, (_, i) => (i - (numOut - 1) / 2) * fanStep)
    : [0];

  return (
    <g>
      {/* Drop shadow */}
      <rect x={x + 3} y={y + 4} width={w} height={h} rx={9} fill="black" fillOpacity={0.4} />

      {/* Main dark body */}
      <rect x={x} y={y} width={w} height={h} rx={9} fill="#2D2D40" />

      {/* Icon strip */}
      <rect x={x} y={y} width={iw} height={h} rx={9} fill={ic} />
      {/* Cover right rounded corners of strip */}
      <rect x={x + iw - 9} y={y} width={14} height={h} fill={ic} />

      {/* Right node body */}
      <rect x={x + iw} y={y} width={w - iw} height={h} fill="#2D2D40" />

      {/* Outer border */}
      <rect x={x} y={y} width={w} height={h} rx={9} fill="none" stroke="#3E3E58" strokeWidth={1} />

      {/* Icon */}
      <text x={x + iw / 2 + 1} y={y + h / 2 + 7} textAnchor="middle" fontSize={17}>{icon}</text>

      {/* Divider */}
      <line x1={x + iw} y1={y + 12} x2={x + iw} y2={y + h - 12}
        stroke="white" strokeOpacity={0.1} strokeWidth={1} />

      {/* Name */}
      <text x={x + iw + 12} y={y + h / 2 - 4}
        fill="#EFEFEF" fontSize={10} fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="600">{name}</text>

      {/* Sub */}
      <text x={x + iw + 12} y={y + h / 2 + 12}
        fill="#6E7191" fontSize={8} fontFamily="ui-monospace,monospace">{sub}</text>

      {/* Blink dot */}
      <circle cx={x + 12} cy={y + 10} r={3.5} fill="white" fillOpacity={0.45}>
        <animate attributeName="opacity" values="0.45;0.1;0.45" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Lightning trigger badge */}
      {isTrigger && (
        <g>
          <circle cx={x + w - 1} cy={y - 1} r={10} fill="#1E1E2E" stroke={ic} strokeWidth={2} />
          <text x={x + w - 1} y={y + 5} textAnchor="middle" fontSize={11}>⚡</text>
        </g>
      )}

      {/* INPUT */}
      {!isTrigger && !noInput && (
        <g>
          <circle cx={x - 1} cy={cy} r={7} fill={cc} stroke={cs} strokeWidth={2} />
          <circle cx={x - 1} cy={cy} r={3} fill={cs} fillOpacity={0.85} />
        </g>
      )}

      {/* OUTPUTS */}
      {isIf ? (
        <>
          <circle cx={x + w + 1} cy={ifTrue}  r={7} fill={cc} stroke="#10b981" strokeWidth={2} />
          <circle cx={x + w + 1} cy={ifTrue}  r={3} fill="#10b981" />
          <text x={x + w + 20} y={ifTrue + 5}  fill="#10b981" fontSize={8} fontFamily="ui-monospace,monospace">true</text>
          <circle cx={x + w + 1} cy={ifFalse} r={7} fill={cc} stroke="#ef4444" strokeWidth={2} />
          <circle cx={x + w + 1} cy={ifFalse} r={3} fill="#ef4444" />
          <text x={x + w + 20} y={ifFalse + 5} fill="#ef4444" fontSize={8} fontFamily="ui-monospace,monospace">false</text>
        </>
      ) : (
        fanOffsets.map((off, i) => (
          <g key={i}>
            <circle cx={x + w + 1} cy={cy + off} r={7} fill={cc} stroke={cs} strokeWidth={2} />
            <circle cx={x + w + 1} cy={cy + off} r={3} fill={cs} fillOpacity={0.85} />
          </g>
        ))
      )}
    </g>
  );
}

function Conn({ x1, y1, x2, y2, c = "#6E54C8", label, lc }: {
  x1: number; y1: number; x2: number; y2: number;
  c?: string; label?: string; lc?: string;
}) {
  const mx = (x1 + x2) / 2;
  const d = `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
  const lx = mx;
  const ly = (y1 + y2) / 2 - 10;
  return (
    <g>
      <path d={d} fill="none" stroke={c} strokeWidth={2.5} strokeOpacity={0.7} />
      {label && (
        <g>
          <rect x={lx - 26} y={ly - 9} width={52} height={15} rx={4}
            fill="#1e1e2e" stroke={c} strokeOpacity={0.75} strokeWidth={0.8} />
          <text x={lx} y={ly + 3} textAnchor="middle"
            fill={lc ?? c} fontSize={7.5} fontFamily="ui-monospace,monospace">{label}</text>
        </g>
      )}
    </g>
  );
}

function Dot({ p, dur, c = "#6E54C8", delay = "0s" }: {
  p: string; dur: string; c?: string; delay?: string;
}) {
  return (
    <circle r={5} fill={c} style={{ filter: `drop-shadow(0 0 6px ${c})` }}>
      <animateMotion dur={dur} begin={delay} repeatCount="indefinite" path={p} />
    </circle>
  );
}

function Badge({ x, y, n, c = "#6E54C8" }: { x: number; y: number; n: string; c?: string }) {
  const bw = n.length > 2 ? 30 : 22;
  return (
    <g>
      <rect x={x - bw / 2} y={y - 8} width={bw} height={16} rx={8} fill={c} fillOpacity={0.9} />
      <text x={x} y={y + 3} textAnchor="middle" fill="#fff" fontSize={8}
        fontFamily="ui-monospace,monospace" fontWeight="bold">{n}</text>
    </g>
  );
}

function Canvas({ id, children }: { id: string; children: React.ReactNode }) {
  const pid = `dp_${id}`;
  return (
    <div className="w-full h-full overflow-x-auto overflow-y-hidden no-scrollbar">
      <svg viewBox="0 0 820 230" preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg" className="min-w-[450px] md:min-w-full h-full" style={{ minHeight: 160 }}>
        <defs>
          <pattern id={pid} width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1.3" fill="white" fillOpacity={0.05} />
          </pattern>
        </defs>
        <rect width="820" height="230" fill="#1E1E2E" />
        <rect width="820" height="230" fill={`url(#${pid})`} />
        {children}
      </svg>
    </div>
  );
}

function bez(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

/* ══════════════════════════════════════════════
   FLOW 01 — Seguimiento de Leads
   Webhook ⚡ → AI Agent → IF (score>70) → HubSpot | Sheets
   ══════════════════════════════════════════════ */
function Flow01() {
  const cy = 115, h = 58, w = 150;
  const x1 = 15, x2 = 215, x3 = 415;
  const r1 = x1+w, r2 = x2+w, r3 = x3+w;          // 165, 365, 565
  const ifT = (x3+0) + 0;  // y of IF true output
  const yIF = cy - h/2;    // 86
  const ifTy = yIF + h/3;  // 86+19=105
  const ifFy = yIF + 2*h/3; // 86+38=124
  const x4 = 608; const w4 = 197;
  const y4a = 22, y4b = 152;
  const c4a = y4a + h/2;  // 51
  const c4b = y4b + h/2;  // 181

  const p12 = bez(r1,cy,x2,cy);
  const p23 = bez(r2,cy,x3,cy);
  const pTr = bez(r3,ifTy,x4,c4a);
  const pFa = bez(r3,ifFy,x4,c4b);
  return (
    <Canvas id="01">
      <N x={x1} y={yIF} ic={C.webhook} icon="🔌" name="Webhook" sub="On form submit" isTrigger w={w} h={h}/>
      <N x={x2} y={yIF} ic={C.openai}  icon="🤖" name="AI Agent" sub="Qualify → Score" w={w} h={h}/>
      <N x={x3} y={yIF} ic={C.if_}     icon="🔀" name="IF" sub="score > 70?" w={w} h={h} isIf/>
      <N x={x4} y={y4a} ic={C.hubspot} icon="🏢" name="HubSpot" sub="Update → hot contact" w={w4} h={h}/>
      <N x={x4} y={y4b} ic={C.sheets}  icon="📋" name="Google Sheets" sub="Append → cold lead" w={w4} h={h}/>

      <Conn x1={r1} y1={cy} x2={x2} y2={cy} label="lead_data" />
      <Conn x1={r2} y1={cy} x2={x3} y2={cy} label="ai_score" />
      <Conn x1={r3} y1={ifTy} x2={x4} y2={c4a} c="#10b981" label="hot_lead" />
      <Conn x1={r3} y1={ifFy} x2={x4} y2={c4b} c="#ef4444" label="cold_lead" />
      <Badge x={(r1+x2)/2} y={cy-18} n="1" />

      <Dot p={p12} dur="1.6s" c={C.webhook}/><Dot p={p12} dur="1.6s" c="#6E54C8" delay="0.8s"/>
      <Dot p={p23} dur="1.8s" c="#6E54C8"/>
      <Dot p={pTr} dur="1.5s" c="#10b981"/>
      <Dot p={pFa} dur="2.0s" c="#ef4444" delay="0.5s"/>
    </Canvas>
  );
}

/* ══════════════════════════════════════════════
   FLOW 02 — Chatbots con IA
   WA Trigger → AI Agent → IF (conf>85) → Auto Reply | Escalate
   ══════════════════════════════════════════════ */
function Flow02() {
  const cy = 115, h = 58, w = 150;
  const x1=15, x2=215, x3=415;
  const r1=x1+w, r2=x2+w, r3=x3+w;
  const yIF=cy-h/2;
  const ifTy=yIF+h/3, ifFy=yIF+2*h/3;
  const x4=608, w4=197;
  const y4a=22, y4b=152;
  const c4a=y4a+h/2, c4b=y4b+h/2;

  const p12=bez(r1,cy,x2,cy), p23=bez(r2,cy,x3,cy);
  const pTr=bez(r3,ifTy,x4,c4a), pFa=bez(r3,ifFy,x4,c4b);
  return (
    <Canvas id="02">
      <N x={x1} y={yIF} ic={C.wa}     icon="💬" name="WhatsApp" sub="On message received" isTrigger w={w} h={h}/>
      <N x={x2} y={yIF} ic={C.openai} icon="🧠" name="AI Agent" sub="Intent + confidence" w={w} h={h}/>
      <N x={x3} y={yIF} ic={C.if_}    icon="🔀" name="IF" sub="confidence > 85%" w={w} h={h} isIf/>
      <N x={x4} y={y4a} ic={C.wa}     icon="📤" name="WA Send" sub="Auto reply message" w={w4} h={h}/>
      <N x={x4} y={y4b} ic={C.slack}  icon="👨‍💼" name="Escalate" sub="Notify human agent" w={w4} h={h}/>

      <Conn x1={r1} y1={cy} x2={x2} y2={cy} label="msg_text"/>
      <Conn x1={r2} y1={cy} x2={x3} y2={cy} label="intent+conf"/>
      <Conn x1={r3} y1={ifTy} x2={x4} y2={c4a} c="#10b981" label="auto_reply"/>
      <Conn x1={r3} y1={ifFy} x2={x4} y2={c4b} c="#ef4444" label="escalate"/>
      <Badge x={(r1+x2)/2} y={cy-18} n="1" c={C.wa}/>

      <Dot p={p12} dur="1.4s" c={C.wa}/><Dot p={p12} dur="1.4s" c="#6E54C8" delay="0.7s"/>
      <Dot p={p23} dur="1.6s" c="#6E54C8"/>
      <Dot p={pTr} dur="1.5s" c="#10b981"/><Dot p={pFa} dur="2.0s" c="#ef4444" delay="0.5s"/>
    </Canvas>
  );
}

/* ══════════════════════════════════════════════
   FLOW 03 — Relleno Automático de Datos
   Gmail + HTTP → Merge → Edit Fields → Postgres | Sheets
   ══════════════════════════════════════════════ */
function Flow03() {
  const h=56, w=148;
  const xA=15, yA=15,  cyA=yA+h/2;   // 43
  const xB=15, yB=158, cyB=yB+h/2;   // 186
  const xM=210, yM=84, cyM=yM+h/2;   // 112
  const xS=408, yS=yM, cyS=cyM;
  const rA=xA+w, rB=xB+w, rM=xM+w, rS=xS+w;  // 163, 163, 358, 556
  const x4=600, w4=205;
  const y4a=22, y4b=152;
  const c4a=y4a+h/2, c4b=y4b+h/2;   // 50, 180

  const pA=bez(rA,cyA,xM,cyM), pB=bez(rB,cyB,xM,cyM);
  const p12=bez(rM,cyM,xS,cyS);
  const pOA=bez(rS,cyS,x4,c4a), pOB=bez(rS,cyS,x4,c4b);
  return (
    <Canvas id="03">
      <N x={xA} y={yA} ic={C.gmail}    icon="📧" name="Gmail" sub="Read inbox" isTrigger w={w} h={h}/>
      <N x={xB} y={yB} ic={C.http}     icon="📄" name="HTTP Request" sub="Fetch PDF" isTrigger w={w} h={h}/>
      <N x={xM} y={yM} ic={C.merge}    icon="🔗" name="Merge" sub="Combine sources" w={w} h={h}/>
      <N x={xS} y={yS} ic={C.set_}     icon="⚙️" name="Edit Fields" sub="Normalize schema" w={w} h={h}/>
      <N x={x4} y={y4a} ic={C.postgres} icon="🗄️" name="Postgres" sub="Insert row" w={w4} h={h}/>
      <N x={x4} y={y4b} ic={C.sheets}  icon="📋" name="Google Sheets" sub="Append backup" w={w4} h={h}/>

      <Conn x1={rA} y1={cyA} x2={xM} y2={cyM} label="email_data" c={C.gmail}/>
      <Conn x1={rB} y1={cyB} x2={xM} y2={cyM} label="pdf_text" c={C.http}/>
      <Conn x1={rM} y1={cyM} x2={xS} y2={cyS} label="fields[]"/>
      <Conn x1={rS} y1={cyS} x2={x4} y2={c4a} label="db_row" c={C.postgres}/>
      <Conn x1={rS} y1={cyS} x2={x4} y2={c4b} label="backup" c={C.sheets}/>
      <Badge x={(rM+xS)/2} y={cyM-18} n="12" c={C.merge}/>

      <Dot p={pA}  dur="1.5s" c={C.gmail}/><Dot p={pB}  dur="1.7s" c={C.http} delay="0.4s"/>
      <Dot p={p12} dur="1.4s" c="#6E54C8"/><Dot p={p12} dur="1.4s" c="#6E54C8" delay="0.7s"/>
      <Dot p={pOA} dur="1.3s" c={C.postgres}/><Dot p={pOB} dur="1.5s" c={C.sheets} delay="0.4s"/>
    </Canvas>
  );
}

/* ══════════════════════════════════════════════
   FLOW 04 — Automatización Contable
   Trigger → Invoice → Email → Book → Report (5 linear)
   ══════════════════════════════════════════════ */
function Flow04() {
  const h=58, cy=115, w=138;
  const xs=[14, 168, 322, 476, 630];
  const ics  =[C.webhook,C.n8n,C.gmail,C.code,C.email];
  const icons=["🔌","📄","📧","📖","📊"];
  const names=["Trigger","Invoice Gen","Send Email","Book Entry","Report Gen"];
  const subs =["New sale","PDF create","To client","Accounting","Monthly sum"];
  const labs =["sale_data","invoice{}","sent:ok","ledger_entry"];

  const paths=xs.slice(0,4).map((x,i)=>bez(x+w,cy,xs[i+1],cy));
  return (
    <Canvas id="04">
      {xs.map((x,i)=>(
        <N key={i} x={x} y={cy-h/2} ic={ics[i]} icon={icons[i]}
          name={names[i]} sub={subs[i]} w={w} h={h} isTrigger={i===0}/>
      ))}
      {paths.map((p,i)=>(
        <Conn key={i} x1={xs[i]+w} y1={cy} x2={xs[i+1]} y2={cy} label={labs[i]}/>
      ))}
      {paths.map((p,i)=>(
        <React.Fragment key={i}>
          <Dot p={p} dur={`${1.3+i*0.12}s`} c="#6E54C8"/>
          <Dot p={p} dur={`${1.3+i*0.12}s`} c={ics[i]} delay={`${(1.3+i*0.12)/2}s`}/>
          <Badge x={(xs[i]+w+xs[i+1])/2} y={cy-20} n="1"/>
        </React.Fragment>
      ))}
    </Canvas>
  );
}

/* ══════════════════════════════════════════════
   FLOW 05 — Redes Sociales
   Schedule ⚡ → AI Writer → Scheduler → IG | FB | LinkedIn
   ══════════════════════════════════════════════ */
function Flow05() {
  const cy=115, h=58, w=150;
  const x1=15, x2=215, x3=415;
  const r1=x1+w, r2=x2+w, r3=x3+w;
  const yN=cy-h/2;
  const x4=610, w4=197;
  const y4=[12, 86, 160];
  const cy4=y4.map(y=>y+h/2);  // 41,115,189

  const p12=bez(r1,cy,x2,cy), p23=bez(r2,cy,x3,cy);
  const paths4=cy4.map(cy4y=>bez(r3,cy,x4,cy4y));
  const ics4=[C.ig,C.fb,C.linkedin];
  const icons4=["📸","👍","💼"];
  const names4=["Instagram","Facebook","LinkedIn"];
  const subs4=["Story + Reel","Page feed","Company post"];
  const labs4=["reel","post","article"];
  return (
    <Canvas id="05">
      <N x={x1} y={yN} ic={C.webhook} icon="📝" name="Schedule" sub="Content brief" isTrigger w={w} h={h}/>
      <N x={x2} y={yN} ic={C.openai}  icon="✍️" name="AI Writer" sub="GPT-4 generate" w={w} h={h}/>
      <N x={x3} y={yN} ic={C.n8n}     icon="📅" name="Scheduler" sub="Post queue" w={w} h={h} numOut={3}/>
      {y4.map((y,i)=>(
        <N key={i} x={x4} y={y} ic={ics4[i]} icon={icons4[i]} name={names4[i]} sub={subs4[i]} w={w4} h={h}/>
      ))}
      <Conn x1={r1} y1={cy} x2={x2} y2={cy} label="brief"/>
      <Conn x1={r2} y1={cy} x2={x3} y2={cy} label="content{}"/>
      {cy4.map((cy4y,i)=>(
        <Conn key={i} x1={r3} y1={cy} x2={x4} y2={cy4y} c={ics4[i]} label={labs4[i]}/>
      ))}
      <Dot p={p12} dur="1.5s" c={C.webhook}/>
      <Dot p={p23} dur="1.6s" c="#6E54C8"/>
      {paths4.map((p,i)=>(
        <Dot key={i} p={p} dur={`${1.5+i*0.2}s`} c={ics4[i]} delay={`${i*0.3}s`}/>
      ))}
    </Canvas>
  );
}

/* ══════════════════════════════════════════════
   FLOW 06 — Reportes Automáticos
   Postgres + HTTP → Merge → AI Analyst → PDF Gen → Gmail
   ══════════════════════════════════════════════ */
function Flow06() {
  const h=56, w=130;
  const xA=12, yA=15,  cyA=yA+h/2;   // 43
  const xB=12, yB=160, cyB=yB+h/2;   // 188
  const xM=195, yM=83, cyM=yM+h/2;   // 111
  const xAI=375, yAI=yM, cyAI=cyM;
  const xPDF=548, yPDF=yM, cyPDF=cyM;
  const xE=680, yE=yM+9, h2=38;       // shorter last node
  const rA=xA+w, rB=xB+w, rM=xM+w, rAI=xAI+w, rPDF=xPDF+w;

  const pA=bez(rA,cyA,xM,cyM), pB=bez(rB,cyB,xM,cyM);
  const p12=bez(rM,cyM,xAI,cyAI), p23=bez(rAI,cyAI,xPDF,cyPDF);
  const p34=bez(rPDF,cyPDF,xE,yE+h2/2);
  return (
    <Canvas id="06">
      <N x={xA} y={yA}  ic={C.postgres} icon="🗄️" name="Postgres" sub="Sales data" isTrigger w={w} h={h}/>
      <N x={xB} y={yB}  ic={C.http}     icon="🌐" name="HTTP" sub="CRM API" isTrigger w={w} h={h}/>
      <N x={xM} y={yM}  ic={C.merge}    icon="🔗" name="Merge" sub="Combine data" w={w} h={h}/>
      <N x={xAI} y={yAI} ic={C.openai}   icon="📊" name="AI Analyst" sub="Generate insights" w={w} h={h}/>
      <N x={xPDF} y={yPDF} ic={C.code}    icon="📄" name="PDF Gen" sub="Fill template" w={w} h={h}/>
      <N x={xE} y={yE}   ic={C.gmail}    icon="📧" name="Gmail" sub="Weekly send" w={128} h={h2}/>

      <Conn x1={rA} y1={cyA} x2={xM} y2={cyM} label="sales[]" c={C.postgres}/>
      <Conn x1={rB} y1={cyB} x2={xM} y2={cyM} label="crm[]" c={C.http}/>
      <Conn x1={rM}  y1={cyM}   x2={xAI}  y2={cyAI}  label="dataset"/>
      <Conn x1={rAI} y1={cyAI}  x2={xPDF} y2={cyPDF} label="insights"/>
      <Conn x1={rPDF} y1={cyPDF} x2={xE}   y2={yE+h2/2} label="pdf_url" c={C.gmail}/>
      <Badge x={(rM+xAI)/2} y={cyM-20} n="50+" c={C.merge}/>

      <Dot p={pA}  dur="1.5s" c={C.postgres}/><Dot p={pB} dur="1.7s" c={C.http} delay="0.4s"/>
      <Dot p={p12} dur="1.4s" c="#6E54C8"/>
      <Dot p={p23} dur="1.8s" c="#6E54C8"/><Dot p={p34} dur="1.2s" c={C.gmail}/>
    </Canvas>
  );
}

/* ══════════════════════════════════════════════
   FLOW 07 — Notificaciones Inteligentes
   Webhook ⚡ → Classifier → Switch → WA | Email | Slack
   ══════════════════════════════════════════════ */
function Flow07() {
  const cy=115, h=58, w=150;
  const x1=15, x2=215, x3=415;
  const r1=x1+w, r2=x2+w, r3=x3+w;
  const yN=cy-h/2;
  const x4=610, w4=197;
  const y4=[12, 86, 160];
  const cy4=y4.map(y=>y+h/2);
  const ics4=[C.wa,C.gmail,C.slack];
  const icons4=["💬","📧","#️⃣"];
  const names4=["WhatsApp","Gmail","Slack"];
  const subs4=["Urgent: instant msg","Medium: rich email","Info: channel post"];
  const labs4=["urgent","medium","info"];

  const p12=bez(r1,cy,x2,cy), p23=bez(r2,cy,x3,cy);
  const paths4=cy4.map(cy4y=>bez(r3,cy,x4,cy4y));
  return (
    <Canvas id="07">
      <N x={x1} y={yN} ic={C.webhook} icon="⚡" name="Webhook" sub="Event received" isTrigger w={w} h={h}/>
      <N x={x2} y={yN} ic={C.openai}  icon="🔍" name="Classifier" sub="Type + urgency" w={w} h={h}/>
      <N x={x3} y={yN} ic={C.n8n}     icon="🔀" name="Switch" sub="Route by priority" w={w} h={h} numOut={3}/>
      {y4.map((y,i)=>(
        <N key={i} x={x4} y={y} ic={ics4[i]} icon={icons4[i]} name={names4[i]} sub={subs4[i]} w={w4} h={h}/>
      ))}
      <Conn x1={r1} y1={cy} x2={x2} y2={cy} label="event{}"/>
      <Conn x1={r2} y1={cy} x2={x3} y2={cy} label="type+pri"/>
      {cy4.map((cy4y,i)=>(
        <Conn key={i} x1={r3} y1={cy} x2={x4} y2={cy4y} c={ics4[i]} label={labs4[i]}/>
      ))}
      <Dot p={p12} dur="1.4s" c={C.webhook}/><Dot p={p23} dur="1.6s" c="#6E54C8"/>
      {paths4.map((p,i)=>(
        <Dot key={i} p={p} dur={`${1.5+i*0.2}s`} c={ics4[i]} delay={`${i*0.35}s`}/>
      ))}
    </Canvas>
  );
}

/* ══════════════════════════════════════════════
   FLOW 08 — Sincronización de Sistemas
   HubSpot ⚡ → Transform → Split Out → ERP | Sheets | WA
   ══════════════════════════════════════════════ */
function Flow08() {
  const cy=115, h=58, w=150;
  const x1=15, x2=215, x3=415;
  const r1=x1+w, r2=x2+w, r3=x3+w;
  const yN=cy-h/2;
  const x4=610, w4=197;
  const y4=[12, 86, 160];
  const cy4=y4.map(y=>y+h/2);
  const ics4=[C.sap,C.sheets,C.wa];
  const icons4=["🏭","📋","💬"];
  const names4=["ERP Write","Google Sheets","WhatsApp"];
  const subs4=["SAP update","Row append","Notify client"];
  const labs4=["erp_row","csv_row","summary"];

  const p12=bez(r1,cy,x2,cy), p23=bez(r2,cy,x3,cy);
  const paths4=cy4.map(cy4y=>bez(r3,cy,x4,cy4y));
  return (
    <Canvas id="08">
      <N x={x1} y={yN} ic={C.hubspot} icon="🏢" name="HubSpot" sub="Read contacts" isTrigger w={w} h={h}/>
      <N x={x2} y={yN} ic={C.set_}    icon="⚙️" name="Transform" sub="Remap fields" w={w} h={h}/>
      <N x={x3} y={yN} ic={C.n8n}     icon="🔀" name="Split Out" sub="Per record" w={w} h={h} numOut={3}/>
      {y4.map((y,i)=>(
        <N key={i} x={x4} y={y} ic={ics4[i]} icon={icons4[i]} name={names4[i]} sub={subs4[i]} w={w4} h={h}/>
      ))}
      <Conn x1={r1} y1={cy} x2={x2} y2={cy} label="contacts[]"/>
      <Conn x1={r2} y1={cy} x2={x3} y2={cy} label="schema{}"/>
      {cy4.map((cy4y,i)=>(
        <Conn key={i} x1={r3} y1={cy} x2={x4} y2={cy4y} c={ics4[i]} label={labs4[i]}/>
      ))}
      <Badge x={(r1+x2)/2} y={cy-20} n="247" c={C.hubspot}/>
      <Dot p={p12} dur="1.4s" c={C.hubspot}/><Dot p={p23} dur="1.5s" c="#6E54C8"/>
      {paths4.map((p,i)=>(
        <Dot key={i} p={p} dur={`${1.4+i*0.2}s`} c={ics4[i]} delay={`${i*0.3}s`}/>
      ))}
    </Canvas>
  );
}

/* ══════════════════════════════════════════════
   FLOW 09 — Mensajes Automáticos (Nurture)
   Register → Day1 Email → Day3 WA → Day7 Offer → Convert
   ══════════════════════════════════════════════ */
function Flow09() {
  const h=58, cy=115, w=138;
  const xs=[14,168,322,476,630];
  const ics  =[C.webhook,C.gmail,C.wa,C.email,C.n8n];
  const icons=["🔌","📧","💬","🎁","✅"];
  const names=["Trigger","Day 1 Email","Day 3 WA","Day 7 Offer","Convert"];
  const subs =["Lead signup","Welcome send","Follow-up","Promo deal","Deal close"];
  const labs =["lead_id","opened:✓","replied:✓","clicked:✓"];

  const paths=xs.slice(0,4).map((x,i)=>bez(x+w,cy,xs[i+1],cy));
  return (
    <Canvas id="09">
      {xs.map((x,i)=>(
        <N key={i} x={x} y={cy-h/2} ic={ics[i]} icon={icons[i]}
          name={names[i]} sub={subs[i]} w={w} h={h} isTrigger={i===0}/>
      ))}
      {paths.map((p,i)=>(
        <Conn key={i} x1={xs[i]+w} y1={cy} x2={xs[i+1]} y2={cy} label={labs[i]}/>
      ))}
      {paths.map((p,i)=>(
        <React.Fragment key={i}>
          <Dot p={p} dur={`${1.3+i*0.15}s`} c={ics[i]}/>
          <Dot p={p} dur={`${1.3+i*0.15}s`} c="#6E54C8" delay={`${(1.3+i*0.15)/2}s`}/>
          <Badge x={(xs[i]+w+xs[i+1])/2} y={cy-20} n="1"/>
        </React.Fragment>
      ))}
    </Canvas>
  );
}

/* ══════════════════════════════════════════════
   FLOW 10 — Inteligencia Artificial
   Input → NLP → AI Model (IF) → Execute | Learn Loop
   ══════════════════════════════════════════════ */
function Flow10() {
  const cy=115, h=58, w=150;
  const x1=15, x2=215, x3=415;
  const r1=x1+w, r2=x2+w, r3=x3+w;
  const yIF=cy-h/2;
  const ifTy=yIF+h/3, ifFy=yIF+2*h/3;
  const x4=608, w4=197;
  const y4a=22, y4b=152;
  const c4a=y4a+h/2, c4b=y4b+h/2;

  const p12=bez(r1,cy,x2,cy), p23=bez(r2,cy,x3,cy);
  const pTr=bez(r3,ifTy,x4,c4a), pFa=bez(r3,ifFy,x4,c4b);
  // Feedback arc
  const pfb=`M${x4+w4},${c4b} C${x4+w4+40},${c4b} ${x4+w4+40},28 ${x2+w/2},28`;
  return (
    <Canvas id="10">
      <N x={x1} y={yIF} ic={C.http}   icon="💬" name="User Input" sub="query.text" isTrigger w={w} h={h}/>
      <N x={x2} y={yIF} ic={C.code}   icon="🔤" name="NLP Parse" sub="Tokenize + embed" w={w} h={h}/>
      <N x={x3} y={yIF} ic={C.openai} icon="🤖" name="AI Model" sub="LLM inference" w={w} h={h} isIf/>
      <N x={x4} y={y4a} ic={C.n8n}    icon="⚡" name="Exec Action" sub="Workflow run" w={w4} h={h}/>
      <N x={x4} y={y4b} ic={C.set_}   icon="♻️" name="Learn Loop" sub="Retrain update" w={w4} h={h}/>

      <Conn x1={r1} y1={cy}    x2={x2} y2={cy}    label="query{}"/>
      <Conn x1={r2} y1={cy}    x2={x3} y2={cy}    label="tokens[]"/>
      <Conn x1={r3} y1={ifTy} x2={x4} y2={c4a} c="#10b981" label="execute"/>
      <Conn x1={r3} y1={ifFy} x2={x4} y2={c4b} c="#a78bfa" label="feedback"/>

      <path d={pfb} fill="none" stroke="#a78bfa" strokeWidth={1.5}
        strokeOpacity={0.35} strokeDasharray="6 5"/>
      <text x={x2+w/2+60} y={22} textAnchor="middle"
        fill="#a78bfa" fontSize={8} fontFamily="ui-monospace,monospace" opacity={0.65}>
        reinforcement_loop
      </text>
      <circle r={4} fill="#a78bfa" opacity={0.65}>
        <animateMotion dur="4s" repeatCount="indefinite" path={pfb}/>
      </circle>

      <Dot p={p12} dur="1.4s" c={C.http}/><Dot p={p12} dur="1.4s" c="#6E54C8" delay="0.7s"/>
      <Dot p={p23} dur="1.6s" c="#6E54C8"/>
      <Dot p={pTr} dur="1.5s" c="#10b981"/><Dot p={pFa} dur="2.0s" c="#a78bfa" delay="0.5s"/>
    </Canvas>
  );
}

/* ══════════════════════════════════════════════
   EXPORT
   ══════════════════════════════════════════════ */
export const FLOW_MAP: Record<string, React.FC> = {
  "01": Flow01, "02": Flow02, "03": Flow03, "04": Flow04, "05": Flow05,
  "06": Flow06, "07": Flow07, "08": Flow08, "09": Flow09, "10": Flow10,
};
