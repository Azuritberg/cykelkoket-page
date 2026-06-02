function Footer() {
  return (
    <footer className="grid items-center gap-8 rounded-2xl bg-[var(--surface-dark)] px-10 py-8 text-sm text-white/80 md:grid-cols-4">
      <div className="text-2xl font-black uppercase leading-none text-white">
        CYKEL
        <br />
        KÖKET
      </div>

      <div>
        <p className="font-black uppercase text-white">Plats</p>
        <p className="mt-2">Augustenborgsgatan 24E, 214 47 Malmö</p>
        {/* <p>214 47 Malmö</p> */}
      </div>

      <div>
        <p className="font-black uppercase text-white">Kontakt</p>
        <a
          href="mailto:cykelkoket@gmail.com"
          className="mt-2 block transition hover:text-[var(--lime)]"
        >
          cykelkoket@gmail.com
        </a>
      </div>

      <div>
        <p className="font-black uppercase text-white">Socialt</p>
        {/* <p className="mt-2">Följ oss på Facebook</p> */}
        <a
          href="https://www.facebook.com/cykelkoket"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block transition hover:text-[var(--lime)]"
        >
          Följ oss på Facebook
        </a>
      </div>
    </footer>
    
  )
}

export default Footer



// function Footer() {
//   return (
//     <footer className="grid gap-6 rounded-2xl bg-[var(--surface-dark)] p-8 text-sm text-white/80 md:grid-cols-4">
//       <div className="text-2xl font-black uppercase leading-none text-white">
//         CYKEL
//         <br />
//         KÖKET
//       </div>

//       <div>
//         <p className="font-black uppercase text-white">Plats</p>
//         <p className="mt-2">Svestaregatan 4</p>
//         <p>212 19 Malmö</p>
//       </div>

//       <div>
//         <p className="font-black uppercase text-white">Kontakt</p>
//         <p className="mt-2">info@cykelkoket.com</p>
//       </div>

//       <div>
//         <p className="font-black uppercase text-white">Socialt</p>
//         <p className="mt-2">Följ oss på Facebook</p>
//       </div>
//     </footer>
//   )
// }

// export default Footer