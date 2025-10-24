import { useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import shieldLogo from "@/assets/RedShield.png";

const IMAGE_SOURCES = {
  header: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80",
  metrics: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
  security: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
};

const VampBlog = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const animatedElements = Array.from(
      container.querySelectorAll<HTMLElement>("[data-animate]")
    );
    const popElements = Array.from(
      container.querySelectorAll<HTMLElement>("[data-animate-pop]")
    );
    const staggerParents = Array.from(
      container.querySelectorAll<HTMLElement>("[data-stagger-parent]")
    );

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const target = entry.target as HTMLElement;

        if (target.hasAttribute("data-animate") && !target.hasAttribute("data-animate-pop")) {
          target.classList.remove("initial-hidden");
          target.classList.add("fade-up-active");
          obs.unobserve(target);
          return;
        }

        if (target.hasAttribute("data-animate-pop")) {
          target.classList.remove("initial-hidden");
          target.classList.add("pop-in-active");
          obs.unobserve(target);
          return;
        }

        if (target.hasAttribute("data-stagger-parent")) {
          const staggerItems = target.querySelectorAll<HTMLElement>(".stagger-item");

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
        }
      });
    }, observerOptions);

    const initialDelay = 1.8;
    let delayCounter = 0;

    animatedElements
      .filter((element) => !element.hasAttribute("data-animate-pop"))
      .forEach((element) => {
        element.style.animationDelay = `${initialDelay + delayCounter * 0.15}s`;
        delayCounter += 1;
        observer.observe(element);
      });

    popElements.forEach((element) => {
      element.style.animationDelay = `${initialDelay + delayCounter * 0.15 + 0.5}s`;
      observer.observe(element);
    });

    staggerParents.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="bg-neutral-light text-neutral-dark py-12">
        <div className="container max-w-4xl" ref={containerRef}>
          <article className="blog-article">
            <header className="blog-article__header" data-animate>
              <img
                src={shieldLogo}
                alt="MerchantHaus Shield Logo"
                className="blog-article__logo"
              />
              <div className="space-y-2">
                <h1 className="blog-article__brand">
                  MerchantHaus <span className="text-crimson">Blog</span>
                </h1>
                <p className="tagline-pulse text-silver-grey">
                  plug in, play, process.
                </p>
              </div>
            </header>

            <h2 id="main-title" className="main-title">
              Visa&apos;s VAMP: A New Era for Fraud and Dispute Management
            </h2>

            <p
              className="intro-paragraph initial-hidden"
              data-animate
            >
              The world of payment processing is always evolving, and staying ahead means
              understanding Visa&apos;s new <strong>Visa Acquirer Monitoring Program (VAMP)</strong>.
              This global framework redefines how fraud and disputes are tracked and managed across
              the payment ecosystem.
            </p>

            <div className="masked-image-container shape-1 initial-hidden" data-animate>
              <img
                src={IMAGE_SOURCES.header}
                alt="Abstract global payment network"
                loading="lazy"
              />
              <div className="masked-image-overlay-text">
                Shaping the Future of Payments
              </div>
            </div>

            <section className="blog-section">
              <h3 className="section-heading text-crimson initial-hidden" data-animate>
                What is VAMP and How Does It Work?
              </h3>
              <p className="initial-hidden" data-animate>
                VAMP officially began replacing the previous, separate monitoring programs—the Visa
                Fraud Monitoring Program (VFMP) and the Visa Dispute Monitoring Program (VDMP)—starting
                in April 2025.
              </p>
              <p className="initial-hidden" data-animate>
                The program&apos;s core is a single, unified metric called the <strong>VAMP Ratio</strong>,
                which measures an acquirer&apos;s or merchant&apos;s overall risk profile.
              </p>
              <h4 className="subheading initial-hidden" data-animate>
                The VAMP Ratio Calculation:
              </h4>
              <p className="initial-hidden" data-animate>
                The ratio combines two critical components of card-not-present (CNP) transaction risk:
              </p>
              <pre className="math-block initial-hidden" data-animate-pop>
{`VAMP Ratio = (Count of [Fraud (TC40) + Disputes (TC15)]) / Count of Settled Transactions (TC05)`}
              </pre>
              <ul className="staggered-list" data-stagger-parent>
                <li className="stagger-item">
                  <strong className="text-crimson">TC40s (Fraud Reports):</strong> Cases where a
                  cardholder reports a fraudulent transaction to their bank.
                </li>
                <li className="stagger-item">
                  <strong className="text-crimson">TC15s (All Disputes):</strong> All chargebacks,
                  including both fraud-related and non-fraud disputes (e.g., merchandise quality or
                  non-receipt).
                </li>
                <li className="stagger-item">
                  <strong className="text-crimson">TC05s (Settled Transactions):</strong> The total
                  count of all settled transactions in a calendar month.
                </li>
              </ul>
            </section>

            <div className="masked-image-container shape-2 initial-hidden" data-animate>
              <img src={IMAGE_SOURCES.metrics} alt="Data analysis and trends" loading="lazy" />
              <div className="masked-image-overlay-text">Understanding the Metrics</div>
            </div>

            <section className="blog-section">
              <h3 className="section-heading text-crimson initial-hidden" data-animate>
                Key Changes and Merchant Impact
              </h3>
              <p className="initial-hidden" data-animate>
                VAMP&apos;s consolidation into one framework and the calculation of the new ratio bring
                several major implications for merchants:
              </p>
              <ul className="staggered-list" data-stagger-parent>
                <li className="stagger-item">
                  <strong>Unified Risk Management:</strong> By combining fraud and all dispute types into a
                  single metric, VAMP encourages merchants and acquirers to address the root causes of
                  <em>all</em> transactional issues, not just chargebacks.
                </li>
                <li className="stagger-item">
                  <strong>Increased Penalties for Non-Compliance:</strong> If a merchant’s activity pushes
                  their acquirer above VAMP&apos;s thresholds, the merchant can face financial penalties. For
                  merchants, the <span className="text-crimson font-bold">Excessive</span> threshold is
                  around 2.2% in many regions, and exceeding this can result in fees per disputed
                  transaction.
                </li>
                <li className="stagger-item">
                  <strong>Focus on Enumeration Attacks:</strong> VAMP introduces a separate monitoring
                  element specifically for "enumeration" or card testing fraud, where criminals rapidly
                  attempt small transactions to validate stolen card details. Merchants with a high rate of
                  enumeration attempts may face penalties, regardless of their main VAMP ratio.
                </li>
                <li className="stagger-item">
                  <strong>The Double-Counting Effect:</strong> Since the ratio includes both fraud reports
                  (TC40s) and chargebacks (TC15s), a single transaction that is first reported as fraud and
                  then becomes a chargeback can be <span className="text-cyber-teal font-bold">counted twice</span> against
                  your VAMP ratio.
                </li>
              </ul>
            </section>

            <div className="masked-image-container shape-3 initial-hidden" data-animate>
              <img src={IMAGE_SOURCES.security} alt="Secure payment solutions" loading="lazy" />
              <div className="masked-image-overlay-text">Protecting Your Transactions</div>
            </div>

            <section className="blog-section">
              <h3 className="section-heading text-crimson initial-hidden" data-animate>
                Staying Compliant: Actionable Steps
              </h3>
              <p className="initial-hidden" data-animate>
                Compliance is crucial, and merchants can take proactive steps to manage their risk and
                stay below VAMP&apos;s thresholds:
              </p>
              <div className="callout initial-hidden" data-animate>
                <ul className="staggered-list" data-stagger-parent>
                  <li className="stagger-item">
                    <strong className="text-cyber-teal">Proactive Monitoring:</strong> Gain access to and
                    regularly monitor your TC40 (fraud) and TC15 (dispute) data from your acquirer to track
                    your VAMP ratio in real-time.
                  </li>
                  <li className="stagger-item">
                    <strong className="text-cyber-teal">Layered Fraud Prevention:</strong> Implement robust
                    fraud tools like AVS (Address Verification Service), CVV/CVC2 validation, and 3D Secure
                    2.0 to catch fraudulent transactions before they settle.
                  </li>
                  <li className="stagger-item">
                    <strong className="text-cyber-teal">Leverage Dispute Tools:</strong> Utilize
                    pre-dispute tools and alerts (like Visa&apos;s Order Insight) to resolve disputes directly
                    with the cardholder before they escalate to a formal chargeback (TC15) and count against
                    your ratio.
                  </li>
                  <li className="stagger-item">
                    <strong className="text-cyber-teal">Address Root Causes:</strong> Analyze the data to
                    understand why customers are disputing charges (e.g., poor fulfillment, misleading
                    product descriptions) and make operational fixes.
                  </li>
                </ul>
              </div>
              <p className="initial-hidden" data-animate>
                VAMP is a signal from Visa that fraud prevention and dispute management must be a top
                priority. By understanding this new framework and proactively implementing strong controls,
                your business can protect its transactional integrity and continue to grow securely.
              </p>
            </section>

            <footer className="blog-article__footer initial-hidden" data-animate>
              <p>
                Posted by the MerchantHaus Compliance Team | <time dateTime="2025-10-24">October 24,
                2025</time>
              </p>
            </footer>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VampBlog;
