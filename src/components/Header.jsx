import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router"

import ckLogoBlack from "../assets/CK-logga-svart.svg"
import ckLogoWhite from "../assets/CK-logga-vit.svg"

function Header({ lightText = false, whiteLogo = false }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const textColor = lightText ? "text-[var(--surface)]" : "text-black"

  // const logoClass =
  //   "text-left text-xl font-black uppercase leading-none tracking-tight sm:text-2xl"

  return (
    <header className={`relative flex items-center justify-between gap-3 px-4 py-5 sm:px-8 sm:py-6 ${textColor}`}>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <Link
        to="/"
        onClick={(event) => {
          if (window.innerWidth < 768) {
            event.preventDefault()
            setMenuOpen(!menuOpen)
          }
        }}
        className="relative z-50 flex items-center"
      >
        <img
          src={whiteLogo ? ckLogoWhite : ckLogoBlack}
          alt="Cykelköket"
          className="w-[90px] max-w-none h-auto"
        />
      </Link>

      <nav className="hidden items-center gap-8 text-sm font-bold uppercase md:flex">
        <Link to="/om-oss">Om Cykelköket</Link>
        {/* <Link to="/hitta-hit">Hitta hit</Link> */}
        <Link to="/mobila-verkstaden">Mobila verkstan</Link>
        <Link to="/foreningar">Föreningar</Link>
        {/* <Link to="/faq">FAQ</Link> */}
      </nav>

      <Link
        to="/bli-medlem"
        className="relative z-50 flex shrink-0 items-center rounded-xl bg-[var(--lime)] px-6 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--lime)] sm:px-5 sm:py-3 sm:text-sm"
      >
        Bli medlem <span className="ml-2 hidden text-[24px] md:inline">☺</span>
      </Link>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-4 right-4 top-[90px] z-50 rounded-[2rem] border border-white/20 bg-[var(--surface-dark)]/85 p-6 text-[var(--surface)] shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col text-2xl font-black uppercase">
              <Link
                onClick={() => setMenuOpen(false)}
                to="/om-oss"
                className="border-b-2 border-[var(--surface)]/30 py-4"
              >
                Om Cykelköket
              </Link>

              {/* <Link
                onClick={() => setMenuOpen(false)}
                to="/hitta-hit"
                className="border-b-2 border-[var(--surface)]/30 py-4"
              >
                Hitta hit
              </Link> */}

              <Link
                onClick={() => setMenuOpen(false)}
                to="/mobila-verkstaden"
                className="border-b-2 border-[var(--surface)]/30 py-4"
              >
                Mobila verkstan
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                to="/foreningar"
                className="py-4"
              >
                Föreningar
              </Link>

              {/* <Link
                onClick={() => setMenuOpen(false)}
                to="/faq"
                className="py-4"
              >
                FAQ
              </Link> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header



