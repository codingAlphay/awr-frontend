import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/fonts.css'

import Navbar from '../components/layout/navbar/Navbar'
import Footer from '../components/layout/Footer'
import getTranslations from '../lib/locales/translationshandler'

import { useState } from 'react'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  const [locale, setLocale] = useState(getTranslations())
  
  let props = {
    ...pageProps,
    locale
  }

  return (
    <>
      <Navbar setLocale={setLocale}/>
      <Component {...props} />
      <Footer/>
    </>
  )
}

export default appWithTranslation(MyApp)

