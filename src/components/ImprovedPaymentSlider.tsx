import { CSSProperties, MouseEvent } from "react";

const cardDetails = [
  {
    label: "Mobile Payments",
    description: "Tap-to-pay kits and handheld terminals that travel with your team.",
    accent: "var(--card-accent-1)",
    column: "1 / span 4",
    row: "1 / span 3",
  },
  {
    label: "Smart Routing",
    description: "Intelligently route every transaction for optimal approval rates.",
    accent: "var(--card-accent-2)",
    column: "5 / span 3",
    row: "1 / span 2",
  },
  {
    label: "Fraud Prevention",
    description: "Machine-learning risk scoring with adaptive rulesets.",
    accent: "var(--card-accent-3)",
    column: "8 / span 5",
    row: "1 / span 3",
  },
  {
    label: "Automation",
    description: "No-code workflows that reconcile, refund, and notify customers instantly.",
    accent: "var(--card-accent-4)",
    column: "1 / span 3",
    row: "4 / span 2",
  },
  {
    label: "Analytics",
    description: "Real-time dashboards with cohort comparisons and drill-downs.",
    accent: "var(--card-accent-5)",
    column: "4 / span 4",
    row: "3 / span 3",
  },
  {
    label: "Recurring Billing",
    description: "Subscription tools with dunning flows and automated reminders.",
    accent: "var(--card-accent-6)",
    column: "8 / span 3",
    row: "4 / span 2",
  },
  {
    label: "Chargeback Defense",
    description: "Win disputes with pre-built evidence packages and network alerts.",
    accent: "var(--card-accent-7)",
    column: "11 / span 2",
    row: "4 / span 3",
  },
  {
    label: "Embedded Finance",
    description: "Revenue-sharing programs and white-label portals for partners.",
    accent: "var(--card-accent-8)",
    column: "1 / span 5",
    row: "6 / span 3",
  },
  {
    label: "Unified Checkout",
    description: "Hosted flows that blend in-person, online, and invoicing journeys.",
    accent: "var(--card-accent-9)",
    column: "6 / span 4",
    row: "6 / span 2",
  },
  {
    label: "Settlement Ops",
    description: "Funding automation, fee management, and treasury controls.",
    accent: "var(--card-accent-10)",
    column: "10 / span 3",
    row: "6 / span 3",
  },
];

const ImprovedPaymentSlider = () => {
  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const percentX = (x / rect.width) * 2 - 1;
    const percentY = (y / rect.height) * 2 - 1;

    const rotateX = (-percentY * 12).toFixed(2);
    const rotateY = (percentX * 14).toFixed(2);

    card.style.setProperty("--tilt-x", `${rotateX}deg`);
    card.style.setProperty("--tilt-y", `${rotateY}deg`);
  };

  const handlePointerLeave = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <section id="services" className="relative min-h-[90vh] overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
      <div className="mx-auto mb-16 max-w-5xl px-6 text-center">
        <p
          className="font-semibold uppercase tracking-[0.45em] text-rose-200"
          style={{ fontSize: "clamp(0.75rem, 2vw, 0.95rem)" }}
        >
          MerchantHaus.io Services
        </p>
        <h2
          className="mx-auto mt-4 max-w-3xl text-balance font-ubuntu font-bold text-white drop-shadow-lg"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.1 }}
        >
          Built for scale across every payment touchpoint
        </h2>
        <p
          className="mx-auto mt-6 max-w-2xl text-white/85"
          style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)", lineHeight: 1.7 }}
        >
          Explore the capabilities that power MerchantHaus.io—from mobile checkout to risk automation. Tap any card to visit
          the full service catalog.
        </p>
      </div>

      <div className="relative">
        <div className="card-grid">
          {cardDetails.map(detail => {
            const style: CSSProperties = {
              ['--card-accent' as any]: detail.accent,
              ['--grid-column' as any]: detail.column,
              ['--grid-row' as any]: detail.row,
            };

            return (
              <a key={detail.label} href="/pages/services.html" className="group block h-full">
                <div
                  className="card"
                  style={style}
                  onMouseMove={handlePointerMove}
                  onMouseLeave={handlePointerLeave}
                >
                  <div className="card-sheen" aria-hidden="true" />
                  <div className="space-y-3">
                    <h3
                      className="font-ubuntu font-semibold text-white"
                      style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
                    >
                      {detail.label}
                    </h3>
                    <p
                      className="text-white/80"
                      style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)", lineHeight: 1.6 }}
                    >
                      {detail.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <style>{`
        .card-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: clamp(1rem, 2vw, 1.5rem);
          padding: 0 clamp(0rem, 4vw, 2rem);
        }

        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: clamp(1.25rem, 2.5vw, 1.75rem);
          border-radius: 1rem;
          background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          box-shadow: 0 25px 50px -20px rgba(15, 23, 42, 0.6);
          transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease, background 0.3s ease;
          transform-style: preserve-3d;
          will-change: transform;
          overflow: hidden;
        }

        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0));
          opacity: 0.8;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .card-sheen {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.35), transparent 55%);
          opacity: 0;
          transform: translateX(-40%);
          transition: transform 0.5s ease, opacity 0.3s ease;
          pointer-events: none;
        }

        .card:hover {
          background: linear-gradient(140deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.02)), var(--card-accent);
          transform: scale(1.1) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
          box-shadow: 0 32px 70px -30px rgba(0, 0, 0, 0.55);
        }

        .card:hover::before {
          opacity: 0.45;
        }

        .card:hover .card-sheen {
          opacity: 1;
          transform: translateX(0);
        }

        .group:focus-visible .card {
          outline: 3px solid var(--card-accent);
          outline-offset: 4px;
        }

        @media (min-width: 1024px) {
          .card-grid {
            grid-template-columns: repeat(12, minmax(0, 1fr));
            grid-auto-rows: minmax(110px, 1fr);
          }

          .card {
            grid-column: var(--grid-column);
            grid-row: var(--grid-row);
          }
        }
      `}</style>
    </section>
  );
};

export default ImprovedPaymentSlider;
