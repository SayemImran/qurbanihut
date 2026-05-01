const QurbaniTips = () => {
    const tips = [
        {
            title: "Choose Healthy Animals",
            description: "Look for animals with bright eyes, clean nose, and smooth coat. Avoid animals showing signs of illness.",
            icon: "🐄"
        },
        {
            title: "Check Age Requirements",
            description: "Goats/Sheep should be at least 1 year old, Cows at least 2 years old. Age is determined by teeth inspection.",
            icon: "📅"
        },
        {
            title: "Verify Weight for Share",
            description: "A single cow can be shared by 7 people. Ensure the animal meets minimum weight requirements (250kg+ for cows).",
            icon: "⚖️"
        },
        {
            title: "Buy from Trusted Sources",
            description: "Purchase from verified farms or reputable sellers with proper documentation and health certificates.",
            icon: "✅"
        },
        {
            title: "Plan Ahead",
            description: "Book your animal at least 1-2 weeks before Eid to get better selection and avoid last-minute rush.",
            icon: "📆"
        },
        {
            title: "Proper Transportation",
            description: "Ensure comfortable transport with proper ventilation. Avoid long journeys during hottest hours.",
            icon: "🚛"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="w-10/12 mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">Qurbani Tips</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Essential guidelines to help you choose the right animal for Qurbani
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tips.map((tip, index) => (
                        <div key={index} className="bg-base-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">{tip.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                            <p className="text-gray-600">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QurbaniTips;