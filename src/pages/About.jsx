import Header from "../components/Header"
import Footer from "../components/Footer"

import bikeRoad from "../assets/bike-vag.png"
import roadBike from "../assets/bike-vag-two.png"

function About() {
  return (
    <main className="min-h-screen bg-[var(--bg)] p-3">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--surface)]">
        <Header />

        <section className="relative overflow-hidden p-10 md:p-16">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-[clamp(2.5rem,10vw,3.75rem)] leading-none font-black uppercase tracking-tight">
              Om Cykelköket
            </h1>

            <p className="mt-8 text-base leading-relaxed text-black/80 sm:text-lg">
              Cykelköket Malmö är en ideell förening. <br className="hidden md:block" />
              Vi har en gemensam <strong>gör-det-själv</strong> cykelverkstad.
            </p>

            <p className="mt-8 text-base leading-relaxed text-black/80 sm:text-lg">
              Hos oss kan du inte köpa cyklar eller lämna in din cykel för
              reparation. <br className="hidden md:block" />
              Däremot kan du, med hjälp av Cykelkökets volontärer och verktyg,
              själv <br className="hidden md:block" />
              reparera din cykel.
            </p>

            <p className="mt-8 text-base leading-relaxed text-black/80 sm:text-lg">
              Vi ordnar också kurser – allt från enkla laga-punka-workshops
              till mer <br className="hidden md:block" />
              avancerade kurser som sträcker sig över flera månader. Kurserna
              anpassas <br className="hidden md:block" />
              efter gruppens färdigheter, erfarenheter och ambitioner.
            </p>

            <div className="mt-16 pt-12">
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
                <strong>Onsdagar</strong>
                <br className="md:hidden" />
                <span className="hidden md:inline"> </span>
                mellan 17–20.
              </p>

              <p className="mt-12 text-base leading-relaxed text-black/80 sm:text-lg">
                Men ibland är vi sjuka, upptagna med annat eller öppnar{" "}
                <br className="hidden md:block" />
                lite senare. Så ta alltid en titt på vår Facebook-sida innan{" "}
                <br className="hidden md:block" />
                du besöker oss.
              </p>

              <p className="mt-6 text-base leading-relaxed text-black/80 sm:text-lg">
                Där lägger vi upp evenemang för när vi har öppet. Det{" "}
                <br className="hidden md:block" />
                händer även att vi håller öppet vid andra tider och dagar,{" "}
                <br className="hidden md:block" />
                det postar vi också på Facebook.
              </p>

              <a
                href="https://www.facebook.com/cykelkoket"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block font-black underline underline-offset-4 hover:opacity-70"
              >
                Cykelkökets Facebook
              </a>
            </div>
          </div>

          <div className="page-decoration pointer-events-none absolute top-0 right-0 hidden h-full w-[45%] overflow-hidden lg:block">

            <img
              src={roadBike}
              alt=""
              className="absolute top-[-7px] right-[-70px] h-[650px] w-auto max-w-none object-contain opacity-30"
            />

            <img
              src={bikeRoad}
              alt=""
              className="absolute bottom-[-40px] right-[-70px] h-[650px] w-auto max-w-none object-contain opacity-30"
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













// import Header from "../components/Header"
// import Footer from "../components/Footer"
// import bikeRoad from "../assets/bike-vag.png"

// function About() {
//   return (
//     <main className="min-h-screen bg-[var(--bg)] p-3">
//       <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--surface)]">
//         <Header />

//         <section className="relative overflow-hidden p-10 md:p-16">
//           <div className="relative z-10 max-w-3xl">
//             <h1 className="text-[clamp(2.5rem,10vw,3.75rem)] leading-none font-black uppercase tracking-tight">
//               Om Cykelköket
//             </h1>

//             <p className="mt-8 text-base sm:text-lg leading-relaxed text-black/80">
//               Cykelköket Malmö är en ideell förening. <br className="hidden md:block"/>Vi har en gemensam <strong>gör-det-själv</strong> cykelverkstad.
//             </p>

//             <p className="mt-8 text-base sm:text-lg leading-relaxed text-black/80">
//               Hos oss kan du inte köpa cyklar eller lämna in din cykel för
//               reparation. <br className="hidden md:block"/>Däremot kan du, med hjälp av Cykelkökets volontärer
//               och verktyg, själv <br className="hidden md:block"/>reparera din cykel.
//             </p>

//             <p className="mt-8 text-base sm:text-lg leading-relaxed text-black/80">
//               Vi ordnar också kurser – allt från enkla laga-punka-workshops
//               till mer <br className="hidden md:block"/>avancerade kurser som sträcker sig över flera månader.
//               Kurserna anpassas <br className="hidden md:block"/>efter gruppens färdigheter, erfarenheter och
//               ambitioner.
//             </p>
//           </div>

//           <div className="page-decoration pointer-events-none absolute bottom-0 right-0 hidden h-full w-[45%] overflow-hidden lg:block">
//             <img
//               src={bikeRoad}
//               alt=""
//               className="absolute bottom-[-50px] right-[-80px] h-[650px] w-auto max-w-none object-contain opacity-30"
//             />
//           </div>

//           {/* <img
//             src={bikeRoad}
//             alt=""
//             className="page-decoration pointer-events-none absolute bottom-[-50px] right-[-20px] hidden h-[clamp(500px,60vw,900px)] w-auto object-contain lg:block opacity-30"
//           /> */}
//         </section>
//       </div>

//       <div className="mx-auto mt-3 max-w-[1200px]">
//         <Footer />
//       </div>
//     </main>
//   )
// }

// export default About