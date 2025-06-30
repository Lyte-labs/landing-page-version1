"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedNavLink } from "./animations";

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  { id: "hero", label: "Home", path: "/" },
  { id: "feature", label: "Features", path: "/#feature" },
  { id: "about", label: "About Us", path: "/about" },
  { id: "testimonials", label: "Testimonials", path: "/#testimonials" },
  { id: "cta", label: "Subscribe", path: "/#cta" },
];

export default function AnimatedNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Scroll highlight logic
  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!isMounted) return;
    const triggers: ScrollTrigger[] = [];
    SECTIONS.forEach(({ path }) => {
      if (path.startsWith("#")) {
        triggers.push(
          ScrollTrigger.create({
            trigger: path,
            start: "top center",
            end: "bottom center",
            onEnter: () => highlightLink(path),
            onEnterBack: () => highlightLink(path),
          })
        );
      }
    });
    return () => triggers.forEach((t) => t.kill());
  }, [isMounted]);

  const highlightLink = (path: string) => {
    if (!navRef.current) return;
    const links = navRef.current.querySelectorAll("a");
    links.forEach((link) => {
      link.classList.toggle("text-accent", link.getAttribute("href") === path);
    });
  };

  //const navbarClass = scrolled ? "bg-white shadow-md" : "bg-slate-300";
  const navbarClass =
    isMounted && scrolled
      ? "bg-white/55 backdrop-blur shadow-md"
      : "bg-white backdrop-blur-none shadow-none";
  return (
    <nav
      ref={navRef}
      className={`fixed w-full top-0 z-50 transition-all ${navbarClass}`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-primary">
          <p>LYTELABS</p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 font-semibold text-base">
          {SECTIONS.map(({ id, label, path }) =>
            path.startsWith("#") ? (
              <AnimatedNavLink
                key={id}
                href={path}
                label={label}
                className="hover:text-accent transition-colors duration-300"
              />
            ) : (
              <Link
                key={id}
                href={path}
                className="hover:text-accent transition-colors duration-300"
              >
                {label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={30} className="bg-black" />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-start space-y-8 p-8 overflow-y-auto overscroll-none"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
            }}
          >
            <div className="flex w-full items-center justify-between">
              <Link
                href="/"
                className="text-xl font-bold text-primary"
                onClick={() => setMobileOpen(false)}
              >
                <p>LYTELABS</p>
              </Link>
              <button
                className="md:hidden"
                onClick={() => setMobileOpen(false)}
                aria-label="Toggle menu"
              >
                <X size={30} />
              </button>
            </div>

            {SECTIONS.map(({ id, label, path }) =>
              path.startsWith("#") ? (
                <AnimatedNavLink
                  key={id}
                  href={path}
                  label={label}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-bold hover:text-accent transition-colors duration-300"
                />
              ) : (
                <Link
                  key={id}
                  href={path}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-bold hover:text-accent transition-colors duration-300"
                >
                  {label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
