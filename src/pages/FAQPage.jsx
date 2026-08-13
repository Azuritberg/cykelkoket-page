import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router"
import { faqData } from "../data/faqData"

import tools from "../assets/tools-flat.png"

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <main className="min-h-screen bg-[var(--bg)] p-3">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--surface)]">
        <Header />

        <section className="relative overflow-hidden p-6 sm:p-10 md:p-16">
          <h1 className="text-[clamp(2.5rem,10vw,3.75rem)] font-black uppercase leading-none tracking-tight">
            Vanliga frågor
          </h1>

          <div className="relative z-10 mt-12 max-w-3xl divide-y divide-black/20">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <article key={index}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-2xl font-black uppercase leading-tight sm:text-3xl">
                      {item.question}
                    </span>

                    <span className="shrink-0 text-4xl font-black">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="space-y-4 pb-8 text-base leading-relaxed text-black/80 sm:text-lg">
                      {item.answer.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ))}

                      {/* {item.hasContactButtons && (
                        <div className="mt-10 flex flex-wrap gap-4">
                          <Link
                            to="/mobila-verkstaden"
                            className="inline-block rounded-xl bg-[var(--pink)] px-5 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)] sm:px-7 sm:text-base"
                          >
                            Mobila verkstan
                          </Link>

                          <a
                            href="mailto:cykelkoket@gmail.com"
                            className="inline-block rounded-xl border-2 border-black px-5 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white sm:px-7 sm:text-base"
                          >
                            Maila oss
                          </a>
                        </div>
                      )} */}
                    </div>
                  )}
                </article>
              )
            })}
          </div>

          <div className="relative z-10 mt-16 flex flex-wrap gap-4">
            <Link
              to="/mobila-verkstaden"
              className="inline-block rounded-xl bg-[var(--pink)] px-5 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--pink)] sm:px-7 sm:text-base"
            >
              Mobila verkstan
            </Link>

            <a
              href="mailto:cykelkoket@gmail.com"
              className="inline-block rounded-xl border-2 border-black px-5 py-4 text-sm font-black uppercase text-black transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white sm:px-7 sm:text-base"
            >
              Maila oss
            </a>
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] opacity-20 blur-[0.5px] lg:block">

            <img
              src={tools}
              alt=""
              className="page-decoration h-full w-full translate-y-20 object-cover object-right"
            />
          </div>

        {/* 
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] opacity-20 blur-[0.5px] lg:flex">
            <img
              src={tools}
              alt=""
              className="page-decoration h-full w-1/2 object-cover object-right"
            />

            <img
              src={tools}
              alt=""
              className="page-decoration h-full w-1/2 scale-x-[-1] translate-x-5 translate-y-10 object-cover object-left"
            />
          </div> */}
        </section>
      </div>

      <div className="mx-auto mt-3 max-w-[1200px]">
        <Footer />
      </div>
    </main>
  )
}

export default FAQPage



