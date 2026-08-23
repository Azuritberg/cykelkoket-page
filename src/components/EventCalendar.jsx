import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { getEvents } from "../api/wordpressApi"

function EventCalendar() {
  const [events, setEvents] = useState([])
  const [openEvent, setOpenEvent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getEvents()
      .then((data) => {
        const sortedEvents = data
          .filter((event) => event.acf?.show_on_home)
          .sort((a, b) => {
            return (a.acf?.order_number || 0) - (b.acf?.order_number || 0)
          })

        setEvents(sortedEvents)
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false)
      })
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

    const formattedWeekday =
      weekday.charAt(0).toUpperCase() + weekday.slice(1)

    const formattedDate = `${Number(day)}/${Number(month)}`

    const cleanStartTime = startTime?.slice(0, 5)
    const cleanEndTime = endTime?.slice(0, 5)

    if (cleanStartTime && cleanEndTime) {
      return `${formattedWeekday} ${formattedDate} · ${cleanStartTime}–${cleanEndTime}`
    }

    if (cleanStartTime) {
      return `${formattedWeekday} ${formattedDate} · ${cleanStartTime}`
    }

    return `${formattedWeekday} ${formattedDate}`
  }

  return (
    <section className="relative min-h-[520px] overflow-hidden rounded-2xl bg-[var(--surface-dark)] px-6 py-8 text-white sm:px-8 sm:py-10">
      <h2 className="text-[2.5rem] font-black uppercase leading-none sm:text-[3.2rem]">
        <span>Nyheter</span> 
        <span className="ml-3 text-white">|</span>
        <span className="block text-[var(--lime)] md:ml-3 md:inline">Event</span>
      </h2>

      <div className="relative mt-8">
        {loading ? (
          <p className="text-base text-white/60">
            Laddar event...
          </p>
        ) : events.length === 0 ? (
          <div className="py-8">
            <p className="max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              När vi har kommande event och aktiviteter publiceras de här.
            </p>
          </div>
        ) : (
          <>
            <div className="hide-scrollbar max-h-[520px] space-y-4 overflow-y-auto pb-20">
              {events.map((event, index) => {
                const isOpen = openEvent === index
                const acf = event.acf || {}

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
                          ? "mt-4 max-h-[1200px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-white/15 pt-5">
                        {acf.short_description && (
                          <p className="text-sm leading-relaxed text-white sm:text-base">
                            {acf.short_description}
                          </p>
                        )}

                        {acf.full_description && (
                          <div className="mt-6">
                            <h3 className="text-sm font-black uppercase tracking-wide text-[var(--lime)]">
                              Om eventet
                            </h3>

                            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/85 sm:text-base">
                              {acf.full_description}
                            </p>
                          </div>
                        )}

                        {(acf.location ||
                          acf.address ||
                          acf.bring ||
                          acf.limited_places) && (
                          <div className="mt-7 border-t border-white/15 pt-6">
                            <h3 className="text-sm font-black uppercase tracking-wide text-[var(--lime)]">
                              Det praktiska
                            </h3>

                            <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/85 sm:text-base">
                              {(acf.location || acf.address) && (
                                <div>
                                  <p className="font-black text-white">
                                    Plats
                                  </p>

                                  {acf.location && (
                                    <p className="mt-1">
                                      {acf.location}
                                    </p>
                                  )}

                                  {acf.address && (
                                    <p className="text-white/65">
                                      {acf.address}
                                    </p>
                                  )}
                                </div>
                              )}

                              {acf.bring && (
                                <div>
                                  <p className="font-black text-white">
                                    Ta med
                                  </p>

                                  <p className="mt-1">
                                    {acf.bring}
                                  </p>
                                </div>
                              )}

                              {acf.limited_places && (
                                <p className="font-black text-[var(--lime)]">
                                  Begränsat antal platser
                                </p>
                              )}
                            </div>
                          </div>
                        )}

                        {(acf.price ||
                          acf.price_info ||
                          acf.payment_info) && (
                          <div className="mt-7 border-t border-white/15 pt-6">
                            <h3 className="text-sm font-black uppercase tracking-wide text-[var(--lime)]">
                              Pris & betalning
                            </h3>

                            {acf.price && (
                              <p className="mt-4 text-2xl font-black text-white">
                                {acf.price} kr
                              </p>
                            )}

                            {acf.price_info && (
                              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/85 sm:text-base">
                                {acf.price_info}
                              </p>
                            )}

                            {acf.payment_info && (
                              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/70 sm:text-base">
                                {acf.payment_info}
                              </p>
                            )}
                          </div>
                        )}

                      {acf.registration_url && (
                        <div className="mt-7 px-4 pb-5 pt-2">
                          <a
                            href={acf.registration_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              inline-flex rounded-xl
                              bg-[var(--lime)]
                              px-6 py-4
                              text-sm font-black uppercase text-black
                              transition-all duration-300
                              hover:-translate-y-1
                              hover:shadow-[0_0_24px_6px_rgba(200,255,40,0.28)]
                            "
                          >
                            Anmäl dig →
                          </a>
                        </div>
                      )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[var(--surface-dark)] via-[var(--surface-dark)]/80 to-transparent" />
          </>
        )}
      </div>
    </section>
  )
}

export default EventCalendar


