// import { useEffect } from "react"
// import { getPageBySlug } from "../api/wordpressApi"

// function TestWordPress() {
//   useEffect(() => {
//     getPageBySlug("faq")
//       .then((data) => {
//         console.log("FAQ page:", data[0])
//         console.log(data)
//         console.log(data[0].title.rendered)
//         console.log(data[0].content.rendered)
//       })
//       .catch(console.error)
//   }, [])

//   return (
//     <div>
//       Testar FAQ
//     </div>
//   )
// }

// export default TestWordPress





// import { useEffect, useState } from "react"
// import { getPages } from "../api/wordpressApi"

// function TestWordPress() {
//   const [pages, setPages] = useState([])

//   useEffect(() => {
//     getPages()
//       .then((data) => {
//         console.log("WordPress pages:", data)
//         setPages(data)
//       })
//       .catch(console.error)
//   }, [])

//   return (
//     <section className="rounded-2xl bg-[var(--lime)] p-8 text-black">
//       <h2 className="mb-4 text-3xl font-black uppercase">
//         WordPress sidor
//       </h2>

//       {pages.map((page) => (
//         <div key={page.id} className="mb-3 rounded-xl bg-white p-4">
//           <h3 className="font-black">
//             {page.title.rendered}
//           </h3>
//         </div>
//       ))}
//     </section>
//   )
// }

// export default TestWordPress
// function TestWordPress() {
//   const [pages, setPages] = useState([])

//   useEffect(() => {
//     getPages()
//       .then((data) => {
//         console.log("WordPress pages:", data)
//         setPages(data)
//       })
//       .catch(console.error)
//   }, [])

//   return (
//     <section className="rounded-2xl bg-[var(--lime)] p-8 text-black">
//       <h2 className="mb-4 text-3xl font-black uppercase">
//         WordPress fungerar
//       </h2>

//       {pages.map((page) => (
//         <div key={page.id} className="mb-3 rounded-xl bg-white p-4">
//           <h3 className="font-black">
//             {page.title.rendered}
//           </h3>
//         </div>
//       ))}
//     </section>
//   )
// }

// export default TestWordPress




// import { useEffect, useState } from "react"
// import { getPages } from "../api/wordpressApi"

// function TestWordPress() {
//   const [pages, setPages] = useState([])
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     getPages()
//       .then((data) => {
//         console.log("WordPress pages:", data)
//         setPages(data)
//       })
//       .catch((error) => {
//         console.error("WordPress error:", error)
//         setError(error.message)
//       })
//   }, [])

//   return (
//     <div className="rounded-2xl bg-white p-6">
//       <h2 className="font-black">WordPress test</h2>

//       {error && <p className="text-red-500">{error}</p>}

//       {pages.map((page) => (
//         <p key={page.id}>{page.title.rendered}</p>
//       ))}
//     </div>
//   )
// }

// export default TestWordPress





// import { useEffect, useState } from "react"
// import { getPages } from "../api/wordpressApi"

// function TestWordPress() {
//   const [pages, setPages] = useState([])

//   useEffect(() => {
//     getPages().then(setPages).catch(console.error)
//   }, [])

//   return (
//     <div>
//       {pages.map((page) => (
//         <h2 key={page.id}>{page.title.rendered}</h2>
//       ))}
//     </div>
//   )
// }

// export default TestWordPress