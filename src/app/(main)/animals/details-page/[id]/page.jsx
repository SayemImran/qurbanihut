import getAllAnimals from "@/app/lib/getAllAnimals";
import AnimalbookForm from "@/components/animal/AnimalbookForm";
import Image from "next/image";
import Link from "next/link";

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const animals = await getAllAnimals();
  const animal = animals.find((a) => a.id === parseInt(id));

  if (!animal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500">Animal not found</h2>
          <Link href="/animals" className="btn btn-primary mt-4">
            Back to Animals
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-800 via-green-700 to-emerald-900 -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <Link
          href="/animals"
          className="inline-flex items-center text-white mb-6 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Animals
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
         
          {/* Animal Image Card */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full aspect-square">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-4 py-1 bg-green-500/30 border border-green-400/50 text-white rounded-full text-sm font-medium">
                {animal.category}
              </span>
            </div>
          </div>

          {/* Details & Booking Form Card */}
          <div className="space-y-6">
           
            {/* Animal Details */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h1 className="text-3xl font-bold text-white mb-2">
                {animal.name}
              </h1>
              <p className="text-white/70 mb-6">
                {animal.breed} • {animal.type}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-white/60 text-sm">Price</p>
                  <p className="text-2xl font-bold text-green-400">
                    ৳{animal.price.toLocaleString()}
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-white/60 text-sm">Weight</p>
                  <p className="text-2xl font-bold text-white">
                    {animal.weight} kg
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-white/60 text-sm">Age</p>
                  <p className="text-2xl font-bold text-white">
                    {animal.age} years
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-white/60 text-sm">Location</p>
                  <p className="text-xl font-bold text-white">
                    {animal.location}
                  </p>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 mb-6">
                <h3 className="text-white font-semibold mb-2">Description</h3>
                <p className="text-white/80">{animal.description}</p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Book This Animal
              </h2>
                <AnimalbookForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;