"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '@/config/translateEN';
import frTranslations from '@/config/translateFR';

i18n
    .use(initReactI18next)
    .init({
        lng: 'fr',
        fallbackLng: 'fr',
        resources: {
            en: {
                translations: enTranslations,
            },
            fr: {
                translations: frTranslations,
            },
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;