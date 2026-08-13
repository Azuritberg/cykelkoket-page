// import { useEffect } from "react"
// import { useLocation } from "react-router"

import Header from "../components/Header"
import Footer from "../components/Footer"

import bikeRoad from "../assets/bike-vag.png"
import roadBike from "../assets/bike-vag-two.png"

function About() {

  // const location = useLocation()

  //   useEffect(() => {
  //     if (location.hash) {
  //       const element = document.querySelector(location.hash)

  //       if (element) {
  //         element.scrollIntoView({
  //           behavior: "smooth",
  //           block: "start",
  //         })
  //       }
  //     }
  //   }, [location])

  return (
    <main className="min-h-screen bg-[var(--bg)] p-3">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--surface)]">
        <Header />

        <section className="relative overflow-hidden p-10 md:p-16">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-[clamp(2.5rem,10vw,3.75rem)] leading-none font-black uppercase tracking-tight">
              Om Cykelköket
            </h1>

            <h2 className="mt-8 text-xl font-black">
              Vad är ett cykelkök?
            </h2>

            <p className="mt-4 text-base leading-relaxed text-black/80 sm:text-lg">
              Ett cykelkök är en <strong>icke-kommersiell gör-det-själv</strong> cykelverkstad för alla <br className="hidden md:block" /> som behöver laga eller serva sin cykel med fokus på återbruk, delaktighet<br className="hidden md:block" /> och medskapande.
            </p>

            <p className="mt-8 text-base leading-relaxed text-black/80 sm:text-lg">
              Våren 2011 öppnade vi dörren för första gången till Cykelköket Malmö.{" "}
              <br className="hidden md:block" />
              Vi hade en liten uppsättning verktyg, cykelolja och några skrotcyklar.{" "}
              <br className="hidden md:block" />
              Det började i en liten skala, men växte snabbt då behovet av att kunna{" "}
              <br className="hidden md:block" />
              laga sin cykel var och är jättestort i Malmö. Vi var då en del av föreningen{" "}
              <br className="hidden md:block" />
              STPLN och låg i Stapelbäddens källare utan tillgång till dagsljus.
            </p>

            <p className="mt-8 text-base leading-relaxed text-black/80 sm:text-lg">
              Mycket har hänt sedan dess, cyklar har blivit lagade, cyklar har räddats,{" "}
              <br className="hidden md:block" />
              mycket kaffe har druckits och otaliga har lärt sig allt från att laga en{" "}
              <br className="hidden md:block" />
              punktering till att bygga egna hjul. Vi finns nu i en annan källarlokal{" "}
              <br className="hidden md:block" />
              i en annan del av Malmö, närmare bestämt på Augustenborg. Nu med {" "}
              <br className="hidden md:block" />
              fönster och dagsljus! Vår uppsättning med verktyg har växt rejält och {" "}
              <br className="hidden md:block" />
              ryms inte längre i en liten verktygslåda.
            </p>

            <p className="mt-8 text-base leading-relaxed text-black/80 sm:text-lg">
              Cykelköket är en ideell förening som drivs helt av volontärer. Utöver kärnan{" "}
              <br className="hidden md:block" />
              som är verkstaden så anordnar vi även workshops och har en mobil verkstad{" "}
              <br className="hidden md:block" />
              som är ute och snurrar på stan ibland. Utöver att vi lagar cyklar så arrangerar{" "}
              <br className="hidden md:block" />
              vi t ex föreläsningar, workshops, kurser och mycket annat!
            </p>

            <p className="mt-8 text-base leading-relaxed text-black/80 sm:text-lg">
              Vi behöver alltid hjälp med lite allt möjligt, så tveka inte att höra av dig{" "}
              <br className="hidden md:block" />
              om du skulle vilja bidra på något sätt. Eller kom förbi på en flabb kaffe{" "}
              <br className="hidden md:block" />
              under någon av våra öppettider så berättar vi mer.
            </p>


            <div id="hitta-till-oss" className="mt-4 scroll-mt-16 pt-12">
              <div className="mb-12 w-[82%] border-t border-black/20"></div>

              <h2 className="text-[clamp(2.5rem,10vw,3.75rem)] font-black uppercase leading-none tracking-tight">
                Hitta till oss
              </h2>

              <p className="mt-8 text-base leading-relaxed text-black/80 sm:text-lg">
                Vår verkstad finns på Augustenborgsgatan 24E, Malmö.
                <br className="hidden md:block" /> Här hittar du en karta till oss.
              </p>

              <a
                href="https://maps.app.goo.gl/Q1wMd8ZAAiH8kkmN6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-xl border-2 border-black px-7 py-4 font-black uppercase transition duration-300 hover:bg-black hover:text-white"
              >
                Öppna karta
              </a>

              <p className="mt-12 text-base leading-relaxed text-black/80 sm:text-lg">
                Vi har öppet på <strong>Måndagar</strong> och{" "}
                <strong>Onsdagar</strong> mellan 17–20.
              </p>

              <p className="mt-12 text-base leading-relaxed text-black/80 sm:text-lg">
                Men ibland är vi sjuka, upptagna med annat eller öppnar{" "}
                <br className="hidden md:block" />
                lite senare. Så ta alltid en titt på våra öppettider på{" "}
                <br className="hidden md:block" />
                förstasidan innan du besöker oss.
              </p>

              <p className="mt-6 text-base leading-relaxed text-black/80 sm:text-lg">
                Där lägger vi upp evenemang för när vi har öppet. Det{" "}
                <br className="hidden md:block" />
                händer även att vi håller öppet vid andra tider och dagar,{" "}
                <br className="hidden md:block" />
                det postar vi också på våran förstasida.
              </p>

              {/* <a
                href="https://www.facebook.com/cykelkoket"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block font-black underline underline-offset-4 hover:opacity-70"
              >
                Cykelkökets Facebook
              </a> */}
            </div>
          </div>

          <div className="page-decoration pointer-events-none absolute top-0 right-0 hidden h-full w-[45%] overflow-hidden lg:block">

            <img
              src={roadBike}
              alt=""
              className="absolute top-[60px] right-[-70px] h-[650px] w-auto max-w-none object-contain opacity-30"
            />

            <img
              src={bikeRoad}
              alt=""
              className="absolute bottom-[0px] right-[-70px] h-[650px] w-auto max-w-none object-contain opacity-30"
            />

          </div>
        </section>
      </div>

      <div className="mx-auto mt-3 max-w-[1200px]">
        <Footer />
      </div>
    </main>
  )
}

export default About



