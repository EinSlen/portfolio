const Timeline = () => {
    return (
        <div className="relative flex flex-col min-h-[calc(100vh-350px)] md:pt-8 pt-8 items-center justify-center pl-5 lg:pl-0">
            <div className="mb-10 mt-3 ml-20 sm:pe-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Parcours Scolaire</h1>
                <p className="text-gray-700 dark:text-gray-200">Voici une timeline, l'aperçu de mon parcours scolaire en dessous:</p>
            </div>

            <ol className="relative border-s border-gray-800 dark:border-gray-700">
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-700">
                        <svg className="w-2.5 h-2.5 text-blue-900 dark:text-blue-200" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <span className="flex -translate-y-[5px] items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        BUT Informatique 
                        <span className="bg-blue-200 text-blue-900 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-700 dark:text-blue-200 ms-3">
                            En cours
                        </span>
                    </span>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">
                        Du 15 septembre, 2022 - Aujourd'hui
                    </time>
                    <p className="mb-4 -pt-1 text-base font-normal text-gray-700 dark:text-gray-300">
                        Actuellement en BUT Informatique à <strong>l'IUT de Lens</strong>, ce parcours me permet<br/> d'acquérir des compétences solides en développement web, gestion de bases de données et en programmation.
                        <br/>J'y apprends les technologies modernes pour construire des applications performantes et innovantes.
                    </p>
                    <a href="https://www.iut-lens.univ-artois.fr/"
                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-800 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-800 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        Site web
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                        </svg>
                    </a>
                </li>

                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-700">
                        <svg className="w-2.5 h-2.5 text-blue-900 dark:text-blue-200" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <span className="flex -translate-y-[5px] mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Prepa Scientifique
                    </span>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">
                        Le 13 septembre, 2021
                    </time>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-300">
                        J'ai suivi une classe préparatoire scientifique à <strong>Valencienne</strong> qui m'a permis d'acquérir des bases solides<br/> en mathématiques et en physique. Cette expérience m'a préparé aux exigences des études supérieures.
                    </p>
                </li>

                <li className="ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-700">
                        <svg className="w-2.5 h-2.5 text-blue-900 dark:text-blue-200" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <span className="flex -translate-y-[5px] mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        Baccalauréat Scientifique
                    </span>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-700 dark:text-gray-300">
                        Diplômé le 7 décembre, 2021
                    </time>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-300">
                        J'ai obtenu mon baccalauréat avec mention au lycée <strong>Henry D'Arras</strong>, ce qui m'a ouvert les portes<br/> de l'enseignement supérieur dans le domaine des sciences et de la technologie/Informatique.                    </p>
                </li>
            </ol>
        </div>
    );
};

export default Timeline;