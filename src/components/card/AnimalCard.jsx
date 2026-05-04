"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 25px 45px rgba(15, 23, 42, 0.18)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { scale: 1.1 },
  visible: {
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const contentVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const titleVariant = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const rowVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const buttonVariant = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

const badgeVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const AnimalCard = ({ animal }) => {
  if (!animal) return null;

  return (
    <motion.div
      className="card bg-base-100 shadow-xl transition-shadow duration-300 p-3"
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-2xl bg-gray-100">
        <figure className="relative h-full w-full">
          {animal.image ? (
            <motion.div
              className="absolute inset-0 overflow-hidden"
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.18 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400">
              No Image
            </div>
          )}
        </figure>

        {animal.featured && (
          <motion.div
            className="absolute left-3 top-3 rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-slate-900 shadow-lg"
            variants={badgeVariant}
            initial="hidden"
            animate="visible"
          >
            Featured
          </motion.div>
        )}
      </motion.div>

      <motion.div className="card-body" variants={contentVariant} initial="hidden" animate="visible">
        <motion.h2 className="card-title text-lg" variants={titleVariant}>
          {animal.name}
        </motion.h2>

        <div className="space-y-2 text-sm text-base-content/70">
          <motion.div className="flex justify-between" variants={rowVariant}>
            <span className="border-1 rounded-lg border-green-800 px-2">Price:</span>
            <span className="font-semibold text-base-content">
              ৳{animal.price?.toLocaleString()}
            </span>
          </motion.div>
          <motion.div className="flex justify-between" variants={rowVariant}>
            <span className="border-1 rounded-lg border-green-800 px-2">Location:</span>
            <span className="font-semibold text-base-content">
              {animal.location}
            </span>
          </motion.div>
          <motion.div className="flex justify-between" variants={rowVariant}>
            <span className="border-1 rounded-lg border-green-800 px-2">Weight:</span>
            <span className="font-semibold text-base-content">
              {animal.weight} kg
            </span>
          </motion.div>
        </div>

        <motion.div className="card-actions justify-end mt-4" variants={buttonVariant}>
          <motion.div
            whileHover={{ scale: 1.05, filter: "brightness(1.05)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-md"
          >
            <Link
              href={`/animals/details-page/${animal.id}`}
              className="btn btn-primary hover:animate__heartBeat"
              style={{ backgroundColor: "#27500A", borderColor: "#27500A" }}
            >
              View Details
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AnimalCard;
