import { useEffect, useState } from "react"
import racerFixing from "../assets/racer-fixing.png"

function OpeningStatus() {
  const [openingHours, setOpeningHours] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadOpeningHours() {
      const response = await fetch("/api/opening-hours")
      const data = await response.json()

      setOpeningHours(data)
      setLoading(false)
    }

    loadOpeningHours()
  }, [])

  function formatDate(dateString) {
    const date = new Date(dateString)

    return date.toLocaleDateString("sv-SE", {
      day: "numeric",
      month: "numeric",
    })
  }

  const nextOpening = openingHours[0]
  const upcomingOpenings = openingHours.slice(1)

  return (
    <section className="relative min-h-[550px] w-full max-w-full min-w-0 overflow-hidden rounded-2xl bg-[var(--surface-dark)] px-6 py-8 text-[var(--text-light)] sm:px-8 sm:py-10">
      <div className="relative z-10 w-full max-w-full min-w-0">
        <div className="flex min-w-0 items-center gap-3">
          <span className="h-3 w-3 shrink-0 animate-pulse rounded-full bg-[var(--pink)] shadow-[0_0_20px_var(--pink)]"></span>

          <p className="min-w-0 text-xs font-black uppercase tracking-widest sm:text-sm">
            Verkstaden är stängd nu
          </p>
        </div>

        {loading && (
          <h2 className="mt-4 text-[3.1rem] font-black uppercase leading-[1.05] text-[var(--lime)]">
            Laddar...
          </h2>
        )}

        {!loading && nextOpening && (
          <>
            <p className="mt-8 text-sm font-black uppercase tracking-widest text-white/80">
              Öppet
            </p>

            <h2 className="mt-2 max-w-full text-[3.1rem] font-black uppercase leading-[1.05] text-[var(--lime)] sm:text-[3.6rem] lg:text-[4rem]">
              {nextOpening.dayName} {formatDate(nextOpening.date)}
              <br />
              <span className="block text-[2.7rem] sm:text-[3.3rem] lg:text-[3.7rem]">
                {nextOpening.startTime} – {nextOpening.endTime}
              </span>
            </h2>

            {upcomingOpenings.length > 0 && (
              <div className="mt-14">
                <p className="mb-5 text-sm font-black uppercase tracking-widest text-white/80">
                  Kommande öppettider
                </p>

                <div className="space-y-5">
                  {upcomingOpenings.map((item) => (
                    <div
                      key={item.date}
                      className="max-w-sm rounded-xl bg-white/10 px-5 py-4 text-base"
                    >
                      <p className="font-black uppercase text-[var(--lime)]">
                        {item.dayName} {formatDate(item.date)}
                      </p>
                      <p className="mt-1 text-white/80">
                        {item.startTime} – {item.endTime}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {!loading && !nextOpening && (
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/80">
            Inga kommande öppettider hittades.
          </p>
        )}
      </div>

      <img
        src={racerFixing}
        alt=""
        className="page-decoration pointer-events-none absolute bottom-[-40px] right-[-20px] hidden h-[520px] w-auto max-w-none object-contain opacity-30 lg:block"
      />
    </section>
  )
}

export default OpeningStatus





// import racerFixing from "../assets/racer-fixing.png"
// import { getOpeningStatus } from "../data/openingHoursOld"

// function OpeningStatus() {
//   const { isOpen, currentDayName, nextDayName, timeText } = getOpeningStatus()

//   return (
//     <section className="relative min-h-[550px] w-full max-w-full min-w-0 overflow-hidden rounded-2xl bg-[var(--surface-dark)] px-6 py-8 text-[var(--text-light)] sm:px-8 sm:py-10">
//       <div className="relative z-10 w-full max-w-full min-w-0">
//         <div className="flex min-w-0 items-center gap-3">
//           <span
//             className={`h-3 w-3 shrink-0 animate-pulse rounded-full ${
//               isOpen
//                 ? "bg-[var(--lime)] shadow-[0_0_20px_var(--lime)]"
//                 : "bg-[var(--pink)] shadow-[0_0_20px_var(--pink)]"
//             }`}
//           ></span>

//           <p className="min-w-0 text-xs font-black uppercase tracking-widest sm:text-sm">
//             {isOpen ? "Verkstaden är öppen nu" : "Verkstaden är stängd nu"}
//           </p>
//         </div>

//         <h2 className="mt-4 max-w-full text-[3.1rem] font-black uppercase leading-[1.05] text-[var(--lime)] sm:text-[3.6rem] lg:text-[4rem]">
//           {isOpen ? currentDayName : nextDayName}
//           <br />
//           <span className="block text-[2.7rem] sm:text-[3.3rem] lg:text-[3.7rem]">
//             {timeText}
//           </span>
//         </h2>

//         {/* <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/80">
//           Kolla Facebook för eventuella <br />ändringar eller stängningar.
//         </p>

//         <a
//           href="https://www.facebook.com/cykelkoket"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-6 inline-block rounded-xl bg-[var(--pink)] px-6 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)] sm:px-7 sm:text-base"
//         >
//           Till Facebook
//         </a> */}
//       </div>

//       <img
//         src={racerFixing}
//         alt=""
//         className="page-decoration pointer-events-none absolute bottom-[-40px] right-[-20px] hidden h-[520px] w-auto max-w-none object-contain opacity-30 lg:block"
//       />
//     </section>
//   )
// }

// export default OpeningStatus





// SKRÄP


// import racerFixing from "../assets/racer-fixing.png"
// import { getOpeningStatus } from "../data/openingHours"

// function OpeningStatus() {
//   const { isOpen, currentDayName, nextDayName, timeText } = getOpeningStatus()

//   return (
//     <section className="relative w-full max-w-full min-w-0 overflow-hidden rounded-2xl bg-[var(--surface-dark)] p-6 text-[var(--text-light)] sm:p-10">
//       <div className="relative z-10 flex min-w-0 items-center gap-3">
//         <span
//           className={`h-3 w-3 shrink-0 animate-pulse rounded-full ${
//             isOpen
//               ? "bg-[var(--lime)] shadow-[0_0_20px_var(--lime)]"
//               : "bg-[var(--pink)] shadow-[0_0_20px_var(--pink)]"
//           }`}
//         ></span>

//         <p className="min-w-0 text-xs font-black uppercase tracking-widest sm:text-sm">
//           {isOpen ? "Verkstaden är öppen nu" : "Verkstaden är stängd nu"}
//         </p>
//       </div>

//       <h2 className="relative z-10 mt-4 max-w-full text-[clamp(2rem,8.5vw,4.5rem)] font-black uppercase leading-tight text-[var(--lime)]">
//         {isOpen ? currentDayName : nextDayName}
//         <br />
//         {timeText}
//       </h2>

//       <p className="relative z-10 mt-6 max-w-sm text-sm leading-relaxed text-white/80">
//         Kolla Facebook för eventuella <br />ändringar eller stängningar.
//       </p>

//       <a
//         href="https://www.facebook.com/cykelkoket"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="relative z-10 mt-6 inline-block rounded-xl bg-[var(--pink)] px-6 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)] sm:px-7 sm:text-base"
//       >
//         Till Facebook
//       </a>

//       <img
//         src={racerFixing}
//         alt=""
//         className="page-decoration pointer-events-none absolute bottom-[-40px] right-[70px] h-[420px] w-auto max-w-none object-contain opacity-30 sm:right-[-20px] sm:h-[520px]"
//       />
//     </section>
//   )
// }

// export default OpeningStatus




// import racerFixing from "../assets/racer-fixing.png"
// import { getOpeningStatus } from "../data/openingHours"

// function OpeningStatus() {
//   const { isOpen, currentDayName, nextDayName, timeText } = getOpeningStatus()

//   return (
//     <section className="relative min-h-[280px] overflow-hidden rounded-2xl bg-[var(--surface-dark)] p-10 text-[var(--text-light)]">
//       <div className="relative z-10 flex items-center gap-3">
//         <span
//           className={`h-3 w-3 animate-pulse rounded-full ${
//             isOpen
//               ? "bg-[var(--lime)] shadow-[0_0_20px_var(--lime)]"
//               : "bg-[var(--pink)] shadow-[0_0_20px_var(--pink)]"
//           }`}
//         ></span>

//         <p className="text-sm font-black uppercase tracking-widest">
//           {isOpen ? "Verkstaden är öppen nu" : "Verkstaden är stängd nu"}
//         </p>
//       </div>

//       <h2 className="relative z-10 mt-4 text-[clamp(2rem,8.5vw,4.5rem)] font-black uppercase leading-tight text-[var(--lime)]">
//         {isOpen ? currentDayName : nextDayName}
//         <br />
//         {timeText}
//       </h2>

//       <p className="relative z-10 mt-6 max-w-sm text-sm leading-relaxed text-white/80">
//         Kolla Facebook för eventuella <br />ändringar eller stängningar.
//       </p>

//       <a
//         href="https://www.facebook.com/cykelkoket"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="relative z-10 mt-6 inline-block rounded-xl bg-[var(--pink)] px-7 py-4 font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)]"
//       >
//         Till Facebook
//       </a>

//       <img
//         src={racerFixing}
//         alt=""
//         className="pointer-events-none absolute bottom-[-40px] right-[-20px] h-[520px] w-auto object-contain opacity-30"
//       />
//     </section>
//   )
// }

// export default OpeningStatus






// import racerFixing from "../assets/racer-fixing.png"

// function OpeningStatus() {
//   const now = new Date()
//   const day = now.getDay()
//   const hour = now.getHours()
//   const minute = now.getMinutes()
//   const currentTime = hour + minute / 60

//   const isMondayOpen = day === 1 && currentTime >= 17 && currentTime < 20
//   const isWednesdayOpen = day === 3 && currentTime >= 17 && currentTime < 20
//   const isOpen = isMondayOpen || isWednesdayOpen

//   let nextDay = "Måndag"

//   if (day === 1 && currentTime >= 20) nextDay = "Onsdag"
//   else if (day === 2) nextDay = "Onsdag"
//   else if (day === 3 && currentTime < 17) nextDay = "Onsdag"
//   else if (day === 3 && currentTime >= 20) nextDay = "Måndag"
//   else if (day === 4 || day === 5 || day === 6 || day === 0) nextDay = "Måndag"

//   return (
//     <section className="relative min-h-[280px] overflow-hidden rounded-2xl bg-[var(--surface-dark)] p-10 text-[var(--text-light)]">
//       <div className="relative z-10 flex items-center gap-3">
//         <span
//           className={`h-3 w-3 animate-pulse rounded-full ${
//             isOpen
//               ? "bg-[var(--lime)] shadow-[0_0_20px_var(--lime)]"
//               : "bg-[var(--pink)] shadow-[0_0_20px_var(--pink)]"
//           }`}
//         ></span>

//         <p className="text-sm font-black uppercase tracking-widest">
//           {isOpen ? "Verkstaden är öppen nu" : "Verkstaden är stängd nu"}
//         </p>
//       </div>

//       <h2 className="relative z-10 mt-4 text-5xl font-black uppercase leading-tight text-[var(--lime)]">
//         {isOpen ? (isMondayOpen ? "Måndag" : "Onsdag") : nextDay}
//         <br />
//         17:00 – 20:00
//       </h2>

//       <p className="relative z-10 mt-6 max-w-sm text-sm leading-relaxed text-white/80">
//         Kolla Facebook för eventuella <br />ändringar eller stängningar.
//       </p>

//       <a
//         href="https://www.facebook.com/cykelkoket"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="relative z-10 mt-6 inline-block rounded-xl bg-[var(--pink)] px-7 py-4 font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)]"
//       >
//         Till Facebook
//       </a>

//       <img
//         src={racerFixing}
//         alt=""
//         className="pointer-events-none absolute bottom-[-40px] right-[-20px] h-[520px] w-auto object-contain opacity-30"
//       />
//     </section>
//   )
// }

// export default OpeningStatus



// import racerFixing from "../assets/racer-fixing.png"

// function OpeningStatus() {
//   return (
//     <section className="relative min-h-[280px] overflow-hidden rounded-2xl bg-[var(--surface-dark)] p-10 text-[var(--text-light)]">
//       <div className="flex items-center gap-3">
//         <span className="h-3 w-3 animate-pulse rounded-full bg-[var(--lime)] shadow-[0_0_20px_var(--lime)]"></span>
//         <p className="text-sm font-black uppercase tracking-widest">
//           Verkstaden är öppen
//         </p>
//       </div>

//       <h2 className="mt-4 text-5xl font-black uppercase leading-tight text-[var(--lime)]">
//         Måndag
//         <br />
//         17:00 – 20:00
//       </h2>

//       <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/80">
//         Kolla Facebook för eventuella <br />ändringar eller stängningar.
//       </p>

//       {/* <button className="mt-6 rounded-xl bg-[var(--pink)] px-7 py-4 font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)]">
//         Till Facebook
//       </button> */}
//       <a
//         href="https://www.facebook.com/cykelkoket"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="mt-6 inline-block rounded-xl bg-[var(--pink)] px-7 py-4 font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)]"
//       >
//         Till Facebook
//       </a>

//       {/* <div className="absolute right-8 top-8 h-32 w-32 rounded-full border border-white/30"></div> */}

//         <img
//           src={racerFixing}
//           alt=""
//           className="absolute bottom-[-40px] right-[-20px] h-[520px] w-auto object-contain opacity-30"
//         />

//     </section>
//   )
// }

// export default OpeningStatus