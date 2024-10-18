"use client"

import Image from 'next/image'
import {basePath} from '@/utils'

export const Work = () => {
    return (
            <div
                className="max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
                <Image className="mx-auto pb-5" src={`${basePath}/images/viously-large.png`} alt="Viously logo" width={96}
                       height={96} loading="lazy"  layout="fixed"  quality={5}  />
                <a href="#">
                    <span className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Développeur
                        Frontend - Viously</span>
                </a>
                <p className="mb-3 pt-2 font-normal text-gray-500 dark:text-gray-400">Suivez ce guide étape par étape
                    pour savoir comment certifier vos avantages hebdomadaires :</p>
                <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                    Voir notre guide
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                </a>
            </div>
    );
}
