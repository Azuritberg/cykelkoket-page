import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router"
import { faqData } from "../data/faqData"

import tools from "../assets/tools-flat.png"

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <main className="min-h-screen bg-[var(--bg)] p-3">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--surface)]">
        <Header />

        <section className="relative overflow-hidden p-6 sm:p-10 md:p-16">
          <h1 className="text-[clamp(2.5rem,10vw,3.75rem)] font-black uppercase leading-none tracking-tight">
            Vanliga frågor
          </h1>

          <div className="relative z-10 mt-12 max-w-3xl divide-y divide-black/20">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <article key={index}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-2xl font-black uppercase leading-tight sm:text-3xl">
                      {item.question}
                    </span>

                    <span className="shrink-0 text-4xl font-black">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="space-y-4 pb-8 text-base leading-relaxed text-black/80 sm:text-lg">
                      {item.answer.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ))}

                      {/* {item.hasContactButtons && (
                        <div className="mt-10 flex flex-wrap gap-4">
                          <Link
                            to="/mobila-verkstaden"
                            className="inline-block rounded-xl bg-[var(--pink)] px-5 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)] sm:px-7 sm:text-base"
                          >
                            Mobila verkstan
                          </Link>

                          <a
                            href="mailto:cykelkoket@gmail.com"
                            className="inline-block rounded-xl border-2 border-black px-5 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white sm:px-7 sm:text-base"
                          >
                            Maila oss
                          </a>
                        </div>
                      )} */}
                    </div>
                  )}
                </article>
              )
            })}
          </div>

          <div className="relative z-10 mt-16 flex flex-wrap gap-4">
            <Link
              to="/mobila-verkstaden"
              className="inline-block rounded-xl bg-[var(--pink)] px-5 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)] sm:px-7 sm:text-base"
            >
              Mobila verkstan
            </Link>

            <a
              href="mailto:cykelkoket@gmail.com"
              className="inline-block rounded-xl border-2 border-black px-5 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white sm:px-7 sm:text-base"
            >
              Maila oss
            </a>
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] opacity-20 blur-[0.5px] lg:block">

            <img
              src={tools}
              alt=""
              className="page-decoration h-full w-full translate-y-20 object-cover object-right"
            />
          </div>

        {/* 
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] opacity-20 blur-[0.5px] lg:flex">
            <img
              src={tools}
              alt=""
              className="page-decoration h-full w-1/2 object-cover object-right"
            />

            <img
              src={tools}
              alt=""
              className="page-decoration h-full w-1/2 scale-x-[-1] translate-x-5 translate-y-10 object-cover object-left"
            />
          </div> */}
        </section>
      </div>

      <div className="mx-auto mt-3 max-w-[1200px]">
        <Footer />
      </div>
    </main>
  )
}

export default FAQPage







// import Header from "../components/Header"
// import Footer from "../components/Footer"
// import { Link } from "react-router"

// import tools from "../assets/tools-flat.png"

// function FAQPage() {
//   return (
//     <main className="min-h-screen bg-[var(--bg)] p-3">
//       <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--surface)]">
//         <Header />

//         <section className="relative overflow-hidden p-6 sm:p-10 md:p-16">
//           <h1 className="text-[clamp(2.5rem,10vw,3.75rem)] font-black uppercase leading-none tracking-tight">
//             Vanliga frågor
//           </h1>

//           <div className="relative z-10 mt-12 max-w-3xl space-y-12">  

//             <section>
//               <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl">
//                 Hur engagerar jag mig i Cykelköket?
//               </h2>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Vi behöver alltid bli fler engagerade och volontärer. <br className="md:hidden" />För desto fler vi <br className="hidden md:block"/>är som hjälps åt desto bättre kan Cykelköket bli!
//               </p>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Alla bidrag är viktiga och behövs. Oavsett om du sitter i
//                 styrelsen, <br className="hidden md:block"/>sköter kaffekokaren eller hjälper oss med hemsidan, så är du viktig <br className="hidden md:block"/>och bidrar till att Cykelköket kan finnas kvar och utvecklas.
//               </p>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Maila oss eller kom förbi en kväll då vi har öppet.
//               </p>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Tveka inte heller att maila eller prata med oss om du har någon
//                 <br className="hidden md:block"/>idé som du skulle vilja genomföra på Cykelköket. Vi tycker alltid <br className="hidden md:block"/>det är roligt med nya idéer och projekt!
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl">
//                 När har ni öppet?
//               </h2>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Vi har öppet måndagar och onsdagar mellan 17–20.
//               </p>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Ibland kan det hända att vi behöver hålla stängt, då vi blir
//                 sjuka eller <br className="hidden md:block"/>bara inte kan. Då postar vi det på vår{" "}

//                 <a
//                   href="https://www.facebook.com/cykelkoket"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="font-black underline underline-offset-4 hover:opacity-70"
//                 >
//                   Facebook-sida
//                 </a>.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl">
//                 Min cykel är sönder, kan ni laga den?
//               </h2>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Nej, vi lagar inte några cyklar. Däremot har vi alla verktygen
//                 du behöver <br className="hidden md:block"/>så att du själv kan laga din cykel.
//               </p>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Vi som är volontärer kan hjälpa dig med råd och tips efter bästa
//                 förmåga. <br className="hidden md:block"/>Men det är alltid du som håller i verktygen när du ska laga din cykel.
//               </p>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Vill du inte själv laga din cykel så ska du istället vända dig
//                 till en cykelaffär <br className="hidden md:block"/>som kan hjälpa dig.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl">
//                 Har ni reservdelar till min cykel?
//               </h2>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Vi har en hel del reservdelar som vi fått från besökare eller
//                 återvunnit <br className="hidden md:block"/>från cyklar som skänkts till oss.
//               </p>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Om vi har den specifika delen som just du behöver är svårt att
//                 säga. <br className="hidden md:block"/>Vad vi har inne förändras hela tiden.
//               </p>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Därför är det enklast att du kommer förbi en kväll då vi har
//                 öppet <br className="hidden md:block"/>och tittar själv.
//               </p>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Alla reservdelar som vi själva har fått är gratis för våra
//                 medlemmar. <br className="hidden md:block"/>Det enda kravet vi har är att de ska monteras på en
//                 cykel hos oss.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl">
//                 Tar ni emot cyklar, cykeldelar och verktyg?
//               </h2>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Vi är jätteglada för reservdelar och hela cyklar så att dessa
//                 kan komma <br className="hidden md:block"/>till användning istället för att bara samla damm eller
//                 slängas.
//               </p>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Har du mindre delar eller verktyg så kan du bara komma förbi med
//                 dem <br className="hidden md:block"/>en medlemskväll.
//               </p>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Är det däremot en hel cykel så vill vi att du först mailar oss
//                 en bild på <br className="hidden md:block"/>cykeln eftersom vi har begränsat med utrymme.
//               </p>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 I framtiden vill vi utveckla vår möjlighet att återvinna cyklar
//                 och ta hand <br className="hidden md:block"/>om fler cyklar som annars skulle slängas.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl">
//                 Kan Cykelköket komma till min <br className="hidden md:block"/>arbetsplats?
//               </h2>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Vi tar jättegärna med vår mobila Cykelverkstad till din
//                 arbetsplats, <br className="hidden md:block"/>förening eller bostadsrättsförening.
//               </p>

//               <p className="mt-4 text-base sm:text-lg leading-relaxed text-black/80">
//                 Vill du att vi ska komma till er så ska du skicka ett mail till
//                 oss.
//               </p>

//               <div className="mt-16 flex flex-wrap gap-4">
//               <Link
//                 to="/mobila-verkstaden"
//                 className="inline-block rounded-xl bg-[var(--pink)] px-5 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)] sm:px-7 sm:text-base"
//               >
//                 Mobila verkstaden
//               </Link>

//               <a
//                 href="mailto:cykelkoket@gmail.com"
//                 className="inline-block rounded-xl border-2 border-black px-5 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white sm:px-7 sm:text-base"
//               >
//                 Maila oss
//               </a>
//             </div>

