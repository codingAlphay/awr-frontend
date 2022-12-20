import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <div className='pt-48 default-spacer'/>
            <footer className="p-8 w-full absolute bottom-0">
                <p className="block text-sm text-gray-500 sm:text-center"><b>© 2022 TUNAP GmbH & Co. KG</b></p>
                <p className="block text-sm text-gray-500 sm:text-center">
                    <Link href="/imprint" className="hover:text-green">Impressum</Link> 
                    |
                    <Link href="/privacy" className="hover:text-green">Datenschutz</Link>
                </p>
            </footer>
        </>    
    )
}