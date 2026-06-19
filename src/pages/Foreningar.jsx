import Header from "../components/Header"
import Footer from "../components/Footer"

function Foreningar() {
  return (
    <main className="min-h-screen bg-[var(--bg)] p-3">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--surface)]">
        <Header />

        <section className="p-10 md:p-16">
          <h1 className="text-6xl font-black uppercase tracking-tight">
            Föreningar
          </h1>

          <p className="mt-8 text-lg text-black/80">
            Information kommer snart.
          </p>
        </section>
      </div>

      <div className="mx-auto mt-3 max-w-[1200px]">
        <Footer />
      </div>
    </main>
  )
}

export default Foreningar