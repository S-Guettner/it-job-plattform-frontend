import { FC,useState, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid'
import countriesListGerman from '../data/countriesGerman.json'
import { useNavigate } from 'react-router-dom'





interface country {
  id: number, 
  alpha2:string, 
  alpha3: string, 
  name: string
}



const Registration: FC = () => {

  const navigator = useNavigate()

  const passwordValidationMessage = () => {
    if (password === undefined || password.length < 9){
      setPasswordErrorMessage("Passwort muss mindestens 8 Zeichen lang sein")
    } 
    else if (!/[A-Z]/.test(password)) {
      setPasswordErrorMessage("Passwort muss mindestens einen Großbuchstaben enthalten")
    }
    else if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      setPasswordErrorMessage("Passwort muss mindestens ein Sonderzeichen enthalten")
    }
    else{
      setPasswordErrorMessage("")
    }
  }

  const [countries] = useState<country[]>(countriesListGerman)


  const [password,setPassword] = useState<string>()
  const [confirmPassword,setConfirmPassword] = useState<string>()
  const [passwordErrorMessage,setPasswordErrorMessage] = useState("")
  
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const companyNameRef = useRef<HTMLInputElement>(null)
  const telephoneNumberRef = useRef<HTMLInputElement>(null)
  const cityRef = useRef<HTMLInputElement>(null)
  const zipCodeRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const [countryState,setCountryState] = useState("Deutschland")

/* todo: add errors and form validation */
  const [formError, setFormError] = useState("")
  
  const formValidationMessage = () => {

    const telephoneNumberRegex = /^(\+49[-. ]?)?(\(0\)[-. ]?)?([0-9]{3,4}[-. ]?){2}[0-9]{3,4}$/i
    const zipCodeRegex = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
}

  const companyRegistration = () => {
    fetch("http://localhost:9999/api/v1/new-company" , {
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          "userEmail": emailRef.current?.value,
          "userPassword": confirmPassword,
          "firstName": firstNameRef.current?.value,
          "lastName": lastNameRef.current?.value,
          "companyName": companyNameRef.current?.value,
          "telephoneNumber": telephoneNumberRef.current?.value,
          "country": cityRef.current?.value,
          "city": cityRef.current?.value,
          "zipCode": zipCodeRef.current?.value,
        }
      )
    })
    navigator('/company-login')
  } 


  return (
    <main >
      <section className='p-4 mx-auto'>
      <h1 className='text-2xl mb-10'>Registriere dein Unternehmen</h1>
      
      <div className='flex flex-wrap justify-between'>
          <div className='w-40'>
          <label className='block' htmlFor="firstName">Vorname</label>
          <input ref={firstNameRef} className='w-40 border-2 mb-2 pl-2 rounded-lg' type="text" name="firstName" id="firstName"/>
        </div>
          <div className='w-40'>
          <label className='block' htmlFor="lastName">Nachname</label>
          <input ref={lastNameRef} className='w-40 border-2 mb-2 pl-2 rounded-lg' type="text" name="lastName" id="lastName"/>
        </div>
      </div>
      
        <div className='flex flex-wrap justify-between'>
      <div className='w-40'>
          <label className='block' htmlFor="companyName">Unternehmensname</label>
          <input ref={companyNameRef} className='border-2 pl-2 w-40 rounded-lg' type="text" name="companyName" id="companyName" />
      </div>
      <div className='w-40'>
          <label className='block' htmlFor="telephoneNumber">Telefonnummer</label>
          <input ref={telephoneNumberRef} className='w-40 border-2 pl-2  mb-5 rounded-lg' type="tel" name="telephoneNumber" id="telephoneNumber"  pattern='[0-9]*"'/>
      </div>
      </div>
     
      <div>
          <label htmlFor="countries">Land</label>
          <select value={countryState} onChange={(e) => setCountryState(e.target.value)} className='mb-2 block border-2 w-full rounded-lg' name="countries" id="countries">
            {countries?.map((country) => {
                return(
                    <option 
                    key={uuidv4()}
                    value={country.name}>
                      {country.name}
                      </option>
                )
              })}
          </select>
      </div>

        <div className='flex flex-wrap justify-between mb-4 '>
          <div className='w-40'>
            <label className='block' htmlFor="city">Stadt</label>
          <input ref={cityRef} className='border-2 w-40  rounded-lg' type="text" name="city" id="city" />
        </div>
        <div>
            <label className='block' htmlFor="zipCode">Postleitzahl</label>
          <input ref={zipCodeRef} className='border-2 w-40 rounded-lg' type="text" name="zipCode" id="zipCode" />  
        </div>
      </div>

      <div>
          <label htmlFor="email">E-Mail</label>
          <input ref={emailRef} className='w-full mb-4 border-2 pl-2 block rounded-lg' type="email" name="email" id="email"/>
          
          <label htmlFor="password">Passwort</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border-2 pl-2 block w-full mb-2 rounded-lg' type="password" name="password" id="password" placeholder='Passwort'/>
          {/* check for matching passwords */}
          {password != confirmPassword && confirmPassword != undefined ? <p>Die Passwörter stimmen nicht überein.</p> : ""}
          <p>{passwordErrorMessage}</p>
          
          <label htmlFor="confirmPassword">Passwort wiederholen</label>
          <input onClick={passwordValidationMessage} onChange={(e) => setConfirmPassword(e.target.value)} className='border-2 pl-2 mb-7 rounded-lg block w-full' type="password" name="confirmPassword" id="confirmPassword"/>
      </div>

        <button onClick={companyRegistration} className='border-2 p-2  rounded-lg'>Registrieren</button>
      </section>
    </main>
  )
}

export default Registration

