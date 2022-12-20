import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/fonts.css'

import Navbar from '../components/layout/navbar/Navbar'
import Footer from '../components/layout/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp

