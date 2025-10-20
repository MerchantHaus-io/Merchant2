import { Button } from "./ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#DC143C]/95 via-[#DC143C]/70 to-transparent" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr] items-start">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-white/70">Merchant2</p>
              <h2 className="text-3xl sm:text-4xl font-ubuntu font-bold">Payments made effortless</h2>
              <p className="text-white/80 max-w-xl">
                Launch faster with omnichannel acceptance, automation, and risk controls that stay in sync as you scale.
                Merchant2 unifies your hero onboarding, service discovery, and CTA flow in one cohesive experience.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Explore</h3>
              <ul className="space-y-3 text-white/85">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/pages/services.html" className="hover:text-white transition-colors">Services One-Pager</a></li>
                <li><a href="/pages/about.html" className="hover:text-white transition-colors">About Merchant2</a></li>
                <li><a href="/pages/contact.html" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <div className="space-y-2 text-white/80">
                <p>
                  Call <a href="tel:15056006042" className="font-semibold text-white hover:underline">1-505-600-6042</a>
                </p>
                <p>
                  Email <a href="mailto:support@merchanthaus.io" className="font-semibold text-white hover:underline">support@merchanthaus.io</a>
                </p>
                <p>1209 Mountain Road Pl NE Ste N, Albuquerque, NM 87110 US</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button size="lg" className="px-8 py-4 rounded-full bg-white text-[#DC143C] font-semibold shadow-md hover:bg-red-100 transition" asChild>
              <a href="/pages/contact.html">Contact Merchant2</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 rounded-full border-white text-white hover:bg-white/20" asChild>
              <a href="/pages/apply.html">Apply for an account</a>
            </Button>
          </div>

          <p className="text-center text-sm text-white/70">© {new Date().getFullYear()} Merchant2. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
