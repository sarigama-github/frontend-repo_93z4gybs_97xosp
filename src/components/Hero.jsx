import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,#60a5fa33,transparent_40%),radial-gradient(circle_at_80%_10%,#a78bfa2b,transparent_40%),radial-gradient(circle_at_50%_100%,#f472b633,transparent_40%)]" />
      <div className="absolute -top-20 left-0 right-0 h-[520px] md:h-[640px]">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative pt-64 pb-16 md:pt-80 md:pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_6px_40px_rgba(99,102,241,0.35)]">Implementasi Gamifikasi Literasi Digital pada Anak Usia Dini</h1>
            <p className="mt-4 text-white/90 text-lg md:text-xl">Belajar aman, seru, dan adaptif untuk usia 5–8 tahun. Dikemas dengan avatar lucu, misi harian, bintang, lencana, dan mini‑game edukatif.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#child-dashboard" className="rounded-2xl bg-white text-slate-900 px-5 py-3 font-bold shadow hover:shadow-lg active:scale-95 transition">Mulai Petualangan</a>
              <a href="#parents" className="rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-5 py-3 font-bold shadow hover:shadow-lg active:scale-95 transition">Lihat Laporan Orang Tua</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
