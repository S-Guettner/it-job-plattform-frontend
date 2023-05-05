import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './LoginCompany'





const Home: FC = () => {

  const [loginOpen, setLoginOpen] = useState(false)
  const [registrationOpen, setRegistrationOpen] = useState(false)

  console.log(registrationOpen)
  return (
    <main>
      <div className='p-4 flex justify-between'>
        <h1 className='inline'>HOME</h1>
        <div>
          <button onClick={() => setLoginOpen(prev => !prev)} className='border-2 px-2 py-1 rounded-full border-emerald-600'>login</button>
          <button onClick={() => setRegistrationOpen(prev => !prev)} className='border-2 px-2 py-1 rounded-full border-emerald-600'>registration</button>
        </div>
        <div>

          <Link to={"/company"}>Für Arbeitgeber</Link>
        </div>
      </div>
      {loginOpen ? <Login /> : ""}
      <p>Not registered yet ?</p>
      <Link className='underline' to={'/company_registration'}>Registration</Link>
    </main>
  )
}

export default Home