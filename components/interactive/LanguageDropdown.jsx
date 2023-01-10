import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { useRouter } from 'next/router';

const langs = [
  { id: 'de', icon: '/langicons/de.svg', name: 'Deutsch'},
  { id: 'en', icon: '/langicons/en.svg', name: 'English'},
  { id: 'fr', icon: '/langicons/fr.svg', name: 'France',},
]

export default function LanguageDropdown({setLocale}) {
  const router = useRouter()
  const { locale } = router;
  const currentLanguage = langs.findIndex(x => x.id === locale)
  const [selectedLanguage, setSelectedLanguage] = useState(langs[currentLanguage])

  function changeLanguage(value) {
    setSelectedLanguage(value)
    router.replace(router.pathname, router.pathname, {locale: value.id})
  }

  return (
    <div className='relative'>
      <Listbox value={selectedLanguage} onChange={changeLanguage}>
        <Listbox.Button><div className="inline-flex items-center justify-center"><img src={selectedLanguage.icon} className="w-6 h-6" alt={selectedLanguage.name} title={selectedLanguage.name} /><img src='/langicons/chevron.svg' className="w-4 h-4 ml-2" /></div></Listbox.Button>
        <Listbox.Options className='absolute px-3 py-2 mt-2 bg-lightgrey -left-10 rounded-xl'>
          {langs.map((language) => (
            <Listbox.Option
              key={language.id}
              value={language}
            >
              <div className='flex items-center my-3 font-bold transition-all duration-200 hover:text-green hover:translate-x-1'>
                <div className="w-6 h-6 mr-2" >
                  <img src={language.icon} alt={language.id} />
                </div>
                <div className='pointer-events-none'>{language.name}</div>
              </div>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}