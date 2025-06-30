import EcosystemHero from "@/components/Ecosystem/EcosystemHero"
import EcosystemDiagram from "@/components/Ecosystem/EcosystemDiagram"
import MiniSpotlight from "@/components/Ecosystem/MiniSpotlight"
import UseCaseGallery from "@/components/Ecosystem/UseCaseGallery"
import BundleOffer from "@/components/Ecosystem/BundleOffer"
import TestimonialsSlider from "@/components/ProductSpotlight/Testimonials"
import SpotlightCTA from "@/components/ProductSpotlight/SpotlightCTA"

export default function EcosystemPage() {
  return (
    <>
      <EcosystemHero />
      <EcosystemDiagram />
      <MiniSpotlight
        image="/battery.png"
        title="LytePack"
        stats="₦350 000 · 1000 Wh · 5 kg"
        blurb="Portable, fast-charging battery that powers your home or your ride."
        link="/shop/lytepack"
      />
      <MiniSpotlight
        image="/LyteLabs_EV_Bike.png"
        title="EVU E-Bike"
        stats="50–70 km range · 250 W motor"
        blurb="Urban-ready electric bike powered exclusively by LytePack."
        link="/shop/evu"
      />
      <BundleOffer />
      <UseCaseGallery />

      <TestimonialsSlider
        title="What Our Customers Say"
        testimonials={[
          {
            quote:
              "No more blackout worries—and my commute? Pure electric joy.",
            author: "Emeka",
            avatar: "/Dispatch Rider.jpg",
          },
          {
            quote: "LytePack kept my shop running during outages.",
            author: "Chinedu O.",
            avatar: "/Dispatch Rider.jpg",
          },
          {
            quote:
              "Quiet, reliable, and no fuel costs. Perfect for my daily commute!",
            author: "Mary A.",
            avatar: "/market_woman.jpeg",
          },
          {
            quote: "A must-have for every home in Nigeria.",
            author: "Kunle B.",
            avatar: "/Rider Image.jpg",
          },
          {
            quote: "Bundle is the best value I’ve seen.",
            author: "Aisha",
            avatar: "/avatar.jpeg",
          },
          {
            quote: "One system that does it all.",
            author: "Tunde",
            avatar: "/Lifestyle Image.jpg",
          },
        ]}
      />
      <SpotlightCTA
        headline="Ready to power your home and your ride?"
        buttons={[
          { label: "Shop LytePack", href: "/shop/lytepack" },
          { label: "Shop EVU E-Bike", href: "/shop/evu" },
          { label: "Bundle & Save", href: "/shop/bundle" },
        ]}
      />
    </>
  )
}
