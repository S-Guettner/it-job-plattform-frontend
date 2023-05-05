import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useUserStore from '../global/zustand.ts'


const DashboardCompany: FC = () => {
  const userState = useUserStore()
  
  useEffect(() => {
    userState.userLoggedIn()
  }, [userState.userLoggedInState])
  
  console.log(userState.userLoggedInState)
 
  


  return (
    <div>
      <h1>Yeahhhhh!!!!</h1>
      <p>{userState.userLoggedInState.toString()}</p>  
      <Link to={'/'}>Home</Link>  
    </div>
  )
}

export default DashboardCompany