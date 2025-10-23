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
    <section className="py-12 overflow-hidden bg-background/50">
      <div className="relative">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background/50 to-transparent z-10 pointer-events-none" />
        
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background/50 to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={`/logos/${logo}`}
                alt={`Partner logo ${index}`}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
