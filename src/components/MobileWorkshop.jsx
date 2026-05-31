import { Link } from "react-router"

function MobileWorkshop() {
  return (
    <section
      id="mobila-verkstaden"
      className="flex h-full w-full max-w-full min-w-0 flex-col justify-center overflow-hidden rounded-2xl bg-[var(--pink)] px-6 py-10 text-black sm:p-10"
    >
      <div className="w-full max-w-md min-w-0">
        <h2 className="text-[clamp(2.5rem,10vw,3.7rem)] font-black uppercase leading-none tracking-tight">
          <span className="block text-[var(--surface)]">Mobila</span>

          <span className="block text-black">Verkstaden</span>
        </h2>

        <p className="mt-6 max-w-sm text-base leading-relaxed text-black/75 sm:text-lg">
          Vi kommer till er. Boka oss till er arbetsplats, skola, förening eller
          event.
        </p>

        <Link
          to="/mobila-verkstaden"
          className="mt-8 inline-block rounded-xl bg-black px-6 py-4 text-sm font-black uppercase text-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] sm:px-7 sm:py-5 sm:text-base"
        >
          Läs mer & boka
        </Link>
      </div>
    </section>
  )
}

export default MobileWorkshop






// SKRÄP


// import { Link } from "react-router"

// function MobileWorkshop() {
//   return (
//     <section
//       id="mobila-verkstaden"
//       className="rounded-2xl bg-[var(--pink)] p-10 text-black"
//     >
//       <h2 className="text-6xl font-black uppercase leading-none tracking-tight">
//         Mobila
//         <span className="block text-[var(--surface)]">Verkstaden</span>
//       </h2>

//       <p className="mt-6 text-base leading-relaxed text-black/70">
//         Vi kommer till er. Boka oss till er arbetsplats, skola, förening eller
//         event.
//       </p>

//       <Link
//         to="/mobila-verkstaden"
//         className="mt-8 inline-block rounded-xl bg-black px-7 py-4 font-black uppercase text-[var(--pink)] transition duration-300 hover:-translate-y-1"
//       >
//         Läs mer & boka
//       </Link>
//     </section>
//   )
// }

// export default MobileWorkshop



// import { Link } from "react-router"

// import tools from "../assets/tools.png"

// function MobileWorkshop() {
//   const workshops = ["Punkafix", "Bromsar", "Växlar", "Hjulriktning"]

//   return (
//     <section
//       id="mobila-verkstaden"
//       className="relative min-h-[360px] overflow-hidden rounded-2xl bg-[var(--surface-dark)] px-10 py-10 text-[var(--text-light)] md:px-12"
//     >
//       <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-between">
//         <div>
//           <h2 className="text-5xl font-black uppercase leading-none tracking-tight md:text-6xl">
//             Mobila
//             <span className="block text-[var(--lime)]">Verkstaden</span>
//           </h2>

//           <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
//             Vi kommer till er. Boka oss till er arbetsplats, <br />skola, förening
//             eller event.
//           </p>

//           <Link
//             to="/mobila-verkstaden"
//             className="mt-7 inline-block rounded-xl bg-[var(--pink)] px-7 py-4 font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)]"
//           >
//             Läs mer & boka
//           </Link>
//           {/* <button className="mt-7 rounded-xl bg-[var(--pink)] px-7 py-4 font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)]">
//             Läs mer & boka
//           </button> */}
//         </div>

//         <div className="mt-10">
//           <p className="mb-3 text-sm font-bold">Populära workshops:</p>

//           <div className="flex flex-wrap gap-2">
//             {workshops.map((workshop) => (
//               <span
//                 key={workshop}
//                 className="rounded-full bg-[var(--lime)] px-4 py-2 text-sm font-black uppercase text-black"
//               >
//                 {workshop}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//         <img
//           src={tools}
//           alt=""
//           className="page-decoration absolute right-[-10px] top-[-40px] h-[585px] w-auto object-contain opacity-30"
//         />
//     </section>
//   )
// }

// export default MobileWorkshop




// function MobileWorkshop() {
//   const workshops = ["Punkafix", "Bromsar", "Växlar", "Hjulriktning"]

//   return (
//     <section
//       id="mobila-verkstaden"
//       className="relative overflow-hidden rounded-2xl bg-[var(--surface-dark)] p-10 text-[var(--text-light)] md:p-14"
//     >
//       <div className="relative z-10 max-w-xl">
//         <h2 className="text-6xl font-black uppercase leading-none tracking-tight">
//           Mobila
//           <span className="block text-[var(--lime)]">Verkstaden</span>
//         </h2>

//         <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
//           Vi kommer till er. Boka oss till er arbetsplats, skola, förening
//           eller event.
//         </p>

//         <button className="mt-8 rounded-xl bg-[var(--pink)] px-7 py-4 font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)]">
//           Läs mer & boka →
//         </button>

//         <div className="mt-10">
//           <p className="mb-3 text-sm font-bold">Populära workshops:</p>

//           <div className="flex flex-wrap gap-2">
//             {workshops.map((workshop) => (
//               <span
//                 key={workshop}
//                 className="rounded-full bg-[var(--lime)] px-4 py-2 text-sm font-black uppercase text-black"
//               >
//                 {workshop}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* <div className="absolute bottom-8 right-16 hidden text-7xl text-[var(--lime)] md:block">
//         ✦
//       </div>

//       <div className="absolute right-24 top-16 hidden rotate-12 text-6xl text-[var(--pink)] md:block">
//         ✎
//       </div> */}

//       <div className="absolute bottom-10 right-10 hidden h-40 w-72 rounded-full bg-black/20 blur-3xl md:block"></div>
//     </section>
//   )
// }

// export default MobileWorkshop




// function MobileWorkshop() {
//   const workshops = ["Punkafix", "Bromsar", "Växlar", "Hjulriktning"]

//   return (
//     <section id="mobila-verkstaden" className="relative overflow-hidden rounded-2xl bg-[var(--surface-dark)] p-10 text-[var(--text-light)] md:p-14">
//       <div className="relative z-10 max-w-xl">
//         <h2 className="text-6xl font-black uppercase leading-none tracking-tight">
//           Mobila
//           <span className="block text-[var(--lime)]">Verkstaden</span>
//         </h2>

//         <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
//           Vi kommer till er. Boka oss till er arbetsplats, skola, förening
//           eller event.
//         </p>

//         <button className="mt-8 rounded-xl bg-[var(--pink)] px-7 py-4 font-black uppercase text-black">
//           Läs mer & boka →
//         </button>

//         <div className="mt-10">
//           <p className="mb-3 text-sm font-bold">Populära workshops:</p>

//           <div className="flex flex-wrap gap-2">
//             {workshops.map((workshop) => (
//               <span
//                 key={workshop}
//                 className="rounded-full bg-[var(--lime)] px-4 py-2 text-sm font-black uppercase text-black"
//               >
//                 {workshop}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 right-10 hidden h-64 w-[430px] rounded-3xl border border-white/20 bg-black/30 md:block"></div>

//       <div className="absolute right-20 top-20 text-6xl text-[var(--pink)]">
//         ✎
//       </div>

//       <div className="absolute bottom-12 right-32 text-6xl text-[var(--lime)]">
//         ✦
//       </div>
//     </section>
//   )
// }

// export default MobileWorkshop