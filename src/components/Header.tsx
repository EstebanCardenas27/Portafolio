"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={` top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-brand-dark/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-brand-purple">UG.</a>
        <div className="hidden lg:flex gap-8">
          {navItems.map(item => (
            <a key={item.name} href={item.href} className="text-sm text-white hover:text-brand-purple transition-colors">
              {item.name}
            </a>
          ))}
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="lg:hidden p-2 text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={` top-0 right-0 h-full w-64 bg-brand-dark/95 backdrop-blur-lg transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 space-y-6">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-white hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}