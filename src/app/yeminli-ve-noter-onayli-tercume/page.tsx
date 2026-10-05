"use client";

import { motion, Variants } from "framer-motion";
import { FileSignature, CheckCircle2, ChevronRight, Stamp, Languages, Building2, BookOpen, MessageSquare, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function YeminliTercume() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-12 sm:space-y-16"
      >
        {/* HERO */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} className="inline-flex items-center justify-center p-3 sm:p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-indigo-400 mb-4">
            <FileSignature className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent tracking-tight">
            Yeminli Tercüme ve Noter Onaylı Çeviri Hizmetleri
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
            İdari mercilere, yargı organlarına ve yabancı temsilciliklere ibraz edilecek resmi evrakların yeminli tercüman kaşeli çevirisi ve noter tasdik süreçleri mevzuata uygun şekilde tanzim edilmektedir. İşlemler resmi biçim şartlarına bağlı kalınarak yürütülür.
          </motion.p>
        </div>

        {/* GRID CARDS (Bölüm 1 & Bölüm 2) */}
        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Bölüm 1 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-indigo-500/30 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-100">Başlıca Çeviri ve Metin Hizmeti Alanları</h2>
            </div>
            <ul className="space-y-3.5">
              {[
                "Nüfus, kimlik, pasaport, medeni durum ve aile cüzdanı belgeleri",
                "Diploma, transkript, denklik ve eğitim evrakları",
                "Adli sicil, ikametgah, mahkeme kararları ve hukuki metinler",
                "Vekaletname, muvafakatname, taahhütname ve noterlik evrakları",
                "Ticari sicil, bilanço, imza sirküleri ve kurumsal şirket evrakları",
                "Resmi makamlara yönelik dilekçe tanzimi, beyanname ve başvuru formları",
                "Yurt içi ve yurt dışı kurumlara ibraz edilecek diğer tüm resmi evraklar"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bölüm 2 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-indigo-500/30 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                <Languages className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-100">Dil Kapsamı ve Apostil Süreci</h2>
            </div>
            <ul className="space-y-3.5">
              {[
                "Almanca Yeminli ve Noter Onaylı Tercüme",
                "İngilizce Yeminli ve Noter Onaylı Tercüme",
                "Fransızca Yeminli ve Noter Onaylı Tercüme",
                "Lahey Apostil Şerhi bilgilendirmesi ve yönlendirmesi",
                "Uluslararası geçerliliğe sahip evrak hazırlığı",
                "Konsolosluk standartlarına uygun terminolojik çeviri"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* HORIZONTAL STEPS (Bölüm 3) */}
        <motion.div variants={fadeInUp} className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-100 mb-8 text-center tracking-wide">Süreç Adımları</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-2">
            {[
              { num: 1, title: "Evrak İntikali" },
              { num: 2, title: "Terminolojik Çeviri" },
              { num: 3, title: "Kontrol ve Kaşe" },
              { num: 4, title: "Noter Tasdiki" },
              { num: 5, title: "Teslimat" }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-row sm:flex-col items-center gap-4 sm:gap-4 relative group">
                {/* Connector line for desktop */}
                {idx !== 4 && (
                  <div className="hidden sm:block absolute top-6 left-[60%] w-[80%] h-px bg-white/10" />
                )}
                {/* Connector line for mobile */}
                {idx !== 4 && (
                  <div className="block sm:hidden absolute left-[1.15rem] top-10 w-px h-6 bg-white/10" />
                )}
                
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-zinc-900 border border-indigo-500/30 text-indigo-400 font-bold flex items-center justify-center relative z-10 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(79,70,229,0.15)]">
                  {step.num}
                </div>
                <div className="text-sm sm:text-sm md:text-base font-medium text-zinc-300 text-left sm:text-center group-hover:text-indigo-400 transition-colors">
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center">
          <Link
            href="https://wa.me/905426961732"
            target="_blank"
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all duration-300 bg-emerald-600 hover:bg-emerald-500 rounded-2xl active:scale-95 shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)] border border-emerald-500/50"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            WhatsApp ile Belge Gönder
          </Link>
          <Link
            href="tel:+905426961732"
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all duration-300 bg-white/[0.03] border border-white/10 rounded-2xl active:bg-white/5 hover:bg-white/[0.08] backdrop-blur-xl hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <Phone className="w-5 h-5 mr-2 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
            Telefonla Bilgi Al
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
