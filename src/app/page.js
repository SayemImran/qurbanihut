import FeatureAnimals from "@/components/feature/FeatureAnimals";
import HeroSection from "@/components/hero/hero";
import QurbaniTips from "@/components/feature/QurbaniTips";
import TopBreeds from "@/components/feature/TopBreeds";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <HeroSection/>
  <FeatureAnimals/>
  <QurbaniTips/>
  <TopBreeds/>
  </>
  );
}
