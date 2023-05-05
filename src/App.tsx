import { BrowserRouter,Routes,Route } from "react-router-dom"

import Home from "./pages/Home"
import Registration from "./pages/Registration"
import { langContext } from "./context/LanguageContext"
import LoginPage from "./pages/LoginPage"
import DashboardCompany from "./pages/DashboardCompany.tsx"
import Auth from "./components/Auth.tsx"


function App() {

  

  return (
    <langContext.Provider value={{ language: "de" }}>

    <BrowserRouter>
    <Routes>
        
        <Route element={<Auth />}>
          <Route path="/dashboard_company" element={<DashboardCompany />} />
        </Route>
        <Route path="/login-page" element={<LoginPage />} />


      <Route path="/" element={<Home />} />
      <Route path="/company_registration" element={<Registration />} />
    </Routes>
    </BrowserRouter>
    </langContext.Provider>
      
  )
}

export default App
