import {
  //AnimatedButton,
 // MotionFade,
  //MotionFadeInView,
} from "@/components/animations";
import LytePackFeaturesSection from "@/components/LytePackFeaturesSection";
import HeroSection from "@/components/HeroSection";
// import ProductEcosystemSection from "@/components/ProductEcosystemSection";
import SpotlightPage from "@/components/ProductSpotlight/SpotlightPage";

export default function Home() {
  return (
    <>
    <section id="hero" className="relative overflow-hidden h-screen">
       <HeroSection />
    </section>
        {/* <MotionFade>
         <ProductEcosystemSection />
       </MotionFade> */}
       <LytePackFeaturesSection />
      <section>
        <SpotlightPage />
      </section>
    </>
  );
}
