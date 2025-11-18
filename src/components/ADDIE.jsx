export default function ADDIE() {
  return (
    <section id="addie" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-black text-white">Kerangka ADDIE</h2>
        <p className="text-white/80 mt-2">Model pengembangan: Analysis → Design → Development → Implementation → Evaluation</p>
        <div className="mt-6 grid md:grid-cols-5 gap-4">
          {[
            {t:'Analysis', d:'Profil anak 5–8, baseline literasi digital, preferensi topik.'},
            {t:'Design', d:'UI ramah anak, warna cerah, alur pendek, misi gamifikasi.'},
            {t:'Development', d:'Bangun mini‑game, konten interaktif, sistem XP/badge.'},
            {t:'Implementation', d:'Rilis untuk kelas/rumah, monitoring orang tua & guru.'},
            {t:'Evaluation', d:'Analisis performa, decision tree adaptif, iterasi konten.'},
          ].map((s,i)=> (
            <div key={i} className="rounded-[28px] bg-white/10 border border-white/20 p-5 text-white backdrop-blur-md">
              <div className="text-lg font-bold">{s.t}</div>
              <div className="text-white/80 text-sm mt-1">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
