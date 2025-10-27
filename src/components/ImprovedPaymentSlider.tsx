import { CSSProperties, MouseEvent } from "react";

const cardDetails = [
  {
    icon: "💳",
    label: "Omnichannel Payments",
    description: "Accept payments anywhere with seamless channel integration.",
    color: "red",
    glowColor: "rgba(239, 68, 68, 0.6)",
  },
  {
    icon: "🛡️",
    label: "Fraud Protection",
    description: "Real-time AI keeps your transactions secure.",
    color: "green",
    glowColor: "rgba(34, 197, 94, 0.6)",
  },
  {
    icon: "📈",
    label: "Data & Analytics",
    description: "Actionable insights for smarter business decisions.",
    color: "blue",
    glowColor: "rgba(59, 130, 246, 0.6)",
  },
  {
    icon: "💡",
    label: "Smart Billing",
    description: "Automate invoicing and recurring payments.",
    color: "gold",
    glowColor: "rgba(251, 191, 36, 0.6)",
  },
  {
    icon: "⚙️",
    label: "API Integrations",
    description: "Connect effortlessly with your tech stack.",
    color: "purple",
    glowColor: "rgba(168, 85, 247, 0.6)",
  },
  {
    icon: "📱",
    label: "Mobile Commerce",
    description: "Empower sales with fast, wallet-ready checkout.",
    color: "teal",
    glowColor: "rgba(20, 184, 166, 0.6)",
  },
  {
    icon: "🤝",
    label: "Partner Network",
    description: "Collaborate across trusted global ecosystems.",
    color: "pink",
    glowColor: "rgba(236, 72, 153, 0.6)",
  },
  {
    icon: "🔒",
    label: "Advanced Security",
    description: "End-to-end encryption and PCI-grade compliance.",
    color: "silver",
    glowColor: "rgba(148, 163, 184, 0.6)",
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

    const rotateX = (-percentY * 40).toFixed(2);
    const rotateY = (percentX * 40).toFixed(2);

    card.style.setProperty("--tilt-x", `${rotateX}deg`);
    card.style.setProperty("--tilt-y", `${rotateY}deg`);
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handlePointerLeave = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <section id="services" className="relative min-h-[90vh] overflow-hidden py-24" style={{ backgroundColor: '#0f0f10' }}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
      <div className="mx-auto mb-16 max-w-5xl px-6 text-center">
        <p
          className="font-semibold uppercase tracking-[0.45em]"
          style={{ fontSize: "clamp(0.75rem, 2vw, 0.95rem)", color: '#ccc' }}
        >
          MerchantHaus.io Services
        </p>
        <h2
          className="mx-auto mt-4 max-w-3xl text-balance font-ubuntu font-bold drop-shadow-lg"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.1, color: '#fff' }}
        >
          Built for scale across every payment touchpoint
        </h2>
        <p
          className="mx-auto mt-6 max-w-2xl"
          style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)", lineHeight: 1.7, color: '#ccc' }}
        >
          Explore the capabilities that power MerchantHaus.io—from mobile checkout to risk automation.
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="card-grid">
          {cardDetails.map(detail => {
            const style: CSSProperties = {
              ['--glow-color' as any]: detail.glowColor,
            };

            return (
              <div
                key={detail.label}
                className={`card card-${detail.color}`}
                style={style}
                onMouseMove={handlePointerMove}
                onMouseLeave={handlePointerLeave}
              >
                <div className="card-glow" aria-hidden="true" />
                <div className="card-icon">{detail.icon}</div>
                <h3 className="card-title">{detail.label}</h3>
                <p className="card-description">{detail.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          perspective: 1000px;
        }

        .card {
          position: relative;
          width: 340px;
          max-width: 100%;
          padding: 2rem;
          border-radius: 1rem;
          background: #2a2a2a;
          color: #fff;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          transform-style: preserve-3d;
          will-change: transform;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .card-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--glow-color, rgba(255, 255, 255, 0.3)), transparent 70%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          top: var(--mouse-y, 50%);
          left: var(--mouse-x, 50%);
          transform: translate(-50%, -50%);
        }

        .card:hover {
          transform: scale(1.1) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
          box-shadow: 0 0 40px var(--glow-color, rgba(255, 255, 255, 0.5));
        }

        .card:hover .card-glow {
          opacity: 1;
        }

        .card:hover .card-icon {
          transform: scale(1.2) translateY(-5px);
        }

        .card:hover .card-title,
        .card:hover .card-description {
          transform: scale(1.05);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
          transition: transform 0.3s ease;
        }

        .card-title {
          font-family: 'Ubuntu', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.75rem;
          transition: transform 0.3s ease;
        }

        .card-description {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          line-height: 1.6;
          color: #ccc;
          transition: transform 0.3s ease;
        }

        .card-red:hover {
          background: linear-gradient(135deg, #2a2a2a 0%, rgba(239, 68, 68, 0.2) 100%);
        }

        .card-green:hover {
          background: linear-gradient(135deg, #2a2a2a 0%, rgba(34, 197, 94, 0.2) 100%);
        }

        .card-blue:hover {
          background: linear-gradient(135deg, #2a2a2a 0%, rgba(59, 130, 246, 0.2) 100%);
        }

        .card-gold:hover {
          background: linear-gradient(135deg, #2a2a2a 0%, rgba(251, 191, 36, 0.2) 100%);
        }

        .card-purple:hover {
          background: linear-gradient(135deg, #2a2a2a 0%, rgba(168, 85, 247, 0.2) 100%);
        }

        .card-teal:hover {
          background: linear-gradient(135deg, #2a2a2a 0%, rgba(20, 184, 166, 0.2) 100%);
        }

        .card-pink:hover {
          background: linear-gradient(135deg, #2a2a2a 0%, rgba(236, 72, 153, 0.2) 100%);
        }

        .card-silver:hover {
          background: linear-gradient(135deg, #2a2a2a 0%, rgba(148, 163, 184, 0.2) 100%);
        }

        @media (max-width: 768px) {
          .card-grid {
            grid-template-columns: 1fr;
          }
          
          .card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ImprovedPaymentSlider;
