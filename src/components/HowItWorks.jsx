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
      text: "Betala 100 kr/år på plats eller via Swish innan.",
    },
    {
      number: "3",
      title: "Ta med cykeln",
      text: "Ta med din cykel och eventuella delar.",
    },
    {
      number: "4",
      title: "Laga själv",
      text: "Du lagar själv med hjälp och stöd av volontärer.",
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

      <div className="absolute right-8 top-6 hidden text-6xl md:block">〰〰〰〰〰〰〰</div> 
    </section>
  )
}

export default HowItWorks


// function HowItWorks() {
//   const steps = [
//     {
//       number: "1",
//       title: "Kom under öppettid",
//       text: "Ingen föranmälan, det är bara att dyka upp!",
//     },
//     {
//       number: "2",
//       title: "Bli medlem",
//       text: "Betala 100 kr/år på plats eller via Swish innan.",
//     },
//     {
//       number: "3",
//       title: "Ta med cykeln",
//       text: "Ta med din cykel och eventuella delar.",
//     },
//     {
//       number: "4",
//       title: "Laga själv",
//       text: "Du lagar själv med hjälp och stöd av volontärer.",
//     },
//   ]

//   return (
//     <section className="relative border-t-4 border-black bg-[var(--surface)] px-8 py-8">
//       <div className="mb-8 inline-block rotate-[-1deg] bg-[var(--pink)] px-5 py-2 text-xl font-black uppercase">
//         Så funkar det
//       </div>

//       <div className="grid gap-8 md:grid-cols-4">
//         {steps.map((step, index) => (
//           <article
//             key={step.number}
//             className="relative text-center md:px-5"
//           >
//             {index !== 0 && (
//               <div className="absolute left-0 top-2 hidden h-24 border-l border-dashed border-black/30 md:block"></div>
//             )}

//             <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-dark)] text-lg font-black text-white">
//               {step.number}
//             </div>

//             <h3 className="mt-5 text-sm font-black uppercase">
//               {step.title}
//             </h3>

//             <p className="mt-3 text-sm leading-relaxed text-black/75">
//               {step.text}
//             </p>
//           </article>
//         ))}
//       </div>

//       <div className="absolute right-8 top-6 hidden text-6xl md:block">
//         →
//       </div>
//     </section>
//   )
// }

// export default HowItWorks