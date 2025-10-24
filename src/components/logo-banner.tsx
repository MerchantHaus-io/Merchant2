const LogoBanner = () => {
  const logos = [
    'bigcommerce.webp',
    'clover.webp',
    'clovernet.svg',
    'freshbooks.webp',
    'hubspot.webp',
    'keap.webp',
    'lightspeed.webp',
    'magento.webp',
    'mastercard.webp',
    'memberpress.svg',
    'ncr.webp',
    'quickbooks.webp',
    'salesforce.webp',
    'squarespace.webp',
    'vend.webp',
    'visa.webp',
    'wix.webp',
    'woocommerce.webp',
    'zoho_crm.webp',
  ];

  return (
    <div
      className="marquee-wrapper relative overflow-hidden rounded-3xl bg-background/80 py-[clamp(2.5rem,5vw,4rem)] shadow-sm"
      aria-label="MerchantHaus ecosystem partners"
    >
      <div className="px-10">
        <div className="marquee-track">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="marquee-item opacity-70 transition duration-300 hover:opacity-100"
            >
              <img
                src={`/logos/${logo}`}
                alt={`Partner logo ${index + 1}`}
                className="h-[clamp(2.25rem,4vw,3rem)] w-auto object-contain"
                loading={index < logos.length ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoBanner;
