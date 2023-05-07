import { FC,useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import programmingLanguages from '../data/programmingLanguages.json'


const CreateNewJobPost: FC = () => {


    const [languageArr, setLanguageArr] = useState<string[]>([])
    console.log(languageArr)
 


  return (
    <main>
        <h1>New post</h1>
        <div>
          <label htmlFor="jobTitle">Job Bezeichnung</label>
            <input type="text" name="jobTitle" id="jobTitle" />
            <label htmlFor="jobDescription">Job Beschreibung</label>
            <input type="text" name="jobDescription" id="jobDescription" />
              <select name="programmingLanguages" id="programmingLanguages" onChange={(e) => {
                  setLanguageArr([...languageArr,e.target.value])
              }}>
                  {programmingLanguages.map((language)=> {
                    return(
                        <option 
                        key={uuidv4()}
                        value={language}>
                            {language}
                        </option>
                    )
                  })}
              </select>
              <div>
                <p>languages</p>
                  {languageArr?.map((item,index) => {
                    return(
                        <div className='border-2 flex justify-between px-2'>
                            <p className='inline mr-9'>{item}</p>
                            <button className='text-red-500' onClick={() => {
                                const newArray = languageArr.filter((item,i) => i !==index)
                                setLanguageArr(newArray)
                            }}>delete</button>
                        </div>
                    )
                  })}
              </div>
        </div>
    </main>
  )
}


export default CreateNewJobPost