import { FC,useState, useEffect,useContext} from 'react'
import countriesListGerman from '../data/countriesGerman.json'
import countriesListEnglish from '../data/countriesEnglish.json'
import { langContext } from '../context/LanguageContext'

/* todo: add useContext for language selection */


interface country {
  id: number, 
  alpha2:string, 
  alpha3: string, 
  name: string
}


const Registration: FC = () => {

  const {language} = useContext(langContext)

  const [countries, setCountries] = useState<country[]>(countriesListGerman)

  // set country to choosen lang from context
  useEffect(() => {
    console.log(language)
    setCountries(language === "de" ? countriesListGerman :  countriesListEnglish )
  }, [language])
    
  return (
    <main>
        <input className='border-2' placeholder='Name of the Company' type="text" name="companyName" id="companyName" />
        <p>Company Headquarters</p>
          <select className='block border-2' name="countries" id="countries">
              {countries?.map((country) => {
                return(
                    <option value={country.alpha3}>{country.name}</option>
                )
              })}
          </select>
          <div className='block'>
        <input className='border-2' type="text" name="city" id="city" placeholder='city'/>
        <input className='border-2' type="number" name="zip-code" id="zip-code" placeholder='zip-code'/>  
          </div>
          <div>
        <input className='border-2' type="text" name="street" id="street" placeholder='street'/>
        <input className='border-2' type="text" name="streetAdress" id="streetAdress" placeholder='street adress'/>
          </div>
      <input className='border-2 w-32' type="number" min="1900" max="2099" step="1" name="foundingYear" id="foundingYear" placeholder='founding year'/>
      <input className='border-2 w-32' type="number" min="1"  step="1" name="employes" id="employes" placeholder='employes'/>
    </main>
  )
}

export default Registration

