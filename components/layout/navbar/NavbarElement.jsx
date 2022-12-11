import Link from "next/link"
import { useRouter } from 'next/router'
import NavbarIcon from "../utils/Icon"

export default function NavbarElement({type}) {
    
    const router = useRouter()
    
    //Generator Navbar Element
    if(type == 'generator')
    return (
        <div className="mx-4">
            {router.asPath === '/' ? (
                <Link href={'/'} className="flex text-blue">
                    <NavbarIcon type={'generator-active'}/> REPORT-GENERATOR
                </Link>
            ) : (
                <Link href={'/'} className="flex text-darkblue navbar-element">
                    <NavbarIcon type={'generator'}/> REPORT-GENERATOR
                </Link>
            )}
        </div>
    )

    //Generator Navbar Element
    if(type == 'archive')
    return (
        <div className="mx-4">
            {router.asPath === '/archive' ? (
                <Link href={'/archive'} className="flex text-blue">
                    <NavbarIcon type={'archive-active'}/> REPORT-ARCHIVE
                </Link>
            ) : (
                <Link href={'/archive'} className="flex text-darkblue navbar-element">
                    <NavbarIcon type={'archive'}/> REPORT-ARCHIVE
                </Link>
            )}
        </div>
    )

    //Generator Navbar Element
    if(type == 'user')
    return (
        <div className="">
            <Link href={'/'}>
                KONTO
            </Link>
        </div>
    )

    //Logo Navbar Element
    if(type == 'logo')
    return (
        <div>
            <Link href={'/'}>
                <img src="./Logo_airco_well.png" className="h-14" alt="Logo" />
            </Link>
        </div>
    )
}