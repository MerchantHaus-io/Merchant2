import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import shieldLogo from "@/assets/RedShield.png";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <header className="bg-card/80 backdrop-blur-lg border border-border rounded-full shadow-lg">
          <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <img src={shieldLogo} alt="MerchantHaus Shield" className="h-8 w-8" />
              <h1 className="text-2xl font-ubuntu font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MerchantHaus
              </h1>
            </a>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4 text-sm font-inter">
                <a href="tel:15056006042" className="hover:text-accent transition-colors">
                  1-505-600-6042
                </a>
                <Button variant="outline" size="sm" className="rounded-full border-accent text-accent hover:bg-accent hover:text-white">
                  Contact Support
                </Button>
              </div>
              <Button size="sm" className="rounded-full bg-gradient-to-r from-primary to-[#f43f5e] hover:opacity-90">
                Get Started
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
