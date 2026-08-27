import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import racerFixing from "../assets/racer-fixing.png"

function OpeningStatus() {
  const [openingHours, setOpeningHours] = useState([])
  const [loading, setLoading] = useState(true)
  const [showMore, setShowMore] = useState(false)

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
      timeZone: "Europe/Stockholm",
    })
  }

  // const nextOpening = openingHours[0]
  // const upcomingOpenings = openingHours.slice(1)

  const nextOpening = openingHours[0]
  const upcomingOpenings = openingHours.slice(1, 3)
  const moreOpenings = openingHours.slice(3, 9)

  const now = new Date()

  const currentOpening = openingHours.find((item) => {
    const start = new Date(item.startDate)
    const end = new Date(item.endDate)

    return now >= start && now < end && !item.isClosed
  })

const isOpenNow = Boolean(currentOpening)

  return (
    <section className="relative min-h-[690px] w-full max-w-full min-w-0 overflow-hidden rounded-2xl bg-[var(--surface-dark)] px-6 py-8 text-[var(--text-light)] sm:px-8 sm:py-10">
      <div className="relative z-10 w-full max-w-full min-w-0">

        {/* STATUS HÖGST UPP */}
        <div className="flex min-w-0 items-center gap-3">
          <span
            className={`h-3 w-3 shrink-0 animate-pulse rounded-full ${
              isOpenNow
                ? "bg-[var(--lime)] shadow-[0_0_20px_var(--lime)]"
                : "bg-[var(--pink)] shadow-[0_0_20px_var(--pink)]"
            }`}
          ></span>

          <p className="min-w-0 text-xs font-black uppercase tracking-widest sm:text-sm">
            {isOpenNow
              ? "Verkstaden är öppen nu"
              : "Verkstaden är stängd nu"}
          </p>
        </div>

        {/* LADDAR */}
        {loading && (
          <h2 className="mt-4 text-[3.1rem] font-black uppercase leading-[1.05] text-[var(--lime)]">
            Laddar...
          </h2>
        )}

        {/* NÄSTA VERKSTADSTID */}
        {!loading && nextOpening && (
          <>
            <p
              className={`mt-8 text-sm font-black uppercase tracking-widest ${
                nextOpening.isClosed
                  ? "text-[var(--pink)]"
                  : "text-white/80"
              }`}
            >
              {nextOpening.isClosed ? "Inställt" : "Öppet"}
            </p>

            <h2 className="mt-2 max-w-full text-[3.1rem] font-black uppercase leading-[1.05] text-[var(--lime)] sm:text-[3.6rem] lg:text-[4rem]">
              {nextOpening.dayName} {formatDate(nextOpening.date)}

              <br />

              {nextOpening.isClosed ? (
                <span className="block text-[2.7rem] text-[var(--pink)] sm:text-[3.3rem] lg:text-[3.7rem]">
                  Inställt
                </span>
              ) : (
                <span className="block text-[2.7rem] sm:text-[3.3rem] lg:text-[3.7rem]">
                  {nextOpening.startTime} – {nextOpening.endTime}
                </span>
              )}
            </h2>

            {/* KOMMANDE VERKSTADSTIDER */}
            {upcomingOpenings.length > 0 && (
              <div className="mt-14">
                <p className="mb-5 text-sm font-black uppercase tracking-widest text-white/80">
                  Kommande verkstadstider
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

                      {item.isClosed ? (
                        <>
                          <p className="mt-1 font-black uppercase text-[var(--pink)]">
                            Inställt
                          </p>

                          <p className="mt-1 text-sm text-white/60">
                            Ordinarie tid {item.startTime} – {item.endTime}
                          </p>
                        </>
                      ) : (
                        <p className="mt-1 text-white/80">
                          {item.startTime} – {item.endTime}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {moreOpenings.length > 0 && (
                  <div className="mt-7">
                    <button
                      type="button"
                      onClick={() => setShowMore((prev) => !prev)}
                      aria-expanded={showMore}
                      className="group flex w-full max-w-sm items-center justify-between text-left text-sm font-black uppercase tracking-widest text-white/80 transition-colors hover:text-[var(--lime)]"
                    >
                      <span>Se mer</span>

                      <ChevronDown
                        strokeWidth={2}
                        className={`h-7 w-7 text-white/80 transition-all duration-300 group-hover:text-[var(--lime)] ${
                          showMore ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {showMore && (
                      <div className="mt-5 max-w-sm space-y-3">
                        {moreOpenings.map((item) => (
                          <div
                            key={item.date}
                            className="flex flex-wrap items-baseline gap-x-3 text-sm font-black uppercase text-[var(--lime)]"
                          >
                            <span>
                              {item.dayName} {formatDate(item.date)}
                            </span>

                            {item.isClosed ? (
                              <span className="text-[var(--pink)]">
                                Inställt
                              </span>
                            ) : (
                              <span>
                                {item.startTime} – {item.endTime}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              </div>
            )}
          </>
        )}

        {/* INGA KOMMANDE TIDER */}
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











/// GAMLA FILEN 



// import { useEffect, useState } from "react"
// import racerFixing from "../assets/racer-fixing.png"

// function OpeningStatus() {
//   const [openingHours, setOpeningHours] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     async function loadOpeningHours() {
//       const response = await fetch("/api/opening-hours")
//       const data = await response.json()

//       setOpeningHours(data)
//       setLoading(false)
//     }

//     loadOpeningHours()
//   }, [])

//   function formatDate(dateString) {
//     const date = new Date(dateString)

//     return date.toLocaleDateString("sv-SE", {
//       day: "numeric",
//       month: "numeric",
//     })
//   }

//   const nextOpening = openingHours[0]
//   const upcomingOpenings = openingHours.slice(1)

//   return (
//     <section className="relative min-h-[550px] w-full max-w-full min-w-0 overflow-hidden rounded-2xl bg-[var(--surface-dark)] px-6 py-8 text-[var(--text-light)] sm:px-8 sm:py-10">
//       <div className="relative z-10 w-full max-w-full min-w-0">
//         <div className="flex min-w-0 items-center gap-3">
//           <span className="h-3 w-3 shrink-0 animate-pulse rounded-full bg-[var(--pink)] shadow-[0_0_20px_var(--pink)]"></span>

//           <p className="min-w-0 text-xs font-black uppercase tracking-widest sm:text-sm">
//             Verkstaden är stängd nu
//           </p>
//         </div>

//         {loading && (
//           <h2 className="mt-4 text-[3.1rem] font-black uppercase leading-[1.05] text-[var(--lime)]">
//             Laddar...
//           </h2>
//         )}

//         {!loading && nextOpening && (
//           <>
//             <p className="mt-8 text-sm font-black uppercase tracking-widest text-white/80">
//               Öppet
//             </p>

//             <h2 className="mt-2 max-w-full text-[3.1rem] font-black uppercase leading-[1.05] text-[var(--lime)] sm:text-[3.6rem] lg:text-[4rem]">
//               {nextOpening.dayName} {formatDate(nextOpening.date)}
//               <br />
//               <span className="block text-[2.7rem] sm:text-[3.3rem] lg:text-[3.7rem]">
//                 {nextOpening.startTime} – {nextOpening.endTime}
//               </span>
//             </h2>

//             {upcomingOpenings.length > 0 && (
//               <div className="mt-14">
//                 <p className="mb-5 text-sm font-black uppercase tracking-widest text-white/80">
//                   Kommande öppettider
//                 </p>

//                 <div className="space-y-5">
//                   {upcomingOpenings.map((item) => (
//                     <div
//                       key={item.date}
//                       className="max-w-sm rounded-xl bg-white/10 px-5 py-4 text-base"
//                     >
//                       <p className="font-black uppercase text-[var(--lime)]">
//                         {item.dayName} {formatDate(item.date)}
//                       </p>
//                       <p className="mt-1 text-white/80">
//                         {item.startTime} – {item.endTime}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </>
//         )}

//         {!loading && !nextOpening && (
//           <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/80">
//             Inga kommande öppettider hittades.
//           </p>
//         )}
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



