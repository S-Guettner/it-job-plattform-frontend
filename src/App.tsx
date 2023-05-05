import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import RegistrationCompany from "./pages/RegistrationCompany.tsx"
import LoginPage from "./pages/LoginPage"
import DashboardCompany from "./pages/DashboardCompany.tsx"
import Auth from "./components/Auth.tsx"
import CompanyPage from "./pages/CompanyPage.tsx"
import LoginCompany from './pages/LoginCompany.tsx'

function App() {



  return (
    

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<Auth />}>
            <Route path="/dashboard_company" element={<DashboardCompany />} />
          </Route>
          <Route path="/login-page" element={<LoginPage />} />

          <Route path="/company" element={<CompanyPage />} />
          <Route path="/company-registration" element={<RegistrationCompany />} />
          <Route path="/company-login" element={<LoginCompany />} />

        </Routes>
      </BrowserRouter>


  )
}

export default App
