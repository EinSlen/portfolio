import Image from 'next/image'
import {basePath} from '@/utils'

const Work = () => {
    return (
        <div className="max-w-sm p-6 text-center bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
            <Image
                className="mx-auto pb-5"
                src={`${basePath}/images/viously-large.webp`}
                alt="Viously logo"
                width={96}
                height={96}
                loading="lazy"
                layout="fixed"
                quality={5}
            />
            <span className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Développeur Frontend - Viously
            </span>
            <p className="mb-3 pt-2 font-normal text-gray-700 dark:text-gray-300">
                Viously est une plateforme innovante dédiée à l'intégration et la gestion de players vidéo pour maximiser l'argent générer.
            </p>
            <a target="_blank" href="https://viously.com"
                className="inline-flex font-medium items-center text-blue-900 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 hover:underline"
                aria-label="Site viously">
                Accéder au site
                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                </svg>
            </a>
        </div>
    );
}

export default Work;