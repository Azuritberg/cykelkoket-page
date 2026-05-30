import Header from "../components/Header"
import Footer from "../components/Footer"
import bikeRoad from "../assets/bike-vag.png"

function About() {
  return (
    <main className="min-h-screen bg-[var(--bg)] p-3">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--surface)]">
        <Header />

        <section className="relative overflow-hidden p-10 md:p-16">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-6xl font-black uppercase tracking-tight">
              Om Cykelköket
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-black/80">
              Cykelköket Malmö är en ideell förening. <br className="hidden md:block"/>Vi har en gemensam <strong>gör-det-själv</strong> cykelverkstad.
            </p>

            <p className="mt-8 text-lg leading-relaxed text-black/80">
              Hos oss kan du inte köpa cyklar eller lämna in din cykel för
              reparation. <br className="hidden md:block"/>Däremot kan du, med hjälp av Cykelkökets volontärer
              och verktyg, själv <br className="hidden md:block"/>reparera din cykel.
            </p>

            <p className="mt-8 text-lg leading-relaxed text-black/80">
              Vi ordnar också kurser – allt från enkla laga-punka-workshops
              till mer <br className="hidden md:block"/>avancerade kurser som sträcker sig över flera månader.
              Kurserna anpassas <br className="hidden md:block"/>efter gruppens färdigheter, erfarenheter och
              ambitioner.
            </p>
          </div>

          <img
            src={bikeRoad}
            alt=""
            className="page-decoration pointer-events-none absolute bottom-[-50px] right-[-20px] h-[600px] w-auto object-contain opacity-30"
          />
        </section>
      </div>

      <div className="mx-auto mt-3 max-w-[1200px]">
        <Footer />
      </div>
    </main>
  )
}

export default About