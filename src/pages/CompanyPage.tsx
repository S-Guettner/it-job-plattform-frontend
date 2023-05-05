import { FC, useState } from 'react'
import LoginCompany from '../components/LoginCompany.tsx'


const CompanyPage: FC = () => {

    const [openLogin,setOpenLogin] = useState(false)

  return (
    <>
    <header>
        <nav className='flex justify-between'>
            <p className='inline'>LOGO</p>
                <div className='inline'> 
                      <button onClick={() => setOpenLogin(prev => !prev)} className='mx-2'>Einloggen</button>
            <button className='mx-2'>Registrieren</button>
            </div>
        </nav>
            <div className='w-40 mr-10 ml-auto'>
            {openLogin ? <LoginCompany /> : ""}
            </div>
    </header>
    </>
  )
}

export default CompanyPage