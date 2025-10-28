import { CSSProperties, MouseEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CreditCard,
  Globe2,
  Layers,
  Lock,
  ShieldCheck,
  Smartphone,
  WalletCards,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type CardDetail = {
  icon: LucideIcon;
  title: string;
  description: string;
  glowColor: string;
  accentHex: string;
  accentRgb: string;
};

type CardCustomStyle = CSSProperties & {
  "--glow-color": string;
  "--accent-hex": string;
  "--accent-rgb": string;
};

const cardDetails: CardDetail[] = [
  {
    icon: CreditCard,
    title: "Omnichannel Payments",
    description: "Unify in-store, online, and mobile acceptance with a single payment fabric.",
    glowColor: "rgba(239, 68, 68, 0.55)",
    accentHex: "#ef4444",
    accentRgb: "239, 68, 68",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Fraud Defense",
    description: "Machine learning and network intelligence block suspicious activity in real time.",
    glowColor: "rgba(34, 197, 94, 0.55)",
    accentHex: "#22c55e",
    accentRgb: "34, 197, 94",
  },
  {
    icon: WalletCards,
    title: "Tokenized Checkout",
    description: "Lifecycle-managed network tokens raise approval rates and protect stored cards.",
    glowColor: "rgba(14, 165, 233, 0.6)",
    accentHex: "#0ea5e9",
    accentRgb: "14, 165, 233",
  },
  {
    icon: Smartphone,
    title: "Mobile Commerce",
    description: "Fast, wallet-ready experiences keep customers converting on any device.",
    glowColor: "rgba(59, 130, 246, 0.5)",
    accentHex: "#3b82f6",
    accentRgb: "59, 130, 246",
  },
  {
    icon: Workflow,
    title: "Subscription Automation",
    description: "Flexible billing flows recover revenue with intelligent retries and dunning.",
    glowColor: "rgba(251, 191, 36, 0.55)",
    accentHex: "#fbbf24",
    accentRgb: "251, 191, 36",
  },
  {
    icon: Globe2,
    title: "Global Acceptance",
    description: "Localized methods, multi-currency settlement, and transparent cross-border fees.",
    glowColor: "rgba(20, 184, 166, 0.55)",
    accentHex: "#14b8a6",
    accentRgb: "20, 184, 166",
  },
  {
    icon: Layers,
    title: "Data & Insights",
    description: "Payment intelligence surfaces trends and KPIs that accelerate decision making.",
    glowColor: "rgba(168, 85, 247, 0.55)",
    accentHex: "#a855f7",
    accentRgb: "168, 85, 247",
  },
  {
    icon: Lock,
    title: "Compliance & Security",
    description: "End-to-end encryption, PCI coverage, and governance to safeguard every touchpoint.",
    glowColor: "rgba(148, 163, 184, 0.55)",
    accentHex: "#94a3b8",
    accentRgb: "148, 163, 184",
  },
];

const getCardsPerView = (width: number) => {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
};

const ImprovedPaymentSlider = () => {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateCardsPerView = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const slides = useMemo(() => {
    const groups: CardDetail[][] = [];
    for (let index = 0; index < cardDetails.length; index += cardsPerView) {
      groups.push(cardDetails.slice(index, index + cardsPerView));
    }
    return groups;
  }, [cardsPerView]);

  useEffect(() => {
    if (!slides.length) return;
    setCurrentSlide(prev => Math.min(prev, slides.length - 1));
  }, [slides]);

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const percentX = x / rect.width;
    const percentY = y / rect.height;

    const tiltX = (0.5 - percentY) * 18;
    const tiltY = (percentX - 0.5) * 18;

    card.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handlePointerLeave = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  const goToPrevious = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const trackStyle: CSSProperties = {
    transform: `translateX(-${currentSlide * 100}%)`,
  };

  return (
    <section id="services" className="relative overflow-hidden bg-[#0b0b0d] py-24 text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/30 to-black/70" />

      <div className="mx-auto mb-16 max-w-5xl px-6 text-center">
        <p className="font-semibold uppercase tracking-[0.45em] text-white/60">
          MerchantHaus.io Services
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-ubuntu text-balance text-4xl font-bold leading-tight md:text-5xl">
          Built for scale across every payment touchpoint
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
          Explore the capabilities that power MerchantHaus.io—from mobile checkout to global risk automation.
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative rounded-3xl border border-white/5 bg-black/20 p-6 shadow-[0_45px_90px_-50px_rgba(15,15,15,0.85)] backdrop-blur">
          <div className="absolute -top-8 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#dc143c]/40 via-white/10 to-[#6366f1]/30 blur-2xl" />

          <div className="slider-viewport">
            <div className="slider-track" style={trackStyle}>
              {slides.map((group, index) => (
                <div
                  key={group.map(card => card.title).join("-")}
                  className="slider-slide"
                  style={{
                    gridTemplateColumns: `repeat(${group.length}, minmax(0, 1fr))`,
                  }}
                  aria-hidden={currentSlide !== index}
                >
                  {group.map(card => {
                    const Icon = card.icon;
                    const cardStyle: CardCustomStyle = {
                      "--glow-color": card.glowColor,
                      "--accent-hex": card.accentHex,
                      "--accent-rgb": card.accentRgb,
                    };

                    return (
                      <div key={card.title} className="card-wrapper">
                        <div
                          className="service-card"
                          style={cardStyle}
                          onMouseMove={handlePointerMove}
                          onMouseLeave={handlePointerLeave}
                        >
                          <div className="card-glow" aria-hidden="true" />
                          <div className="card-outline" aria-hidden="true" />
                          <div className="card-icon">
                            <span className="icon-sheen" aria-hidden="true" />
                            <Icon className="h-14 w-14" strokeWidth={1.6} />
                          </div>
                          <h3 className="card-title">{card.title}</h3>
                          <p className="card-description">{card.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="slider-controls">
            <button
              type="button"
              className="slider-button"
              onClick={goToPrevious}
              aria-label="Show previous services"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="slider-dots" role="tablist" aria-label="Service group navigation">
              {slides.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={currentSlide === index}
                  aria-label={`Show service group ${index + 1}`}
                  className={`slider-dot ${currentSlide === index ? "is-active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="slider-button"
              onClick={goToNext}
              aria-label="Show next services"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .slider-viewport {
          overflow: hidden;
          padding-block: 1rem;
        }

        .slider-track {
          display: flex;
          transition: transform 0.65s cubic-bezier(0.22, 0.61, 0.36, 1);
        }

        .slider-slide {
          flex: 0 0 100%;
          display: grid;
          gap: clamp(1.5rem, 3vw, 2.5rem);
          align-items: stretch;
        }

        .card-wrapper {
          display: flex;
          align-items: stretch;
          justify-content: center;
        }

        .service-card {
          position: relative;
          width: min(100%, 360px);
          min-height: 360px;
          padding: clamp(2rem, 3vw, 2.5rem);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(20, 20, 22, 0.95), rgba(12, 12, 14, 0.92));
          border: 1px solid rgba(255, 255, 255, 0.04);
          box-shadow: 0 35px 85px -45px rgba(10, 10, 11, 0.8);
          overflow: visible;
          transform: perspective(1200px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale3d(1, 1, 1);
          transform-style: preserve-3d;
          transition: transform 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease;
        }

        .service-card:hover {
          transform: perspective(1200px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale3d(1.06, 1.06, 1.06);
          box-shadow: 0 45px 120px -40px var(--glow-color);
          border-color: rgba(var(--accent-rgb), 0.55);
        }

        .card-outline {
          position: absolute;
          inset: 1px;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          pointer-events: none;
        }

        .card-glow {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--glow-color), transparent 55%);
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
          filter: saturate(120%);
        }

        .service-card:hover .card-glow {
          opacity: 1;
        }

        .card-icon {
          position: relative;
          width: 96px;
          height: 96px;
          margin-bottom: 1.75rem;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent 60%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
          border: 1px solid rgba(var(--accent-rgb), 0.45);
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.08), 0 15px 30px -25px rgba(0, 0, 0, 0.6);
          transform: translateZ(45px);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          color: var(--accent-hex);
        }

        .service-card:hover .card-icon {
          transform: translateZ(55px) scale(1.08);
          box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.1), 0 20px 30px -18px var(--glow-color);
        }

        .icon-sheen {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .service-card:hover .icon-sheen {
          opacity: 1;
        }

        .card-title {
          font-family: "Ubuntu", sans-serif;
          font-size: clamp(1.35rem, 2.5vw, 1.65rem);
          font-weight: 600;
          letter-spacing: 0.01em;
          margin-bottom: 0.85rem;
        }

        .card-description {
          font-size: clamp(1rem, 2vw, 1.1rem);
          line-height: 1.7;
          color: rgba(226, 232, 240, 0.85);
        }

        .slider-controls {
          margin-top: clamp(1.75rem, 3vw, 2.5rem);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .slider-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(17, 24, 39, 0.65);
          color: rgba(255, 255, 255, 0.85);
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        .slider-button:hover {
          transform: translateY(-2px) scale(1.05);
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(30, 41, 59, 0.75);
        }

        .slider-dots {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }

        .slider-dot {
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background: rgba(148, 163, 184, 0.35);
          border: none;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .slider-dot.is-active {
          transform: scale(1.45);
          background: linear-gradient(135deg, rgba(220, 20, 60, 0.9), rgba(99, 102, 241, 0.85));
        }

        .slider-dot:hover {
          background: rgba(226, 232, 240, 0.6);
        }

        @media (max-width: 1023px) {
          .service-card {
            min-height: 340px;
          }
        }

        @media (max-width: 639px) {
          .slider-slide {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }

          .service-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ImprovedPaymentSlider;
