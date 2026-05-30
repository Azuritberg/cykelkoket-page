import { useState } from "react"
import { Link } from "react-router"
import { motion } from "framer-motion"
import onBikes from "../assets/on-bikes.png"

function Hero() {
  const [showOpeningHours, setShowOpeningHours] = useState(false)

  return (
    <>
      <section className="relative grid items-center overflow-hidden px-8 pb-8 pt-8 md:grid-cols-2">
        <motion.div
          className="relative z-20" // flex min-h-[520px] flex-col justify-between --- IGNORE ---
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="max-w-[650px] text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
            <span className="block whitespace-nowrap italic">Laga själv.</span>
            <span className="block whitespace-nowrap italic text-[var(--pink)]">
              Tillsammans.
            </span>
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-black/80">
            Cykelköket är en ideell gör-det-själv verkstad där alla är välkomna
            att laga sin cykel med hjälp av verktyg, reservdelar och volontärer.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setShowOpeningHours(true)}
              className="flex items-center justify-center rounded-xl bg-[var(--lime)] px-7 py-4 text-[16px] font-[900] uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--lime)]"
            >
              Se öppettider
            </button>

            <Link
              to="/hitta-hit"
              className="rounded-xl border-2 border-black px-7 py-4 font-black uppercase transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              Hitta hit
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative mt-8 h-[420px] md:mt-0"
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute right-10 top-8 h-64 w-64 rounded-full bg-[var(--lime)]"></div>

          <img
            src={onBikes}
            alt=""
            className="absolute bottom-[-100px] right-[-20px] z-10 h-[500px] w-auto object-contain"
          />
        </motion.div>
      </section>

      {showOpeningHours && (
        <div
          onClick={() => setShowOpeningHours(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="rounded-[2rem] bg-[var(--surface)] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
          >
            <h2 className="text-4xl font-black uppercase">Öppettider</h2>

            <p className="mt-6 text-lg leading-relaxed">
              Vår verkstad är vanligtvis öppen för medlemmar <strong>Måndagar</strong> och <strong>Onsdagar</strong> 17:00 till 20:00.
            </p>

            <p className="mt-4 text-lg leading-relaxed">
              Du kan bli medlem på plats om du inte redan är det. Om vi tvingas
              hålla stängt så postar vi det på vår Facebooksida.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/cykelkoket"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[var(--pink)] px-7 py-4 font-black uppercase text-black transition hover:-translate-y-1 hover:shadow-[0_0_20px_var(--pink)]"
              >
                Till Facebook
              </a>

              <button
                onClick={() => setShowOpeningHours(false)}
                className="rounded-xl border-2 border-black px-7 py-4 font-black uppercase transition hover:bg-black hover:text-white"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero


// import { motion } from "framer-motion"
// import { Link } from "react-router"
// import onBikes from "../assets/on-bikes.png"

// function Hero() {
//   return (
//     <section className="relative grid items-center overflow-hidden px-8 pb-8 pt-8 md:grid-cols-2">
//       <motion.div
//         className="relative z-20 flex min-h-[520px] flex-col justify-between"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//       >
//         <div>
//           <h1 className="max-w-[650px] text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
//             <span className="block whitespace-nowrap">Laga själv.</span>
//             <span className="block whitespace-nowrap text-[var(--pink)]">
//               Tillsammans.
//             </span>
//           </h1>

//           <p className="mt-8 max-w-md text-lg leading-relaxed text-black/80">
//             Cykelköket är en ideell gör-det-själv verkstad där alla är välkomna
//             att laga sin cykel med hjälp av verktyg, reservdelar och volontärer.
//           </p>
//         </div>

//         <div className="mt-8 flex flex-wrap gap-4">
//           <button className="rounded-xl bg-[var(--lime)] px-7 py-4 font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--lime)]">
//             Se öppettider
//           </button>

//           <Link
//             to="/hitta-hit"
//             className="rounded-xl border-2 border-black px-7 py-4 font-black uppercase transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
//           >
//             Hitta hit
//           </Link>
//         </div>
//       </motion.div>

//       <motion.div
//         // className="relative mt-8 h-[300px] md:mt-0"
//         className="relative mt-8 h-[420px] md:mt-0"
//         initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
//         animate={{ opacity: 1, scale: 1, rotate: 0 }}
//         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//       >
//         <div className="absolute right-10 top-8 h-64 w-64 rounded-full bg-[var(--lime)]"></div>

//         <img
//           src={onBikes}
//           alt=""
//           className="absolute bottom-[-120px] right-[-40px] z-10 h-[500px] w-auto object-contain"
//         />

//         {/* <div className="absolute bottom-24 left-12 z-20 rotate-[-6deg] bg-white px-5 py-3 text-2xl font-black shadow-lg">
//           GÖR DET
//           <br />
//           SJÄLV!
//         </div> */}

//         {/* <div className="absolute bottom-10 left-14 z-20 text-5xl text-[var(--pink)]">
//           ☺
//         </div> */}
//       </motion.div>
//     </section>
//   )
// }

// export default Hero



// import { motion } from "framer-motion"

// function Hero() {
//   return (
//     <section className="relative grid items-center gap-8 overflow-hidden px-10 py-10 lg:grid-cols-[0.9fr_1.1fr]">
//       <motion.div
//         className="relative z-10 max-w-[560px]"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//       >
//         <h1 className="text-[72px] font-black uppercase leading-[0.88] tracking-tight md:text-[96px] xl:text-[120px]">
//           <span className="block">Laga själv.</span>
//           <span className="block text-[var(--pink)]">Tillsammans.</span>
//         </h1>

//         <p className="mt-10 max-w-[500px] text-[20px] leading-[1.55] text-black/80">
//           Cykelköket är en ideell gör-det-själv verkstad där alla är välkomna
//           att laga sin cykel med hjälp av verktyg, reservdelar och volontärer.
//         </p>

//         <div className="mt-12 flex flex-wrap gap-5">
//           <button className="rounded-xl bg-[var(--lime)] px-8 py-4 font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--lime)]">
//             Se öppettider →
//           </button>

//           <button className="rounded-xl border-2 border-black px-8 py-4 font-black uppercase transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white">
//             Hitta hit
//           </button>
//         </div>
//       </motion.div>

//       <motion.div
//         className="relative min-h-[480px]"
//         initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
//         animate={{ opacity: 1, scale: 1, rotate: 0 }}
//         transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//       >
//         <div className="absolute right-12 top-10 h-72 w-72 rounded-full bg-[var(--lime)]"></div>
//         <div className="absolute right-0 top-28 h-80 w-80 rounded-full bg-[var(--lime)] opacity-80"></div>

//         <div className="absolute bottom-10 right-0 z-10 h-[390px] w-[620px] rounded-t-full bg-black/90"></div>

//         <div className="absolute bottom-40 left-8 z-20 rotate-[-6deg] bg-white px-6 py-4 text-3xl font-black shadow-lg">
//           GÖR DET
//           <br />
//           SJÄLV!
//         </div>

//         <div className="absolute bottom-28 left-10 z-20 text-5xl text-[var(--pink)]">
//           ☺
//         </div>
//       </motion.div>
//     </section>
//   )
// }

// export default Hero




// import { motion } from "framer-motion"

// function Hero() {
//   return (
//     <section className="relative grid items-center overflow-hidden px-8 pb-8 pt-8 md:grid-cols-2">
//       <motion.div   className="relative z-10"
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7, ease: "easeOut" }}>
//         <h1 className="max-w-[650px] text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
//           Laga själv.
//           <span className="block text-[var(--pink)]">Tillsammans.</span>
//         </h1>

//         <p className="mt-8 max-w-md text-lg leading-relaxed">
//           Cykelköket är en ideell gör-det-själv verkstad där alla är välkomna
//           att laga sin cykel med hjälp av verktyg, reservdelar och volontärer.
//         </p>

//         <div className="mt-8 flex flex-wrap gap-4">
//           <button className="rounded-xl bg-[var(--lime)] px-7 py-4 font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--lime)]">
//             Se öppettider →
//           </button>

//           <button className="rounded-xl border-2 border-black px-7 py-4 font-black uppercase transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white">
//             Hitta hit
//           </button>
//         </div>
//       </motion.div>

//       <motion.div className="relative mt-8 h-[300px] md:mt-0"
//                   initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
//                   animate={{ opacity: 1, scale: 1, rotate: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
//         <div className="absolute right-8 top-8 h-72 w-72 rounded-full bg-[var(--lime)]"></div>

//         <div className="absolute bottom-8 right-0 z-10 h-[360px] w-[520px] rounded-t-full bg-black/90"></div>

//         <div className="absolute bottom-24 left-8 z-20 rotate-[-6deg] bg-white px-5 py-3 text-2xl font-black shadow-lg">
//           GÖR DET
//           <br />
//           SJÄLV!
//         </div>

//         <div className="absolute bottom-10 left-10 z-20 text-5xl text-[var(--pink)]">
//           ☺
//         </div>
//       </motion.div>
//     </section>
//   )
// }

// export default Hero