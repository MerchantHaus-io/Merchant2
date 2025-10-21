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
      className="py-12 sm:py-16"
      aria-label="Trusted integrations and technology partners"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Integrations & Partnerships
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
          Plug into the platforms your business already uses
        </h2>
      </div>
      <div className="marquee-wrapper mt-10">
        <div className="marquee-track">
          {[0, 1].map((loopIndex) =>
            logos.map((logo) => (
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
                  className="h-20 w-auto object-contain"
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
