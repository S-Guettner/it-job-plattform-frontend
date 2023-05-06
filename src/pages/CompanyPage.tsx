import { FC } from 'react'
import { Link } from 'react-router-dom'
import useUserStore from '../global/zustand.ts'
import LogoutButton from '../components/LogoutButton.tsx'
import { useNavigate } from 'react-router-dom'

const CompanyPage: FC = () => {

    const userState = useUserStore()
    console.log(userState.userLoggedInState)

    const navigator = useNavigate()

    const deleteJWT = async () => {
        try {
            const res = await fetch("http://localhost:9999/api/v1/company-logout" ,{
                method: "POST",
                credentials:"include",
            })
            if(res.ok){
                navigator("/")
            }

        } catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            <header>
                <nav className='flex justify-between'>
                    <p className='inline'>LOGO</p>
                    <div className='inline'>

                        <button onClick={deleteJWT}>delete jwt</button>
                        {userState.userLoggedInState === false ? <Link className='mx-2' to={'/company-registration'}>Registrieren</Link>: ""}
                        {userState.userLoggedInState === false ? <Link className='mx-2' to={'/company-login'}>Einloggen</Link> : <LogoutButton />}
                        

                    </div>
                </nav>

            </header>
        </>
    )
}

export default CompanyPage