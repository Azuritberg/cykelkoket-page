import Header from "../components/Header"
import Footer from "../components/Footer"

import {
  bikeKitchens,
  friends,
  partners,
  startBikeKitchenGuide,
} from "../data/foreningarData"


function FriendCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-[300px] flex-col rounded-2xl border-2 border-black/10 bg-white/30 p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--lime)] hover:shadow-[0_0_35px_var(--lime)]"
    >

    <div className="flex h-36 items-center justify-center">
      <img
        src={item.image}
        alt={`${item.name} logotyp`}
        className={`
          object-contain
          transition-all duration-300
          group-hover:scale-105
          ${item.logoClass ?? "max-h-24 max-w-[180px]"}
        `}
      />
    </div>

      <div className="mt-6">
        <h3 className="text-lg font-black uppercase">
          {item.name}
        </h3>

        {item.location && (
          <p className="mt-1 text-sm font-bold uppercase text-black/50">
            {item.location}
          </p>
        )}

        <p className="mt-4 text-sm leading-relaxed text-black/70 sm:text-base">
          {item.description}
        </p>
      </div>

      <span className="mt-auto pt-6 text-sm font-black uppercase">
        Besök sidan →
      </span>
    </a>
  )
}


function Foreningar() {
  return (
    <main className="min-h-screen bg-[var(--bg)] p-3">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--surface)]">
        <Header />

        <section className="p-6 sm:p-10 md:p-16">
          <h1 className="text-[clamp(2.5rem,10vw,3.75rem)] font-black uppercase leading-none tracking-tight">
            Våra
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            vänner
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/80 sm:text-lg">
            Här har vi samlat andra cykelkök, initiativ, organisationer och
            vänner som gör bra saker inom cykling, återbruk och ideellt
            engagemang.
          </p>

          <div className="mt-14">
            <h2 className="text-2xl font-black uppercase sm:text-3xl">
              Andra cykelkök
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {bikeKitchens.map((item) => (
                <FriendCard key={item.name} item={item} />
              ))}
            </div>

            <a
              href={startBikeKitchenGuide.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8 block rounded-2xl bg-[var(--lime)]
                p-6 sm:p-8 md:p-10
                transition duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_35px_var(--lime)]
              "
            >
              <p className="text-sm font-black uppercase sm:text-base">
                {startBikeKitchenGuide.title}
              </p>

              <p className="mt-3 text-lg font-bold leading-snug sm:text-xl md:text-2xl">
                <span className="md:block">
                  {startBikeKitchenGuide.line1}
                </span>

                <span className="md:block">
                  {startBikeKitchenGuide.line2} →
                </span>
              </p>
            </a>

          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-black uppercase sm:text-3xl">
              Bra länkar & initiativ
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {friends.map((item) => (
                <FriendCard key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-black uppercase sm:text-3xl">
              Samarbetspartners
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((item) => (
                <FriendCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="mx-auto mt-3 max-w-[1200px]">
        <Footer />
      </div>
    </main>
  )
}

export default Foreningar



