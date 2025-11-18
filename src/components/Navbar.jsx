import { Menu, Star, Award, Home, User } from 'lucide-react'

export default function Navbar() {
  return (
    <div className="w-full sticky top-0 z-30">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-inner text-white font-black">L</div>
            <div className="text-white font-bold tracking-tight text-lg">Literasi+ Kids</div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white/90">
            <a href="#features" className="hover:text-white transition">Fitur</a>
            <a href="#addie" className="hover:text-white transition">ADDIE</a>
            <a href="#ai" className="hover:text-white transition">AI</a>
            <a href="#parents" className="hover:text-white transition">Orang Tua & Guru</a>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-white text-slate-900 px-4 py-2 font-semibold shadow hover:shadow-lg active:scale-95 transition"><Star size={18}/> Coba Sekarang</button>
            <button className="md:hidden text-white/90"><Menu/></button>
          </div>
        </div>
      </div>
    </div>
  )
}
