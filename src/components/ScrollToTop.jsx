import { useEffect } from "react"
import { useLocation } from "react-router"

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const element = document.querySelector(hash)

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })

      return
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    })
  }, [pathname, hash])

  return null
}

export default ScrollToTop


// import { useEffect } from "react"
// import { useLocation } from "react-router"

// function ScrollToTop() {
//   const { pathname } = useLocation()

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "instant",
//     })
//   }, [pathname])

//   return null
// }

// export default ScrollToTop