import { Star, Award, Crown, Rocket, Sparkles } from 'lucide-react'

export default function ChildDashboard() {
  return (
    <section id="child-dashboard" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Card: Profile & Progress */}
          <div className="rounded-[28px] bg-white/10 backdrop-blur-md border border-white/20 p-6 text-white shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center text-4xl">🧸</div>
              <div>
                <div className="text-xl font-bold">Halo, Lala!</div>
                <div className="text-white/80">Level 3 • 240 XP</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2"><span>Menuju Level 4</span><span>60%</span></div>
              <div className="h-3 rounded-full bg-white/20 overflow-hidden">
                <div className="h-full w-[60%] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />
              </div>
              <div className="mt-4 flex gap-3">
                <span className="inline-flex items-center gap-1 rounded-2xl bg-white/10 px-3 py-1"><Star size={16}/> 25</span>
                <span className="inline-flex items-center gap-1 rounded-2xl bg-white/10 px-3 py-1"><Award size={16}/> 4 badges</span>
                <span className="inline-flex items-center gap-1 rounded-2xl bg-white/10 px-3 py-1"><Crown size={16}/> Top 10%</span>
              </div>
            </div>
          </div>

          {/* Card: Daily Quests */}
          <div className="rounded-[28px] bg-white/10 backdrop-blur-md border border-white/20 p-6 text-white shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">Misi Harian</div>
              <Sparkles className="text-yellow-300" />
            </div>
            <div className="mt-4 grid gap-3">
              {[
                {t:"Jawab 5 soal keamanan internet", r:"+10 XP"},
                {t:"Mainkan puzzle perangkat", r:"+1 ⭐"},
                {t:"Selesaikan 1 mini‑game", r:"+15 XP"},
              ].map((q,i)=> (
                <div key={i} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                  <span>{q.t}</span>
                  <span className="text-yellow-300 font-bold">{q.r}</span>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full rounded-2xl bg-white text-slate-900 py-3 font-bold shadow hover:shadow-lg active:scale-95 transition inline-flex items-center justify-center gap-2"><Rocket size={18}/> Mulai!</button>
          </div>
        </div>

        {/* Topics */}
        <div className="mt-8 grid md:grid-cols-4 gap-4">
          {[
            {label:'Keamanan Internet', emoji:'🔒', color:'from-blue-400 to-blue-600'},
            {label:'Perangkat Digital', emoji:'💻', color:'from-purple-400 to-purple-600'},
            {label:'Etika Digital', emoji:'😊', color:'from-pink-400 to-pink-600'},
            {label:'Berpikir Kritis', emoji:'🧠', color:'from-amber-400 to-rose-500'},
          ].map((t, i)=> (
            <div key={i} className={`rounded-[28px] p-5 text-white bg-gradient-to-br ${t.color} shadow-lg`}>
              <div className="text-3xl">{t.emoji}</div>
              <div className="mt-2 font-bold">{t.label}</div>
              <div className="text-white/90 text-sm">Pilih & mainkan mini‑game tematik</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
