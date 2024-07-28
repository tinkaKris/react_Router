import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/Pages/About.tsx"
import Contacts from "./components/Pages/Contacts.tsx"
import Home from "./components/Pages/Home.tsx"
import NotFound from "./components/Pages/NotFound.tsx"
import Pages from "./components/Pages.tsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
