import { Link } from "react-router"

function MobileWorkshop() {
  return (
    <section
      id="mobila-verkstaden"
      className="flex h-full w-full max-w-full min-w-0 flex-col justify-center overflow-hidden rounded-2xl bg-[var(--pink)] px-6 py-10 text-black sm:p-10"
    >
      <div className="w-full max-w-md min-w-0">
        <h2 className="text-[clamp(2.5rem,10vw,3.7rem)] font-black uppercase leading-none tracking-tight">
          <span className="block text-[var(--surface)]">Mobila</span>

          <span className="block text-black">Verkstan</span>
        </h2>

        <p className="mt-6 max-w-sm text-base leading-relaxed text-black/75 sm:text-lg">
          Vi kommer till er. Boka oss till er arbetsplats, skola, förening eller
          event.
        </p>

        <Link
          to="/mobila-verkstaden"
          className="mt-8 inline-block rounded-xl bg-black px-6 py-4 text-sm font-black uppercase text-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] sm:px-7 sm:py-5 sm:text-base"
        >
          Läs mer & boka
        </Link>
      </div>
    </section>
  )
}

export default MobileWorkshop



