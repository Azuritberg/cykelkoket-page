import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router"

import biker from "../assets/biker.png"

function BecomeMember() {
  return (
    <main className="min-h-screen bg-[var(--bg)] p-3">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-[var(--pink)]">
        <Header />

        <section className="relative overflow-hidden p-10 md:p-16">
          <h1 className="text-6xl font-black uppercase tracking-tight">
            Bli medlem
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed">
            Som medlem stödjer du verksamheten och får tillgång till verktyg,
            <br className="hidden md:block"/>kunskap och gemenskap. Medlemskapet kostar <strong>100 kr</strong> per år.
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed">
            Cykelköket är en ideell förening som styrs och drivs av oss som är
            <br className="hidden md:block"/>medlemmar. Vi är beroende av våra medlemmar för att finnas kvar.
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed">
            Oavsett om du vill engagera dig i Cykelköket eller vara passiv medlem,
            <br className="hidden md:block"/>du gär ditt stöd viktigt för föreningen.
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed">
            Som medlem har du möjlighet att vara med och påverka Cykelkökets
            <br className="hidden md:block"/>verksamhet. Du kan till exempel påverka vilka kurser eller föreläsningar
            <br className="hidden md:block"/>vi ska arrangera, våra öppettider eller vilka verktyg vi ska köpa in.
            Att <br className="hidden md:block"/>vara medlem kostar bara 100 kr per år och du kan betala med Swish
            <br className="hidden md:block"/>eller bankgiro.
          </p>

          <h4 className="mt-12 max-w-2xl text-3xl font-black uppercase leading-tight">
            Så här betalar du
          </h4>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            <strong>Betala med Swish:</strong> Swisha 100 kr till 123 513 39 21.
            <br className="hidden md:block"/>Uppge endast din e-mail i meddelandet.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            Betalar du <strong>för någon annan</strong> så vill vi att du skickar ett e-mail till  <strong>kassor.cykelkoket@gmail.com.</strong> Vi behöver veta namn och e-mail <br className="hidden md:block"/>till den
            som ska bli medlem.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            <strong>Betala med bankgiro: </strong><br />Betala in 100 kr på bankgiro: 5913-2100.
            <br className="hidden md:block"/>Skriv ditt namn, telefonnummer och e-mail i meddelandet.
          </p>

          <h4 className="mt-12 max-w-2xl text-3xl font-black uppercase leading-tight">
            Ge bort medlemskap
          </h4>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            Om du vill ge bort ett medlemskap i Cykelköket till en vän så har <br className="hidden md:block"/>
            vi info om hur du ska göra på sidan{" "}
            
            <Link
              to="/ge-bort-medlemskap"
              className="font-black underline hover:opacity-70"
            >
              <br className="block md:hidden"/>ge bort medlemskap
            </Link>.
          </p>

          <img
            src={biker}
            alt=""
            className="page-decoration absolute bottom-[-120px] right-[-5px] h-[1200px] w-auto object-contain opacity-40 pointer-events-none"
          />
        </section>
      </div>

      <div className="mx-auto mt-3 max-w-[1200px]">
        <Footer />
      </div>
    </main>
  )
}

export default BecomeMember

