"use client";

// import SpotlightHero from "./SpotlightHero";
// import ValueProp from "./ValueProp";
// import FeaturesGrid from "./FeaturesGrid";
//import DetailedFeatures from "./DetailedFeatures";
import LifestyleGallery from "./LifestyleGallery";
import ComparisonTable from "./TechSpecs";
import SpotlightCTA from "./SpotlightCTA";
import TestimonialsSlider from "./Testimonials";

export default function SpotlightPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* <SpotlightHero
        title="One Battery. Power Everywhere."
        subtitle="Charge once. Power your home, power your ride. LytePack is the energy system designed for total freedom."
        backgroundImage="/EVU E-Bike Spotlight_hero.jpg"
        backgroundImageAlt="LytePack with EVU E-Bike"
        primaryCTA={{ label: "Shop Now", href: "/shop" }}
      /> */}

      {/* <ValueProp text="The LytePack is a high-capacity, portable battery system designed to power your home essentials or your EVU E-Bike. Recharge anywhere. Stay powered everywhere." /> */}

      {/* <FeaturesGrid
        features={[
          {
            icon: "⚡️",
            title: "Fast Charging",
            description: "Recharge fully in 3 hours from wall or solar.",
          },
          {
            icon: "🔋",
            title: "High Capacity",
            description: "1000Wh output, power multiple devices.",
          },
          {
            icon: "🎒",
            title: "Detachable & Portable",
            description: "Easy-carry handle, 10kg weight.",
          },
          {
            icon: "🚲",
            title: "EVU Compatible",
            description: "Snaps into our electric bike frame.",
          },
        ]}
      /> */}
      {/* 
      <DetailedFeatures
        sections={[
          {
            title: "Fast Charging",
            description: "Recharge from solar or wall in under 3 hours.",
            image: "/LytePack_plug_Clean.avif",
          },
          {
            title: "Massive Capacity",
            description: "1000Wh output, enough for lights, fan, TV, laptops.",
            image: "/home_with_lytepack.avif",
          },
          {
            title: "EVU E-Bike Integration",
            description: "Detachable design powers our EVU electric bike.",
            image: "/Battery Integration.jpg",
          },
          {
            title: "Smart Power Management",
            description: "LED status, battery protection, USB ports.",
            image: "/workstation.jpg",
          },
        ]}
      /> */}

      <LifestyleGallery
        title="See LytePack in Action"
        images={[
          {
            src: "/Home Backup.jpg",
            alt: "LytePack powering home",
            overlayText: "Power your home",
          },
          {
            src: "/Urban Commute.jpg",
            alt: "EVU E-Bike with LytePack",
            overlayText: "Commute with freedom",
          },
          {
            src: "/Lifestyle Image.jpg",
            alt: "Charging LytePack",
            overlayText: "Ready anytime",
          },
        ]}
      />

      <ComparisonTable
        title="Technical Specifications"
        specs={[
          {
            feature: "Capacity",
            home: "1000Wh",
            bike: "1000Wh",
            charging: "Solar/Grid",
          },
          {
            feature: "Output",
            home: "220V AC",
            bike: "48V DC",
            charging: "500W",
          },
          {
            feature: "Use Time",
            home: "6hr backup",
            bike: "40km range",
            charging: "2-4hr charge",
          },
          { feature: "Weight", home: "10kg", bike: "10kg", charging: "-" },
          { feature: "Ports", home: "AC, USB-C", bike: "DC", charging: "-" },
        ]}
      />

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
        headline="Ready to Power Your Life and Your Ride?"
        subhead="Get started with LytePack and EVU E-Bike today."
        buttons={[
          { label: "Explore LytePack", href: "/shop", variant: "outline" },
          { label: "Explore EVU E-Bike", href: "/shop", variant: "gradient" },
        ]}
      />
    </main>
  );
}
