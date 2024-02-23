import { createI18n } from 'vue-i18n'

import enlLocale from './en'
import zhLocale from './zh'


const messages = {
    en: {
        ...enlLocale
    },
    zh: {
        ...zhLocale,
    }
}

const i18n = new createI18n({
    legacy: false,
    locale: localStorage.getItem("language") || 'zh',
    messages
})

export default i18n
