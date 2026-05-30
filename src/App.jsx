import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import FindUs from "./pages/FindUs"
import BecomeMember from "./pages/BecomeMember"
import GiftMembership from "./pages/GiftMembership"
import MobileWorkshopPage from "./pages/MobileWorkshopPage"
import FAQPage from "./pages/FAQPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/om-oss" element={<About />} />
      <Route path="/hitta-hit" element={<FindUs />} />
      <Route path="/bli-medlem" element={<BecomeMember />} />
      <Route path="/ge-bort-medlemskap" element={<GiftMembership />} />
      <Route path="/mobila-verkstaden" element={<MobileWorkshopPage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  )
}

export default App