import ckLogoWhite from "../assets/CK-logga-vit.svg"
import FacebookIcon from "../assets/facebook-icon.svg?react"
import InstagramIcon from "../assets/instagram-icon.svg?react"

function Footer() {
  return (
    <footer className="grid items-center gap-8 rounded-2xl bg-[var(--surface-dark)] px-10 py-8 text-sm text-white/80 md:grid-cols-4">
      <div className="flex items-center">
        <img
          src={ckLogoWhite}
          alt="Cykelköket"
          className="w-[90px] max-w-none h-auto"
        />
      </div>
      {/* <div className="text-2xl font-black uppercase leading-none text-white">
        CYKEL
        <br />
        KÖKET
      </div> */}

      <div>
        <p className="font-black uppercase text-white">Plats</p>
        <div className="mt-4">
          <p className="mt-2">Augustenborgsgatan 24E, 214 47 Malmö</p>
          {/* <p>214 47 Malmö</p> */}
        </div>
      </div>

      <div className="-mt-4">
        <p className="font-black uppercase text-white">Kontakt</p>
        <div className="mt-4">
          <a
            href="mailto:cykelkoket@gmail.com"
            className="block transition hover:text-[var(--lime)]"
          >
            cykelkoket@gmail.com
          </a>
        </div>
      </div>

      <div>
        <p className="font-black uppercase text-white">Följ oss</p>

        <div className="mt-4 flex gap-4">
          <a
            href="https://www.instagram.com/cykelkoket/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[var(--surface)] hover:text-[var(--lime)]"
          >
            <InstagramIcon className="h-10 w-10" />
          </a>

          <a
            href="https://www.facebook.com/cykelkoket"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[var(--surface)] hover:text-[var(--lime)]"
          >
            <FacebookIcon className="h-10 w-10" />
          </a>
        </div>
      </div>


    </footer>
    
  )
}

export default Footer

