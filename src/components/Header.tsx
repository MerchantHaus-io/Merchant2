import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import shieldLogo from "@/assets/RedShield.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", href: "/pages/contact.html" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="MerchantHaus.io home">
          <img src={shieldLogo} alt="MerchantHaus Shield" className="h-9 w-9" />
          <span className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
            MerchantHaus.io
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.map(link =>
            link.to ? (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-slate-900 ${
                    isActive ? "text-slate-900" : "text-slate-600"
                  }`
                }
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3 text-sm font-semibold">
            <a
              href="tel:15056006042"
              className="text-rose-500 transition-colors hover:text-rose-600"
            >
              1-505-600-6042
            </a>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-rose-400 text-rose-500 hover:bg-rose-500 hover:text-white"
              asChild
            >
              <a href="/pages/contact.html">Contact Support</a>
            </Button>
          </div>
          <Button
            size="sm"
            className="hidden sm:inline-flex rounded-full bg-rose-500 px-5 text-white shadow-sm transition hover:bg-rose-600"
            asChild
          >
            <a href="/pages/apply.html">Apply Now</a>
          </Button>
          <a
            href="https://retailmanager.merchant.haus"
            className="hidden md:block"
          >
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-slate-300 text-slate-600 hover:border-rose-400 hover:text-rose-500"
            >
              Login
            </Button>
          </a>
          <button
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:border-rose-300 hover:text-rose-500 lg:hidden"
            type="button"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
