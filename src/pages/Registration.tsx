import { FC,useState, useEffect} from 'react'
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

  const [countries, setCountries] = useState<country[] | undefined>()

  useEffect(() => {
    setCountries(countriesListGerman)
  },[])
    
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

