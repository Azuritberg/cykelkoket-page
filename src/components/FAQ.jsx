import { useEffect, useState } from "react"
import { Link } from "react-router"
import { getFAQs } from "../api/wordpressApi"

function FAQ() {
  const [faqs, setFaqs] = useState([])
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    getFAQs()
      .then((data) => {
        console.log("FAQs från WordPress:", data)

        const sortedFaqs = data
          .filter((item) => item.acf?.show_on_home)
          .sort((a, b) => {
            return (a.acf?.order_number || 0) - (b.acf?.order_number || 0)
          })

        setFaqs(sortedFaqs)
      })
      .catch(console.error)
  }, [])

  return (
    <section id="faq" className="relative overflow-hidden rounded-2xl bg-[var(--surface)] p-10">
      <h2 className="text-4xl font-black uppercase">Vanliga frågor</h2>

      <div className="mt-8 divide-y divide-black/20">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <article key={item.id}>
              <button
                className="flex w-full items-center justify-between py-4 text-left font-black"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.title.rendered}</span>
                <span className="text-2xl">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <p className="pb-5 text-sm leading-relaxed text-black/70">
                  {item.acf?.answer}
                </p>
              )}
            </article>
          )
        })}
      </div>

      <Link
        to="/faq"
        className="group mt-8 inline-flex items-center gap-2 font-black uppercase text-[var(--pink)]"
      >
        Se alla frågor & svar

        <span className="relative top-[-2.5px] text-2xl transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </Link>
    </section>
  )
}

export default FAQ





// import { useState } from "react"
// import { faqData } from "../data/faqData.js"
// import { Link } from "react-router"

// function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null)

//   return (
//     <section id="faq" className="relative overflow-hidden rounded-2xl bg-[var(--surface)] p-10">
//       <h2 className="text-4xl font-black uppercase">Vanliga frågor</h2>

//       <div className="mt-8 divide-y divide-black/20">
//         {faqData.map((item, index) => {
//           const isOpen = openIndex === index

//           return (
//             <article key={item.question}>
//               <button
//                 className="flex w-full items-center justify-between py-4 text-left font-black"
//                 onClick={() => setOpenIndex(isOpen ? null : index)}
//               >
//                 <span>{item.question}</span>
//                 <span className="text-2xl">{isOpen ? "−" : "+"}</span>
//               </button>

//               {isOpen && (
//                 <p className="pb-5 text-sm leading-relaxed text-black/70">
//                   {item.answer}
//                 </p>
//               )}
//             </article>
//           )
//         })}
//       </div>

//       <Link
//         to="/faq"
//         className="group mt-8 inline-flex items-center gap-2 font-black uppercase text-[var(--pink)]"
//       >
//         Se alla frågor & svar

//         <span className="relative top-[-2.5px] text-2xl transition-transform duration-300 group-hover:translate-x-2">
//           →
//         </span>
//       </Link>

//         {/* <Link
//           to="/faq"
//           className="mt-8 inline-block font-black uppercase text-[var(--pink)]"
//         >
//           Se alla frågor & svar →
//         </Link> */}
//       {/* <button className="mt-8 font-black uppercase text-[var(--pink)]">
//         Se alla frågor & svar →
//       </button> */}
//     </section>
//   )
// }

// export default FAQ