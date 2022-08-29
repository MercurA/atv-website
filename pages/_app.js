import '../styles/globals.css'
import Menu from '../components/navigation/Menu'
import Footer from '../components/footer/Footer'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
        <Menu />
        <Component {...pageProps} />
        <Footer />
    </>
      )
   
}

export default MyApp
