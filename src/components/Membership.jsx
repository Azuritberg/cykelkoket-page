import { Link } from "react-router"
import toolsFlat from "../assets/tools-flat.png"

function Membership() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-[var(--pink)] p-10">
      <div className="max-w-[65%]">
        <h2 className="text-5xl font-black uppercase tracking-tight">
          Bli medlem
        </h2>

        <p className="mt-4 text-base leading-relaxed">
          Stöd vår verksamhet och få tillgång till verktyg, kunskap och
          gemenskap.
        </p>
        <Link
          to="/bli-medlem"
          className="mt-7 inline-block rounded-xl bg-[var(--surface-dark)] px-7 py-4 font-black uppercase text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_var(--surface-dark)]"
        >
          Läs mer & bli medlem
        </Link>
        {/* <button className="mt-8 rounded-xl bg-[var(--surface-dark)] px-7 py-4 font-black uppercase text-white">
          Läs mer & bli medlem
        </button> */}
      </div>

      {/* <div className="absolute right-8 top-8 flex h-33 w-33 rotate-12 items-center justify-center rounded-full bg-[var(--lime)] shadow-[inset_0_2px_6px_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.10)]">
        <p className="text-center text-2xl font-black uppercase leading-[1.2] text-black">
          100 kr
          <br />
          per år
        </p>
      </div> */}

      <img
        src={toolsFlat}
        alt=""
        className="page-decoration absolute right-[-80px] top-[-40px] hidden lg:block h-[520px] w-auto object-contain opacity-30"
      />
    </section>
  )
}

export default Membership



//Läs mer & bli medlem →