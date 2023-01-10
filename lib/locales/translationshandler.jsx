import en from './en'
import de from './de'
import fr from './fr'
import { useRouter } from 'next/router';

function getTranslations() {
    const router = useRouter();
    const { locale } = router;
    let t = en
    switch (locale) {
        case'de':
            t = de
            break

        case'en':
            t = en
            break

        case'fr':
            t = fr
            break
    }
    return t
}

export default getTranslations