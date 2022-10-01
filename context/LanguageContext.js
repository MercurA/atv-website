import React from 'react'
const LanguageContext = React.createContext()
import language from "../constants/strings"


const setLanguage = (string) => {
    return language(string)
}

const LanguageProvider = ({children}) => {
    const value = setLanguage(string)
    return (<LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>)
}

export {LanguageProvider, setLanguage}

