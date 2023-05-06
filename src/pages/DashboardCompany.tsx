import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useUserStore from '../global/zustand.ts'
import { useNavigate } from 'react-router-dom'

const DashboardCompany: FC = () => {

  const navigator = useNavigate()
  const userState = useUserStore()


  const deleteJWT = async () => {
    try {
      const res = await fetch("http://localhost:9999/api/v1/company-logout", {
        method: "POST",
        credentials: "include",
      })
      if (res.ok) {
        navigator("/")
      }

    } catch (error) {
      console.error(error)
    }
  }


  
  useEffect(() => {
    userState.userLoggedIn()
  }, [userState.userLoggedInState])
  
  console.log(userState.userLoggedInState)
 
  


  return (
    <div>
      <h1>Yeahhhhh!!!!</h1>
      <button onClick={deleteJWT}>logout</button>
      <p>{userState.userLoggedInState.toString()}</p>  
      <Link to={'/'}>Home</Link>  
    </div>
  )
}

export default DashboardCompany