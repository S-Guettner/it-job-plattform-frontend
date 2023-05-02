import { FC } from 'react'
import {Link} from 'react-router-dom'
import Login from '../components/Login'


const Home: FC = () => {
  return (
    <main>
        <h1>HOME</h1>
        <Login />
        <p>Not registered yet ?</p>
      <Link className='underline' to={'/company_registration'}>Registration</Link>
    </main>
  )
}

export default Home