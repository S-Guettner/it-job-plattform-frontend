import { FC,useState, useEffect} from 'react'
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

  const [language] = useState("de")

  const [countries, setCountries] = useState<country[]>(countriesListGerman)

  // set country to choosen lang from context
  useEffect(() => {
    console.log(language)
    setCountries(language === "de" ? countriesListGerman :  countriesListEnglish )
  }, [language])


    
  return (
    <main className='flex justify-center'>
      <section>
      <h1 className='text-2xl mb-10'>Registriere dein Unternehmen</h1>
      <div className=''>
        <input className='border-2 mb-2 pl-2' type="text" name="firstName" id="firstName" placeholder='Vorname'/>
        <input className='border-2 mb-2 pl-2' type="text" name="lastName" id="lastName" placeholder='Nachname'/>
      </div>
      <div>
        <input className='border-2 pl-2 ' type="text" name="companyName" id="companyName" placeholder='Unternehmensname'/>
        <input className='border-2 pl-2  mb-5' type="tel" name="telephoneNumber" id="telephoneNumber" placeholder='Telefonnummer' pattern='[0-9]*"'/>
      </div>
      <div>
          <select className='mb-2 block border-2 w-full' name="countries" id="countries">
              {countries?.map((country) => {
                return(
                    <option 
                    key={uuidv4()}
                    value={country.alpha3}>
                      {country.name}
                      </option>
                )
              })}
          </select>
      </div>
      <div className='block mb-2'>
        <input className='border-2 pl-2' type="text" name="city" id="city" placeholder='Stadt'/>
        <input className='border-2 pl-2' type="number" name="zip-code" id="zip-code" placeholder='Postleitzahl'/>  
      </div>
      <div className='mb-5'>
        <input className='border-2 pl-2' type="text" name="street" id="street" placeholder='Straße'/>
        <input className='border-2 pl-2' type="text" name="streetAdress" id="streetAdress" placeholder='Hausnummer'/>
      </div>
      <div>
        <input className='border-2 pl-2 block w-full' type="email" name="email" id="email" placeholder='E-Mail'/>
        <input className='border-2 pl-2 block w-full' type="password" name="password" id="password" placeholder='Passwort'/>
        <input className='border-2 pl-2 mb-7 block w-full' type="password" name="confirm-password" id="confirm-password" placeholder='Passwort wiederholen'/>
      </div>



      <button className='border-2 p-2  rounded-lg'>Registrieren</button>
      </section>
    </main>
  )
}

export default Registration

