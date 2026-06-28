"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Star, Menu, X } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  locale: string;
  logo: string;
  githubRepo: string;
  stars?: number;
  brandColor: "blue" | "purple";
}

const brandStyles = {
  blue: {
    stars: "text-blue-500",
    starsBg: "bg-blue-500/10",
  },
  purple: {
    stars: "text-purple-500",
    starsBg: "bg-purple-500/10",
  },
};

export function Navbar({ locale, logo, githubRepo, stars, brandColor }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const styles = brandStyles[brandColor];

  const labels = locale === "id" 
    ? { home: "Beranda", docs: "Dokumentasi", download: "Unduh" }
    : { home: "Home", docs: "Docs", download: "Download" };

  const navItems = [
    { href: `/${locale}`, label: labels.home },
    { href: `/${locale}/docs`, label: labels.docs },
    { href: `/${locale}#download`, label: labels.download },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground/80",
                  isActive(item.href) ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Stars + Lang + GitHub */}
          <div className="flex items-center gap-3">
            <div className={cn("flex items-center gap-1.5 rounded-full px-3 py-1.5", styles.starsBg)}>
              <Star className="h-4 w-4" />
              <span className={cn("text-sm font-medium", styles.stars)}>{stars}</span>
            </div>

            {/* Lang Toggle */}
            <Link
              href={pathname.replace(`/${locale}`, `/${locale === "en" ? "id" : "en"}`)}
              className="text-sm font-medium text-foreground/60 hover:text-foreground"
            >
              {locale === "en" ? "ID" : "EN"}
            </Link>

            {/* GitHub */}
            <a
              href={`https://github.com/${githubRepo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground/60 hover:text-foreground"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-foreground/10 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-2 text-sm font-medium",
                  isActive(item.href) ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
