import Link from 'next/link'

export default function Footer() {
    return (
    <footer class="mx-auto flex justify-center flex-col items-center py-8">
        <p class="block text-sm text-gray-500 sm:text-center"><b>© 2022 TUNAP GmbH & Co. KG</b></p>
        <p class="block text-sm text-gray-500 sm:text-center">
            <Link href="/imprint" class="hover:underline">Impressum</Link> 
            |
            <Link href="/privacy" class="hover:underline">Datenschutz</Link>
        </p>
    </footer>
    )
}