import { FC } from 'react'
import { Link } from 'react-router-dom'
import useUserStore from '../global/zustand.ts'
import LogoutButton from '../components/LogoutButton.tsx'


const CompanyPage: FC = () => {

    const userState = useUserStore()
    console.log(userState.userLoggedInState)





    return (
        <>
            <header>
                <nav className='flex justify-between'>
                    <p className='inline'>LOGO</p>
                    <div className='inline'>

                        {userState.userLoggedInState === false ? <Link className='mx-2' to={'/company-registration'}>Registrieren</Link>: ""}
                        {userState.userLoggedInState === false ? <Link className='mx-2' to={'/company-login'}>Einloggen</Link> : <LogoutButton />}
                        

                    </div>
                </nav>

            </header>
        </>
    )
}

export default CompanyPage