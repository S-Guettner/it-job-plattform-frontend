import {createContext} from 'react'

interface LanguageContext {
    language:string
}

const defaultContext = {
    language:"de"
}

const langContext = createContext<LanguageContext>(defaultContext)

export {
    langContext
}