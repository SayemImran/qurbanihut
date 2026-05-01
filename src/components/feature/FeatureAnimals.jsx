import AnimalCard from '../card/AnimalCard';

const FeatureAnimals = async () => {
    const res = await fetch('http://localhost:3000/data.json', {
        cache: 'no-store'
    });
    const allAnimals = await res.json();
    const featuredAnimals = allAnimals.slice(0, 4);

    return (
        <section className="py-16 w-10/12 mx-auto">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Animals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredAnimals.map((animal) => (
                        <AnimalCard key={animal.id} animal={animal} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureAnimals;