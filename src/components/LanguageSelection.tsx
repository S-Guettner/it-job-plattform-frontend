import { FC, useContext} from 'react'
import { langContext } from '../context/LanguageContext'


const LanguageSelection: FC = () => {
  

    return (
    <main>
        <h1>language selection</h1>
      <label htmlFor="language-select">Select a language:</label>
      <select id="language-select" /* value={language} onChange={handleLanguageChange} */>
        <option value="de">German</option>
        <option value="en">English</option>

      </select>
    </main>
  )
}

export default LanguageSelection