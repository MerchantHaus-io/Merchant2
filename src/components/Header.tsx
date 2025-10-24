import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import shieldLogo from "@/assets/RedShield.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blogs/vamp" },
];

const linkClasses =
  "hover:text-accent transition-colors";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <header className="bg-card/80 backdrop-blur-lg border border-border rounded-full shadow-lg">
          <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
            <div className="flex items-center gap-10">
              <Link to="/" className="flex items-center gap-3 group">
                <img src={shieldLogo} alt="MerchantHaus Shield" className="h-8 w-8" />
                <h1 className="text-2xl font-ubuntu font-semibold brand-mark">
                  MerchantHaus.io
                </h1>
              </Link>
              <nav className="hidden lg:flex space-x-6 text-sm font-medium text-foreground/85">
                {navItems.map(({ label, to }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `${linkClasses} ${isActive ? "text-accent" : ""}`.trim()
                    }
                  >
                    {label}
                  </NavLink>
                ))}
                <a href="mailto:support@merchanthaus.io" className={linkClasses}>
                  Contact
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4 text-sm font-inter">
                <a href="tel:15056006042" className="hover:text-accent transition-colors">
                  1-505-600-6042
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-accent text-accent hover:bg-accent hover:text-white"
                  asChild
                >
                  <a href="mailto:support@merchanthaus.io">Contact Support</a>
                </Button>
              </div>
              <Button size="sm" className="rounded-full bg-gradient-to-r from-primary to-[#f43f5e] hover:opacity-90" asChild>
                <a href="/pages/apply.html">Apply Now</a>
              </Button>
              <a href="https://retailmanager.merchant.haus" className="hidden sm:block">
                <Button variant="outline" size="sm" className="rounded-full border-accent text-accent hover:bg-accent hover:text-white">
                  Login
                </Button>
              </a>
            </div>
          </div>
        </header>
        <button className="md:hidden p-3 rounded-full bg-card/50 backdrop-blur-sm text-foreground absolute left-6 top-full translate-y-3 z-[60] hover:bg-card/70 transition-colors shadow-lg">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </button>
      </div>
    </div>
  );
};
