/* global process */

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    })
  }

  const {
    friendName,
    friendEmail,
    yourName,
    yourEmail,
    welcomeDate,
    message,
    selectedCard,
  } = req.body

  if (!friendName || !friendEmail || !yourName || !yourEmail) {
    return res.status(400).json({
      error: "Obligatoriska uppgifter saknas",
    })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Cykelköket <formular@mail.cykelkoket.com>",

      to: ["kassor.cykelkoket@gmail.com"],

      replyTo: yourEmail,

      subject: `Ge bort medlemskap – ${friendName}`,

      text: `
NYTT PRESENTMEDLEMSKAP


DIN VÄNS UPPGIFTER

Namn: ${friendName}
E-post: ${friendEmail}


DINA UPPGIFTER

Namn: ${yourName}
E-post: ${yourEmail}


ÖVRIGA UPPGIFTER

Tidigast välkomstmail:
${welcomeDate || "Så snart som möjligt"}

Valt presentkort:
${selectedCard || "Inget av Cykelkökets presentkort valt"}

Övrigt:
${message || "Inget angivet"}
      `,
    })

    if (error) {
      console.error("Resend error:", error)

      return res.status(500).json({
        error: error.message || "Kunde inte skicka mejlet",
      })
    }

    return res.status(200).json({
      success: true,
      id: data?.id,
    })
  } catch (error) {
    console.error("Server error:", error)

    return res.status(500).json({
      error: "Kunde inte skicka mejlet",
    })
  }
}