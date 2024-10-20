const SkillsAndLanguages = () => {
    return (
        <div className="flex flex-col items-center w-full md:max-w-lg lg:max-w-3xl max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
            <h2 className="text-white text-lg font-semibold mb-6">💼 Soft Skills & Languages 🌐</h2>
            <div className="flex flex-col md:flex-row justify-between w-full md:space-x-4 space-y-6 md:space-y-0">
                <div className="flex-1 flex flex-col items-start">
                    <h3 className="text-gray-300 font-medium mb-4">🧠 Soft Skills</h3>
                    <ul className="text-gray-300 list-none">
                        <li>🗣️ Communication</li>
                        <li>🤝 Teamwork</li>
                        <li>🧩 Problem-Solving</li>
                        <li>🔄 Adaptability</li>
                    </ul>
                </div>
                <div className="flex-1 flex flex-col items-start">
                    <h3 className="text-gray-300 font-medium mb-4">🌍 Languages</h3>
                    <ul className="text-gray-300 list-none w-full">
                        <li className="mb-2">
                            <span className="mr-2">🇫🇷 French</span>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </li>
                        <li className="mb-2">
                            <span className="mr-2">🇬🇧 English</span>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillsAndLanguages;
