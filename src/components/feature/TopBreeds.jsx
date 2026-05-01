import Image from 'next/image';

const TopBreeds = () => {
    const breeds = [
        {
            name: "Brahman",
            type: "Cow",
            description: "Premium quality breed known for its large size and excellent meat quality. Ideal for 7-share Qurbani.",
            image: "https://i.ibb.co.com/nHwhFDB/Brahman-Bull.jpg"
        },
        {
            name: "Hariana",
            type: "Cow",
            description: "One of the most popular breeds in Bangladesh. Known for high weight gain and good temperament.",
            image: "https://i.ibb.co.com/q3L14TjT/Hariana-Bull.jpg"
        },
        {
            name: "Black Bengal",
            type: "Goat",
            description: "The most sought-after goat breed for Qurbani. Known for tender meat and high demand during Eid.",
            image: "https://i.ibb.co.com/pB5hwpkV/Deshi-Kalo-Bakra.jpg"
        },
        {
            name: "Jamuna Pari",
            type: "Goat",
            description: "Large-sized goat breed with impressive build. Great choice for single Qurbani with excellent meat quality.",
            image: "https://i.ibb.co.com/jPLMX1xW/Jamuna-Pari-Bakra.jpg"
        }
    ];

    return (
        <section className="py-16 bg-base-200">
            <div className="w-10/12 mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">Top Breeds for Qurbani</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Most popular and recommended breeds for quality Qurbani
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {breeds.map((breed, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row">
                            <div className="relative w-full md:w-48 h-48 md:h-auto">
                                <Image
                                    src={breed.image}
                                    alt={breed.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                                        {breed.type}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{breed.name}</h3>
                                <p className="text-gray-600">{breed.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopBreeds;