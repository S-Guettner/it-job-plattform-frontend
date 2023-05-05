import { FC } from 'react'
import {Link} from 'react-router-dom'




const Home: FC = () => {
  return (
    <main>
      <div>
        <h1 className='inline'>HOME</h1>
        <Link to={"/login-page"} >Login</Link>
      </div>
        <p>Not registered yet ?</p>
      <Link className='underline' to={'/company_registration'}>Registration</Link>
    </main>
  )
}

export default Home