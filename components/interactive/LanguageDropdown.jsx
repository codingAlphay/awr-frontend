import { useState } from 'react'
import { Menu, Listbox } from '@headlessui/react'

const langs = [
  { id: 'de', icon: './langicons/de.svg', name: 'Deutsch'},
  { id: 'en', icon: './langicons/en.svg', name: 'English'},
  { id: 'fr', icon: './langicons/fr.svg', name: 'France'},
]

export default function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState(langs[0])

  return (
    <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
      <Listbox.Button><div className="inline-flex items-center justify-center"><img src={selectedLanguage.icon} className="h-6 w-6" alt={selectedLanguage.name} title={selectedLanguage.name} /><img src='./langicons/chevron.svg' className="ml-2 h-4 w-4" /></div></Listbox.Button>
      <Listbox.Options className='bg-lightgrey absolute px-3 py-2 rounded-xl'>
        {langs.map((language) => (
          <Listbox.Option
            key={language.id}
            value={language}
            //hier kommt dann sprachumstellung
            onClick={() => console.log(language.id)}
          >
            <div className='flex items-center my-3 hover:text-green font-bold'>
              <img src={language.icon} className="h-6 w-6 mr-2" alt={language.id} />
              <span className='pointer-events-none'>{language.name}</span>
            </div>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}