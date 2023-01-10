import en from './en'
import de from './de'

function getTranslation(locale) {
    let t = en
    switch (locale) {
        case'de':
            t = de
            break

        case'en':
            t = en
            break
    }
    return t
}

export default getTranslation