const BASE_URL = import.meta.env.VITE_WORDPRESS_API_URL

async function fetchFromWordPress(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`)

  if (!response.ok) {
    throw new Error(`Kunde inte hämta data från ${endpoint}, Status: ${response.status}`)
  }

  return response.json()
}

export function getPages() {
  return fetchFromWordPress("/pages")
}

export function getPosts() {
  return fetchFromWordPress("/posts")
}

export function getMedia() {
  return fetchFromWordPress("/media")
}

export function getPageBySlug(slug) {
  return fetchFromWordPress(`/pages?slug=${slug}`)
}

export function getFAQs() {
  return fetchFromWordPress("/faq")
}

// export function getEvents() {
//   return fetchFromWordPress("/events")
// }

// export function getOpeningHours() {
//   return fetchFromWordPress("/opening-hours")
// }