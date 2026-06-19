/* eslint-env node */

import IcalExpander from "ical-expander"

export default async function handler(req, res) {
  const icalUrl = process.env.GOOGLE_CALENDAR_ICAL_URL

  if (!icalUrl) {
    return res.status(500).json({ error: "Missing GOOGLE_CALENDAR_ICAL_URL" })
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
    .filter((event) => {
      const title = event.summary?.toLowerCase() || ""

      return (
        title.includes("öppen") ||
        title.includes("öppet") ||
        title.includes("verkstad")
      )
    })
    .map((event) => {
      const start = new Date(event.startDate)
      const end = new Date(event.endDate)

      return {
        title: event.summary,
        dayName: start.toLocaleDateString("sv-SE", { weekday: "long" }),
        startTime: start.toLocaleTimeString("sv-SE", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        endTime: end.toLocaleTimeString("sv-SE", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        date: start.toISOString(),
      }
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3)

  res.status(200).json(openingEvents)
}