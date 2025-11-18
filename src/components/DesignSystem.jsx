export default function DesignSystem() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 text-white">
        <h3 className="text-2xl md:text-3xl font-black">Design System</h3>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="rounded-[28px] bg-white/10 border border-white/20 p-6">
            <div className="font-bold">Palet Warna</div>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {["#3B82F6","#8B5CF6","#EC4899","#22D3EE","#F59E0B"].map((c,i)=> (
                <div key={i} className="h-10 rounded-2xl" style={{background: c}} />
              ))}
            </div>
          </div>
          <div className="rounded-[28px] bg-white/10 border border-white/20 p-6">
            <div className="font-bold">Tipografi</div>
            <div className="mt-2 space-y-1">
              <div className="text-3xl font-black">Manrope / 800</div>
              <div className="text-xl font-bold">Inter / 700</div>
              <div className="text-base">Inter / 500</div>
            </div>
          </div>
          <div className="rounded-[28px] bg-white/10 border border-white/20 p-6">
            <div className="font-bold">Komponen</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <button className="rounded-2xl bg-white text-slate-900 px-4 py-2 font-bold shadow">Primary</button>
              <button className="rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 font-bold shadow">Gradient</button>
              <div className="rounded-2xl bg-white/10 px-3 py-2">Badge 🔒</div>
              <div className="rounded-2xl bg-white/10 px-3 py-2">Progress ●●●●○</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
