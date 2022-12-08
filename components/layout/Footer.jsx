import Link from 'next/link'

export default function Footer() {
    return (
    <footer className="mx-auto flex justify-center flex-col items-center py-8">
        <p className="block text-sm text-gray-500 sm:text-center"><b>© 2022 TUNAP GmbH & Co. KG</b></p>
        <p className="block text-sm text-gray-500 sm:text-center">
            <Link href="/imprint" className="hover:underline">Impressum</Link> 
            |
            <Link href="/privacy" className="hover:underline">Datenschutz</Link>
        </p>
    </footer>
    )
}