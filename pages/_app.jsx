import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/fonts.css'
import en from '../lib/locales/en'
import de from '../lib/locales/de'
import fr from '../lib/locales/fr'

import Navbar from '../components/layout/navbar/Navbar'
import Footer from '../components/layout/Footer'

import { useState } from 'react'
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {

  let t = en
  const router = useRouter();
  const { locale } = router;
  switch (locale) {
      case'de':
          t = de
          break

      case'en':
          t = en
          break

      case'fr':
          t = fr
          break
  }
  const [currentLocale, setLocale] = useState(t)

  let props = {
    ...pageProps,
    currentLocale
  }

  return (
    <>
      <Navbar locale={currentLocale} setLocale={setLocale}/>
      <Component {...props} />
      <Footer/>
    </>
  )
}

export default appWithTranslation(MyApp)

