import React from "react";

interface DeviceFrameProps {
  type?: "browser" | "mobile";
  url?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function DeviceFrame({
  type = "browser",
  url = "ruviastudios.site",
  title,
  children,
  className = "",
}: DeviceFrameProps) {
  if (type === "mobile") {
    return (
      <div
        className={`relative mx-auto max-w-[300px] rounded-[36px] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden ${className}`}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-gray-900 rounded-b-xl z-20 flex items-center justify-center">
          <div className="w-10 h-1 bg-gray-800 rounded-full"></div>
        </div>
        {/* Screen */}
        <div className="relative aspect-[9/19] w-full overflow-hidden bg-white rounded-[28px] pt-5">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-2xl overflow-hidden ${className}`}
    >
      {/* Browser Bar */}
      <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--surface-alt)] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-amber-400"></div>
          <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
        </div>
        <div className="mx-4 flex flex-1 max-w-sm items-center justify-center rounded-md border border-[var(--line)] bg-[var(--bg)] px-3 py-1 text-xs text-[var(--ink-muted)] truncate font-mono">
          <span className="opacity-50 select-none">https://</span>
          <span className="font-medium text-[var(--ink)]">{url}</span>
        </div>
        {title ? (
          <span className="text-xs font-semibold text-[var(--ink-muted)] hidden sm:inline-block">
            {title}
          </span>
        ) : (
          <div className="w-12"></div>
        )}
      </div>

      {/* Frame Content */}
      <div className="relative w-full overflow-hidden bg-[var(--bg)]">
        {children}
      </div>
    </div>
  );
}
