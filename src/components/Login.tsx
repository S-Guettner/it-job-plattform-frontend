import { FC ,useRef, useState} from 'react'



const Login: FC = () => {
  

    const [cookieAuth,setCookieAuth] = useState(false)

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const clickHandler = () => {
        fetch(`http://localhost:9999/api/v1/company-login` , {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify (
                {
                    "userEmail": emailRef.current?.value,
                    "userPassword": passwordRef.current?.value
                }
                    )
                }
                
                )
 
    }
  
    return (
    <main>
            <input className='border-2' ref={emailRef} placeholder='email' type="text" name="email" id="email" />
            <input className='border-2' ref={passwordRef} placeholder='password' type="password" name="password" id="password" />
            <button onClick={clickHandler}>Login</button>
    </main>
  )
}

export default Login