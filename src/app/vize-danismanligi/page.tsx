"use client";

import { motion, Variants } from "framer-motion";
import { Globe, CheckCircle2, Map, FileCheck2, Info, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function VizeDanismanligi() {
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
          <motion.div variants={fadeInUp} className="inline-flex items-center justify-center p-3 sm:p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-emerald-400 mb-4">
            <Globe className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent tracking-tight">
            Vize Danışmanlığı ve Başvuru Süreç Yönetimi
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
            Schengen bölgesi başta olmak üzere, uluslararası seyahatleriniz için gerekli vize başvurularınızda; en güncel konsolosluk prosedürlerine uygun eksiksiz dosya tanzimi ve resmi mülakat sürecine hazırlık aşamalarında profesyonel danışmanlık sağlıyoruz.
          </motion.p>
        </div>

        {/* GRID CARDS (Bölüm 1 & Bölüm 2) */}
        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Bölüm 1 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/30 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                <Map className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-100">Başvuru Kapsamları</h2>
            </div>
            <ul className="space-y-3.5">
              {[
                "Schengen Vize Başvuruları (Turistik, Ticari, Aile Ziyareti)",
                "Aile Birleşimi Ulusal D Tipi Vize Başvuruları",
                "Mavi Kart ve Çalışma İzni Vizeleri",
                "Erasmus ve Uzun Dönem Öğrenci Vizeleri",
                "Amerika, İngiltere, Kanada Vize Danışmanlığı",
                "Transit ve Fuara Katılım Vizeleri"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bölüm 2 */}
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/30 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-100">Danışmanlık Kapsamı ve Dosya Yönetimi</h2>
            </div>
            <ul className="space-y-3.5">
              {[
                "Yetkili kurum ve konsolosluk randevu takvimi yönetimi",
                "Başvuru kategorisine özel resmi evrak ve dosya tanzimi",
                "Uluslararası mevzuata uygun resmi başvuru formlarının tanzimi",
                "Zorunlu seyahat belgeleri ve başvuru eklerinin hazırlanması",
                "Konsolosluk kabul şartlarına uygun dosya denetimi ve süreç takibi"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* BÖLÜM 3 (Bilgilendirme/Uyarı Kartı) */}
        <motion.div variants={fadeInUp} className="bg-zinc-900/50 border border-amber-500/30 p-6 sm:p-8 rounded-2xl sm:rounded-3xl max-w-4xl mx-auto backdrop-blur-xl shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-100" />
          <div className="relative z-10">
            <h4 className="text-lg sm:text-xl font-bold text-amber-500 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
                <Info className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
              </div>
              İşleyiş ve Prensipler
            </h4>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-light">
              Tüm vize süreçlerinde onay ya da ret yetkisi (nihai karar) <strong>tamamen ilgili ülkenin konsolosluklarına / büyükelçiliklerine aittir.</strong> Hiçbir danışmanlık firması vize sonucunu garanti edemez. Sunduğumuz hizmet, başvuru dosyanızın yetkili mercilerin talep ettiği prosedürlere uygun, eksiksiz ve yasal formatta hazırlanmasını; randevu sürecinin takibini ve bürokratik engellerin en aza indirilmesini kapsar.
            </p>
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
            WhatsApp ile Randevu / Bilgi
          </Link>
          <Link
            href="tel:+905426961732"
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all duration-300 bg-white/[0.03] border border-white/10 rounded-2xl active:bg-white/5 hover:bg-white/[0.08] backdrop-blur-xl hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10"
          >
            <Phone className="w-5 h-5 mr-2 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
            Doğrudan Ara
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
