import { HeartIcon, PlayCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { FaApple, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Button } from "./Button";

const footerLinks = {
  product: [
    { label: "Accueil", href: "/" },
    { label: "Explorer", href: "/explorer" },
    { label: "Favoris", href: "/favoris" },
    { label: "Profil", href: "/profil" },
  ],
  categories: [
    { label: "Motivation", href: "/explorer?category=Motivation" },
    { label: "Sagesse", href: "/explorer?category=Sagesse" },
    { label: "Courage", href: "/explorer?category=Courage" },
    { label: "Amour", href: "/explorer?category=Amour" },
  ],
  legal: [
    { label: "Confidentialité", href: "#" },
    { label: "CGU", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const socialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <div className="py-16 border-t bg-secondary text-secondary-content border-border/50 bg-night-light/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">M</span>
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">
                Motivora
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Ta source quotidienne d&apos;inspiration et de motivation pour réaliser tes rêves.
            </p>

            {/* App Coming Soon */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Bientôt disponible
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm" className="w-full justify-start gap-2 h-10" disabled>
                  <FaApple className="w-4 h-4" />
                  <span className="text-xs">App Store</span>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start gap-2 h-10" disabled>
                  <PlayCircleIcon className="w-4 h-4" />
                  <span className="text-xs">Google Play</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produit</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Catégories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>© 2024 Motivora. Fait avec</span>
              <HeartIcon className="w-4 h-4 text-destructive fill-destructive" />
              <span>en France</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
