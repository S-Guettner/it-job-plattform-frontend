import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import DashboardCompany from "../pages/DashboardCompany"
import Login from "../pages/LoginCompany"

const Auth = () => {

    const [isLoading, setIsLoading] = useState(true)
    const navigator = useNavigate()

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:9999/api/v1/company-login_auth", { credentials: "include" })
            if (response.ok) {
                setIsLoading(false)
                return
            }else{
                navigator('/company')
            }

        })()
    }, [])

    if (isLoading) {
        navigator("/company-login")
    }
    else {
        return (
            <DashboardCompany />
        )
    }

}

export default Auth;