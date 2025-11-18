export default function AISection() {
  return (
    <section id="ai" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-[28px] bg-white/10 border border-white/20 p-6 text-white backdrop-blur-md">
          <h3 className="text-2xl md:text-3xl font-black">AI Decision Tree: Rekomendasi Aktivitas</h3>
          <p className="text-white/80 mt-2">Algoritma memilih tingkat kesulitan berikutnya berdasarkan akurasi & waktu penyelesaian.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white/5 p-4">
              <div className="font-bold">Input</div>
              <ul className="text-sm text-white/90 list-disc pl-5 mt-2">
                <li>Akurasi terakhir (0–1)</li>
                <li>Durasi pengerjaan</li>
                <li>Tingkat kesulitan terakhir</li>
                <li>Topik preferensi</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <div className="font-bold">Aturan</div>
              <ul className="text-sm text-white/90 list-disc pl-5 mt-2">
                <li>Akurasi ≥ 0.85 dan cepat → naik tingkat</li>
                <li>Akurasi 0.6–0.85 → tetap</li>
                <li>Akurasi < 0.6 → turunkan tingkat</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <div className="font-bold">Output</div>
              <ul className="text-sm text-white/90 list-disc pl-5 mt-2">
                <li>Next difficulty</li>
                <li>Daftar aktivitas terpilih</li>
                <li>Alasan rekomendasi</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm">
            <pre className="whitespace-pre-wrap leading-6">{`if (accuracy >= 0.85 && duration < 60) -> hard\nelse if (accuracy >= 0.6) -> same\nelse -> easy`}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}
