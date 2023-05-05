import { FC } from 'react'
import { Link } from 'react-router-dom'

const CompanyPage: FC = () => {


    return (
        <>
            <header>
                <nav className='flex justify-between'>
                    <p className='inline'>LOGO</p>
                    <div className='inline'>

                        <Link className='mx-2' to={'/company-registration'}>Registrieren</Link>
                        <Link className='mx-2' to={'/company-login'}>Einloggen</Link>

                    </div>
                </nav>

            </header>
        </>
    )
}

export default CompanyPage