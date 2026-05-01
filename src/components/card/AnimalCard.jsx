import Image from "next/image";
import Link from "next/link";

const AnimalCard = ({ animal }) => {
  if (!animal) return null;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-3">
      <figure className="relative h-48 sm:h-56 md:h-64 w-full bg-gray-100">
        {animal.image ? (
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400">
            No Image
          </div>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">{animal.name}</h2>

        <div className="space-y-2 text-sm text-base-content/70">
          <div className="flex justify-between">
            <span className="border-1 rounded-lg border-green-800 px-2">Price:</span>
            <span className="font-semibold text-base-content">
              ৳{animal.price?.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="border-1 rounded-lg border-green-800 px-2">Location:</span>
            <span className="font-semibold text-base-content">
              {animal.location}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="border-1 rounded-lg border-green-800 px-2">Weight:</span>
            <span className="font-semibold text-base-content">
              {animal.weight} kg
            </span>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link
            href={`/animals/details-page/${animal.id}`}
            className="btn btn-primary hover:animate__heartBeat"
            style={{ backgroundColor: "#27500A", borderColor: "#27500A" }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
