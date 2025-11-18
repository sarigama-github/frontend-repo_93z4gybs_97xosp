import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChildDashboard from './components/ChildDashboard'
import ADDIE from './components/ADDIE'
import AISection from './components/AISection'
import ParentsTeachers from './components/ParentsTeachers'
import DesignSystem from './components/DesignSystem'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <ChildDashboard />
      <ADDIE />
      <AISection />
      <ParentsTeachers />
      <DesignSystem />
      <footer className="py-10 text-center text-white/70">
        © 2025 Literasi+ Kids — Blue • Purple • Pink vibes
      </footer>
    </div>
  )
}

export default App
