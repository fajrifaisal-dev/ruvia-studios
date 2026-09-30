"use client";

import { useState, useEffect, useRef } from "react";

type LineStyle = "cmd" | "out" | "out-muted" | "out-accent" | "out-success" | "blank";

interface TerminalLine {
  style: LineStyle;
  text: string;
  /** ms to wait BEFORE starting to type this line */
  pauseBefore?: number;
}

const LINES: TerminalLine[] = [
  { style: "cmd",        text: "whoami" },
  { style: "out",        text: "we are ruvia studios — software house · pontianak & surabaya" },
  { style: "blank",      text: "" },
  { style: "cmd",        text: 'build project --client="bisnis-anda"', pauseBefore: 400 },
  { style: "out-muted",  text: "planning scope..." },
  { style: "out-muted",  text: "designing ui...        ✓ done",  pauseBefore: 300 },
  { style: "out-muted",  text: "building components... ✓ done",  pauseBefore: 250 },
  { style: "out-accent", text: "deploying to production... ✓ live", pauseBefore: 200 },
  { style: "blank",      text: "" },
  { style: "cmd",        text: "status", pauseBefore: 500 },
  { style: "out-success",text: "● website-ready · SEO optimized · mobile-friendly" },
];

const CHAR_DELAY   = 28;   // ms per character
const CURSOR_BLINK = 530;  // ms blink interval

function lineClass(style: LineStyle): string {
  switch (style) {
    case "cmd":        return "text-white/80";
    case "out":        return "text-white/60 pl-2";
    case "out-muted":  return "text-white/40 pl-2";
    case "out-accent": return "text-[var(--accent)] font-bold pl-2";
    case "out-success":return "text-emerald-400 font-bold pl-2";
    default:           return "";
  }
}

export function TerminalTyping() {
  const [visibleLines, setVisibleLines] = useState<{ style: LineStyle; text: string }[]>([]);
  const [currentText, setCurrentText]   = useState("");
  const [lineIdx, setLineIdx]           = useState(0);
  const [charIdx, setCharIdx]           = useState(0);
  const [cursorOn, setCursorOn]         = useState(true);
  const [done, setDone]                 = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Cursor blink */
  useEffect(() => {
    const t = setInterval(() => setCursorOn((v) => !v), CURSOR_BLINK);
    return () => clearInterval(t);
  }, []);

  /* Auto-scroll to bottom */
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines, currentText]);

  /* Typing engine */
  useEffect(() => {
    if (lineIdx >= LINES.length) {
      setDone(true);
      return;
    }

    const line = LINES[lineIdx];

    /* blank line — push immediately, no typing */
    if (line.style === "blank") {
      const push = () => {
        setVisibleLines((prev) => [...prev, { style: "blank", text: "" }]);
        setLineIdx((i) => i + 1);
      };
      const t = setTimeout(push, line.pauseBefore ?? 0);
      return () => clearTimeout(t);
    }

    /* Wait pauseBefore, then type char by char */
    if (charIdx === 0 && line.pauseBefore) {
      const t = setTimeout(() => setCharIdx(0.5 as unknown as number), line.pauseBefore);
      // trick: set a tiny non-zero charIdx to skip the pause next render
      const t2 = setTimeout(() => setCharIdx(1), line.pauseBefore + 1);
      return () => { clearTimeout(t); clearTimeout(t2); };
    }

    if (charIdx < line.text.length) {
      const t = setTimeout(() => {
        setCurrentText(line.text.slice(0, charIdx + 1));
        setCharIdx((i) => i + 1);
      }, CHAR_DELAY);
      return () => clearTimeout(t);
    }

    /* Line finished — push to visible, reset */
    const t = setTimeout(() => {
      setVisibleLines((prev) => [...prev, { style: line.style, text: line.text }]);
      setCurrentText("");
      setCharIdx(0);
      setLineIdx((i) => i + 1);
    }, 80);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx]);

  const currentLine = lineIdx < LINES.length ? LINES[lineIdx] : null;
  const isTypingCmd = currentLine?.style === "cmd";

  return (
    <div className="rounded-2xl border border-white/10 bg-[#080b16] shadow-2xl overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/8 bg-white/[0.03]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
        </div>
        <span className="ml-3 text-xs text-white/25 font-mono">zsh — ruvia@studio</span>
      </div>

      {/* Terminal body */}
      <div
        ref={containerRef}
        className="p-6 font-mono text-[13px] leading-relaxed min-h-[280px] max-h-[340px] overflow-hidden"
      >
        {/* Rendered lines */}
        {visibleLines.map((l, i) =>
          l.style === "blank" ? (
            <div key={i} className="h-3" />
          ) : (
            <div key={i} className="flex items-start gap-2 mb-0.5">
              {l.style === "cmd" && <span className="text-[var(--accent)] select-none shrink-0">›</span>}
              <span className={lineClass(l.style)}>{l.text}</span>
            </div>
          )
        )}

        {/* Currently typing line */}
        {!done && currentLine && currentLine.style !== "blank" && (
          <div className="flex items-start gap-2 mb-0.5">
            {currentLine.style === "cmd" && (
              <span className="text-[var(--accent)] select-none shrink-0">›</span>
            )}
            <span className={lineClass(currentLine.style)}>
              {currentText}
              <span
                className={`inline-block w-[2px] h-[1em] ml-[1px] align-middle bg-current transition-opacity duration-100 ${
                  cursorOn ? "opacity-100" : "opacity-0"
                }`}
              />
            </span>
          </div>
        )}

        {/* Idle cursor after done */}
        {done && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[var(--accent)] select-none">›</span>
            <span
              className={`inline-block w-[2px] h-[1em] align-middle bg-white/50 transition-opacity duration-100 ${
                cursorOn ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        )}
      </div>

      {/* Live demo card */}
      <div className="mx-4 mb-4 rounded-xl bg-white/[0.04] border border-white/10 p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-white/40 font-mono">demo.ruviastudios.site</span>
          </div>
          <span className="text-[10px] font-black px-2 py-0.5 bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 rounded-full tracking-wider">
            LIVE
          </span>
        </div>
        <p className="text-xs text-white/45 mb-3 leading-relaxed">
          Preview proyek aktif · Hello Friday Studio &amp; Kazi Nail Art
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://whimsical-stardust-cde28a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors"
          >
            Lihat Demo ↗
          </a>
          <a
            href="/portfolio"
            className="text-xs text-white/35 hover:text-white/60 transition-colors font-medium"
          >
            Semua Portofolio →
          </a>
        </div>
      </div>
    </div>
  );
}
