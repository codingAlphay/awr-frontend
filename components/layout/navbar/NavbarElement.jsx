import Link from 'next/link'
import { useRouter } from 'next/router'
import NavbarIcon from '../utils/Icon'

export default function NavbarElement({type}) {
    
    const router = useRouter()
    
    //Generator Navbar Element
    if(type == 'generator')
    return (
        <div className='mx-4'>
            {router.asPath === '/' ? (
                <Link href={'/'} className='flex text-blue'>
                    <NavbarIcon type={'generator-active'}/> REPORT-CREATOR
                </Link>
            ) : (
                <Link href={'/'} className='flex text-darkblue navbar-element'>
                    <NavbarIcon type={'generator'}/> REPORT-GENERATOR
                </Link>
            )}
        </div>
    )

    //Generator Navbar Element
    if(type == 'archive')
    return (
        <div className='mx-4'>
            {router.asPath === '/archive' ? (
                <Link href={'/archive'} className='flex text-blue'>
                    <NavbarIcon type={'archive-active'}/> REPORT-ARCHIVE
                </Link>
            ) : (
                <Link href={'/archive'} className='flex text-darkblue navbar-element'>
                    <NavbarIcon type={'archive'}/> REPORT-ARCHIVE
                </Link>
            )}
        </div>
    )

    //Generator Navbar Element
    if(type == 'user')
    return (
        <div className='mx-4'>
            <div className='relative group'>
                <div className='flex text-darkblue navbar-element'>
                    <NavbarIcon type={'user'}/> <span className='pointer-events-none'>KONTO</span>
                </div>
                <div className='absolute right-0 flex-col hidden pt-1 text-right uppercase text-darkblue group-hover:flex'>
                    <Link href={'/settings/personal'} className='py-1 hover:text-green'>
                        <span className='pointer-events-none'>Persönliche&nbsp;Einstellungen</span>
                    </Link>
                    <Link href={'/settings/workshop'} className='py-1 hover:text-green'>
                        <span className='pointer-events-none'>Werkstatt&nbsp;Einstellungen</span>
                    </Link>
                </div>
            </div>
        </div>
    )

    //Logo Navbar Element
    if(type == 'logo')
    return (
        <div>
            <Link href={'/'}>
                <img src='/Logo_airco_well.png' className='h-14' alt='Logo' />
            </Link>
        </div>
    )
}