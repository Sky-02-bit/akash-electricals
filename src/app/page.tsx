import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import CategorySection from "@/components/CategorySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandMarquee />
      <CategorySection />
    </>
  );
}