import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 border-t border-white/10 bg-zinc-950/80 backdrop-blur-2xl mt-auto">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-12">
        <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
          <Link href="/" className="inline-block">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden mb-3 sm:mb-4 mx-auto lg:mx-0 opacity-80 hover:opacity-100 transition-opacity ring-2 ring-white/10">
              <Image src="/logo.png" alt="Ortak Tercüme Logo" fill className="object-cover" />
            </div>
          </Link>
          <p className="text-[13px] sm:text-sm text-zinc-400 max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
            16 yıllık sektörel deneyim doğrultusunda; yurt dışı vize danışmanlığı, yeminli tercüme süreçlerinde resmi mevzuata uygun danışmanlık ve evrak yönetimi sağlanmaktadır.
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
  );
}
