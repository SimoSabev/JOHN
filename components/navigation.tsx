"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Cpu } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "НАЧАЛО" },
  { href: "/biography", label: "БИОГРАФИЯ" },
  { href: "/innovation", label: "ИНОВАЦИИ" },
  { href: "/simulator", label: "СИМУЛАТОР" },
  { href: "/contact", label: "КОНТАКТ" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4",
        scrolled ? "vintage-card border-border" : "bg-card/80 backdrop-blur-sm border-border/50",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-primary border-4 border-border flex items-center justify-center transition-all duration-200 group-hover:bg-accent">
              <Cpu className="text-primary-foreground" size={24} />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg tracking-wider">АТАНАСОВ</span>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">ABC-1942</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-5 py-2 text-sm font-bold uppercase tracking-wider border-2 transition-all duration-200",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground border-border"
                    : "bg-card text-foreground border-border hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 border-2 border-border hover:bg-accent transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-border animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-5 py-3 text-sm font-bold uppercase tracking-wider border-2 transition-all duration-200 opacity-0 animate-fade-in-up",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground border-border"
                      : "bg-card text-foreground border-border hover:bg-accent hover:text-accent-foreground",
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
