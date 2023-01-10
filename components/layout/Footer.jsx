import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <img src="/background.png" className='absolute bottom-0 w-full h-auto -z-10' alt="" />
            <div className='pt-48 default-spacer'/>
            <footer className="absolute bottom-0 w-full p-8">
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