import getAllAnimals from "@/app/lib/getAllAnimals";
import AnimalCard from "@/components/card/AnimalCard";
import Link from "next/link";



const AllAnimalPage = async ({ searchParams }) => {
  const animals = await getAllAnimals();

  // Sorting Logic
  const getParams = await searchParams;
  const sortOrder = getParams?.sort;
  let sortedAnimals = [...animals];
  if (sortOrder === "asc") {
    sortedAnimals.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    sortedAnimals.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="animate__backInUp text-3xl font-bold mb-6 text-center mt-3">
        All Animals
      </h1>



      {/* Sort Controls */}
      <div className="flex justify-end mb-6 gap-2">
        <Link
          href="/animals"
          className={`btn btn-sm ${!sortOrder ? "btn bg-green-800 text-white font-semibold" : "btn-outline"}`}
        >
          Default
        </Link>
        <Link
          href="?sort=asc"
          className={`btn btn-sm ${sortOrder === "asc" ? "btn bg-green-800 text-white font-semibold" : "btn-outline"}`}
        >
          Price: Low to High
        </Link>
        <Link
          href="?sort=desc"
          className={`btn btn-sm ${sortOrder === "desc" ? "btn bg-green-800 text-white font-semibold" : "btn-outline"}`}
        >
          Price: High to Low
        </Link>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10 mb-10">
        {sortedAnimals.map((animal) => (
          <div key={animal.id}>
            <AnimalCard animal={animal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAnimalPage;
