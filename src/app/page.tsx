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
                "The thing marama. The thing go well. I like am. Make una finish am quick, i don tire for the normal bicycle.",
              author: "Collins, ",
              title: "Glovo Dispatch Rider",
            },
            {
              quote:
                "I like what you guys are doing, once everything is working well as expected, I am sure all riders will switch to your product.",
              author: "Ubong, ",
              title: "Chowdeck Dispatch Rider",
            },
            {
              quote:
                "When will it launch? Once everything is fixed, the speed is increased, I will purchase it, money is not a problem, as long as it delivers for me.",
              author: "Emmanuel, ",
               title: "Chowdeck Dispatch Rider",
            },
          ]}
        />

        <TiltCardParallax />
      </div>
    </>
  );
}
