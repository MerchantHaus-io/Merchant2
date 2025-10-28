import { useEffect, type SyntheticEvent } from "react";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

import shieldLogo from "@/assets/shield.webp";
import vampHeader from "@/assets/vamp_header.webp";
import vampMetrics from "@/assets/vamp_metrics.webp";
import vampSecurity from "@/assets/vamp_security.webp";

const ratioPoints = [
  {
    label: "TC40s (Fraud Reports)",
    description:
      "Cases where a cardholder reports an unauthorized transaction. They signal that fraud controls missed an event.",
  },
  {
    label: "TC15s (All Disputes)",
    description:
      "The complete universe of chargebacks, from classic fraud to product quality or processing errors. Every TC15 now counts against the ratio.",
  },
  {
    label: "TC05s (Settled Transactions)",
    description:
      "All settled transactions for the month. Visa uses this denominator to benchmark portfolio health across the network.",
  },
];

const impactPoints = [
  {
    title: "Unified risk management",
    body:
      "Fraud and service disputes now share a single score. Merchants must address fulfillment, customer support, and fraud prevention with equal urgency.",
  },
  {
    title: "Excessive thresholds",
    body:
      "In many regions a 2.2% VAMP ratio triggers the \"Excessive\" category. Merchants that tip their acquirer over the limit should expect network fines and remediation plans.",
  },
  {
    title: "Enumeration spotlight",
    body:
      "Visa introduced a companion metric for card testing attacks. Repeated authorization attempts with low approval rates will prompt direct outreach from the network.",
  },
  {
    title: "Double counting",
    body:
      "A transaction reported as fraud (TC40) and later filed as a dispute (TC15) impacts the ratio twice. Analytics teams must reconcile fraud and dispute feeds to avoid surprises.",
  },
];

const actionSteps = [
  {
    title: "Proactive monitoring",
    detail:
      "Secure TC40 and TC15 feeds from your acquirer, trend ratios weekly, and identify merchants creating disproportionate lift.",
  },
  {
    title: "Layered fraud prevention",
    detail:
      "Deploy AVS, CVV, velocity checks, and 3DS 2.0 in combination. Enumeration defenses should include rate limiting and device intelligence.",
  },
  {
    title: "Dispute avoidance",
    detail:
      "Adopt Order Insight or similar pre-dispute services so customer service teams can resolve issues before they graduate to TC15 filings.",
  },
  {
    title: "Operational fixes",
    detail:
      "Use dispute reason codes to highlight fulfillment, communication, or refund gaps. Close the loop with merchant success teams.",
  },
];

const createFallbackHandler = (fallback: string) =>
  (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.currentTarget;
    target.onerror = null;
    target.src = fallback;
  };

