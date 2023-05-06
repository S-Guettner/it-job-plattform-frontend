import { FC,useState, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid'
import countriesListGerman from '../data/countriesGerman.json'
import countriesListEnglish from '../data/countriesEnglish.json'


/* todo: add useContext for language selection */


interface country {
  id: number, 
  alpha2:string, 
  alpha3: string, 
  name: string
}


const Registration: FC = () => {

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
  const streetRef = useRef<HTMLInputElement>(null)
  const streetAdressRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const [countryState,setCountryState] = useState("Deutschland")

  const [formValidationObject,setFormValidationObject] = useState({
    firstNameError:"",
    lastNameError:"",
    companyNameError:"",
    telephoneNumberError:"",
    cityError:"",
    zipCodeError:"",
    streetError:"",
    streetAdressError:"",
    emailError:""
  })
  
  const formValidationMessage = () => {

    const telephoneNumberRegex = /^(\+49[-. ]?)?(\(0\)[-. ]?)?([0-9]{3,4}[-. ]?){2}[0-9]{3,4}$/i

    if (!firstNameRef.current?.value){
      setFormValidationObject({
        ...formValidationObject, firstNameError: "Bitte geben Sie ihren Vornamen ein"
      })
    } else if (firstNameRef.current?.value) {
      setFormValidationObject({
        ...formValidationObject, firstNameError: ""
      })
    } else if (!companyNameRef.current?.value) {
      setFormValidationObject({
        ...formValidationObject, companyNameError: "Bitte geben Sie ihren Unternehmensnamen ein"
      })
    } else if (!telephoneNumberRef.current?.value || !telephoneNumberRegex.test(telephoneNumberRef.current?.value)) {
      setFormValidationObject({
        ...formValidationObject, companyNameError: "Bitte geben Sie eine gültige Telefonnummer ein"
      })
    }



}


  return (
    <main className='flex justify-center'>
      <section>
      <h1 className='text-2xl mb-10'>Registriere dein Unternehmen</h1>
      <div>
          <p className='text-sm block text-red-400'>{formValidationObject.firstNameError}</p>

          <input ref={firstNameRef} className='border-2 mb-2 pl-2' type="text" name="firstName" id="firstName" placeholder='Vorname'/>
          <input ref={lastNameRef} className='border-2 mb-2 pl-2' type="text" name="lastName" id="lastName" placeholder='Nachname'/>
      </div>
      <div>
          <p className='text-sm block text-red-400'>{formValidationObject.companyNameError}</p>
          <input ref={companyNameRef} className='border-2 pl-2 ' type="text" name="companyName" id="companyName" placeholder='Unternehmensname'/>
          <input ref={telephoneNumberRef} className='border-2 pl-2  mb-5' type="tel" name="telephoneNumber" id="telephoneNumber" placeholder='Telefonnummer' pattern='[0-9]*"'/>
      </div>
      <div>
          <select value={countryState} onChange={(e) => setCountryState(e.target.value)} className='mb-2 block border-2 w-full' name="countries" id="countries">
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
      <div className='block mb-2'>
          <input ref={cityRef} className='border-2 pl-2' type="text" name="city" id="city" placeholder='Stadt'/>
          <input ref={zipCodeRef} className='border-2 pl-2' type="number" name="zipCode" id="zipCode" placeholder='Postleitzahl'/>  
      </div>
      <div className='mb-5'>
          <input ref={streetRef} className='border-2 pl-2' type="text" name="street" id="street" placeholder='Straße'/>
          <input ref={streetAdressRef} className='border-2 pl-2' type="text" name="streetAdress" id="streetAdress" placeholder='Hausnummer'/>
      </div>
      <div>
          <input ref={emailRef} className='mb-4 border-2 pl-2 block w-full' type="email" name="email" id="email" placeholder='E-Mail'/>
          <input onChange={(e) => setPassword(e.target.value)} className='border-2 pl-2 block w-full' type="password" name="password" id="password" placeholder='Passwort'/>
          {/* check for matching passwords */}
          {password != confirmPassword && confirmPassword != undefined ? <p>Die Passwörter stimmen nicht überein.</p> : ""}
          <p>{passwordErrorMessage}</p>
          <input onClick={passwordValidationMessage} onChange={(e) => setConfirmPassword(e.target.value)} className='border-2 pl-2 mb-7 block w-full' type="password" name="confirmPassword" id="confirmPassword" placeholder='Passwort wiederholen'/>
      </div>



        <button onClick={formValidationMessage} className='border-2 p-2  rounded-lg'>Registrieren</button>
      </section>
    </main>
  )
}

export default Registration

