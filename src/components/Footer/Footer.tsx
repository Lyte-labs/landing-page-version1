'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import FooterForm from './FooterForm'
import Image from 'next/image'

const NAV_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { href: '/', label: 'Home' },
      { href: '/#feature', label: 'Features' },
     { label: "About Us", href: "/about" },
      { href: '/#testimonials', label: 'Testimonials' },
      { href: '/#cta', label: 'Subscribe' },
    ],
  },
  {
    title: 'Follow Us',
    links: [
      { href: 'https://facebook.com', label: 'Facebook' },
      { href: 'https://twitter.com', label: 'Twitter' },
      { href: 'https://instagram.com', label: 'Instagram' },
      { href: 'https://linkedin.com', label: 'LinkedIn' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '#privacy', label: 'Privacy Policy' },
      { href: '#terms', label: 'Terms & Conditions' },
    ],
  },
]

const SOCIALS = [
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook page' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter page' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram page' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn page' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-100">
      <div className="max-w-screen w-full mx-auto md:p-14">
        <div className="grid md:grid-cols-2 gap-12 border-b border-gray-800 pb-12">
          
          {/* Left - Contact Form */}
          <div>
            <FooterForm />
          </div>

          {/* Right - Grid of Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {NAV_COLUMNS.map((column, idx) => (
              <div key={idx}>
                <h3 className="mb-4 text-sm font-semibold uppercase text-accent">{column.title}</h3>
                <ul className="text-gray-400 space-y-3">
                  {column.links.map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:underline hover:text-accent transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom - Logo, copyright, social */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Image
              src="/lytelabs_logo.jpeg"
              alt="Lyte-Labs Logo"
              width={32}
                height={32}
              className="h-8"
            />
            <span className="text-lg font-bold text-white">Lyte-Labs</span>
          </div>
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {year} Lyte-Labs. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
