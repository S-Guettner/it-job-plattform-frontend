import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useUserStore from '../global/zustand.ts'
import { useNavigate } from 'react-router-dom'
import LogoutButton from '../components/LogoutButton.tsx'
import CreateNewJobPost from '../components/CreateNewJobPost.tsx'


const DashboardCompany: FC = () => {

  const navigator = useNavigate()
  const userState = useUserStore()


 


  
  useEffect(() => {
    userState.userLoggedIn()
  }, [userState.userLoggedInState])
  
  console.log(userState.userLoggedInState)
 
  


  return (
    <div>
      <CreateNewJobPost />
      <h1>Yeahhhhh!!!!</h1>
      <LogoutButton />
      <p>{userState.userLoggedInState.toString()}</p>  
      <Link to={'/'}>Home</Link>  
    </div>
  )
}

export default DashboardCompany