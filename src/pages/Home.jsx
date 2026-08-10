import Header from "../components/Header"
import Hero from "../components/Hero"
import OpeningStatus from "../components/OpeningStatus"
import HowItWorks from "../components/HowItWorks"
//import InfoCards from "../components/InfoCards"
import MobileWorkshop from "../components/MobileWorkshop"
import FAQ from "../components/FAQ"
import EventCalendar from "../components/EventCalendar"
import Footer from "../components/Footer"

function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[var(--bg)] p-2 text-[var(--text)] sm:p-3">
      <div className="mx-auto w-full max-w-[1400px] min-w-0 overflow-hidden">
        <div className="grid w-full min-w-0 grid-cols-[minmax(0,1fr)] gap-3 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.95fr)]">
          <section className="grid w-full min-w-0 grid-cols-[minmax(0,1fr)] gap-3 overflow-hidden">
            <div className="w-full min-w-0 overflow-hidden rounded-2xl bg-[var(--surface)]">
              <Header />
              <Hero />
              <HowItWorks />
            </div>

            <EventCalendar />
            <Footer />
          </section>

          <section className="grid w-full min-w-0 grid-cols-[minmax(0,1fr)] gap-3 overflow-hidden">
            <OpeningStatus />
            {/* <InfoCards /> */}
            <MobileWorkshop />
            <FAQ />
          </section>
        </div>
        
        <div className="mt-6 pb-5 flex items-center justify-between px-2 text-xs text-white/40">
          <p>© 2026 Bojana Lukac</p>
        </div>
      </div>
    </main>
  )
}

export default Home




