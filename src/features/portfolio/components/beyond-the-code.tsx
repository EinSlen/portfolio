const BeyondTheCode = () => {
    const hobbies = [
        { name: 'Gaming', emoji: '🎮' },
        { name: 'Hiking', emoji: '🥾' },
        { name: 'Music', emoji: '🎵' },
        { name: 'Fitness', emoji: '🏋️‍♀️' },
    ];

    return (
        <div className="max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  h-full">
            <div className="mb-4 pt-2">
                <h2 className="text-2xl font-bold flex items-center mb-2">
                    <span className="text-teal-400 mr-2">✨</span> Beyond the Code
                </h2>
                <p className="text-gray-400">
                    Explore my interests and hobbies beyond the digital realm.
                </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
                {hobbies.map((hobby) => (
                    <div
                        key={hobby.name}
                        className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm flex items-center justify-center whitespace-nowrap"
                    >
                        <span className="mr-2">{hobby.name}</span> <span>{hobby.emoji}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BeyondTheCode;
