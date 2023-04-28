import { FC,useState} from 'react'
import countriesListGerman from '../data/countriesGerman.json'
import countriesListEnglish from '../data/countriesEnglish.json'

const Registration: FC = () => {

    const [countries,setCountries] = useState(countriesList)

    
  return (
    <main>
        <input placeholder='Name of the Company' type="text" name="companyName" id="companyName" />
        <p>Company Headquarters</p>
          <select name="countries" id="countries">
              {countries.map((country) => {
                return(
                    <option value={country.alpha3}>{country.name}</option>
                )
              })}
          </select>
        <input type="text" name="" id="" />
    </main>
  )
}

export default Registration