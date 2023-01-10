import NavbarElement from './NavbarElement'
import LanguageDropdown from '../../interactive/LanguageDropdown'

export default function Navbar({locale, setLocale}) {

    return (
        <>
            <div className='fixed z-10 w-full'>
                <div className='flex items-center justify-between mx-auto font-extrabold bg-white h-28 max-w-7xl'>
                    <div className='flex items-center'>
                        <div className='mr-8'>
                            <NavbarElement locale={locale} type={'logo'}/>
                        </div>
                        <NavbarElement locale={locale} type={'generator'}/>
                        <NavbarElement locale={locale} type={'archive'}/>
                    </div>
                    <div className='flex'>
                        <NavbarElement locale={locale} type={'user'}/>
                        <LanguageDropdown setLocale={setLocale}/>
                    </div>
                </div>
            </div>
            <div className='h-48 default-spacer'/>
        </>
    )
}