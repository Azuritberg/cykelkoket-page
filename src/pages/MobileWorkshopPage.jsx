import Header from "../components/Header"
import Footer from "../components/Footer"

import tools from "../assets/tools-two.png"

function MobileWorkshopPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] p-3">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--surface-dark)]">
        <Header lightText />

        <section className="relative overflow-hidden p-6 text-white sm:p-10 md:p-16">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-[clamp(2.5rem,10vw,3.75rem)] leading-none font-black uppercase tracking-tight">
              Mobila verkstaden
            </h1>

            <p className="mt-8 text-base sm:text-lg leading-relaxed text-white/80">
              Vi är ofta ute på event med vår mobila cykelverkstad fullproppad
              med <br className="hidden md:block"/>verktyg, tvätt och olja.
            </p>

            <p className="mt-8 text-base sm:text-lg leading-relaxed text-white/80">
              En viktig grundregel är att vi aldrig själva fixar folks cyklar.
              Besökarna <br className="hidden md:block"/>får själva sköta skruvandet och vi finns på plats för
              att instruera, ge en <br className="hidden md:block"/>hjälpande hand eller ge tips.
            </p>

            <p className="mt-8 text-base sm:text-lg leading-relaxed text-white/80">
              Vi har flera olika koncept som vårcykelfix, kolla din cykel och
              specifika <br className="hidden md:block"/>workshops som punkafix, bromsjustering,
              växelinställning, sittställning <br className="hidden md:block"/>och hjulriktning.
            </p>

            <h4 className="mt-12 text-2xl font-black uppercase sm:text-3xl">
              Kontakta oss
            </h4>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/80">
              Kontakta oss om du vill att vi ska komma till er <br />med vår mobila
              verkstad.
            </p>

            <a
              href="mailto:cykelkoket@gmail.com"
              className="mt-8 inline-block rounded-xl bg-[var(--pink)] px-5 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)] sm:px-7 sm:text-base"
            >
              cykelkoket@gmail.com  
            </a>
          </div>

          <div className="page-decoration pointer-events-none absolute bottom-0 right-0 hidden h-full w-[45%] overflow-hidden lg:block">
            <img
              src={tools}
              alt=""
              className="absolute bottom-[-10px] right-[-60px] h-[880px] w-auto max-w-none object-contain opacity-20"
            />
          </div>

          {/* <img
            src={tools}
            alt=""
            className="page-decoration pointer-events-none absolute bottom-[-120px] right-[-130px] h-[880px] w-auto object-contain opacity-20"
            // className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-[1100px] w-auto object-contain opacity-20"
          /> */}
        </section>
      </div>

      <div className="mx-auto mt-3 max-w-[1200px]">
        <Footer />
      </div>
    </main>
  )
}

export default MobileWorkshopPage