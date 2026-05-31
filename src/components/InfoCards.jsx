import { useState } from "react"
import { Link } from "react-router"
import { Wrench, Users, Cog, ChevronDown } from "lucide-react"

function InfoCards() {
  const [isOpen, setIsOpen] = useState(false)

  const cards = [
    {
      icon: <Wrench size={56} strokeWidth={2} />,
      title: "Laga din cykel själv",
      text: "Du lagar själv med stöd av volontärer.",
    },
    {
      icon: <Users size={56} strokeWidth={2} />,
      title: "Gemenskap & kunskap",
      text: "Vi lär av varandra och hjälps åt.",
    },
    {
      icon: <Cog size={56} strokeWidth={2} />,
      title: "Verktyg & reservdelar",
      text: "Använd våra verktyg och reservdelar.",
    },
  ]

  return (
    <section className="w-full max-w-full min-w-0 overflow-hidden rounded-2xl bg-[var(--surface)] px-6 py-8 sm:px-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full min-w-0 items-center justify-between gap-4 text-left"
      >
        <h2 className="min-w-0 text-[clamp(2rem,8vw,1.8rem)] font-black uppercase leading-none">
          Vad är Cykelköket?
        </h2>

        <ChevronDown
          size={36}
          strokeWidth={3}
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-8 grid min-w-0 gap-6 sm:grid-cols-3 sm:gap-0">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className={`flex min-w-0 flex-col items-center text-center sm:px-5 ${
                index !== cards.length - 1
                  ? "border-b border-dashed border-black/30 pb-6 sm:border-b-0 sm:border-r sm:pb-0"
                  : ""
              }`}
            >
              <div className="mb-5 flex h-[64px] items-center justify-center">
                {card.icon}
              </div>

              <h3 className="max-w-[150px] text-sm font-black uppercase leading-tight text-black">
                {card.title}
              </h3>

              <p className="mt-3 max-w-[150px] text-sm leading-relaxed text-black/70">
                {card.text}
              </p>
            </article>
          ))}
        </div>

        <Link
          to="/om-oss"
          className="group mt-10 inline-flex items-center gap-2 font-black uppercase text-[var(--pink)] sm:mt-12"
        >
          Läs mer om oss

          <span className="relative top-[-2.5px] text-2xl transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </Link>
      </div>
    </section>
  )
}

export default InfoCards


// import { useState } from "react"
// import { Link } from "react-router"
// import { Wrench, Users, Cog, ChevronDown } from "lucide-react"

// function InfoCards() {
//   const [isOpen, setIsOpen] = useState(false)

//   const cards = [
//     {
//       icon: <Wrench size={56} strokeWidth={2} />,
//       title: "Laga din cykel själv",
//       text: "Du lagar själv med stöd av volontärer.",
//     },
//     {
//       icon: <Users size={56} strokeWidth={2} />,
//       title: "Gemenskap & kunskap",
//       text: "Vi lär av varandra och hjälps åt.",
//     },
//     {
//       icon: <Cog size={56} strokeWidth={2} />,
//       title: "Verktyg & reservdelar",
//       text: "Använd våra verktyg och reservdelar.",
//     },
//   ]

//   return (
//     <section className="w-full max-w-full min-w-0 overflow-hidden rounded-2xl bg-[var(--surface)] px-6 py-8 sm:px-8">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex w-full items-center justify-between gap-6 text-left"
//       >
//         <h2 className="max-w-full text-[clamp(0.5rem,7vw,3rem)] font-black uppercase leading-none">
//           Vad är Cykelköket?
//         </h2>

//         <ChevronDown
//           size={36}
//           strokeWidth={3}
//           className={`shrink-0 transition-transform duration-300 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       <div
//         className={`overflow-hidden transition-all duration-500 ease-in-out ${
//           isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="mt-8 grid grid-cols-3">
//           {cards.map((card, index) => (
//             <article
//               key={card.title}
//               className={`flex flex-col items-center px-5 text-center ${
//                 index !== cards.length - 1
//                   ? "border-r border-dashed border-black/30"
//                   : ""
//               }`}
//             >
//               <div className="mb-5 flex h-[64px] items-center justify-center">
//                 {card.icon}
//               </div>

//               <h3 className="max-w-[150px] text-sm font-black uppercase leading-tight text-black">
//                 {card.title}
//               </h3>

//               <p className="mt-3 max-w-[150px] text-sm leading-relaxed text-black/70">
//                 {card.text}
//               </p>
//             </article>
//           ))}
//         </div>

//         <Link
//           to="/om-oss"
//           className="group mt-12 inline-flex items-center gap-2 font-black uppercase text-[var(--pink)]"
//         >
//           Läs mer om oss

//           <span className="relative top-[-2.5px] text-2xl transition-transform duration-300 group-hover:translate-x-2">
//             →
//           </span>
//         </Link>
//       </div>
//     </section>
//   )
// }

// export default InfoCards




// import { Link } from "react-router"
// import { Wrench, Users, Cog } from "lucide-react"

// function InfoCards() {
//   const cards = [
//     {
//       icon: <Wrench size={56} strokeWidth={2} />,
//       title: "Laga din cykel själv",
//       text: "Du lagar själv med stöd av volontärer.",
//     },
//     {
//       icon: <Users size={56} strokeWidth={2} />,
//       title: "Gemenskap & kunskap",
//       text: "Vi lär av varandra och hjälps åt.",
//     },
//     {
//       icon: <Cog size={56} strokeWidth={2} />,
//       title: "Verktyg & reservdelar",
//       text: "Använd våra verktyg och reservdelar.",
//     },
//   ]

//   return (
//     <section className="rounded-2xl bg-[var(--surface)] px-8 py-8">
//       <h2 className="text-3xl font-black uppercase">Vad är Cykelköket?</h2>

//       <div className="mt-8 grid grid-cols-3">
//         {cards.map((card, index) => (
//           <article
//             key={card.title}
//             className={`flex flex-col items-center px-5 text-center ${
//               index !== cards.length - 1
//                 ? "border-r border-dashed border-black/30"
//                 : ""
//             }`}
//           >
//             <div className="mb-5 flex h-[64px] items-center justify-center">
//               {card.icon}
//             </div>

//             <h3 className="max-w-[150px] text-sm font-black uppercase leading-tight text-black">
//               {card.title}
//             </h3>

//             <p className="mt-3 max-w-[150px] text-sm leading-relaxed text-black/70">
//               {card.text}
//             </p>
//           </article>
//         ))}
//       </div>

//       <Link
//         to="/om-oss"
//         className="group mt-12 inline-flex items-center gap-2 font-black uppercase text-[var(--pink)]"
//       >
//         Läs mer om oss

//         <span className="relative top-[-2.5px] text-2xl transition-transform duration-300 group-hover:translate-x-2">
//           →
//         </span>
//       </Link>
//       {/* <Link
//         to="/om-oss"
//         className="mt-12 inline-block font-black uppercase text-[var(--pink)]"
//       >
//         Läs mer om oss →
//       </Link> */}

//       {/* <button className="mt-8 font-black uppercase text-[var(--pink)]">
//         Läs mer om oss →
//       </button> */}
//     </section>
//   )
// }

// export default InfoCards



// function InfoCards() {
//   const cards = [
//     {
//       icon: "⌘",
//       title: "Laga din cykel själv",
//       text: "Du lagar själv med stöd av våra volontärer.",
//     },
//     {
//       icon: "♡",
//       title: "Gemenskap & kunskap",
//       text: "Vi lär av varandra och hjälps åt.",
//     },
//     {
//       icon: "⚙",
//       title: "Verktyg & reservdelar",
//       text: "Använd våra verktyg och reservdelar.",
//     },
//   ]

//   return (
//     <section className="rounded-2xl bg-[var(--surface)] p-10">
//       <h2 className="text-3xl font-black uppercase">Vad är Cykelköket?</h2>

//       <div className="mt-10 grid gap-8 md:grid-cols-3">
//         {cards.map((card, index) => (
//           <article
//             key={card.title}
//             className="relative text-center transition duration-300 hover:text-[var(--pink)]"
//           >
//             {index !== 0 && (
//               <div className="absolute left-0 top-0 hidden h-full border-l border-dashed border-black/30 md:block"></div>
//             )}

//             <div className="text-5xl leading-none">{card.icon}</div>

//             <h3 className="mt-6 text-sm font-black uppercase text-black">
//               {card.title}
//             </h3>

//             <p className="mt-3 px-3 text-sm leading-relaxed text-black/75">
//               {card.text}
//             </p>
//           </article>
//         ))}
//       </div>

//       <button className="mt-10 font-black uppercase text-[var(--pink)]">
//         Läs mer om oss →
//       </button>
//     </section>
//   )
// }

// export default InfoCards













// function InfoCards() {
//   const cards = [
//     {
//       icon: "🔧",
//       title: "Laga din cykel själv",
//       text: "Du lagar själv med stöd av våra volontärer.",
//     },
//     {
//       icon: "👥",
//       title: "Gemenskap & kunskap",
//       text: "Vi lär av varandra och hjälps åt.",
//     },
//     {
//       icon: "⚙️",
//       title: "Verktyg & reservdelar",
//       text: "Använd våra verktyg och reservdelar.",
//     },
//   ]

//   return (
//     <section className="rounded-2xl bg-[var(--surface)] p-10">
//       <h2 className="text-3xl font-black uppercase">Vad är Cykelköket?</h2>

//       <div className="mt-10 grid gap-8 md:grid-cols-3">
//         {cards.map((card) => (
//           <article key={card.title} className="text-center">
//             <div className="text-5xl">{card.icon}</div>
//             <h3 className="mt-5 text-sm font-black uppercase">{card.title}</h3>
//             <p className="mt-3 text-sm leading-relaxed">{card.text}</p>
//           </article>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default InfoCards


// import { motion } from "framer-motion"

// function InfoCards() {
//   const cards = [
//     {
//       icon: "🔧",
//       title: "Laga din cykel själv",
//       text: "Du lagar själv med stöd av våra volontärer.",
//     },
//     {
//       icon: "👥",
//       title: "Gemenskap & kunskap",
//       text: "Vi lär av varandra och hjälps åt.",
//     },
//     {
//       icon: "⚙️",
//       title: "Verktyg & reservdelar",
//       text: "Använd våra verktyg och reservdelar.",
//     },
//   ]

//   return (
//     <section className="rounded-2xl bg-[var(--surface)] p-10">
//       <motion.h2
//         className="text-3xl font-black uppercase"
//         initial={{ opacity: 0, y: 25 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         Vad är Cykelköket?
//       </motion.h2>

//       <div className="mt-10 grid gap-8 md:grid-cols-3">
//         {cards.map((card, index) => (
//           <motion.article
//             key={card.title}
//             className="rounded-2xl border-2 border-black bg-white p-6 text-center shadow-[6px_6px_0_#000] transition hover:-translate-y-1"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.15 }}
//           >
//             <div className="text-5xl">{card.icon}</div>
//             <h3 className="mt-5 text-sm font-black uppercase">{card.title}</h3>
//             <p className="mt-3 text-sm leading-relaxed">{card.text}</p>
//           </motion.article>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default InfoCards