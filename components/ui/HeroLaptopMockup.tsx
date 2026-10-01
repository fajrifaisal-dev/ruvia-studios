"use client";

/**
 * HeroLaptopMockup
 * CSS-only premium laptop frame with an embedded dark SaaS dashboard UI.
 * No external images needed — fully self-contained.
 */
export function HeroLaptopMockup() {
  const transactions = [
    { name: "Fajri Faisal", amount: "Rp 2.500.000", status: "Selesai" },
    { name: "Budi Santoso", amount: "Rp 1.800.000", status: "Proses" },
    { name: "Rini Wulandari", amount: "Rp 3.200.000", status: "Selesai" },
  ];

  return (
    <div className="relative w-full max-w-[560px] select-none">

      {/* Ambient glow behind screen */}
      <div
        className="absolute -inset-10 rounded-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 55%, rgba(99,102,241,0.18) 0%, transparent 68%)",
          filter: "blur(30px)",
        }}
      />

      {/* ── Laptop lid ── */}
      <div
        className="relative rounded-[14px] overflow-hidden"
        style={{
          background: "linear-gradient(150deg, #2d3748 0%, #1e2433 60%, #0d1117 100%)",
          border: "1.5px solid rgba(255,255,255,0.09)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,0,0,0.5)",
        }}
      >
        {/* Camera notch bar */}
        <div className="flex items-center justify-center" style={{ height: "24px" }}>
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#334155",
            }}
          />
        </div>

        {/* Screen */}
        <div
          className="overflow-hidden"
          style={{
            margin: "0 8px 8px",
            borderRadius: "8px",
            aspectRatio: "16/10",
            background: "#0b1120",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Dashboard layout */}
          <div style={{ display: "flex", height: "100%", fontSize: 0 }}>

            {/* Sidebar */}
            <div
              style={{
                width: "12%",
                background: "#080e1a",
                borderRight: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "12px 0",
                gap: "10px",
              }}
            >
              {/* Logo */}
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "7px",
                  background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: 900,
                  color: "#fff",
                  marginBottom: "4px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                R
              </div>

              {/* Nav icons */}
              {[true, false, false, false, false].map((active, i) => (
                <div
                  key={i}
                  style={{
                    width: "28px",
                    height: "20px",
                    borderRadius: "5px",
                    background: active ? "rgba(99,102,241,0.2)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 16 16" fill={active ? "#818cf8" : "#283448"}>
                    <rect width="6" height="6" rx="1" />
                    <rect x="8" width="6" height="6" rx="1" />
                    <rect y="8" width="6" height="6" rx="1" />
                    <rect x="8" y="8" width="6" height="6" rx="1" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "12px",
                gap: "8px",
                overflow: "hidden",
              }}
            >
              {/* Topbar */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#e2e8f0", fontFamily: "Inter, sans-serif" }}>
                  Dashboard
                </span>
                <div style={{ display: "flex", gap: "6px" }}>
                  <div style={{ width: "44px", height: "12px", borderRadius: "4px", background: "rgba(99,102,241,0.2)" }} />
                  <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#1e293b" }} />
                </div>
              </div>

              {/* Stats row */}
              <div style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr 1fr", gap: "6px" }}>
                {/* Revenue card */}
                <div
                  style={{
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #1e1b4b 0%, #172035 100%)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    padding: "10px 11px",
                  }}
                >
                  <div style={{ fontSize: "7px", color: "#94a3b8", marginBottom: "3px", fontFamily: "Inter, sans-serif" }}>
                    Total Pendapatan
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: 900, color: "#fff", lineHeight: 1, fontFamily: "Inter, sans-serif" }}>
                    Rp 125jt
                  </div>
                  <div style={{ fontSize: "7px", color: "#6ee7b7", marginTop: "2px", fontFamily: "Inter, sans-serif" }}>
                    ↑ 18% bulan ini
                  </div>
                  {/* Sparkline */}
                  <svg viewBox="0 0 80 22" style={{ width: "100%", height: "18px", marginTop: "5px" }}>
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polygon points="0,18 12,14 24,16 36,9 48,11 60,5 72,7 80,2 80,22 0,22" fill="url(#g1)" />
                    <polyline points="0,18 12,14 24,16 36,9 48,11 60,5 72,7 80,2" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Highlight dot */}
                    <circle cx="80" cy="2" r="2.5" fill="#818cf8" />
                  </svg>
                </div>

                {/* Mini stat 1 */}
                <div style={{ borderRadius: "10px", background: "#111827", border: "1px solid rgba(255,255,255,0.05)", padding: "10px", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <div style={{ fontSize: "7px", color: "#64748b", fontFamily: "Inter, sans-serif" }}>Proyek Aktif</div>
                  <div style={{ fontSize: "20px", fontWeight: 900, color: "#e2e8f0", lineHeight: 1, fontFamily: "Inter, sans-serif" }}>12</div>
                  <div style={{ fontSize: "7px", color: "#818cf8", fontFamily: "Inter, sans-serif" }}>+3 baru</div>
                </div>

                {/* Mini stat 2 */}
                <div style={{ borderRadius: "10px", background: "#111827", border: "1px solid rgba(255,255,255,0.05)", padding: "10px", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <div style={{ fontSize: "7px", color: "#64748b", fontFamily: "Inter, sans-serif" }}>Klien Baru</div>
                  <div style={{ fontSize: "20px", fontWeight: 900, color: "#e2e8f0", lineHeight: 1, fontFamily: "Inter, sans-serif" }}>7</div>
                  <div style={{ fontSize: "7px", color: "#34d399", fontFamily: "Inter, sans-serif" }}>↑ aktif</div>
                </div>
              </div>

              {/* Transaction list */}
              <div style={{ borderRadius: "10px", background: "#111827", border: "1px solid rgba(255,255,255,0.05)", padding: "8px 10px", flex: 1 }}>
                <div style={{ fontSize: "7px", color: "#64748b", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "6px", fontFamily: "Inter, sans-serif" }}>
                  Transaksi Terbaru
                </div>
                {transactions.map((tx, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingBottom: i < 2 ? "5px" : 0,
                      marginBottom: i < 2 ? "5px" : 0,
                      borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background:
                            i === 0 ? "linear-gradient(135deg,#6366f1,#8b5cf6)"
                            : i === 1 ? "linear-gradient(135deg,#0ea5e9,#38bdf8)"
                            : "linear-gradient(135deg,#10b981,#34d399)",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: "8px", color: "#cbd5e1", fontWeight: 500, fontFamily: "Inter, sans-serif" }}>
                        {tx.name}
                      </span>
                    </div>
                    <span style={{ fontSize: "8px", color: "#94a3b8", fontFamily: "Inter, sans-serif" }}>
                      {tx.amount}
                    </span>
                    <span
                      style={{
                        fontSize: "7px",
                        fontWeight: 700,
                        padding: "2px 6px",
                        borderRadius: "20px",
                        background: tx.status === "Selesai" ? "rgba(16,185,129,0.15)" : "rgba(245,158,11,0.15)",
                        color: tx.status === "Selesai" ? "#34d399" : "#fbbf24",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {tx.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hinge strip ── */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, #111827 0%, #2d3748 50%, #111827 100%)",
        }}
      />

      {/* ── Base / palm-rest ── */}
      <div
        style={{
          height: "22px",
          borderRadius: "0 0 14px 14px",
          background: "linear-gradient(180deg, #2a3142 0%, #141c2e 100%)",
          border: "1.5px solid rgba(255,255,255,0.07)",
          borderTop: "none",
          position: "relative",
        }}
      >
        {/* Touchpad hint */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "5px",
            width: "50px",
            height: "6px",
            borderRadius: "3px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        />
      </div>

      {/* ── Desk shadow ── */}
      <div
        style={{
          margin: "3px auto 0",
          width: "75%",
          height: "8px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.55)",
          filter: "blur(10px)",
        }}
      />
    </div>
  );
}
