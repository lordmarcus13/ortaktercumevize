"use client";

import { motion, Variants } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Info,
  ArrowRight,
  FileSignature,
  Globe
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ContactDropdown } from "@/components/Header";

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

export default function Home() {
  return (
    <>
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
                Ortak Tercüme ve Vize Danışmanlık bünyesinde yeminli tercüme ve noter tasdikli tercüme hizmetleri sunulmaktadır. Vize danışmanlığı kapsamında başvuru süreçlerine yönelik resmi evrak hazırlığı, başvuru dosyalarının oluşturulması ve süreç takibi sağlanmaktadır. Tüm işlemler, ilgili konsolosluklar ile resmi makamların güncel idari mevzuat ve prosedürlerine uygun olarak yürütülür.
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
            className="mb-12 sm:mb-16"
          >
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent tracking-tight">
                Hizmetlerimiz
              </h2>
              <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2 font-light">
                Tüm yurt dışı ve resmi işlemlerinizde profesyonel destek sağlıyoruz. İhtiyacınıza yönelik sunduğumuz çözümler:
              </p>
            </div>


          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10"
          >
            {/* SERVICE CARD 1 */}
            <motion.article
              variants={fadeInUp}
              className="group relative p-6 sm:p-10 bg-white/[0.02] backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-indigo-500/40 hover:shadow-[0_20px_40px_rgba(79,70,229,0.15)] overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center rounded-xl sm:rounded-2xl bg-zinc-800/80 border border-white/10 text-indigo-400 group-hover:scale-110 transition-all duration-500 shadow-inner group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30">
                    <FileSignature className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors leading-tight tracking-wide">
                    Yeminli Tercüme ve Noter Onaylı Tercüme
                  </h3>
                </div>
                
                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-1">
                  {[
                    "Yeminli tercüman kaşeli resmi belge çevirileri",
                    "Noter Tasdikli Tercüme",
                    "Nüfus Kayıt Örneği, diploma, adli tercümeler ve diğer evrak tercümeleri",
                    "Almanca, İngilizce, Fransızca ve diğer dillerde apostil uyumlu çeviriler"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 shadow-[0_0_8px_rgba(79,70,229,0.8)]" />
                      <span className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/yeminli-ve-noter-onayli-tercume"
                  className="mt-auto group/btn inline-flex items-center text-sm sm:text-base font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Tercüme Süreci ve Detaylar
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/btn:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.article>

            {/* SERVICE CARD 2 */}
            <motion.article
              variants={fadeInUp}
              className="group relative p-6 sm:p-10 bg-white/[0.02] backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-emerald-500/40 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center rounded-xl sm:rounded-2xl bg-zinc-800/80 border border-white/10 text-emerald-400 group-hover:scale-110 transition-all duration-500 shadow-inner group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors leading-tight tracking-wide">
                    Vize Danışmanlığı ve Başvuru Yönetimi
                  </h3>
                </div>
                
                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-1">
                  {[
                    "Konsolosluk ve resmi aracı kurum randevu süreci ve danışmanlığı",
                    "Başvuru türüne göre (turistik, ticari, aile birleşimi) evrak listesi tanzimi",
                    "Uçak ve otel ön rezervasyon dökümleri",
                    "Dosya kontrolü ve mülakat/teslim aşamasına kadar süreç takibi"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                      <span className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/vize-danismanligi"
                  className="mt-auto group/btn inline-flex items-center text-sm sm:text-base font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Vize Başvuru Süreci ve Detaylar
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/btn:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.article>

          </motion.div>
          
          {/* TRUST CALLOUT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp} 
            className="bg-zinc-900/50 border border-amber-500/30 p-6 sm:p-8 rounded-2xl sm:rounded-3xl max-w-4xl mx-auto backdrop-blur-xl shadow-2xl relative overflow-hidden mt-12 sm:mt-16 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-100" />
            <div className="relative z-10">
              <h4 className="text-lg sm:text-xl font-bold text-amber-500 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                </div>
                Çalışma İlkeleri ve Süreç Güvenliği
              </h4>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-light">
                Ortak Tercüme ve Vize Danışmanlık bünyesindeki tüm dosya hazırlık ve randevu takvim işlemleri üçüncü taraf otomatik yazılımlar (botlar) yerine doğrudan uzman personelimiz tarafından takip edilir. Süreç boyunca spekülatif taahhütlerden uzak, yalnızca yetkili kurumların resmi tebliğ ve prosedürlerine dayalı şeffaf bir hizmet sunulur.
              </p>
            </div>
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
    </>
  );
}