//               {/* <Link
//                 to="/mobila-verkstaden"
//                 className="mt-6 inline-block rounded-xl bg-[var(--pink)] px-7 py-4 font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)]"
//               >
//                 Läs mer om mobila verkstaden
//               </Link> */}
//             </section>

//             {/* <div className="mt-16">
//               <a
//                 href="mailto:cykelkoket@gmail.com"
//                 className="inline-block rounded-xl bg-[var(--pink)] px-7 py-4 font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)]"
//               >
//                 Maila oss
//               </a>
//             </div> */}

//           </div>

//           <div className="pointer-events-none absolute inset-y-0 right-0 flex w-[42%] opacity-20 blur-[0.5px]">
//             <img
//               src={tools}
//               alt=""
//               className="page-decoration h-full w-1/2 object-cover object-right"
//             />

//             <img
//               src={tools}
//               alt=""
//               className="page-decoration h-full w-1/2 scale-x-[-1] translate-x-5 translate-y-10 object-cover object-left"
//             />
//           </div>

//           {/* <img
//             src={tools}
//             alt=""
//             className="pointer-events-none absolute bottom-[800px] right-[0px] h-[1000px] w-auto object-contain opacity-30"
//           /> */}
//         </section>
//       </div>

//       <div className="mx-auto mt-3 max-w-[1200px]">
//         <Footer />
//       </div>
//     </main>
//   )
// }

// export default FAQPage








///SKRÄP


// import Header from "../components/Header"
// import Footer from "../components/Footer"
// import { Link } from "react-router"

// function FAQPage() {
//   return (
//     <main className="min-h-screen bg-[var(--bg)] p-3">
//       <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--surface)]">
//         <Header />

//         <section className="p-10 md:p-16">
//           <h1 className="text-6xl font-black uppercase tracking-tight">
//             Vanliga frågor
//           </h1>

//           <div className="mt-12 max-w-3xl space-y-12">
//             <section>
//               <h2 className="text-3xl font-black uppercase">
//                 Hur engagerar jag mig i Cykelköket?
//               </h2>
//               <p className="mt-4 text-lg leading-relaxed text-black/80">
//                 Vi behöver alltid bli fler engagerade och volontärer. För desto fler vi är som <br />hjälps åt desto bättre kan Cykelköket bli! Alla bidrag är viktiga och behövs. <br />Oavsett om du sitter i styrelsen, sköter kaffekokaren eller hjälper oss med <br />hemsidan, så är du viktig och bidrar till att Cykelköket kan finnas kvar och <br />utvecklas.
//               </p>
//               <p className="mt-4 text-lg leading-relaxed text-black/80">
//                 Maila oss på <strong>cykelkoket@gmail.com</strong> eller kom
//                 förbi en kväll då vi har öppet.
//               </p>
//               <p className="mt-4 text-lg leading-relaxed text-black/80">
//                 Tveka inte heller att maila eller prata med oss om du har någon idé som du <br />skulle vilja genomföra på Cykelköket. Vi tycker det alltid är roligt med nya <br />idéer och projekt!
//               </p>
//             </section>

//             <section>
//               <h2 className="text-3xl font-black uppercase">
//                 När har ni öppet?
//               </h2>
//                 <p className="mt-4 text-lg leading-relaxed text-black/80">
//                   Vi har öppet måndagar och onsdagar mellan 17–20. Ibland kan det hända att
//                   <br />vi behöva hålla stängt, då vi blir sjuka eller bara inte kan. Då postar vi
//                   det på <br />vår{" "}

//                   <a
//                     href="https://www.facebook.com/cykelkoket"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="font-black underline underline-offset-4 hover:opacity-70"
//                   >
//                     Facebook-sida
//                   </a>.
//                 </p>
//             </section>

