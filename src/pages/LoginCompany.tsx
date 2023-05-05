import { FC ,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import useUserStore from '../global/zustand.ts'


const Login: FC = () => {
  
    const userState = useUserStore()
    console.log(userState.userLoggedInState)

    const navigator = useNavigate()

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const clickHandler = async () => {
        const response = await fetch(`http://localhost:9999/api/v1/company-login` , {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify (
                {
                    "userEmail": emailRef.current?.value,
                    "userPassword": passwordRef.current?.value
                }
                    ),
                    credentials:"include"
                }
                )
                if(response.ok){
                    navigator("/dashboard_company")
                    userState.userLoggedIn
                }else{
                    navigator("/login-page")
                }
    }
  
    return (
        <section className='border-2 p-2'>
            <input className='border-2 block w-full' ref={emailRef} placeholder='email' type="text" name="email" id="email" />
            <input className='border-2 block w-full' ref={passwordRef} placeholder='password' type="password" name="password" id="password" />
            <button onClick={clickHandler}>Login</button>
    </section>
  )
}

export default Login