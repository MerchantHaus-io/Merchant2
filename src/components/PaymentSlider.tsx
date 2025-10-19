import { useEffect, useMemo, useState } from "react";
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

/**
 * ImprovedPaymentSlider
 *
 * This component implements a 3D carousel with a single set of cards that
 * rotate around a central axis. As cards move to the far side of the
 * carousel they automatically drop behind the central shield (lower z‑index)
 * and then return to the front when they come back around. The rotation
 * advances automatically on a timer and can also be controlled by clicking
 * any card. Cards animate smoothly when the active index changes. There is
 * no reliance on duplicated markup or brittle CSS selectors; z‑ordering is
 * computed dynamically in JavaScript based off of each card’s current
 * rotational position.
 */
export default function ImprovedPaymentSlider() {
  // Define the services to show in the carousel. Each entry contains an icon,
  // title, description and some optional features/benefits. You can edit
  // these values to customise the slider for your own use‑case.
  const services = useMemo(
    () => [
      {
        icon: Smartphone,
        name: "Mobile & Contactless",
        description: "Take payments anywhere, from any device.",
      },
      {
        icon: Shuffle,
        name: "Omnichannel Payments",
        description:
          "Unified payment experiences across every channel.",
      },
      {
        icon: FileText,
        name: "Payment Flexibility",
        description: "Every way your customers want to pay.",
      },
      {
        icon: Repeat,
        name: "Subscriptions & Recurring Billing",
        description: "Predictable revenue, simplified.",
      },
      {
        icon: Lock,
        name: "Fraud & Security",
        description: "Advanced protection built into every transaction.",
      },
      {
        icon: BarChart2,
        name: "Reporting & Insights",
        description: "Clear data for smarter decisions.",
      },
      {
        icon: Cpu,
        name: "Modern POS",
        description: "Smart terminals and software that adapt to your business.",
      },
      {
        icon: Landmark,
        name: "Integrations",
        description: "Works with the tools you already trust.",
      },
      {
        icon: ShieldAlert,
        name: "Developer Tools",
        description: "Build with confidence.",
      },
      {
        icon: Globe2,
        name: "Global Reach",
        description: "Scale confidently across borders.",
      },
    ],
    []
  );

  // The current index of the item that is considered to be at the front of
  // the carousel. Updating this value triggers a re‑render and repositions
  // every card accordingly.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Compute per‑card transforms and z‑index values. We calculate these
  // properties in JS rather than CSS so we can assign z‑index based on the
  // card’s rotational position. Cards on the front half of the carousel get
  // higher z‑index values than those on the back half.
  const cardStyles = useMemo(() => {
    const quantity = services.length;
    const angle = 360 / quantity;
    const radius = 380; // distance from the centre; adjust to tweak layout
    return services.map((_, idx) => {
      // Determine how many steps this card is offset from the active index.
      let offset = idx - currentIndex;
      // Wrap negative offsets by adding the quantity; ensures values in [0, qty)
      if (offset < 0) offset += quantity;
      const rotation = offset * angle;
      // Convert rotation to radians for z‑index calculation
      const rad = ((rotation + 90) * Math.PI) / 180;
      // zIndex oscillates between positive and negative; the front half (0‑180°)
      // yields positive cos values which we translate to larger z‑index.
      const zIndex = Math.round(Math.cos(rad) * 100);
      return {
        transform: `rotateY(${rotation}deg) translateZ(${radius}px)`,
        zIndex,
      };
    });
  }, [services.length, currentIndex]);

  // Auto‑advance the carousel every 8 seconds. When a user clicks on a card
  // the index updates immediately and the interval continues from the new
  // position. You can adjust the delay by editing the timeout duration.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [services.length]);

  // Handle clicking on a card. We update the current index so that the
  // clicked item becomes the new front card. This causes all cards to
  // reposition around the carousel. You could also add smooth animation here
  // using a state flag and CSS transitions.
  const handleCardClick = (clickedIndex: number) => {
    setCurrentIndex(clickedIndex);
  };

  return (
    <section id="payments" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-ubuntu font-bold mb-4">
          Services
        </h2>
      </div>

      <div className="banner-container">
        <div className="center-shield">
          {/* Replace with your own logo or shield image */}
          <div className="shield-placeholder" />
        </div>
        <div
          className="slider-3d"
          style={{ ['--quantity' as any]: services.length } as any}
        >
          {services.map((service, idx) => {
            const { transform, zIndex } = cardStyles[idx];
            return (
              <div
                key={service.name}
                className="slider-item"
                style={{ transform, zIndex }}
                onClick={() => handleCardClick(idx)}
              >
                <div className="service-card">
                  <div className="service-card-front">
                    <div className="service-image">
                      <div className="service-overlay">
                        <div className="service-icon-wrap">
                          <service.icon className="service-icon" />
                        </div>
                        <span className="service-name">{service.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scoped styles for the slider. We reuse many of the values from the
          original slider but drop duplicated layers and static hiding rules. */}
      <style>{`
        .banner-container {
          width: 100%;
          min-height: clamp(28rem, 70vh, 40rem);
          text-align: center;
          overflow: hidden;
          position: relative;
          perspective: 1500px;
        }

        .center-shield {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          z-index: 5;
          pointer-events: none;
        }

        .shield-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(220, 20, 60, 0.8), rgba(0,0,0,0) 70%);
          filter: blur(40px);
        }

        .slider-3d {
          position: absolute;
          width: 160px;
          height: 200px;
          top: 10%;
          left: calc(50% - 80px);
          transform-style: preserve-3d;
          transform: perspective(1500px) rotateX(-18deg);
        }

        .slider-item {
          position: absolute;
          inset: 0;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), z-index 0.8s;
        }

        .service-card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .service-card-front {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.5);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .service-image {
          width: 100%;
          height: 100%;
          position: relative;
          background: linear-gradient(135deg,
            hsl(0 0% 100% / 0.2) 0%,
            hsl(174 72% 56% / 0.4) 25%,
            hsl(var(--secondary, 220 14% 45%) / 0.7) 50%,
            hsl(var(--primary, 220 90% 55%) / 0.5) 75%,
            hsl(0 0% 100% / 0.15) 100%
          );
        }

        .service-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1rem;
        }

        .service-icon-wrap {
          width: 4rem;
          height: 4rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
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
        }

        @media (max-width: 1023px) {
          .center-shield {
            width: 440px;
            height: 440px;
          }
          .slider-3d {
            width: 140px;
            height: 180px;
            left: calc(50% - 70px);
          }
        }

        @media (max-width: 767px) {
          .banner-container {
            min-height: 26rem;
          }
          .center-shield {
            width: 320px;
            height: 320px;
          }
          .slider-3d {
            width: 110px;
            height: 150px;
            left: calc(50% - 55px);
          }
        }
      `}</style>
    </section>
  );
}