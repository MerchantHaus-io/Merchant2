import { KeyboardEvent, MouseEvent as ReactMouseEvent, useEffect, useMemo, useState } from "react";
import {
  Smartphone,
  ShieldAlert,
  CreditCard,
  Globe2,
  Lock,
  ShoppingCart,
} from "lucide-react";
import { ServiceDetailModal } from "./ServiceDetailModal";

export default function ImprovedPaymentSlider() {
  const services = useMemo(
    () => [
      {
        icon: Smartphone,
        name: "Mobile Payments",
        description: "Empower your customers with seamless and secure payment experiences on any device.",
        body: [
          "Our mobile solutions support digital wallets, QR codes, and in-app purchases so your customers can pay the way they prefer without friction.",
          "Certified hardware and SDKs keep data encrypted from tap to settlement while your teams manage devices and keys from one dashboard.",
        ],
        gradient: "from-[#DC143C] to-red-600",
        shadow: "0 25px 50px -20px rgba(220, 20, 60, 0.55)",
        features: ["Tap to Pay for Apple Pay and Google Pay", "Instant device provisioning", "Offline-ready transaction queueing"],
        benefits: ["Accelerate checkout anywhere", "Reduce hardware rollout time", "Deliver consistent mobile experiences"],
      },
      {
        icon: ShieldAlert,
        name: "Advanced Fraud Detection",
        description: "Protect revenue with adaptive, multi-layered fraud prevention driven by real-time intelligence.",
        body: [
          "Machine learning models and behavioral signals highlight risky activity instantly so you can take action before losses occur.",
          "Collaborative review tools and network alerts streamline investigations without slowing genuine customers.",
        ],
        gradient: "from-green-600 to-emerald-700",
        shadow: "0 25px 50px -20px rgba(16, 75, 50, 0.55)",
        features: ["Adaptive risk scoring", "Card network and consortium data", "Chargeback defense workflows"],
        benefits: ["Lower chargeback rates", "Block fraud in real time", "Maintain customer trust"],
      },
      {
        icon: CreditCard,
        name: "Modern POS Devices",
        description: "Upgrade your in-person checkout with sleek, powerful hardware built for speed and reliability.",
        body: [
          "Accept contactless, EMV chip, and magstripe payments through certified terminals managed from a single control center.",
          "Deploy kiosks, handhelds, and countertop devices with health monitoring, automatic updates, and remote support tools.",
        ],
        gradient: "from-[#A9A9A9] to-slate-700",
        shadow: "0 25px 50px -20px rgba(40, 40, 40, 0.6)",
        features: ["Centralized device management", "Omnichannel tokenization", "Remote diagnostics"],
        benefits: ["Deliver consistent in-store journeys", "Minimize downtime", "Launch new formats quickly"],
      },
      {
        icon: Globe2,
        name: "Global Payments",
        description: "Expand worldwide with cross-border acquiring, multi-currency settlement, and localized methods.",
        body: [
          "Accept cards, wallets, and alternative payments from any region with transparent currency conversion and local compliance.",
          "Unified reporting provides visibility into fees, funding, and authorizations across every market you serve.",
        ],
        gradient: "from-[#00CEDB] to-emerald-600",
        shadow: "0 25px 50px -20px rgba(0, 113, 139, 0.55)",
        features: ["Multi-currency presentation", "Localized payment options", "Global compliance guidance"],
        benefits: ["Reach new customers", "Maximize acceptance globally", "Simplify international operations"],
      },
      {
        icon: Lock,
        name: "Network Tokenization",
        description: "Enhance security and approvals by replacing sensitive card data with lifecycle-managed tokens.",
        body: [
          "Automatically provision network tokens that stay current through expirations and reissues to keep recurring revenue flowing.",
          "Reduce storage risk and simplify compliance with tokenized vaulting across channels and customer touchpoints.",
        ],
        gradient: "from-[#00CEDB] to-indigo-600",
        shadow: "0 25px 50px -20px rgba(20, 64, 139, 0.55)",
        features: ["Automatic card lifecycle management", "Vaultless recurring payments", "Token-level analytics"],
        benefits: ["Boost authorization rates", "Lower PCI scope", "Protect stored credentials"],
      },
      {
        icon: ShoppingCart,
        name: "Ecommerce Solutions",
        description: "Launch and grow online with flexible checkout, secure gateways, and frictionless shopping.",
        body: [
          "Customize hosted or embedded checkout flows that mirror your brand while keeping card data secured.",
          "Integrate with leading commerce platforms and manage subscriptions, invoices, and digital goods in one place.",
        ],
        gradient: "from-[#DC143C] to-purple-800",
        shadow: "0 25px 50px -20px rgba(112, 22, 120, 0.55)",
        features: ["Optimized checkout templates", "Headless commerce APIs", "Subscription and invoicing toolkit"],
        benefits: ["Increase conversion", "Ship faster with integrations", "Support every digital revenue stream"],
      },
    ],
    []
  );

  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleCardClick = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  useEffect(() => {
    const animatedElements = document.querySelectorAll<HTMLElement>(".mh-animate-on-scroll");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach(element => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleTiltMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const tiltIntensity = 15;

    const rotateY = (deltaX / centerX) * tiltIntensity;
    const rotateX = -(deltaY / centerY) * tiltIntensity;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;

    const icon = card.querySelector<HTMLElement>(".mh-icon-shadow");
    if (icon) {
      const shadowOffsetMultiplier = 1;
      const shadowOffsetX = -rotateY * shadowOffsetMultiplier;
      const shadowOffsetY = rotateX * shadowOffsetMultiplier;
      const shadowBlurLarge = 8 + (Math.abs(shadowOffsetX) + Math.abs(shadowOffsetY)) * 0.5;
      const shadowBlurSmall = 4 + (Math.abs(shadowOffsetX) + Math.abs(shadowOffsetY)) * 0.2;

      icon.style.transition = "transform 0.2s ease-out";
      icon.style.transform = "translateZ(40px) scale(1.25)";
      icon.style.filter = `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlurLarge}px rgb(0 0 0 / 0.55)) drop-shadow(${shadowOffsetX * 0.5}px ${shadowOffsetY * 0.5}px ${shadowBlurSmall}px rgb(0 0 0 / 0.65))`;
    }
  };

  const handleTiltLeave = (event: ReactMouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";

    const icon = card.querySelector<HTMLElement>(".mh-icon-shadow");
    if (icon) {
      icon.style.transition = "transform 0.3s ease-out, filter 0.3s ease-out";
      icon.style.transform = "translateZ(40px) scale(1)";
      icon.style.filter = "";
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>, service: typeof services[0]) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick(service);
    }
  };

  return (
    <section id="payments" className="py-20 relative overflow-hidden bg-[#111111] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24 mh-animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-ubuntu font-bold tracking-tight">
            MerchantHaus Core Services
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Innovative solutions designed to power modern commerce safely and efficiently across the globe.
          </p>
        </div>

        <div className="space-y-20 md:space-y-24">
          {services.map((service, index) => {
            const orientation = index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row";
            return (
              <div
                key={service.name}
                className={`mh-animate-on-scroll flex flex-col ${orientation} items-center justify-center gap-12 md:gap-16 cursor-pointer focus:outline-none`}
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick(service)}
                onKeyDown={event => handleKeyDown(event, service)}
              >
                <div
                  className={`mh-tilt-card flex-shrink-0 w-64 h-80 rounded-2xl bg-gradient-to-br ${service.gradient} p-8 flex items-center justify-center`}
                  style={{ boxShadow: service.shadow }}
                  onMouseMove={handleTiltMove}
                  onMouseLeave={handleTiltLeave}
                >
                  <service.icon className="w-20 h-20 text-white mh-icon-shadow" />
                </div>
                <div className="max-w-xl text-center md:text-left space-y-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">{service.name}</p>
                  <h3 className="text-2xl md:text-3xl font-ubuntu font-semibold">{service.description}</h3>
                  <div className="space-y-4 text-base text-white/75 leading-relaxed">
                    {service.body.map(paragraph => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 md:mt-32 mh-animate-on-scroll">
          <div className="max-w-4xl mx-auto bg-[#DC143C] text-white text-center py-12 px-6 rounded-2xl shadow-[0_35px_60px_-20px_rgba(220,20,60,0.6)]">
            <h3 className="text-3xl md:text-4xl font-bold font-ubuntu">Ready to Elevate Your Payments?</h3>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">
              Join the top merchants who trust MerchantHaus to deliver secure, reliable, and innovative payment solutions. Let&apos;s build the future of commerce together.
            </p>
            <button
              type="button"
              className="mt-8 inline-flex items-center justify-center bg-white text-[#DC143C] font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => handleCardClick(services[0])}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} />

      <style>{`
        .mh-tilt-card {
          transform-style: preserve-3d;
          transition: transform 0.2s ease-out;
        }

        .mh-icon-shadow {
          filter: drop-shadow(0 8px 6px rgb(0 0 0 / 0.55)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.65));
        }

        .mh-animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .mh-animate-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
