import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import useUserStore from '../global/zustand.ts'

const LogoutButton: FC = () => {

    const userState = useUserStore()
    console.log(userState.userLoggedInState)

    const navigator = useNavigate()
    const deleteJWT = async () => {
        try {
            const res = await fetch("http://localhost:9999/api/v1/company-logout", {
                method: "POST",
                credentials: "include",
            })
            if (res.ok) {
                navigator("/company")
            }

        } catch (error) {
            console.error(error)
        }
    }

    const logoutHandler = () => {
        deleteJWT()
        userState.userLoggedOut()
    }


  
    
    return (
        
        <button onClick={logoutHandler} className='border-2 p-2'>Logout</button>
    
  )
}

export default LogoutButton