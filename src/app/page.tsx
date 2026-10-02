"use client";

import { useState, useRef, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  FileSignature,
  Stamp,
  Globe,
  CalendarCheck,
  FolderOpen,
  Plane,
  Clock,
  Languages,
  MessageCircle,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  Info
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { title: "Yeminli Tercüme", icon: FileSignature },
  { title: "Noter Onaylı Tercüme", icon: Stamp },
  { title: "Vize Danışmanlık", icon: Globe },
  { title: "Randevu İşlemleri", icon: CalendarCheck },
  { title: "Vize Evrak Hazırlığı", icon: FolderOpen },
  { title: "Uçak ve Otel Rezerv.", icon: Plane },
  { title: "Süreçlerin Takibi", icon: Clock },
  { title: "Profesyonel Çeviri", icon: Languages },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

function ContactDropdown({ children, isHeader = false }: { children: React.ReactNode, isHeader?: boolean }) {
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

export default function Home() {
  return (
    <>
      {/* BACKGROUND VIDEO LAYER */}
      <div className="fixed inset-0 z-[-1] bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* REFINED WARM OVERLAY */}
        <div className="absolute inset-0 bg-zinc-950/75 backdrop-blur-[2px]" />
      </div>

      {/* STICKY HEADER */}
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
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="hidden md:block text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors tracking-wide"
                >
                  Hizmetlerimiz
                </button>
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

      <main className="min-h-screen pt-16 sm:pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* LEFT COLUMN: Copy & CTAs */}
              <motion.article
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-6 sm:space-y-8 text-center lg:text-left"
              >
                <motion.div variants={fadeInUp} className="inline-block">
                  <span className="px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 backdrop-blur-md">
                    Güvenilir & Şeffaf Süreç Yönetimi
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
                >
                  Ortak Tercüme ve <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-emerald-400">
                    Vize Danışmanlık
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
                >
                  16 yıllık sektörel tecrübemiz ve şeffaflık ilkemizle; yurt dışı aile birleşimi, tercüme ve vize danışmanlık süreçlerinizde profesyonel rehberlik sunuyoruz. Amacımız, karmaşık yasal prosedürleri sizin için anlaşılır hale getirmek.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full justify-center lg:justify-start">
                  <ContactDropdown>
                    <div className="group relative w-full inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-white transition-all duration-300 bg-indigo-600 hover:bg-indigo-500 rounded-xl sm:rounded-2xl active:scale-95 sm:hover:scale-105 shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] border border-indigo-500/50">
                      Hemen İletişime Geçin
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform sm:group-hover:-rotate-12" />
                    </div>
                  </ContactDropdown>
                  <Link
                    href="https://maps.app.goo.gl/PAGrYNVDjLYAd2tbA"
                    target="_blank"
                    className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-white transition-all duration-300 bg-white/[0.03] border border-white/10 rounded-xl sm:rounded-2xl active:bg-white/5 hover:bg-white/[0.08] backdrop-blur-xl hover:border-zinc-500/30 hover:shadow-lg hover:shadow-zinc-500/10"
                  >
                    Yol Tarifi Al
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-zinc-400 sm:group-hover:text-emerald-400 transition-colors" />
                  </Link>
                </motion.div>
              </motion.article>

              {/* RIGHT COLUMN: Logo & Badges Composition */}
              <motion.aside
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative hidden lg:flex items-center justify-center"
              >
                <div className="relative w-full max-w-md aspect-square rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl flex items-center justify-center p-8 hover:border-white/20 transition-colors duration-700">
                  <div className="absolute inset-0 rounded-[3rem] bg-amber-500/5 blur-3xl -z-10" />
                  
                  <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/5 bg-zinc-950">
                    <Image src="/logo.png" alt="Ortak Tercüme Logo Büyük" fill className="object-cover" priority />
                  </div>

                  {/* Trust Badges Floating */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-12 -left-8 bg-zinc-900/80 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3"
                  >
                    <div className="bg-amber-500/20 p-2 rounded-lg text-amber-500">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm text-zinc-100">16+ Yıl Tecrübe</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-16 -right-4 bg-zinc-900/80 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3"
                  >
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm text-zinc-100">Vize Danışmanlık</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-6 left-12 bg-zinc-900/80 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3"
                  >
                    <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm text-zinc-100">Noter Onaylı Çeviri</span>
                  </motion.div>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="px-4 sm:px-6 py-20 sm:py-32 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-12 sm:mb-20"
            >
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent tracking-tight">
                  Hizmetlerimiz
                </h2>
                <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2 font-light">
                  Tüm yurt dışı ve resmi işlemlerinizde profesyonel destek sağlıyoruz. İhtiyacınıza yönelik sunduğumuz çözümler:
                </p>
              </div>

              {/* NEW TRUST CALLOUT */}
              <div className="bg-zinc-900/50 border border-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl max-w-4xl mx-auto backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-amber-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h4 className="text-lg sm:text-xl font-bold text-amber-500 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
                      <Info className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                    </div>
                    %100 Manuel & Şeffaf Süreç Yönetimi
                  </h4>
                  <p className="text-zinc-300 leading-relaxed text-[13px] sm:text-sm md:text-base font-light">
                    İşletme herhangi bot veya benzeri yazılım kullanmaz. İşlemler ve süreçler doğrudan tarafımızca yürütülür ve takip edilir. Her şeyin eksiksiz ve güncel verilere göre hazırlanmasını sağlarız. Gerçek dışı veya yanıltıcı sözler vermeyiz.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6"
            >
              {services.map((service, idx) => (
                <motion.article
                  key={idx}
                  variants={fadeInUp}
                  className="group relative p-5 sm:p-8 bg-white/[0.02] backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:bg-white/[0.05] hover:border-zinc-700 hover:shadow-2xl overflow-hidden flex sm:block items-center gap-4 sm:gap-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 w-full flex sm:block items-center gap-4 sm:gap-0">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center rounded-xl sm:rounded-2xl bg-zinc-800/50 border border-white/10 sm:mb-6 text-zinc-400 group-hover:text-emerald-400 sm:group-hover:scale-110 transition-all duration-300 shadow-inner">
                      <service.icon className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-base sm:text-xl font-semibold text-zinc-200 group-hover:text-white transition-colors leading-tight tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTACT & LOCATION SECTION */}
        <section className="px-4 sm:px-6 py-20 sm:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-indigo-500/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-10 sm:mb-16 text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent tracking-tight">İletişim & Konum</h2>
              <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 font-light">
                Bizi ofisimizde ziyaret edebilir veya WhatsApp hatlarımız üzerinden anında destek alabilirsiniz.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
              {/* Info Column */}
              <motion.aside
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6 sm:space-y-8"
              >
                <motion.div variants={fadeInUp} className="bg-zinc-900/60 backdrop-blur-2xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl hover:border-zinc-700 transition-colors duration-500">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-5 sm:mb-6 tracking-wide">Ofis Adresimiz</h3>
                  <div className="flex items-start space-x-4 sm:space-x-5 text-zinc-300 mb-6 sm:mb-8">
                    <div className="p-3 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl text-amber-500 border border-white/10 shrink-0 shadow-inner">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-lg leading-relaxed text-zinc-200 font-light">
                        Yozgat/Sorgun - Yeşilöz Mah.<br />
                        Yılmaz Kılıçaslan Caddesi<br />
                        Bina No: 12 Kat: 2 No: 1
                      </p>
                    </div>
                  </div>

                  <Link
                    href="https://maps.app.goo.gl/PAGrYNVDjLYAd2tbA"
                    target="_blank"
                    className="group flex items-center justify-center w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-indigo-600 hover:bg-indigo-500 border border-indigo-500/50 text-white font-semibold text-sm sm:text-base rounded-xl sm:rounded-2xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] backdrop-blur-md"
                  >
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:animate-bounce" />
                    Google Haritalar'da Aç / Yol Tarifi Al
                  </Link>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-100 mb-3 sm:mb-4 pl-1 sm:pl-2 tracking-wide">Hızlı İletişim Hatları</h3>
                  
                  <Link
                    href="https://wa.me/905435136713"
                    target="_blank"
                    className="flex items-center justify-between p-4 sm:p-5 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:shadow-[0_5px_20px_rgba(16,185,129,0.1)] transition-all duration-300 group active:scale-[0.98]"
                    aria-label="WhatsApp İletişim 1"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mr-4 sm:mr-5 relative shrink-0 border border-emerald-500/20">
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl animate-ping bg-emerald-500/20" />
                      </div>
                      <div>
                        <span className="block font-bold text-sm sm:text-base text-zinc-200 group-hover:text-emerald-400 transition-colors tracking-wide">Whatsapp İletişim</span>
                        <span className="text-xs sm:text-sm text-zinc-400 font-light">+90 543 513 67 13</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  <Link
                    href="https://wa.me/905426961732"
                    target="_blank"
                    className="flex items-center justify-between p-4 sm:p-5 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-emerald-500/40 hover:bg-emerald-500/5 hover:shadow-[0_5px_20px_rgba(16,185,129,0.1)] transition-all duration-300 group active:scale-[0.98]"
                    aria-label="WhatsApp İletişim 2"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mr-4 sm:mr-5 relative shrink-0 border border-emerald-500/20">
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl animate-ping bg-emerald-500/20" />
                      </div>
                      <div>
                        <span className="block font-bold text-sm sm:text-base text-zinc-200 group-hover:text-emerald-400 transition-colors tracking-wide">Whatsapp İletişim</span>
                        <span className="text-xs sm:text-sm text-zinc-400 font-light">+90 542 696 17 32</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-1" />
                  </Link>

                </motion.div>
              </motion.aside>

              {/* Map Column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-full min-h-[300px] lg:min-h-[400px] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-md"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.8670257287154!2d35.178666369679426!3d39.809974471897135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407fd3b233228927%3A0xb556d331587f07be!2zT3J0YWsgVGVyY8O8bWUgdmUgVml6ZSBEYW7EscWfbWFubMSxaw!5e0!3m2!1sen!2str!4v1790964221235!5m2!1sen!2str" 
                  className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.1] opacity-90 sm:hover:grayscale-0 sm:hover:opacity-100 transition-all duration-500"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Ortak Tercüme ve Vize Danışmanlık Konumu"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 border-t border-white/10 bg-zinc-950/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-12">
          <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
            <Link href="/" className="inline-block">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden mb-3 sm:mb-4 mx-auto lg:mx-0 opacity-80 hover:opacity-100 transition-opacity ring-2 ring-white/10">
                <Image src="/logo.png" alt="Ortak Tercüme Logo" fill className="object-cover" />
              </div>
            </Link>
            <p className="text-[13px] sm:text-sm text-zinc-400 max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
              16 yıllık sektörel tecrübemizle yurt dışı aile birleşimi, tercüme ve vize danışmanlık süreçlerinizde güvenilir, şeffaf ve profesyonel rehberlik sunuyoruz.
            </p>
          </div>
          
          <div className="space-y-6 sm:space-y-8 text-[13px] sm:text-sm text-zinc-400/90 text-center lg:text-right font-light">
            <div className="bg-white/[0.03] p-4 rounded-xl lg:bg-transparent lg:p-0 border border-white/5 lg:border-transparent">
              <strong className="text-zinc-200 block mb-1.5 sm:mb-2 font-medium tracking-wide">Kişisel Verilerin Korunması:</strong>
              <p>Tarafımızla paylaşılan tüm bilgi ve evraklar, en üst düzey güvenlik standartlarıyla korunmakta olup, yasal zorunluluklar dışında hiçbir üçüncü şahısla paylaşılmaz.</p>
            </div>
            <div className="bg-white/[0.03] p-4 rounded-xl lg:bg-transparent lg:p-0 border border-white/5 lg:border-transparent">
              <strong className="text-zinc-200 block mb-1.5 sm:mb-2 font-medium tracking-wide">Bilgilendirme Beyanı:</strong>
              <p>Bu web sitesi, süreçler hakkında bilgi verme amacıyla hazırlanmış olup bir reklam aracı değildir. Firmamız hiçbir başvuru için &quot;kesin vize alma&quot; garantisi sunmaz. Hizmetlerimiz; konsoloslukların talep ettiği işlemlerin eksiksiz yapılması, evrakların doğru hazırlanması ve sürecin profesyonelce takip edilmesini kapsar. Vize onay kararı tamamen ilgili ülkenin resmi makamlarına aittir.</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col items-center justify-center text-[11px] sm:text-xs text-zinc-500 text-center font-light">
          <p>© {new Date().getFullYear()} Ortak Tercüme ve Vize Danışmanlık. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
}
