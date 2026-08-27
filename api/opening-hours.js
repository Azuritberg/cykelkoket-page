/* global process */

import IcalExpander from "ical-expander"

export default async function handler(req, res) {
  const icalUrl = process.env.GOOGLE_CALENDAR_ICAL_URL

  if (!icalUrl) {
    return res.status(500).json({
      error: "Missing GOOGLE_CALENDAR_ICAL_URL",
    })
  }

  const response = await fetch(icalUrl)
  const icsText = await response.text()

  const now = new Date()

  const threeMonthsAhead = new Date()
  threeMonthsAhead.setMonth(now.getMonth() + 3)

  const icalExpander = new IcalExpander({
    ics: icsText,
    maxIterations: 1000,
  })

  const events = icalExpander.between(now, threeMonthsAhead)

  const allEvents = [
    ...events.events,

    ...events.occurrences.map((item) => {
      return {
        summary: item.item.summary,
        startDate: item.startDate,
        endDate: item.endDate,
      }
    }),
  ]

  const openingEvents = allEvents

    // Hitta bara kalenderhändelser som handlar om öppettider
    .filter((event) => {
      const title = event.summary?.toLowerCase() || ""

      return (
        title.includes("öppen") ||
        title.includes("öppet") ||
        title.includes("medlemsöppet") ||
        title.includes("söndagsöppet")
      )
    })

    .map((event) => {
      const start = new Date(event.startDate)
      const end = new Date(event.endDate)

      const title = event.summary || ""
      const normalizedTitle = title.toLowerCase()

      // Kontrollera om tillfället är inställt
      const isClosed =
        normalizedTitle.includes("stängt") ||
        normalizedTitle.includes("stängd") ||
        normalizedTitle.includes("inställt") ||
        normalizedTitle.includes("inställd")

      return {
        title,
        isClosed,

        dayName: start.toLocaleDateString("sv-SE", {
          weekday: "long",
          timeZone: "Europe/Stockholm",
        }),

        startTime: start.toLocaleTimeString("sv-SE", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Stockholm",
        }),

        endTime: end.toLocaleTimeString("sv-SE", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Stockholm",
        }),

        date: start.toISOString(),

        startDate: start.toISOString(),
        endDate: end.toISOString(),
      }
    })

    .sort((a, b) => new Date(a.date) - new Date(b.date))

    .slice(0, 9)

  res.status(200).json(openingEvents)
}






    //   return (
    //     title.includes("öppen") ||
    //     title.includes("öppet") ||
    //     title.includes("medlemsöppet") ||
    //     title.includes("söndagsöppet") ||
    //     title.includes("verkstad") ||
    //     title.includes("medlemsmöte")
    //   )
    // })