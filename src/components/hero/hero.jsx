import Image from "next/image";
import Link from "next/link";
import heroImage from "@/../public/assets/banner.svg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4">
          Quality Qurbani Animals
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-xl sm:max-w-2xl md:max-w-3xl mb-6 sm:mb-8">
          Find the best quality sacrificial animals for your Qurbani. 
          Healthy, well-cared for, and fairly priced.
        </p>
        
        {/* View More Button */}
        <Link 
          href="/animals"
          className="animate__heartBeat btn bg-[#27500A] text-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base rounded-lg font-semibold hover:bg-[#1e4008] transition-colors"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

