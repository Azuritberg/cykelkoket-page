import Header from "../components/Header"
import Footer from "../components/Footer"

import tools from "../assets/tools-two.png"

function MobileWorkshopPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] p-3">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--surface-dark)]">
        <Header lightText />

        <section className="relative overflow-hidden p-10 text-white md:p-16">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-6xl font-black uppercase tracking-tight">
              Mobila verkstaden
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-white/80">
              Vi är ofta ute på event med vår mobila cykelverkstad fullproppad
              med <br className="hidden md:block"/>verktyg, tvätt och olja.
            </p>

            <p className="mt-8 text-lg leading-relaxed text-white/80">
              En viktig grundregel är att vi aldrig själva fixar folks cyklar.
              Besökarna <br className="hidden md:block"/>får själva sköta skruvandet och vi finns på plats för
              att instruera, ge en <br className="hidden md:block"/>hjälpande hand eller ge tips.
            </p>

            <p className="mt-8 text-lg leading-relaxed text-white/80">
              Vi har flera olika koncept som vårcykelfix, kolla din cykel och
              specifika <br className="hidden md:block"/>workshops som punkafix, bromsjustering,
              växelinställning, sittställning <br className="hidden md:block"/>och hjulriktning.
            </p>

            <h4 className="mt-12 text-3xl font-black uppercase">
              Kontakta oss
            </h4>

            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Kontakta oss om du vill att vi ska komma till er <br />med vår mobila
              verkstad.
            </p>

            <a
              href="mailto:cykelkoket@gmail.com"
              className="mt-8 inline-block rounded-xl bg-[var(--pink)] px-7 py-4 font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)]"
            >
              cykelkoket@gmail.com  
            </a>
          </div>

          <img
            src={tools}
            alt=""
            className="page-decoration pointer-events-none absolute bottom-[-120px] right-[-130px] h-[880px] w-auto object-contain opacity-20"
            // className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-[1100px] w-auto object-contain opacity-20"
          />
        </section>
      </div>

      <div className="mx-auto mt-3 max-w-[1200px]">
        <Footer />
      </div>
    </main>
  )
}

export default MobileWorkshopPage