function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Kom under öppettid",
      text: "Ingen föranmälan, det är bara att dyka upp!",
    },
    {
      number: "2",
      title: "Bli medlem",
      text: "100kr per år. Betala på plats eller via Swish innan.",
    },
    {
      number: "3",
      title: "Ta med cykeln",
      text: "Ta med din cykel och eventuella delar.",
    },
    {
      number: "4",
      title: "Laga själv",
      text: "Du lagar och skruvar själv, hjälp och råd får du av oss.",
    },
  ]

  return (
    <section className="relative border-t-4 border-black bg-[var(--surface)] px-8 py-6">
      <div className="mb-7 inline-block rotate-[-1deg] bg-[var(--pink)] px-5 py-2 text-xl font-black uppercase">
        Så funkar det
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.number} className="relative text-center md:px-5">
            {index !== 0 && (
              <div className="absolute left-0 top-3 hidden h-24 border-l border-dashed border-black/30 md:block"></div>
            )}

            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-dark)] text-lg font-black text-white">
              {step.number}
            </div>

            <h3 className="mt-4 text-sm font-black uppercase">{step.title}</h3>

            <p className="mt-3 text-sm leading-relaxed text-black/75">
              {step.text}
            </p>
          </article>
        ))}
      </div>

      <div className="absolute right-8 top-8 hidden w-[52%] md:block">
        <svg
          viewBox="0 0 600 30"
          className="h-8 w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M0 15
              Q15 0 30 15
              T60 15
              T90 15
              T120 15
              T150 15
              T180 15
              T210 15
              T240 15
              T270 15
              T300 15
              T330 15
              T360 15
              T390 15
              T420 15
              T450 15
              T480 15
              T510 15
              T540 15
              T570 15
              T600 15
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* <div className="absolute right-8 top-6 hidden text-6xl md:block">〰〰〰〰〰〰〰</div>  */}
    </section>
  )
}

export default HowItWorks

