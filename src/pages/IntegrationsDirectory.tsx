import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const integrations = [
  { name: "Salesforce", url: "https://www.salesforce.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=Salesforce" },
  { name: "QuickBooks", url: "https://quickbooks.intuit.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=QuickBooks" },
  { name: "HubSpot", url: "https://www.hubspot.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=HubSpot" },
  { name: "Vend", url: "https://www.vendhq.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=Vend" },
  { name: "Squarespace", url: "https://www.squarespace.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=Squarespace" },
  { name: "MemberPress", url: "https://memberpress.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=MemberPress" },
  { name: "WooCommerce", url: "https://woocommerce.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=WooCommerce" },
  { name: "Zoho CRM", url: "https://www.zoho.com/crm/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=Zoho" },
  { name: "Lightspeed", url: "https://www.lightspeedhq.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=Lightspeed" },
  { name: "Wix", url: "https://www.wix.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=Wix" },
  { name: "Keap", url: "https://keap.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=Keap" },
  { name: "Clover", url: "https://www.clover.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=Clover" },
  { name: "FreshBooks", url: "https://www.freshbooks.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=FreshBooks" },
  { name: "Magento", url: "https://magento.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=Magento" },
  { name: "BigCommerce", url: "https://www.bigcommerce.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=BigCommerce" },
  { name: "NCR", url: "https://www.ncr.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=NCR" },
  { name: "Visa", url: "https://www.visa.com/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=Visa" },
  { name: "Mastercard", url: "https://www.mastercard.us/", logo: "https://placehold.co/100x40/0f0f10/ffffff?text=Mastercard" },
];

const IntegrationsDirectory = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 240);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      <main className="relative overflow-hidden py-20">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, hsl(348 83% 47% / 0.18), transparent 45%), radial-gradient(circle at 80% 30%, hsl(174 72% 56% / 0.12), transparent 40%), radial-gradient(circle at 50% 80%, hsl(330 81% 60% / 0.18), transparent 45%)",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
          <section className="text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Integrate with confidence
            </span>
            <h1 className="mt-6 text-4xl font-ubuntu font-bold leading-tight sm:text-5xl">
              Partner Integrations Directory
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Connect MerchantHaus to the world&apos;s most trusted commerce, finance, and operations platforms so your teams can move faster together.
            </p>
          </section>

          <section>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {integrations.map((integration) => (
                <a
                  key={integration.name}
                  href={integration.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col items-center justify-center rounded-2xl border border-white/5 bg-[#1f1f1f] p-8 text-center shadow-lg transition duration-300 ease-out hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl"
                >
                  <div className="flex h-12 w-32 items-center justify-center">
                    <img
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      loading="lazy"
                      className="max-h-full w-full object-contain opacity-80 transition duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <p className="mt-6 font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    {integration.name}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-r from-primary to-secondary p-0.5 shadow-2xl">
              <div className="rounded-[22px] bg-background/95 px-8 py-12 text-center backdrop-blur">
                <h2 className="text-3xl font-ubuntu font-semibold">Ready to connect your business?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Start a free account today and sync your storefronts, CRMs, and accounting tools without the headaches.
                </p>
                <a
                  href="/pages/apply.html"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
                >
                  Start Your Free Account
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />

      <button
        type="button"
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all duration-200",
          showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default IntegrationsDirectory;
