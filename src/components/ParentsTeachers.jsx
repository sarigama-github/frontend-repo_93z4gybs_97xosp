export default function ParentsTeachers() {
  return (
    <section id="parents" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-[28px] bg-white/10 border border-white/20 p-6 text-white backdrop-blur-md">
            <h3 className="text-2xl font-black">Monitoring Orang Tua & Guru</h3>
            <ul className="mt-3 text-white/90 list-disc pl-5 space-y-1">
              <li>Laporan perkembangan: akurasi, durasi, frekuensi</li>
              <li>Tingkat kesulitan adaptif dan progres level</li>
              <li>Area kekuatan/kelemahan per topik</li>
              <li>Rekomendasi aktivitas pendampingan</li>
            </ul>
          </div>
          <div className="rounded-[28px] bg-white/10 border border-white/20 p-6 text-white backdrop-blur-md">
            <h3 className="text-2xl font-black">Contoh Misi & Reward</h3>
            <div className="mt-3 grid gap-3">
              {[
                {t:'Jelajahi 1 topik baru', r:'+15 XP'},
                {t:'Raih akurasi ≥ 90% 2 kali', r:'+3 ⭐ + badge "Detektif Kecil"'},
                {t:'Login 3 hari beruntun', r:'+ badge "Rajin 3 Hari"'},
              ].map((m,i)=> (
                <div key={i} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                  <span>{m.t}</span>
                  <span className="text-yellow-300 font-bold">{m.r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
