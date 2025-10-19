import { useMemo, useState } from "react";
import {
  Smartphone,
  Shuffle,
  FileText,
  Repeat,
  Lock,
  BarChart2,
  Cpu,
  Landmark,
  ShieldAlert,
  Globe2,
} from "lucide-react";
import { ServiceDetailModal } from "./ServiceDetailModal";

export default function ImprovedPaymentSlider() {
  const services = useMemo(
    () => [
      {
        icon: Smartphone,
        name: "Mobile & Contactless",
        description: "Take payments anywhere, from any device.",
        position: 0,
        features: ["NFC payments", "Mobile wallet integration", "Tap to pay", "QR code payments"],
        benefits: ["Faster checkout", "Improved customer experience", "Reduced contact", "Modern payment methods"]
      },
      {
        icon: Shuffle,
        name: "Omnichannel Payments",
        description: "Unified payment experiences across every channel.",
        position: 1,
        features: ["In-store, online, and mobile", "Single integration", "Consistent reporting", "Unified customer profiles"],
        benefits: ["Seamless customer journey", "Simplified operations", "Better insights", "Increased loyalty"]
      },
      {
        icon: FileText,
        name: "Payment Flexibility",
        description: "Every way your customers want to pay.",
        position: 2,
        features: ["Credit & debit cards", "ACH transfers", "Digital wallets", "Buy now, pay later"],
        benefits: ["Higher conversion rates", "Broader market reach", "Customer convenience", "Competitive advantage"]
      },
      {
        icon: Repeat,
        name: "Subscriptions & Recurring Billing",
        description: "Predictable revenue, simplified.",
        position: 3,
        features: ["Automated billing", "Flexible pricing models", "Dunning management", "Usage-based billing"],
        benefits: ["Steady cash flow", "Reduced churn", "Lower admin costs", "Scalable growth"]
      },
      {
        icon: Lock,
        name: "Fraud & Security",
        description: "Advanced protection built into every transaction.",
        position: 4,
        features: ["Real-time fraud detection", "3D Secure authentication", "PCI compliance", "Tokenization"],
        benefits: ["Reduced chargebacks", "Protected reputation", "Customer trust", "Regulatory compliance"]
      },
      {
        icon: BarChart2,
        name: "Reporting & Insights",
        description: "Clear data for smarter decisions.",
        position: 5,
        features: ["Real-time dashboards", "Custom reports", "Transaction analytics", "Revenue forecasting"],
        benefits: ["Data-driven decisions", "Identify trends", "Optimize performance", "Better forecasting"]
      },
      {
        icon: Cpu,
        name: "Modern POS",
        description: "Smart terminals and software that adapt to your business.",
        position: 6,
        features: ["Cloud-based system", "Inventory management", "Staff management", "Offline mode"],
        benefits: ["Flexible operations", "Real-time updates", "Reduced downtime", "Scalable infrastructure"]
      },
      {
        icon: Landmark,
        name: "Integrations",
        description: "Works with the tools you already trust.",
        position: 7,
        features: ["E-commerce platforms", "Accounting software", "CRM systems", "Custom API access"],
        benefits: ["Streamlined workflows", "Reduced manual work", "Better data sync", "Faster implementation"]
      },
      {
        icon: ShieldAlert,
        name: "Developer Tools",
        description: "Build with confidence.",
        position: 8,
        features: ["RESTful APIs", "SDKs & libraries", "Sandbox environment", "Comprehensive documentation"],
        benefits: ["Faster development", "Custom solutions", "Easy testing", "Ongoing support"]
      },
      {
        icon: Globe2,
        name: "Global Reach",
        description: "Scale confidently across borders.",
        position: 9,
        features: ["Multi-currency support", "Local payment methods", "Global compliance", "Currency conversion"],
        benefits: ["Enter new markets", "Local customer experience", "Risk mitigation", "Simplified expansion"]
      },
    ],
    []
  );

  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleCardClick = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  return (
    <section id="payments" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-ubuntu font-bold mb-4">
          Services
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-5 gap-6 auto-rows-fr">
          {services.map((service) => (
            <div
              key={service.name}
              className="service-card"
              onClick={() => handleCardClick(service)}
            >
              <div className="service-card-content">
                <div className="service-icon-wrap">
                  <service.icon className="service-icon" />
                </div>
                <span className="service-name">{service.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />

      <style>{`
        .service-card {
          aspect-ratio: 4 / 5;
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          cursor: pointer;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: scale(1.08) perspective(1000px) rotateX(2deg) rotateY(-2deg);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }

        .service-card:hover .service-card-content {
          background: linear-gradient(135deg, #dc143c 0%, #8b0000 100%);
        }

        .service-card-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          transition: background 0.3s ease;
        }

        .service-icon-wrap {
          width: 4rem;
          height: 4rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .service-icon {
          width: 2rem;
          height: 2rem;
          color: white;
        }

        .service-name {
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
          text-align: center;
          font-family: 'Inter', sans-serif;
          line-height: 1.3;
        }

        @media (max-width: 1279px) {
          .service-card {
            aspect-ratio: 3 / 4;
          }
        }

        @media (max-width: 1023px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 767px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
          .service-card {
            aspect-ratio: 1;
          }
          .service-name {
            font-size: 0.8rem;
          }
          .service-icon-wrap {
            width: 3rem;
            height: 3rem;
          }
          .service-icon {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
