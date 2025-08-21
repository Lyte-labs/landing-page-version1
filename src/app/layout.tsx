// app/layout.tsx
import type { Metadata, Viewport } from "next";
// import { Inter } from "next/font/google";
import "../styles/globals.css";
import AnimatedNavbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1E1E1E',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://lytelabs.com'),
  title: "Lytelabs EV-Bike- Smart E-Bikes for the Modern Commuter",
  description: "Smarter Rides, Elevated Vibes",
  openGraph: {
    title: "Lytelabs-EV bike",
    description: "Power Your Journey with Innovation ",
    url: "https://lytelabs.com",
    siteName: "Lytelabs",
    images: [
      {
        url: "/lytelabs_logo.png",
        width: 1200,
        height: 630,
        alt: "Lytelabs Hero Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lytelabs",
    description:
      "Join the green future with modular energy and mobility solutions.",
    images: ["/lytelabs_logo.png"],
  },
  icons: {
    icon: [
      { url: "/lytelabs_logo.png", sizes: "32x32", type: "image/png" },
      { url: "/lytelabs_logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/lytelabs_logo.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "theme-color": "#1E1E1E",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-inter">
        <AnimatedNavbar />
        <main className="bg-[#1E1E1E text-white min-h-screen ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
