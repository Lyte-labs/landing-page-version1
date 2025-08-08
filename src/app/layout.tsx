// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import AnimatedNavbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const inter = Inter({
  subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lytelabs-EV bike",
  description: "Smarter Rides, Elevated Vibes",
  openGraph: {
    title: "Lytelabs-EV bike",
    description: "Power Your Journey with Innovation ",
    url: "https://lytelabs.com",
    siteName: "Lytelabs",
    images: [
      {
        url: "/lytelabs_logo.jpeg",
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
    description: "Join the green future with modular energy and mobility solutions.",
    images: ["/lytelabs_logo.jpeg"],
  },
  icons: {
    icon: "/lytelabs_logo.jpeg",
    apple: "/lytelabs_logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className={inter.className}>
      <body
        className={`antialiased `}
      >
        <AnimatedNavbar />
        <main className="bg-[#1c1b22 text-white min-h-screen ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
