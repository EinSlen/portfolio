"use client"

import React from "react"
import {Button, toast} from "../ui"
import {useTranslation} from "react-i18next";

export const LanguageToggle = () => {
    const { i18n } = useTranslation();
    const {t} = useTranslation();
    const language = i18n.language === 'fr' ? 'en' : 'fr'

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng).then(() => {
            toast({
                description: (
                    <div className="flex items-center space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12l2 2l4 -4"
                            />
                            <circle cx="12" cy="12" r="9"/>
                        </svg>
                        <span> {t('translations:Language.Description')}</span>
                    </div>
                ),
            })
        })
    };

    return (
        <Button variant="ghost" size="icon" onClick={() => changeLanguage(language)}>
            {language === 'en' ? <div className="h-[1.5rem] w-[1.3rem]">🇫🇷</div> :
                <div className="h-[1.5rem] w-[1.3rem]">🇬🇧</div>}
        </Button>
    )
}
