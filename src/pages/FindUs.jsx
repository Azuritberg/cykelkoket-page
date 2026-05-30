import Header from "../components/Header"
import Footer from "../components/Footer"

import roadBike from "../assets/bike-vag-two.png"

function FindUs() {
  return (
    <main className="min-h-screen bg-[var(--bg)] p-3">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--surface)]">
        <Header />

        <section className="relative overflow-hidden p-10 md:p-16">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black uppercase tracking-tight">
              Hitta till oss
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-black/80">
              Vår verkstad finns på Augustenborgsgata 24E, Malmö.
              <br className="hidden md:block"/> Här hittar du en karta till oss.
            </p>

            <a
              href="https://maps.app.goo.gl/Q1wMd8ZAAiH8kkmN6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl border-2 border-black px-7 py-4 font-black uppercase transition duration-300 hover:bg-black hover:text-white"
            >
              Öppna karta
            </a>

            <p className="mt-12 text-lg leading-relaxed text-black/80">
              Vi har öppet på <strong>Måndagar</strong> och{" "}
              <strong>Onsdagar</strong>
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              mellan 17–20.
            </p>

            <p className="mt-12 text-lg leading-relaxed text-black/80">
              Men ibland är vi sjuka, upptagna med annat eller öppnar <br className="hidden md:block"/>lite senare. Så ta alltid en titt på vår Facebook-sida innan <br className="hidden md:block"/>du besöker oss.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-black/80">
              Där lägger vi upp evenemang för när vi har öppet. Det <br className="hidden md:block"/>händer även att vi håller öppet vid andra tider och dagar, <br className="hidden md:block"/>det postar vi också på Facebook.
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

          <img
            src={roadBike}
            alt=""
            className="page-decoration pointer-events-none absolute bottom-[-120px] right-[-10px] h-[800px] w-auto object-contain opacity-40"
          />
        </section>
      </div>

      <div className="mx-auto mt-3 max-w-[1200px]">
        <Footer />
      </div>
    </main>
  )
}

export default FindUs






// import Header from "../components/Header"
// import Footer from "../components/Footer"

// function FindUs() {
//   return (
//     <main className="min-h-screen bg-[var(--bg)] p-3">
//       <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--surface)]">
//         <Header />

//         <section className="p-10 md:p-16">
//           <h1 className="text-6xl font-black uppercase tracking-tight">
//             Hitta hit
//           </h1>

//           <p className="mt-8 max-w-2xl text-lg leading-relaxed">
//             Du hittar Cykelköket på Augustenborgsgata 24E i Malmö. Kom under
//             öppettiderna och ta med din cykel.
//           </p>
//         </section>
//       </div>

//       <div className="mx-auto mt-3 max-w-[1200px]">
//         <Footer />
//       </div>
//     </main>
//   )
// }

// export default FindUs