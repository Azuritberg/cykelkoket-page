import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router"

function Header({ lightText = false }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const textColor = lightText ? "text-[var(--surface)]" : "text-black"

  const logoClass =
    "text-left text-xl font-black uppercase leading-none tracking-tight sm:text-2xl"

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
        className={`relative z-50 ${logoClass}`}
      >
        CYKEL
        <br />
        KÖKET
      </Link>

      <nav className="hidden items-center gap-8 text-sm font-bold uppercase md:flex">
        <Link to="/om-oss">Om Cykelköket</Link>
        <Link to="/hitta-hit">Hitta till oss</Link>
        <Link to="/mobila-verkstaden">Mobila verkstaden</Link>
        <Link to="/faq">FAQ</Link>
      </nav>

      <Link
        to="/bli-medlem"
        className="relative z-50 flex shrink-0 items-center rounded-xl bg-[var(--lime)] px-4 py-3 text-xs font-black uppercase text-black sm:px-5 sm:text-sm"
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

              <Link
                onClick={() => setMenuOpen(false)}
                to="/hitta-hit"
                className="border-b-2 border-[var(--surface)]/30 py-4"
              >
                Hitta till oss
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                to="/mobila-verkstaden"
                className="border-b-2 border-[var(--surface)]/30 py-4"
              >
                Mobila verkstaden
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                to="/faq"
                className="py-4"
              >
                FAQ
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header









// SKRÄP



// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Link } from "react-router"

// function Header({ lightText = false }) {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const textColor = lightText ? "text-[var(--surface)]" : "text-black"

//   const logoClass =
//     "text-left text-2xl font-black uppercase leading-none tracking-tight"

//   return (
//     <header className={`relative flex items-center justify-between px-8 py-6 ${textColor}`}>
//       {menuOpen && (
//         <div
//           className="fixed inset-0 z-40 md:hidden"
//           onClick={() => setMenuOpen(false)}
//         />
//       )}

//       <Link
//         to="/"
//         onClick={(event) => {
//           if (window.innerWidth < 768) {
//             event.preventDefault()
//             setMenuOpen(!menuOpen)
//           }
//         }}
//         className={`relative z-50 ${logoClass}`}
//       >
//         CYKEL
//         <br />
//         KÖKET
//       </Link>

//       <nav className="hidden items-center gap-8 text-sm font-bold uppercase md:flex">
//         <Link to="/om-oss">Om Cykelköket</Link>
//         <Link to="/hitta-hit">Hitta till oss</Link>
//         <Link to="/mobila-verkstaden">Mobila verkstaden</Link>
//         <Link to="/faq">FAQ</Link>
//       </nav>

//       <Link
//         to="/bli-medlem"
//         className="relative z-50 flex items-center rounded-xl bg-[var(--lime)] px-5 py-3 text-sm font-black uppercase text-black"
//       >
//         Bli medlem <span className="hidden md:inline ml-2 text-[24px]">☺</span>
//       </Link>

//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20, scale: 0.96 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -15, scale: 0.96 }}
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             className="absolute left-4 right-4 top-[90px] z-50 rounded-[2rem] border border-white/20 bg-[var(--surface-dark)]/85 p-6 text-[var(--surface)] shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl md:hidden"
//           >
//             <nav className="flex flex-col text-2xl font-black uppercase">
//               <Link
//                 onClick={() => setMenuOpen(false)}
//                 to="/om-oss"
//                 className="border-b-2 border-[var(--surface)]/30 py-4"
//               >
//                 Om Cykelköket
//               </Link>

//               <Link
//                 onClick={() => setMenuOpen(false)}
//                 to="/hitta-hit"
//                 className="border-b-2 border-[var(--surface)]/30 py-4"
//               >
//                 Hitta till oss
//               </Link>

//               <Link
//                 onClick={() => setMenuOpen(false)}
//                 to="/mobila-verkstaden"
//                 className="border-b-2 border-[var(--surface)]/30 py-4"
//               >
//                 Mobila verkstaden
//               </Link>

//               <Link
//                 onClick={() => setMenuOpen(false)}
//                 to="/faq"
//                 className="py-4"
//               >
//                 FAQ
//               </Link>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }

// export default Header




// import { useState } from "react"
// import { Link } from "react-router"

// function Header({ lightText = false }) {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const textColor = lightText ? "text-[var(--surface)]" : "text-black"

//   const logoClass =
//     "text-left text-2xl font-black uppercase leading-none tracking-tight"

//   return (
//     <header className={`relative flex items-center justify-between px-8 py-6 ${textColor}`}>
//       {menuOpen && (
//         <div
//           className="fixed inset-0 z-40 md:hidden"
//           onClick={() => setMenuOpen(false)}
//         />
//       )}

//       <Link
//         to="/"
//         onClick={(event) => {
//           if (window.innerWidth < 768 && !menuOpen) {
//             event.preventDefault()
//             setMenuOpen(true)
//           }

//           if (window.innerWidth < 768 && menuOpen) {
//             setMenuOpen(false)
//           }
//         }}
//         className={`relative z-50 ${logoClass}`}
//       >
//         CYKEL
//         <br />
//         KÖKET
//       </Link>

//       <nav className="hidden items-center gap-8 text-sm font-bold uppercase md:flex">
//         <Link to="/bli-medlem">Bli medlem</Link>
//         <Link to="/hitta-hit">Hitta till oss</Link>
//         <Link to="/mobila-verkstaden">Mobila verkstaden</Link>
//         <Link to="/faq">FAQ</Link>
//       </nav>

//       <Link
//         to="/bli-medlem"
//         className="relative z-50 flex items-center rounded-xl bg-[var(--lime)] px-5 py-3 text-sm font-black uppercase text-black"
//       >
//         Bli medlem <span className="hidden md:inline ml-2 text-[24px]">☺</span>
//       </Link>

//       {menuOpen && (
//         <div className="absolute left-4 right-4 top-[90px] z-50 rounded-[2rem] bg-[var(--surface-dark)] p-6 md:hidden">
//           <nav className="flex flex-col text-2xl font-black uppercase text-[var(--surface)]">
//             <Link
//               onClick={() => setMenuOpen(false)}
//               to="/bli-medlem"
//               className="border-b-2 border-[var(--surface)]/30 py-4"
//             >
//               Bli medlem
//             </Link>

//             <Link
//               onClick={() => setMenuOpen(false)}
//               to="/hitta-hit"
//               className="border-b-2 border-[var(--surface)]/30 py-4"
//             >
//               Hitta till oss
//             </Link>

//             <Link
//               onClick={() => setMenuOpen(false)}
//               to="/mobila-verkstaden"
//               className="border-b-2 border-[var(--surface)]/30 py-4"
//             >
//               Mobila verkstaden
//             </Link>

//             <Link
//               onClick={() => setMenuOpen(false)}
//               to="/faq"
//               className="py-4"
//             >
//               FAQ
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Header









// import { Link } from "react-router"

// function Header({ lightText = false }) {

//   const textColor = lightText
//   ? "text-[var(--surface)]"
//   : "text-black"

//   return (
//     <header className="flex items-center justify-between px-8 py-6">
//       <Link
//         to="/"
//         className={`text-2xl font-black uppercase leading-none tracking-tight ${textColor}`}
//       >
//         CYKEL
//         <br />
//         KÖKET
//       </Link>

//       <nav className={`hidden gap-8 text-sm font-bold uppercase md:flex ${textColor}`}>
//         {/* <Link to="/">Hem</Link> */}
//         <Link to="/bli-medlem">Bli medlem</Link>
//         <Link to="/hitta-hit">Hitta till oss</Link>
//         <Link to="/mobila-verkstaden">Mobila verkstaden</Link>
//         <Link to="/faq">FAQ</Link>
//       </nav>

//       <Link
//         to="/bli-medlem"
//         className="flex items-center rounded-xl bg-[var(--lime)] px-5 py-3 text-sm font-black uppercase text-black"
//       >
//         Bli medlem <span className="hidden md:inline ml-2 text-[24px]">☺</span> 
//       </Link>
//     </header>
//   )
// }

// export default Header