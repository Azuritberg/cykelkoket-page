import Header from "../components/Header"
import Hero from "../components/Hero"
import OpeningStatus from "../components/OpeningStatus"
import HowItWorks from "../components/HowItWorks"
import InfoCards from "../components/InfoCards"
// import Membership from "../components/Membership"
import MobileWorkshop from "../components/MobileWorkshop"
import FAQ from "../components/FAQ"
import EventCalendar from "../components/EventCalendar"
import Footer from "../components/Footer"

//import TestWordPress from "../components/TestWordPress"


function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] p-3 text-[var(--text)]">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-3 lg:grid-cols-[1.45fr_0.95fr]">  {/* items-start */}
          <section className="grid gap-3">                      {/* content-start */}
            <div className="overflow-hidden rounded-2xl bg-[var(--surface)]">
              <Header />
              <Hero />
              <HowItWorks />
            </div>
            
            {/* <TestWordPress /> */}
            
            <EventCalendar />

            {/* <MobileWorkshop /> */}

            <Footer />
          </section>

          <section className="grid gap-3">        {/* content-start */}
            <OpeningStatus />
            <InfoCards />
            <MobileWorkshop />
            {/* <Membership /> */}
            {/* <EventCalendar /> */}
            <FAQ />
          </section>
        </div>
      </div>
    </main>
  )
}

export default Home




// import Header from "../components/Header"
// import Hero from "../components/Hero"
// import OpeningStatus from "../components/OpeningStatus"
// import HowItWorks from "../components/HowItWorks"
// import InfoCards from "../components/InfoCards"
// import Membership from "../components/Membership"
// import MobileWorkshop from "../components/MobileWorkshop"
// import FAQ from "../components/FAQ"
// import Footer from "../components/Footer"

// function Home() {
//   return (
//     <main className="min-h-screen bg-[var(--bg)] p-3 text-[var(--text)]">
//       <div className="mx-auto grid max-w-[1500px] gap-3 lg:grid-cols-[1.45fr_0.95fr]">
        
//         <section className="grid gap-3">
//           <div className="overflow-hidden rounded-2xl bg-[var(--surface)]">
//             <Header />
//             <Hero />
//             <HowItWorks />
//           </div>

//           <MobileWorkshop />
//         </section>

//         <section className="grid gap-3 self-start">
//           <OpeningStatus />
//           <InfoCards />
//           <Membership />
//           <FAQ />
//         </section>

//         <section className="lg:col-span-2">
//           <Footer />
//         </section>
//       </div>
//     </main>
//   )
// }

// export default Home

//<section className="lg:col-span-2">