const Vamp = () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const target = entry.target as HTMLElement;

        if (target.dataset.staggerParent !== undefined) {
          const staggerItems = target.querySelectorAll<HTMLElement>(".stagger-item");
          const firstItem = staggerItems[0];

          if (firstItem && firstItem.classList.contains("fade-up-active")) {
            obs.unobserve(target);
            return;
          }

          staggerItems.forEach((item, index) => {
            if (!item.classList.contains("initial-hidden")) {
              item.classList.add("initial-hidden");
            }

            window.setTimeout(() => {
              item.classList.remove("initial-hidden");
              item.classList.add("fade-up-active");
            }, index * 100);
          });

          obs.unobserve(target);
          return;
        }

        if (target.dataset.animatePop !== undefined) {
          target.classList.remove("initial-hidden");
          target.classList.add("pop-in-active");
          obs.unobserve(target);
          return;
        }

        if (target.dataset.animate !== undefined) {
          target.classList.remove("initial-hidden");
          target.classList.add("fade-up-active");
          obs.unobserve(target);
        }
      });
    }, observerOptions);

    const initialDelay = 1.8;
    let delayCounter = 0;

    const animateElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]")
    );

    animateElements.forEach((element) => {
      if (element.dataset.animatePop !== undefined) {
        return;
      }

      element.style.animationDelay = `${initialDelay + delayCounter * 0.15}s`;
      delayCounter += 1;
      observer.observe(element);
    });

    const popElements = document.querySelectorAll<HTMLElement>("[data-animate-pop]");
    popElements.forEach((element) => {
      element.style.animationDelay = `${initialDelay + delayCounter * 0.15 + 0.5}s`;
      observer.observe(element);
    });

    const staggerParents = document.querySelectorAll<HTMLElement>("[data-stagger-parent]");
    staggerParents.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-light text-neutral-dark">
      <Header />
      <main className="flex-1 px-4 py-12 sm:px-8">
        <div className="mx-auto max-w-4xl font-inter leading-relaxed">
          <header className="mb-12 border-b-4 border-crimson pt-8">
            <div className="flex items-center gap-4">
              <img
                src={shieldLogo}
                alt="MerchantHaus Shield Logo"
                className="h-12 w-12 sm:h-16 sm:w-16"
                onError={createFallbackHandler(
                  "https://placehold.co/64x64/DC143C/FFFFFF?text=MH"
                )}
              />
              <div>
                <h1 className="logo-text text-4xl font-extrabold text-neutral-dark sm:text-5xl">
                  MerchantHaus <span className="text-crimson">Blog</span>
                </h1>
                <p className="tagline-pulse mt-2 text-lg tracking-wider text-silver-grey">
                  plug in, play, process.
                </p>
              </div>
            </div>
          </header>

          <article className="space-y-12 text-neutral-dark/90">
            <section className="space-y-6">
              <h2
                id="main-title"
                className="text-3xl font-bold text-neutral-dark sm:text-4xl"
              >
                Visa&apos;s VAMP: A New Era for Fraud and Dispute Management
              </h2>
              <p
                className="initial-hidden border-b border-neutral-dark/10 pb-4 text-lg italic text-neutral-dark/80"
                data-animate
              >
                The world of payment processing is always evolving, and staying ahead means understanding Visa&apos;s new Visa
                Acquirer Monitoring Program (VAMP). This global framework redefines how fraud and disputes are tracked and
                managed across the payment ecosystem.
              </p>
              <div className="masked-image-container shape-1 initial-hidden" data-animate>
                <img
                  src={vampHeader}
                  alt="Abstract global payment network"
                  onError={createFallbackHandler(
                    "https://placehold.co/1200x400/3C2F53/FFFFFF?text=VAMP+Header+Image"
                  )}
                />
                <div className="masked-image-overlay-text">
                  Shaping the Future of Payments
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h3
                className="section-heading text-2xl font-bold text-crimson initial-hidden"
                data-animate
              >
                What is VAMP and How Does It Work?
              </h3>
              <p className="initial-hidden" data-animate>
                VAMP officially began replacing the previous monitoring programs—the Visa Fraud Monitoring Program (VFMP) and the
                Visa Dispute Monitoring Program (VDMP)—starting in April 2025.
              </p>
              <p className="initial-hidden" data-animate>
                The program&apos;s core is a single, unified metric called the VAMP Ratio, which measures an acquirer&apos;s or merchant&apos;s
                overall risk profile.
              </p>
              <h4
                className="initial-hidden text-xl font-bold text-neutral-dark"
                data-animate
              >
                The VAMP Ratio Calculation
              </h4>
              <p className="initial-hidden" data-animate>
                The ratio combines two critical components of card-not-present (CNP) transaction risk:
              </p>
              <div className="math-block initial-hidden" data-animate-pop>
                <p className="text-center text-base text-neutral-dark">
                  VAMP Ratio = ( TC40 Fraud Reports + TC15 Disputes ) ÷ TC05 Settled Transactions
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5" data-stagger-parent>
                  {ratioPoints.map((point) => (
                    <li key={point.label} className="stagger-item initial-hidden">
                      <span className="font-semibold text-crimson">{point.label}:</span> {point.description}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <div className="masked-image-container shape-2 initial-hidden" data-animate>
                <img
                  src={vampMetrics}
                  alt="Data analysis and trends"
                  onError={createFallbackHandler(
                    "https://placehold.co/1200x500/8E6FBC/FFFFFF?text=VAMP+Metrics+Image"
                  )}
                />
                <div className="masked-image-overlay-text">Understanding the Metrics</div>
              </div>

              <h3
                className="section-heading text-2xl font-bold text-crimson initial-hidden"
                data-animate
              >
                Key Changes and Merchant Impact
              </h3>
              <p className="initial-hidden" data-animate>
                VAMP&apos;s consolidation into one framework and the calculation of the new ratio bring several major implications for
                merchants:
              </p>
              <ul className="space-y-4" data-stagger-parent>
                {impactPoints.map((impact) => (
                  <li
                    key={impact.title}
                    className="stagger-item initial-hidden rounded-2xl border border-[hsl(0_0%_66%/0.4)] bg-white/70 p-5"
                  >
                    <h4 className="text-lg font-semibold text-neutral-dark capitalize">{impact.title}</h4>
                    <p className="mt-2 text-sm text-neutral-dark/80">{impact.body}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-6">
              <div className="masked-image-container shape-3 initial-hidden" data-animate>
                <img
                  src={vampSecurity}
                  alt="Secure payment solutions"
                  onError={createFallbackHandler(
                    "https://placehold.co/1200x350/3C2F53/FFFFFF?text=VAMP+Security+Image"
                  )}
                />
                <div className="masked-image-overlay-text">Protecting Your Transactions</div>
              </div>

              <h3
                className="section-heading text-2xl font-bold text-crimson initial-hidden"
                data-animate
              >
                Staying Compliant: Actionable Steps
              </h3>
              <p className="initial-hidden" data-animate>
                Compliance is crucial, and merchants can take proactive steps to manage their risk and stay below VAMP&apos;s thresholds:
              </p>
              <div className="callout initial-hidden" data-animate>
                <ul className="list-disc space-y-3 pl-5" data-stagger-parent>
                  {actionSteps.map((step) => (
                    <li key={step.title} className="stagger-item initial-hidden">
                      <span className="font-semibold text-cyber-teal">{step.title}:</span> {step.detail}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="initial-hidden text-lg font-medium text-neutral-dark" data-animate>
                VAMP is a signal from Visa that fraud prevention and dispute management must be a top priority. By understanding this
                new framework and proactively implementing strong controls, your business can protect its transactional integrity and
                continue to grow securely.
              </p>
            </section>

            <footer className="initial-hidden border-t border-silver-grey/50 pt-8 text-sm text-silver-grey" data-animate>
              <p>
                Posted by the MerchantHaus Compliance Team · <time dateTime="2025-10-24">October 24, 2025</time>
              </p>
              <p className="mt-2">
                Need help modelling your merchants against the new thresholds?{" "}
                <a
                  href="/pages/contact.html"
                  className="text-crimson underline decoration-dotted underline-offset-4 hover:text-crimson/80"
                >
                  Talk with MerchantHaus.
                </a>
              </p>
            </footer>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vamp;
