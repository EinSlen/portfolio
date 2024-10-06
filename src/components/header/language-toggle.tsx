"use client"

import React from "react"
import {Button, toast} from "../ui"
import {useTranslation} from "react-i18next";
import {CheckCircle} from "@/assets/icons";

export const LanguageToggle = () => {
    const { i18n } = useTranslation();
    const {t} = useTranslation();
    const language = i18n.language === 'fr' ? 'en' : 'fr'

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng).then(() => {
            toast({
                description: (
                    <div className="flex items-center space-x-4">
                        <CheckCircle /> <span> {t('translations:Language.Description')}</span>
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
