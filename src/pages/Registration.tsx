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
        <input placeholder='Name of the Company' type="text" name="companyName" id="companyName" />
        <p>Company Headquarters</p>
          <select name="countries" id="countries">
              {countries?.map((country) => {
                return(
                    <option value={country.alpha3}>{country.name}</option>
                )
              })}
          </select>
        
    </main>
  )
}

export default Registration

