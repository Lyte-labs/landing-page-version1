"use client";

import HeroSection from "@/components/AboutPage/HeroSection";
import MissionVision from "@/components/AboutPage/MissionVision";
import ValuesGrid from "@/components/AboutPage/ValuesGrid";
import TeamSection from "@/components/AboutPage/TeamSection";
import ImpactMetrics from "@/components/AboutPage/ImpactMetrics";
import PressSection from "@/components/AboutPage/PressSection";
//import FinalCTA from "@/components/AboutPage/FinalCTA";
import OriginTimeline from "./OriginTimeline";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* 1️⃣ HERO */}
      <HeroSection
        title="Powering Tomorrow, Today."
        subtitle="From a bold idea in a Lagos garage to a fully integrated energy + mobility ecosystem."
        backgroundImage="/Market.avif"
        backgroundImageAlt="EVU E-Bike with LytePack in city"
        cta={{
          label: "Join Our Journey",
          href: "#timeline",
        }}
      />

      {/* 2️⃣ OUR ORIGIN (Timeline) */}
      <OriginTimeline
        id="timeline"
        milestones={[
          {
            year: "2018",
            title: "The Spark",
            description:
              "Lytelabs founded to tackle Nigeria’s power challenges.",
            icon: "⚡️",
          },
          {
            year: "2020",
            title: "LytePack Launch",
            description:
              "Our first detachable battery—1,000+ units sold in Year 1.",
            icon: "🔋",
          },
          {
            year: "2023",
            title: "EVU Vision",
            description:
              "We began R&D on an e-bike powered solely by LytePack.",
            icon: "🚲",
          },
          {
            year: "2025",
            title: "Ecosystem Live",
            description:
              "Two products, one unified power solution—available now.",
            icon: "🌍",
          },
        ]}
      />

      {/* 3️⃣ MISSION & VISION */}
      <MissionVision
        mission={{
          title: "Our Mission",
          icon: "🌱",
          text: "To democratize clean energy and modern mobility, one LytePack at a time.",
        }}
        vision={{
          title: "Our Vision",
          icon: "🚀",
          text: "A world where every home and every rider runs on sustainable power.",
        }}
      />

      {/* 4️⃣ WHAT DRIVES US (Values Grid) */}
      <ValuesGrid
        title="What Drives Us"
        values={[
          {
            icon: "🌱",
            title: "Sustainability",
            description: "We minimize waste and promote renewable charging.",
          },
          {
            icon: "💡",
            title: "Innovation",
            description: "We pioneer modular battery tech and EV design.",
          },
          {
            icon: "⚙️",
            title: "Reliability",
            description: "Built rugged for Nigerian conditions—always on.",
          },
          {
            icon: "🤝",
            title: "Community",
            description: "Partnering with local riders, developers, and NGOs.",
          },
        ]}
      />

      {/* 5️⃣ THE TEAM */}
      <TeamSection
        title="Meet the Team"
        members={[
          {
            name: "Wilson",
            role: "Founder & CEO",
            bio: "From off-grid startups to building LyteLabs’ vision.",
            image: "/elon.webp",
          },
          {
            name: "Amaka Obi",
            role: "CTO",
            bio: "Engineering the battery-to-bike integration.",
            image: "/elon.webp",
          },
          {
            name: "Chinedu Eze",
            role: "Design Lead",
            bio: "Crafting the UX/UI of our platform and e-bike.",
          image: "/elon.webp",
          },
          // {
          //   name: "We’re Hiring!",
          //   role: "Join Us",
          //   bio: "Be part of the revolution. See careers page.",
          //   image: "/team-placeholder.jpg",
          //   ctaHref: "/careers",
          // },
        ]}
      />

      {/* 6️⃣ SUSTAINABILITY & IMPACT */}
      <ImpactMetrics
        title="Our Impact"
        metrics={[
          {
            icon: "⚡️",
            value: "2+ GWh",
            label: "Generated",
          },
          {
            icon: "🚲",
            value: "100+ Million km",
            label: "Powered",
          },
          {
            icon: "🌳",
            value: "20,000+",
            label: "Trees Saved",
          },
        ]}
      />

      {/* 7️⃣ SOCIAL PROOF / PRESS */}
      <PressSection
        logos={[
          "/techcrunch.webp",
          "/clean_tech.png",
          "/bbc.png",
        ]}
        quote="LyteLabs is redefining off-grid energy and urban mobility in Africa."
        source="TechCrunch Africa"
      />

      {/* 8️⃣ FINAL CTA / FOOTER */}
      {/* <FinalCTA
        headline="Ready to power your world?"
        subhead="Join us as we build the future of energy and mobility."
        buttons={[
          { label: "Contact Us", href: "/contact", variant: "primary" },
          { label: "Careers", href: "/careers", variant: "outline" },
          { label: "Read Our Blog", href: "/blog", variant: "secondary" },
        ]}
      /> */}
    </main>
  );
}
