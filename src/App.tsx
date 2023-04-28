import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Registration from "./pages/Registration"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company_registration" element={<Registration />} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
