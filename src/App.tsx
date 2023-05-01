import { BrowserRouter,Routes,Route } from "react-router-dom"

import Home from "./pages/Home"
import Registration from "./pages/Registration"
import { langContext } from "./context/LanguageContext"


function App() {

  

  return (
    <langContext.Provider value={{ language: "de" }}>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company_registration" element={<Registration />} />
      
    </Routes>
    </BrowserRouter>
    </langContext.Provider>
      
  )
}

export default App
