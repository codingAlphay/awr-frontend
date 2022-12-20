import { useState } from 'react'
import { Menu, Listbox } from '@headlessui/react'

const langs = [
  { id: 'de', icon: '/langicons/de.svg', name: 'Deutsch'},
  { id: 'en', icon: '/langicons/en.svg', name: 'English'},
  { id: 'fr', icon: '/langicons/fr.svg', name: 'France'},
]

export default function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState(langs[0])

  return (
    <div className='relative'>
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
        <Listbox.Button><div className="inline-flex items-center justify-center"><img src={selectedLanguage.icon} className="h-6 w-6" alt={selectedLanguage.name} title={selectedLanguage.name} /><img src='./langicons/chevron.svg' className="ml-2 h-4 w-4" /></div></Listbox.Button>
        <Listbox.Options className='bg-lightgrey absolute -left-10 mt-2 px-3 py-2 rounded-xl'>
          {langs.map((language) => (
            <Listbox.Option
              key={language.id}
              value={language}
              //hier kommt dann sprachumstellung
              onClick={() => console.log(language.id)}
            >
              <div className='flex items-center my-3 hover:text-green hover:translate-x-1 transition-all duration-200 font-bold'>
                <div className="h-6 w-6 mr-2" >
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