import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { getEvents } from "../api/wordpressApi"

function EventCalendar() {
  const [events, setEvents] = useState([])
  const [openEvent, setOpenEvent] = useState(null)

  useEffect(() => {
    getEvents()
      .then((data) => {
        console.log("Events från WordPress:", data)

        const sortedEvents = data
          .filter((event) => event.acf?.show_on_home)
          .sort((a, b) => {
            return (a.acf?.order_number || 0) - (b.acf?.order_number || 0)
          })

        setEvents(sortedEvents)
      })
      .catch(console.error)
  }, [])

  function formatEventDate(event) {
  const rawDate = event.acf?.event_date
  const startTime = event.acf?.start_time
  const endTime = event.acf?.end_time

  if (!rawDate && !startTime && !endTime) {
    return "Kommer snart"
  }

  const year = rawDate.slice(0, 4)
  const month = rawDate.slice(4, 6)
  const day = rawDate.slice(6, 8)

  const date = new Date(`${year}-${month}-${day}`)

  const weekday = date.toLocaleDateString("sv-SE", {
    weekday: "long",
  })

  const cleanStartTime = startTime?.slice(0, 5)
  const cleanEndTime = endTime?.slice(0, 5)

  if (cleanStartTime && cleanEndTime) {
    return `${weekday.charAt(0).toUpperCase() + weekday.slice(1)} ${cleanStartTime}–${cleanEndTime}`
  }

  if (cleanStartTime) {
    return `${weekday.charAt(0).toUpperCase() + weekday.slice(1)} ${cleanStartTime}`
  }

  return weekday.charAt(0).toUpperCase() + weekday.slice(1)
}

  // function formatEventDate(event) {
  //   const date = event.acf?.event_date
  //   const startTime = event.acf?.start_time
  //   const endTime = event.acf?.end_time

  //   if (!date && !startTime && !endTime) {
  //     return "Kommer snart"
  //   }

  //   if (startTime && endTime) {
  //     return `${date} ${startTime}–${endTime}`
  //   }

  //   if (startTime) {
  //     return `${date} ${startTime}`
  //   }

  //   return date
  // }

  return (
    <section className="relative overflow-hidden rounded-2xl bg-[var(--surface-dark)] p-10 text-[var(--text-light)]">
      <h2 className="text-4xl font-black uppercase leading-none">
        <span className="text-white">Nyheter | </span>
        <span className="text-[var(--lime)]">Event</span>
      </h2>

      <div className="relative mt-8">
        <div className="hide-scrollbar max-h-[340px] space-y-4 overflow-y-auto pb-20">
          {events.map((event, index) => {
            const isOpen = openEvent === index

            return (
              <article
                key={event.id}
                className="rounded-xl border border-[var(--lime)] bg-black/20 p-5 backdrop-blur-sm"
              >
                <button
                  onClick={() => setOpenEvent(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <div>
                    <p className="font-black uppercase text-white">
                      {event.title.rendered}
                    </p>

                    <p className="mt-2 text-white/70">
                      {formatEventDate(event)}
                    </p>
                  </div>

                  <ChevronDown
                    size={28}
                    strokeWidth={3}
                    className={`mt-1 shrink-0 text-[var(--lime)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "mt-4 max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="border-t border-white/15 pt-4 text-sm leading-relaxed text-white">
                    {event.acf?.short_description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[var(--surface-dark)] via-[var(--surface-dark)]/80 to-transparent" />
      </div>
    </section>
  )
}

export default EventCalendar




// import { useState } from "react"
// import { ChevronDown } from "lucide-react"

// function EventCalendar() {
//   const [openEvent, setOpenEvent] = useState(null)

//   const events = [
//     {
//       title: "Öppen verkstad",
//       date: "Söndag 11:00–14:00",
//       info: "Kom förbi under öppettid och laga din cykel med stöd av volontärer. Ingen föranmälan behövs.",
//     },
//     {
//       title: "Punkafix workshop",
//       date: "Kommer snart",
//       info: "En workshop där du får lära dig hur du lagar punktering och byter slang.",
//     },
//     {
//       title: "Hjulriktning workshop",
//       date: "Kommer snart",
//       info: "Vi går igenom grunderna i hur du riktar ett hjul och justerar ekrar.",
//     },
//     {
//       title: "Bromsar workshop",
//       date: "Kommer snart",
//       info: "Lär dig justera bromsar, byta bromsklossar och förstå vanliga bromsproblem.",
//     },
//     {
//       title: "Växlar workshop",
//       date: "Kommer snart",
//       info: "Vi visar hur du felsöker, justerar och tar hand om cykelns växlar.",
//     },
//     {
//       title: "Cykelfix för nybörjare",
//       date: "Kommer snart",
//       info: "En lugn introduktion för dig som vill bli tryggare med enklare cykelreparationer.",
//     },
//   ]

//   return (
//     <section className="relative overflow-hidden rounded-2xl bg-[var(--surface-dark)] p-10 text-[var(--text-light)]">
//       <h2 className="text-4xl font-black uppercase leading-none">
//         <span className="text-white">Nyheter | </span>
//         <span className="text-[var(--lime)]">Event</span>
//       </h2>

//       <div className="relative mt-8">
//         <div className="hide-scrollbar max-h-[340px] space-y-4 overflow-y-auto pb-20">
//           {events.map((event, index) => {
//             const isOpen = openEvent === index

//             return (
//               <article
//                 key={event.title}
//                 className="rounded-xl border border-[var(--lime)] bg-black/20 p-5 backdrop-blur-sm"
//               >
//                 <button
//                   onClick={() => setOpenEvent(isOpen ? null : index)}
//                   className="flex w-full items-start justify-between gap-4 text-left"
//                 >
//                   <div>
//                     <p className="font-black uppercase text-white">
//                       {event.title}
//                     </p>

//                     <p className="mt-2 text-white/70">
//                       {event.date}
//                     </p>
//                   </div>

//                   <ChevronDown
//                     size={28}
//                     strokeWidth={3}
//                     className={`mt-1 shrink-0 text-[var(--lime)] transition-transform duration-300 ${
//                       isOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${
//                     isOpen
//                       ? "mt-4 max-h-40 opacity-100"
//                       : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <p className="border-t border-white/15 pt-4 text-sm leading-relaxed text-white">
//                     {event.info}
//                   </p>
//                 </div>
//               </article>
//             )
//           })}
//         </div>

//         {/* Fade upptill */}
//         {/* <div className="pointer-events-none absolute top-0 left-0 h-2 w-full bg-gradient-to-b from-[var(--surface-dark)] via-[var(--surface-dark)]/80 to-transparent" /> */}
       
//         {/* <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider text-white/50">
//           Fler events ↓
//         </div> */}

//         {/* Fade nedtill */}
//         <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[var(--surface-dark)] via-[var(--surface-dark)]/80 to-transparent" />
//       </div>
      
//     </section>
//   )
// }

// export default EventCalendar










// SKRÄP




// VERSION 2 - med "visa fler" knapp

// import { useState } from "react"
// import { ChevronDown } from "lucide-react"

// function EventCalendar() {
//   const [openEvent, setOpenEvent] = useState(null)
//   const [showAllEvents, setShowAllEvents] = useState(false)

//   const events = [
//     {
//       title: "Öppen verkstad",
//       date: "Söndag 11:00–14:00",
//       info: "Kom förbi under öppettid och laga din cykel med stöd av volontärer. Ingen föranmälan behövs.",
//     },
//     {
//       title: "Punkafix workshop",
//       date: "Kommer snart",
//       info: "En workshop där du får lära dig hur du lagar punktering och byter slang.",
//     },
//     {
//       title: "Hjulriktning workshop",
//       date: "Kommer snart",
//       info: "Vi går igenom grunderna i hur du riktar ett hjul och justerar ekrar.",
//     },
//     {
//       title: "Bromsar workshop",
//       date: "Kommer snart",
//       info: "Lär dig justera bromsar, byta bromsklossar och förstå vanliga bromsproblem.",
//     },
//     {
//       title: "Växlar workshop",
//       date: "Kommer snart",
//       info: "Vi visar hur du felsöker, justerar och tar hand om cykelns växlar.",
//     },
//     {
//       title: "Cykelfix för nybörjare",
//       date: "Kommer snart",
//       info: "En lugn introduktion för dig som vill bli tryggare med enklare cykelreparationer.",
//     },
//   ]

//   const visibleEvents = showAllEvents ? events : events.slice(0, 4)

//   return (
//     <section className="relative overflow-hidden rounded-2xl bg-[var(--surface-dark)] p-10 text-[var(--text-light)]">
//       <h2 className="text-5xl font-black uppercase leading-none">
//         <span className="text-white">Nyheter | </span>
//         <span className="text-[var(--lime)]">Event</span>
//       </h2>

//       <div className="mt-8 space-y-4">
//         {visibleEvents.map((event, index) => {
//           const isOpen = openEvent === index

//           return (
//             <article
//               key={event.title}
//               className="rounded-xl border border-[var(--lime)] bg-black/20 p-5 backdrop-blur-sm"
//             >
//               <button
//                 onClick={() => setOpenEvent(isOpen ? null : index)}
//                 className="flex w-full items-start justify-between gap-4 text-left"
//               >
//                 <div>
//                   <p className="font-black uppercase text-white">
//                     {event.title}
//                   </p>

//                   <p className="mt-2 text-white/70">
//                     {event.date}
//                   </p>
//                 </div>

//                 <ChevronDown
//                   size={28}
//                   strokeWidth={3}
//                   className={`mt-1 shrink-0 text-[var(--lime)] transition-transform duration-300 ${
//                     isOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               <div
//                 className={`overflow-hidden transition-all duration-300 ${
//                   isOpen
//                     ? "mt-4 max-h-40 opacity-100"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <p className="border-t border-white/15 pt-4 text-sm leading-relaxed text-white">
//                   {event.info}
//                 </p>
//               </div>
//             </article>
//           )
//         })}
//       </div>

//       <button
//         onClick={() => {
//           setShowAllEvents(!showAllEvents)
//           setOpenEvent(null)
//         }}
//         className="group mt-6 flex items-center gap-2 font-black uppercase text-[var(--lime)]"
//       >
//         {showAllEvents ? "Visa färre event" : "Visa fler event"}

//         <ChevronDown
//           size={24}
//           strokeWidth={3}
//           className={`transition-transform duration-300 ${
//             showAllEvents ? "rotate-180" : "group-hover:translate-y-1"
//           }`}
//         />
//       </button>
//     </section>
//   )
// }

// export default EventCalendar



// ========================================================
























/// SKA slängas



// //import tools from "../assets/tools.png"

// function EventCalendar() {
//   return (
//     <section className="relative overflow-hidden rounded-2xl bg-[var(--surface-dark)] p-10 text-[var(--text-light)]">
//       <h2 className="text-5xl font-black uppercase leading-none">
//         <span className="text-white">Nyheter | </span>
//         <span className="text-[var(--lime)]">Event</span>
//       </h2>

//       <div className="mt-8 space-y-4">
//         <article className="rounded-xl border border-[var(--lime)] bg-black/20 p-5 backdrop-blur-sm">
//           <p className="font-black uppercase text-white">Öppen verkstad</p>
//           <p className="mt-2 text-white/70">Söndag 11:00–14:00</p>
//         </article>

//         <article className="rounded-xl border border-[var(--lime)] bg-black/20 p-5 backdrop-blur-sm">
//           <p className="font-black uppercase text-white">Punkafix workshop</p>
//           <p className="mt-2 text-white/70">Kommer snart</p>
//         </article>

//         <article className="rounded-xl border border-[var(--lime)] bg-black/20 p-5 backdrop-blur-sm">
//           <p className="font-black uppercase text-white">Hjulriktning workshop</p>
//           <p className="mt-2 text-white/70">Kommer snart</p>
//         </article>
//       </div>

//       {/* <img
//         src={tools}
//         alt=""
//         className="page-decoration absolute right-[-10px] top-[-40px] h-[585px] w-auto object-contain opacity-30"
//       /> */}
//     </section>
//   )
// }

// export default EventCalendar




// function EventCalendar() {
//   return (
//     <section className="rounded-2xl bg-[var(--pink)] p-10">
//       <h2 className="text-4xl font-black uppercase">
//         Kommande event
//       </h2>

//       <div className="mt-8 space-y-4">
//         <article className="rounded-xl border-2 border-black p-3">
//           <p className="font-black uppercase">Öppen verkstad</p>
//           <p className="mt-2 text-black/70">Söndag 11:00–14:00</p>
//         </article>

//         <article className="rounded-xl border-2 border-black p-3">
//           <p className="font-black uppercase">Punkafix workshop</p>
//           <p className="mt-2 text-black/70">Kommer snart</p>
//         </article>
        
//         <article className="rounded-xl border-2 border-black p-3">
//           <p className="font-black uppercase">Hjulriktning workshop</p>
//           <p className="mt-2 text-black/70">Kommer snart</p>
//         </article>
//       </div>
//     </section>
//   )
// }

// export default EventCalendar