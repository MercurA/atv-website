import '../styles/globals.css'
import Menu from '../components/navigation/Menu'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
        <Menu />
        <Component {...pageProps} />
    </>
      )
   
}

export default MyApp
