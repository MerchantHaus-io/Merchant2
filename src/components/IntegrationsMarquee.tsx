import freshbooksLogo from "@/assets/integrations/freshbooks.webp";
import hubspotLogo from "@/assets/integrations/hubspot.webp";
import keapLogo from "@/assets/integrations/keap.webp";
import lightspeedLogo from "@/assets/integrations/lightspeed.webp";
import magentoLogo from "@/assets/integrations/magento.webp";
import ncrLogo from "@/assets/integrations/ncr.webp";
import quickbooksLogo from "@/assets/integrations/quickbooks.webp";
import salesforceLogo from "@/assets/integrations/salesforce.webp";
import squarespaceLogo from "@/assets/integrations/squarespace.webp";
import visaLogo from "@/assets/integrations/visa.webp";

const logos = [
  { src: freshbooksLogo, alt: "FreshBooks" },
  { src: hubspotLogo, alt: "HubSpot" },
  { src: keapLogo, alt: "Keap" },
  { src: lightspeedLogo, alt: "Lightspeed" },
  { src: magentoLogo, alt: "Magento" },
  { src: ncrLogo, alt: "NCR" },
  { src: quickbooksLogo, alt: "QuickBooks" },
  { src: salesforceLogo, alt: "Salesforce" },
  { src: squarespaceLogo, alt: "Squarespace" },
  { src: visaLogo, alt: "Visa" },
];

export const IntegrationsMarquee = () => {
  return (
    <section
      className="flex flex-col items-center gap-10 rounded-3xl bg-card/60 px-6 py-12 text-center shadow-sm backdrop-blur sm:py-16"
      aria-label="Trusted integrations and technology partners"
    >
      <div className="max-w-4xl space-y-3">
        <p
          className="font-semibold uppercase tracking-[0.45em] text-muted-foreground"
          style={{ fontSize: "clamp(0.7rem, 1.8vw, 0.85rem)" }}
        >
          Integrations & Partnerships
        </p>
        <h2
          className="text-balance font-ubuntu font-bold text-foreground"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}
        >
          Plug into the platforms your business already uses
        </h2>
        <p
          className="text-muted-foreground"
          style={{ fontSize: "clamp(0.95rem, 2.1vw, 1.1rem)", lineHeight: "1.7" }}
        >
          MerchantHaus connects directly with the CRMs, ERPs, and ecommerce suites powering your operations so you can launch
          new payment experiences without rebuilding your stack.
        </p>
      </div>
      <div className="marquee-wrapper w-full">
        <div className="marquee-track">
          {[0, 1].map(loopIndex =>
            logos.map(logo => (
              <div
                className="marquee-item"
                key={`${logo.alt}-${loopIndex}`}
                aria-hidden={loopIndex === 1 ? true : undefined}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  height={96}
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsMarquee;
