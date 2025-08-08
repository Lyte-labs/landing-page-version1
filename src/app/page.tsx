"use client";
import LytePackFeaturesSection from "@/components/LytePackFeaturesSection";
import HeroSection from "@/components/HeroSection";
import CustomerStories from "@/components/CustomerStories";
import OurStory from "@/components/OurStory";
import TiltCardParallax from "@/components/TiltCardParallax";

export default function Home() {
  return (
    <>
      <div >
        <div>
          <title>LyteLabs - Smart E-Bikes</title>
          <meta
            name="description"
            content="LyteLabs - Smart E-Bikes for the Modern Commuter"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </div>
        <section id="hero" className="h-auto w-full overflow-hidden">
          <HeroSection />
        </section>

        <LytePackFeaturesSection />
        <OurStory />
        <CustomerStories
          testimonials={[
            {
              quote:
                "A. Serrano's e-bikes have truly transformed my daily commute. The advanced features and stylish design have made me feel more connected to the city.",
              author: "Sophie Carter,",
              title: "Commuter",
            },
            {
              quote:
                "I can't imagine riding without A. Serrano e-bikes now. The eco-friendly design and smooth rides have been a game-changer for my urban adventures.",
              author: "Mark Johnson, ",
              title: "Urban Explorer",
            },
            {
              quote:
                "A. Serrano has exceeded my expectations. The e-bikes' performance and durability are unparalleled, providing me with the freedom to explore with ease.",
              author: "Eva Martinez, ",
              title: "Adventurer",
            },
          ]}
        />

        <TiltCardParallax />
      </div>
    </>
  );
}
