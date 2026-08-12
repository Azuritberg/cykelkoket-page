import { useState } from "react"
import { Link } from "react-router"
import { motion } from "framer-motion"
import onBikes from "../assets/on-bikes.png"

function Hero() {
  const [showOpeningHours, setShowOpeningHours] = useState(false)

  return (
    <>
      <section className="relative grid items-center overflow-hidden px-4 pb-8 pt-8 sm:px-8 md:grid-cols-2">
        <motion.div
          className="relative z-20 min-w-0 overflow-visible"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="max-w-full text-[clamp(2.7rem,8.5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
            <span className="block whitespace-nowrap italic">Laga själv.</span>
            <span className="block whitespace-nowrap italic text-[var(--pink)]">
              Tillsammans.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-black/80 sm:mt-8 sm:text-lg">
            Cykelköket är en ideell gör-det-själv-verkstad där alla är välkomna att laga sin cykel. Här finns verktyg, reservdelar och volontärer som hjälper till när det behövs. Vi skruvar på cyklar och lär av varandra.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setShowOpeningHours(true)}
              className="flex items-center justify-center rounded-xl bg-[var(--lime)] px-5 py-4 text-sm font-[900] uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--lime)] sm:px-7 sm:text-[16px]"
            >
              Se öppettider
            </button>

            <Link
              to="/om-oss#hitta-till-oss"
              className="flex items-center justify-center rounded-xl border-2 border-black px-5 py-4 text-sm font-black uppercase transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white sm:px-7 sm:text-base"
            >
              Hitta hit
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative mt-8 h-[330px] sm:h-[420px] md:mt-0"
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute right-10 top-8 h-64 w-64 rounded-full bg-[var(--lime)]"></div>

          <img
            src={onBikes}
            alt=""
            className="absolute bottom-[-90px] right-[-60px] z-10 h-[400px] w-auto max-w-none object-contain sm:right-[-20px] sm:h-[500px]"
          />
        </motion.div>
      </section>

      {showOpeningHours && (
        <div
          onClick={() => setShowOpeningHours(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="max-w-lg rounded-[2rem] bg-[var(--surface)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-10"
          >
            <h2 className="text-3xl font-black uppercase sm:text-4xl">
              Öppettider
            </h2>

            <p className="mt-6 text-base leading-relaxed sm:text-lg">
              Vår verkstad är vanligtvis öppen för medlemmar{" "}
              <strong>Måndagar</strong> och <strong>Onsdagar</strong> 17:00 till
              20:00.
            </p>

            <p className="mt-4 text-base leading-relaxed sm:text-lg">
              Du kan bli medlem på plats om du inte redan är det. Om vi tvingas
              hålla stängt så postar vi det under öppettiden.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* <a
                href="https://www.facebook.com/cykelkoket"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[var(--pink)] px-5 py-4 text-sm font-black uppercase text-black transition hover:-translate-y-1 hover:shadow-[0_0_20px_var(--pink)] sm:px-7 sm:text-base"
              >
                Till Facebook
              </a> */}

              <button
                onClick={() => setShowOpeningHours(false)}
                className="rounded-xl border-2 border-black px-5 py-4 text-sm font-black uppercase transition hover:bg-black hover:text-white sm:px-7 sm:text-base"
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


