"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Mail, FileSignature, Globe, ChevronRight } from "lucide-react";

export function ContactDropdown({ children, isHeader = false }: { children: React.ReactNode, isHeader?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${isHeader ? 'inline-block' : 'w-full sm:w-auto inline-block'}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer w-full">
        {children}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${isHeader ? 'right-0' : 'left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0'} mt-3 w-[calc(100vw-3rem)] max-w-[320px] sm:w-72 bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[100]`}
          >
            <div className="p-4 space-y-4">
              <div>
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Phone className="w-3 h-3" /> Ara
                </div>
                <div className="flex flex-col gap-1.5">
                  <a href="tel:+905435136713" className="text-sm font-medium text-zinc-100 hover:text-amber-400 transition-colors py-2 px-3 rounded-xl hover:bg-white/5 active:bg-white/10">+90 543 513 67 13</a>
                  <a href="tel:+905426961732" className="text-sm font-medium text-zinc-100 hover:text-amber-400 transition-colors py-2 px-3 rounded-xl hover:bg-white/5 active:bg-white/10">+90 542 696 17 32</a>
                </div>
              </div>
              
              <div className="h-px bg-white/10" />

              <div>
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <MessageCircle className="w-3 h-3" /> Whatsapp
                </div>
                <div className="flex flex-col gap-1.5">
                  <a href="https://wa.me/905435136713" target="_blank" className="text-sm font-medium text-zinc-100 hover:text-emerald-400 transition-colors py-2 px-3 rounded-xl hover:bg-white/5 active:bg-white/10">+90 543 513 67 13</a>
                  <a href="https://wa.me/905426961732" target="_blank" className="text-sm font-medium text-zinc-100 hover:text-emerald-400 transition-colors py-2 px-3 rounded-xl hover:bg-white/5 active:bg-white/10">+90 542 696 17 32</a>
                </div>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Mail className="w-3 h-3" /> E-posta Gönder
                </div>
                <a href="mailto:huseyinyakin.13@gmail.com" className="text-sm font-medium text-zinc-100 hover:text-amber-400 transition-colors py-2 px-3 rounded-xl hover:bg-white/5 active:bg-white/10 block truncate">
                  huseyinyakin.13@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ServicesDropdown({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div 
      className="relative inline-block" 
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {children}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[100]"
          >
            <div className="p-2 space-y-1">
              <Link href="/yeminli-ve-noter-onayli-tercume" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="bg-indigo-500/10 p-2 rounded-lg text-indigo-400 shrink-0">
                  <FileSignature className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">Yeminli ve Noter Onaylı Tercüme</div>
                </div>
              </Link>
              
              <Link href="/vize-danismanligi" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">Vize Danışmanlığı ve Başvuru Yönetimi</div>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900/60 backdrop-blur-xl border-b border-white/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group" aria-label="Ana Sayfa">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-lg shadow-black/50 transition-transform duration-300 group-hover:scale-105">
            <Image src="/logo.png" alt="Ortak Tercüme Logo" fill className="object-cover" />
          </div>
          <span className="font-bold text-base sm:text-lg md:text-xl bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent tracking-wide">
            Ortak Tercüme
          </span>
        </Link>
        <nav aria-label="Ana Menü">
          <ul className="flex items-center gap-3 sm:gap-4">
            <li>
              <ServicesDropdown>
                <div className="text-sm font-medium text-zinc-300 hover:text-zinc-100 transition-colors tracking-wide px-2 py-2">
                  Hizmetlerimiz
                </div>
              </ServicesDropdown>
            </li>
            <li>
              <ContactDropdown isHeader>
                <div className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-all shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] border border-indigo-500/50 backdrop-blur-sm">
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  İletişime Geç
                </div>
              </ContactDropdown>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