//             <section>
//               <h2 className="text-3xl font-black uppercase">
//                 Min cykel är sönder, kan ni laga den?
//               </h2>
//               <p className="mt-4 text-lg leading-relaxed text-black/80">
//                 Nej vi lagar inte några cyklar, däremot har vi alla verktygen du behöver, så att <br />du själv kan laga din cykel. Vi som är volontärer kan hjälpa dig med råd och <br />tips efter bästa förmåga. Men det är alltid du som håller i verktygen när du ska <br  />laga din cykel.
//                 Vill du inte själv laga din cykel så ska du istället vända dig till en <br />cykelaffär som kan hjälpa dig.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-3xl font-black uppercase">
//                 Har ni reservdelar till min cykel?
//               </h2>
//               <p className="mt-4 text-lg leading-relaxed text-black/80">
//                 Vi har en hel del reservdelar som vi fått från besökare eller återvunnit från <br />cyklar som skänkts till oss. Om vi har den specifika delen som just du behöver <br />är svårt att säga. Vad vi har inne förändras allt eftersom delar monteras på <br />cyklar och nya kommer in. 
//               </p>
//               <p className="mt-4 text-lg leading-relaxed text-black/80">
//                 Därför är det enklast att du kommer förbi en kväll då vi har öppet och tittar <br />själv. Alla reservdelar som vi själva har fått är gratis för våra medlemmar, <br />enda kravet vi har är att de ska monteras på en cykel hos oss.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-3xl font-black uppercase">
//                 Tar ni emot cyklar, cykeldelar och verktyg?
//               </h2>
//               <p className="mt-4 text-lg leading-relaxed text-black/80">
//                 VI är jätteglada för reservdelar och hela cyklar. Så att dessa kan komma till <br />användning istället för att bara samla damm i någon låda eller slängas.
//               </p>
//               <p className="mt-4 text-lg leading-relaxed text-black/80">
//                 Har du mindre delar eller verktyg så kan du bara komma förbi med dem <br />en medlemskväll.
//               </p>
//               <p className="mt-4 text-lg leading-relaxed text-black/80">
//                 Är det däremot en hel cykel så vill vi att du först mailar oss en bild på cykeln. <br />Eftersom vi har begränsat med utrymme och kan därför inte ta emot alla cyklar.
//               </p>
//               <p className="mt-4 text-lg leading-relaxed text-black/80">
//                 Du kommer i kontakt med oss på:{" "}

//                 <a
//                   href="mailto:cykelkoket@gmail.com"
//                   className="font-black underline underline-offset-4 hover:opacity-70"
//                 >
//                   cykelkoket@gmail.com
//                 </a>
//               </p>
//               <p className="mt-4 text-lg leading-relaxed text-black/80">
//                 I framtiden så vill vi utveckla vår möjlighet att återvinna cyklar och ta hand <br />om alla dessa cyklar som slängs för att det bara är något litet fel på dem. <br />Men i dagsläget så har vi tyvärr varken utrymmet, resurserna, tiden eller <br />volontärerna för att kunna genomföra det.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-3xl font-black uppercase">
//                 Kan Cykelköket komma till min <br />arbetsplats?
//               </h2>
//                 <p className="mt-4 text-lg leading-relaxed text-black/80">
//                   Vi tar jättegärna med vår mobila Cykelverkstad till din arbetsplats,
//                   förening eller bostadsrättsförening. Vill du att vi ska komma till er
//                   så ska du skicka ett mail till{" "}

//                   <a
//                     href="mailto:cykelkoket@gmail.com"
//                     className="font-black underline underline-offset-4 hover:opacity-70"
//                   >
//                     cykelkoket@gmail.com
//                   </a>.
//                 </p>

//               <Link
//                 to="/mobila-verkstaden"
//                 className="mt-6 inline-block rounded-xl bg-[var(--pink)] px-7 py-4 font-black uppercase text-black transition hover:-translate-y-1"
//               >
//                 Läs mer om vår mobila verkstaden
//               </Link>
//             </section>
//           </div>
//         </section>
//       </div>

//       <div className="mx-auto mt-3 max-w-[1200px]">
//         <Footer />
//       </div>
//     </main>
//   )
// }

// export default FAQPage