"use client";

import { motion, Variants } from "framer-motion";
import { Globe, CheckCircle2, ChevronRight, CalendarCheck, Plane, FolderOpen } from "lucide-react";
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
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-12 sm:space-y-16"
      >
        <div className="text-center space-y-6">
          <motion.div variants={fadeInUp} className="inline-flex items-center justify-center p-3 sm:p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-emerald-400 mb-4">
            <Globe className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-transparent tracking-tight">
            Vize Danışmanlığı ve Başvuru Yönetimi
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
            Schengen vizesi, aile birleşimi, turistik, ticari veya öğrenci vizeleri için konsolosluk prosedürlerine uygun eksiksiz dosya hazırlığı ve randevu sürecinin profesyonel takibi.
          </motion.p>
        </div>

        <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: FolderOpen,
              title: "Evrak Listesi Tanzimi",
              desc: "Başvuru türünüze (Turistik, Ticari, Eğitim vb.) özel, konsoloslukların en güncel kurallarına uygun evrak listesi belirleme ve dosya kontrolleri."
            },
            {
              icon: CalendarCheck,
              title: "Randevu Takibi",
              desc: "VFS Global, iDATA, TLScontact gibi yetkili aracı kurumlardan ve konsolosluklardan başvuruya uygun tarihli randevu işlemlerinin alınması."
            },
            {
              icon: Plane,
              title: "Uçak ve Otel Dökümü",
              desc: "Vize başvuru dosyasında zorunlu olarak sunulması gereken, gidiş-dönüş seyahat planına uygun uçak rezervasyonu ve konaklama belgelerinin düzenlenmesi."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
              <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20 inline-block mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-3">{feature.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-zinc-100 mb-8 text-center">Neden Danışmanlık Almalısınız?</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-light text-sm sm:text-base">Mevzuat değişiklikleri ve konsolosluk güncellemelerinden anında haberdar olma.</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-light text-sm sm:text-base">Hatalı form doldurma veya eksik evrak nedeniyle alınabilecek ret (red) riskini minimize etme.</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-light text-sm sm:text-base">Zaman kaybını önleyerek doğru başvuru merkezine, doğru vize tipiyle yönlendirilme.</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-light text-sm sm:text-base">Aile birleşimi gibi zorlu ve detaylı prosedürlerde sıfır hata prensibi.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-zinc-900/60 backdrop-blur-2xl border border-emerald-500/20 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-zinc-100 mb-4">Ücretsiz Ön Bilgi Alın</h3>
            <p className="text-zinc-400 mb-8 font-light leading-relaxed">
              Seyahat amacınızı ve durumunuzu bize WhatsApp hattımız üzerinden kısaca özetleyin; süreç haritanızı ve gerekli evrakları birlikte belirleyelim.
            </p>
            <Link
              href="https://wa.me/905426961732"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-2xl transition-all shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)] border border-emerald-500/50 group"
            >
              Danışmanla Görüş
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
