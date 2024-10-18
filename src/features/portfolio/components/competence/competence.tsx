

const Competence = () => {
    return (
        <div className="relative h-32"> {/* Augmenté la hauteur pour faire de la place au h1 */}
            {/* Titre au-dessus de la banderole */}
            <h1 className="text-2xl -rotate-6 font-bold text-center mb-4 text-gray-900 dark:text-white">Mes compétences</h1>

            {/* Banderole avec les compétences */}
            <div
                className="absolute -rotate-6 bg-gradient-to-r from-green-400 to-blue-500 text-white w-[150vw] left-[-25vw] py-3">
                <p className="text-center uppercase tracking-widest text-lg whitespace-nowrap animate-scroll-mobile md:animate-none">
                    ★ React/Next ★ Html/CSS ★ PHP/Laravel/symfony ★ Python/Flask ★ SQL/MongoDB/Postgresql ★ Java ★ IntellIJ ★
                </p>
            </div>
        </div>
    );
};

export default Competence;
