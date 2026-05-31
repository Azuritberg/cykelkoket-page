import { useState } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import biker from "../assets/biker.png"

import gift1 from "../assets/gift-card/Presentkort-1-scaled.jpg"
import gift2 from "../assets/gift-card/Presentkort-2-scaled.jpg"
import gift3 from "../assets/gift-card/Presentkort-3-scaled.jpg"
import gift4 from "../assets/gift-card/Presentkort-4-scaled.jpg"
import gift5 from "../assets/gift-card/Presentkort-5-scaled.jpg"

function GiftMembership() {

  const [selectedCard, setSelectedCard] = useState(null)

  const giftCards = [
    gift1,
    gift2,
    gift3,
    gift4,
    gift5,
  ]

  return (
    <main className="min-h-screen bg-[var(--bg)] p-3">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--pink)]">
        <Header />

        <section className="relative overflow-hidden p-6 sm:p-10 md:p-16">
          <div className="relative z-10">
            <h1 className="text-[clamp(2.5rem,10vw,3.75rem)] font-black uppercase leading-none tracking-tight">
              Ge bort medlemskap
            </h1>

            <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed">
              Frågar du oss på Cykelköket så är ett medlemskap i Cykelköket världens bästa present, oavsett om det är julklapp, namnsdag, födelsedag eller att din vän bara är värd något fint. Samtidigt vill du inte vill köpa ännu en sak.
              Med ett medlemskap i Cykelköket så får din vän en möjlighet att vara med och skapa ett lite bättre Malmö genom fler hela och lättrullande cyklar. För vem blir inte lycklig av en nyservad lättrullande cykel, när man dessutom gjort det själv!
            </p>

            <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed">
              Om du vill ge bort ett medlemskap i Cykelköket ska du göra enligt nedan:
            </p>

            <h4 className="mt-12 max-w-2xl text-2xl font-black uppercase leading-tight sm:text-3xl">
              1. Fyll i formuläret
            </h4>

            <form
                className="mt-6 max-w-2xl space-y-5"
                onSubmit={(event) => {
                  event.preventDefault()

                  const form = event.currentTarget
                  const data = new FormData(form)

                  const subject = "Ge bort medlemskap"
                  const body = `
                  Din väns namn: ${data.get("friendName")}
                  Din väns e-mail: ${data.get("friendEmail")}
                  Ditt namn: ${data.get("yourName")}
                  Din e-mail: ${data.get("yourEmail")}
                  Datum för välkomstmail: ${data.get("welcomeDate")}
                  Övrigt: ${data.get("message")}
                  `

                  window.location.href = `mailto:kassor.cykelkoket@gmail.com?subject=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(body)}`
                }}
              >
              <label className="block">
                <span className="font-black">Din väns uppgifter</span>
                <input
                  name="friendName"
                  placeholder="Din väns namn (obligatoriskt)"
                  required
                  className="mt-2 w-full rounded-xl border-2 border-black bg-[var(--surface)] px-4 py-4 text-black placeholder:text-black/50"
                />
              </label>

              <label className="block">
                {/* <span className="font-black">Din väns e-mail</span> */}
                <input
                  name="friendEmail"
                  placeholder="Din väns e-mail (obligatoriskt)"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border-2 border-black bg-[var(--surface)] px-4 py-4 text-black placeholder:text-black/50"
                />
              </label>

              <label className="block">
                <span className="font-black">Dina uppgifter</span>
                <input
                  name="yourName"
                  placeholder="Ditt namn (obligatoriskt)"
                  required
                  className="mt-2 w-full rounded-xl border-2 border-black bg-[var(--surface)] px-4 py-4 text-black placeholder:text-black/50"
                />
              </label>

              <label className="block">
                {/* <span className="font-black">Din e-mail</span> */}
                <input
                  name="yourEmail"
                  placeholder="Din e-mail (obligatoriskt)"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border-2 border-black bg-[var(--surface)] px-4 py-4 text-black placeholder:text-black/50"
                />
              </label>

              <p className="text-base sm:text-lg leading-relaxed">
                Alla nya medlemmar får ett välkomstmail av oss. För att vi inte ska skicka
                det innan din vän fått presenten av dig, så vill vi veta när vi tidigast kan
                skicka vårt välkomstmail. Skriver du inget datum så skickar vi det så snart som möjligt.
              </p>

              <label className="block">
                <span className="font-black">
                  När kan vi tidigast skicka vårt välkomstmail?
                </span>
                <input
                  name="welcomeDate"
                  // placeholder="ÅÅÅÅ-MM-DD"
                  type="date"
                  className="mt-2 w-full rounded-xl border-2 border-black bg-[var(--surface)] px-4 py-4 text-black placeholder:text-black/50"
                />
              </label>

              <label className="block">
                <span className="font-black">Något annat vi behöver veta</span>
                <textarea
                  name="message"
                  placeholder="Skriv här..."
                  rows="6"
                  className="mt-2 w-full rounded-xl border-2 border-black bg-[var(--surface)] px-4 py-4 text-black placeholder:text-black/50"
                />
              </label>

              <button
                type="submit"
                className="rounded-xl bg-[var(--surface-dark)] px-8 py-4 font-black uppercase text-white transition hover:-translate-y-1 hover:shadow-[0_0_10px_var(--surface-dark)]"
              >
                Skicka
              </button>
            </form>

            <h4 className="mt-12 max-w-2xl text-2xl font-black uppercase leading-tight sm:text-3xl">
              2. Betala medlemsavgiften
            </h4>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed">
              <strong>Du kan betala med Swish eller Bankgiro.</strong>{" "}
              <br />Om du inte har möjlighet att betala med Swish <br />eller Bankgiro så kan du
              skicka ett mail till oss
              <br />
              <strong>kassor.cykelkoket@gmail.com</strong>
            </p>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed">
              <strong>Swish:</strong> Swisha 100 kr till 123 513 39 21.
              <br />
              Uppge namnet på den som ska få medlemskapet.
            </p>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed">
              <strong>Bankgiro:</strong> Betala 100 kr till 5913-2100.
              <br />Skriv present + namnet på den som ska få medlemskapet.
            </p>

            <h4 className="mt-12 max-w-2xl text-2xl font-black uppercase leading-tight sm:text-3xl">
              3. Välj ett presentkort
            </h4>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed">
              Skriv ut det presentkort du tycker är finast. <br className="hidden md:block"/>Eller så gör du ett eget presentkort för lite mer personlig touch.
            </p>

            <div className="mt-10 -mx-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-10 sm:px-10 md:-mx-16 md:px-16">
              <div className="flex w-max items-center gap-0">
                {giftCards.map((card, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCard(card)}
                    className="group relative shrink-0 bg-transparent p-0 transition duration-300 hover:z-10 hover:-translate-y-2"
                  >
                    <img
                      src={card}
                      alt={`Presentkort ${index + 1}`}
                      className="h-[120px] w-[190px] max-w-none object-cover transition duration-300 group-hover:scale-[0.92] group-hover:drop-shadow-[0_0_30px_var(--pink)] sm:h-[150px] sm:w-[240px] md:h-[170px] md:w-[270px] lg:h-[190px] lg:w-[300px]"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* <div className="mt-10 max-w-full overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex w-max items-center gap-0">
                {giftCards.map((card, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCard(card)}
                    className="group relative shrink-0 transition duration-300 hover:z-10 hover:-translate-y-2"
                  >
                    <img
                      src={card}
                      alt={`Presentkort ${index + 1}`}
                      className="h-[120px] w-auto object-contain transition duration-300 group-hover:scale-[0.9] group-hover:drop-shadow-[0_0_30px_var(--pink)]"
                    />
                  </button>
                ))}
              </div>
            </div> */}

          </div>


          <div className="page-decoration pointer-events-none absolute bottom-0 right-0 hidden h-full w-[40%] overflow-hidden lg:block">
            <img
              src={biker}
              alt=""
              className="absolute bottom-[300px] right-[-5px] h-[900px] w-auto max-w-none object-contain opacity-30"
            />
          </div>

          {/* <img
            src={biker}
            alt=""
            className="page-decoration pointer-events-none absolute bottom-[160px] right-[-5px] h-[1200px] w-auto object-contain opacity-30"
          /> */}

          {selectedCard && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
              onClick={() => setSelectedCard(null)}
            >
              <div
                className="relative max-h-[90vh] overflow-auto rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-xl"
                onClick={(event) => event.stopPropagation()}
              >
                {/* <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-xl font-black text-white"
                >
                  X
                </button> */}

                <img
                  src={selectedCard}
                  alt="Presentkort"
                  className="max-h-[75vh] rounded-xl object-contain shadow-[0_0_40px_rgba(0,0,0,0.35)]"
                />

                <div className="mt-6 flex justify-center">
                  <a
                    href={selectedCard}
                    download
                    className="rounded-xl bg-[var(--pink)] px-7 py-4 font-black uppercase text-black transition hover:-translate-y-1 hover:shadow-[0_0_10px_var(--pink)]"
                  >
                    Ladda ner
                  </a>
                </div>
              </div>
            </div>
          )}

        </section>
      </div>

      <div className="mx-auto mt-3 max-w-[1200px]">
        <Footer />
      </div>
    </main>
  )
}

export default GiftMembership