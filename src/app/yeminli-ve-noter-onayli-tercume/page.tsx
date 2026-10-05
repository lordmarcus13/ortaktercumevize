"use client";

import { motion, Variants } from "framer-motion";
import { FileSignature, CheckCircle2, ChevronRight, Stamp, Languages, Building2, BookOpen } from "lucide-react";
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
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-12 sm:space-y-16"
      >
        <div className="text-center space-y-6">
          <motion.div variants={fadeInUp} className="inline-flex items-center justify-center p-3 sm:p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 text-indigo-400 mb-4">
            <FileSignature className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent tracking-tight">
            Yeminli ve Noter Onaylı Tercüme
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
            Resmi evraklarınızın; başvuru yapacağınız kurum, konsolosluk veya resmi makamların standartlarına tam uyumlu olarak, yeminli tercüman kaşeli ve noter tasdikli tercümelerini hassasiyetle gerçekleştiriyoruz.
          </motion.p>
        </div>

        <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20">
                <Stamp className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-100">Noter Onaylı Çeviri</h2>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
              Yurt dışı evlilik, denklik başvuruları ve resmi kurumlara sunulacak tüm evrakların apostil sürecine hazır, eksiksiz tercümesi ve noter tasdik işlemleri.
            </p>
            <ul className="space-y-3">
              {["Diploma & Transkript", "Nüfus Kayıt Örneği", "Evlenme Cüzdanı", "Adli Sicil Kaydı"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20">
                <Languages className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-100">Tüm Dillerde Çeviri</h2>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
              Almanca, İngilizce, Fransızca, Arapça, Rusça başta olmak üzere tüm dillerde uzman yeminli tercüman kadrosuyla hızlı ve güvenilir hizmet.
            </p>
            <ul className="space-y-3">
              {["Ticari Sicil Gazetesi", "Vergi Levhası", "Vekaletname & Sözleşmeler", "Sağlık Raporları"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-zinc-900/60 backdrop-blur-2xl border border-indigo-500/20 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-zinc-100 mb-4">Evraklarınız İçin Hızlı Fiyat Alın</h3>
            <p className="text-zinc-400 mb-8 font-light leading-relaxed">
              Çeviri yapılacak belgelerinizi doğrudan WhatsApp üzerinden bize ileterek süre ve fiyatlandırma hakkında anında, şeffaf bilgi alabilirsiniz.
            </p>
            <Link
              href="https://wa.me/905435136713"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-2xl transition-all shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] border border-indigo-500/50 group"
            >
              WhatsApp ile Belge Gönder
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
