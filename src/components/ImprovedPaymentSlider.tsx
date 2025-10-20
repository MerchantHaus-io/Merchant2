import { useEffect, useRef } from "react";

const services = [
  { label: "Mobile Payments", background: "#7400B8", text: "#ffffff" },
  { label: "Smart Routing", background: "#5390D9", text: "#ffffff" },
  { label: "Fraud Prevention", background: "#80FFDB", text: "#1e293b" },
  { label: "Automation", background: "#56CFE1", text: "#0f172a" },
  { label: "Analytics", background: "#5E60CE", text: "#ffffff" },
];

const CARD_COUNT = services.length;
const ROTATION_STEP = 360 / CARD_COUNT;

const ImprovedPaymentSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const rotationRef = useRef(0);
  const draggingRef = useRef(false);
  const autoRotateRef = useRef(true);
  const lastXRef = useRef(0);
  const frameRef = useRef<number>();

  const rotate = (delta: number) => {
    rotationRef.current += delta;
    const slider = sliderRef.current;
    if (!slider) return;
    slider.style.transform = `perspective(1500px) rotateX(-18deg) rotateY(${rotationRef.current}deg)`;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const autoSpin = () => {
      if (autoRotateRef.current && !draggingRef.current) {
        rotate(-0.08);
      }
      frameRef.current = requestAnimationFrame(autoSpin);
    };

    frameRef.current = requestAnimationFrame(autoSpin);

    const handlePointerDown = (event: PointerEvent) => {
      draggingRef.current = true;
      autoRotateRef.current = false;
      lastXRef.current = event.clientX;
      slider.classList.add("dragging");
      slider.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!draggingRef.current) return;
      const delta = event.clientX - lastXRef.current;
      rotate(delta * 0.5);
      lastXRef.current = event.clientX;
    };

    const handlePointerUp = (event: PointerEvent) => {
      draggingRef.current = false;
      autoRotateRef.current = true;
      slider.classList.remove("dragging");
      slider.releasePointerCapture(event.pointerId);
    };

    slider.addEventListener("pointerdown", handlePointerDown);
    slider.addEventListener("pointermove", handlePointerMove);
    slider.addEventListener("pointerup", handlePointerUp);

    return () => {
      slider.removeEventListener("pointerdown", handlePointerDown);
      slider.removeEventListener("pointermove", handlePointerMove);
      slider.removeEventListener("pointerup", handlePointerUp);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <section id="services" className="relative min-h-[90vh] overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/5 to-black/20" />
      <div className="max-w-4xl mx-auto text-center px-6 mb-16">
        <p className="text-sm uppercase tracking-[0.4em] text-white/70">Merchant2 Services</p>
        <h2 className="text-4xl sm:text-5xl font-ubuntu font-bold text-white drop-shadow-lg">
          Built for scale across every payment touchpoint
        </h2>
        <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
          Explore the capabilities that power Merchant2—from mobile checkout to risk automation. Tap any card to visit the full service catalog.
        </p>
      </div>

      <div className="banner">
        <div ref={sliderRef} className="slider" role="list">
          {services.map((service, index) => (
            <a
              key={service.label}
              href="/pages/services.html"
              className="item"
              role="listitem"
              style={{ ['--position' as any]: index + 1 }}
            >
              <div
                className="service-card"
                style={{ backgroundColor: service.background, color: service.text }}
              >
                <span>{service.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .banner {
          perspective: 1500px;
          position: relative;
          height: clamp(26rem, 70vh, 36rem);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider {
          position: relative;
          width: 160px;
          height: 200px;
          transform-style: preserve-3d;
          transform: perspective(1500px) rotateX(-18deg);
          transition: transform 1.2s cubic-bezier(0.25, 1, 0.5, 1);
          cursor: grab;
          touch-action: none;
        }

        .slider.dragging {
          transition: none;
          cursor: grabbing;
        }

        .slider .item {
          position: absolute;
          inset: 0;
          display: block;
          transform: rotateY(calc((var(--position) - 1) * ${ROTATION_STEP}deg)) translateZ(380px);
          text-decoration: none;
        }

        .service-card {
          width: 160px;
          height: 200px;
          border-radius: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
          padding: 1rem;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 35px rgba(0, 0, 0, 0.45);
        }

        @media (max-width: 1024px) {
          .slider {
            width: 140px;
            height: 180px;
          }

          .service-card {
            width: 140px;
            height: 180px;
          }
        }

        @media (max-width: 640px) {
          .banner {
            height: 24rem;
          }

          .slider {
            width: 110px;
            height: 150px;
          }

          .slider .item {
            transform: rotateY(calc((var(--position) - 1) * ${ROTATION_STEP}deg)) translateZ(300px);
          }

          .service-card {
            width: 110px;
            height: 150px;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ImprovedPaymentSlider;
