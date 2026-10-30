"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, MessageSquare } from "lucide-react";
import { site } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.51-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const consultant = site.whatsapp.consultant;
  const whatsappUrl = getWhatsAppLink();

  // Close on Escape or click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const initials = consultant.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end"
    >
      {/* Popup Chat Card (Shown when opened) */}
      <div
        className={`transition-all duration-300 ease-out origin-bottom-right mb-3 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="w-[320px] sm:w-[350px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-4 sm:p-5 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-bold text-base tracking-tight">Halo 👋</h3>
            </div>
            <p className="text-xs text-emerald-50 leading-relaxed font-normal">
              Bersama Ruvia Studio, wujudkan website &amp; sistem bisnis impianmu! 🚀
            </p>
          </div>

          {/* Body Content */}
          <div className="p-3.5 bg-slate-50/60">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white hover:bg-emerald-50/40 p-3 rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-sm transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                {/* Avatar with Online Badge */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                    {!imageError && consultant.avatar ? (
                      <Image
                        src={consultant.avatar}
                        alt={consultant.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <span>{initials}</span>
                    )}
                  </div>
                  {/* Pulse online green indicator */}
                  <span className="absolute bottom-0 right-0 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
                  </span>
                </div>

                {/* Profile info */}
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition-colors truncate">
                    {consultant.name}
                  </div>
                  <div className="text-xs text-slate-500 truncate">
                    {consultant.role}
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-emerald-600 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                    <span>{consultant.status}</span>
                  </div>
                </div>

                {/* Direct WhatsApp button icon */}
                <div className="shrink-0 w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-emerald-600 transition-all">
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                </div>
              </div>
            </a>
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-white border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400">
              Biasanya membalas dalam hitungan menit
            </span>
          </div>
        </div>
      </div>

      {/* Floating Action Trigger Button */}
      <div className="flex items-center gap-2">
        {/* "Konsultasi Gratis" Pill badge (shown when closed) */}
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Konsultasi Gratis via WhatsApp"
            className="group cursor-pointer bg-white text-slate-800 text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-full shadow-lg border border-slate-200/80 hover:bg-slate-50 transition-all duration-200 flex items-center gap-2 hover:shadow-xl hover:translate-x-[-2px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Konsultasi Gratis</span>
          </button>
        )}

        {/* Main Circle Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Tutup chat WhatsApp" : "Buka chat WhatsApp"}
          className={`cursor-pointer w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
            isOpen
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : "bg-[#25D366] text-white hover:bg-[#20ba59] shadow-emerald-500/30"
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 stroke-[2.5]" />
          ) : (
            <WhatsAppIcon className="w-7 h-7 fill-white" />
          )}
        </button>
      </div>
    </div>
  );
}
