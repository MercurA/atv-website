import '../styles/globals.css'
import Menu from '../components/navigation/Menu'
import Footer from '../components/footer/Footer'
import React, { useEffect, useState } from 'react'
import language from '../constants/strings'

export const LanguageContext = React.createContext()

const MyApp = ({ Component, pageProps }) => {
  const [lang, setLang] = useState('ro')
  const [currentLang, setCurentLang] = useState(language(lang))

  useEffect(() => {
    const l = language(lang)
    setCurentLang(l)
  },[lang])

  return (
    <>
      <LanguageContext.Provider value={{currentLang, setLang, lang}}>
          <Menu />
            <Component {...pageProps} />
          <Footer />
      </LanguageContext.Provider>
    </>
      )
   
}

export default MyApp
