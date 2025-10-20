import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceSection {
  id: string;
  title: string;
  description: string;
  image: string;
  paragraphs: string[];
  bullets?: string[];
  cta?: {
    label: string;
    href: string;
  };
}

const sections: ServiceSection[] = [
  {
    id: "omnichannel",
    title: "Omnichannel Payments",
    description: "Accept payments online, in-store, through kiosks, and on the go with a unified gateway.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "Manage every channel from a single dashboard with consistent tokenization, customer profiles, and settlement flows.",
      "Whether you are embedding payments in a digital experience or operating a busy storefront, the MerchantHaus platform keeps reconciliation, reporting, and uptime aligned across your business."
    ],
    bullets: [
      "Unified device and location management with shared customer tokens.",
      "Real-time settlement status and dispute tracking in one portal.",
      "White-label ready experiences that match your brand."
    ],
    cta: {
      label: "Talk about omnichannel",
      href: "/#quote",
    },
  },
  {
    id: "mobile",
    title: "Mobile Commerce",
    description: "Tap-to-pay, curbside pickup, and field payments that travel with your team.",
    image: "https://images.unsplash.com/photo-1581485142769-1b6c71a84f1b?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "Turn any smartphone or tablet into a compliant payment endpoint. Pair certified readers, manage encryption keys, and sync transactions to your primary ledger instantly.",
      "SDKs for iOS and Android accelerate deployment so you can launch new mobile experiences without rewriting your payment stack."
    ],
    bullets: [
      "Tap-to-Pay with Apple Pay, Google Pay, and contactless cards.",
      "Device health and reader firmware updates managed remotely.",
      "Flexible checkout flows for pop-up retail, delivery, and service appointments."
    ],
    cta: {
      label: "Plan a mobile rollout",
      href: "/#quote",
    },
  },
  {
    id: "pos",
    title: "Modern POS",
    description: "Countertop, kiosk, and unattended terminals managed from a single control center.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "Deploy the latest Ingenico and Verifone hardware or integrate existing terminals with our gateway for EMV, PIN, swipe, and contactless acceptance.",
      "Extend your footprint with unattended kiosks and table-side devices while keeping every transaction tokenized and auditable."
    ],
    bullets: [
      "Remote device provisioning and monitoring.",
      "Centralized reporting with granular user permissions.",
      "Secure kiosk integrations with health checks and automatic alerts."
    ],
    cta: {
      label: "Upgrade point of sale",
      href: "/#quote",
    },
  },
  {
    id: "fraud",
    title: "AI-Powered Fraud Detection",
    description: "Adaptive risk scoring that learns from every transaction to protect revenue without friction.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "Combine velocity monitoring, device fingerprinting, and behavioral analytics to make real-time authorization decisions.",
      "Tune rule sets for regions, MIDs, and customer segments while machine learning refines models behind the scenes."
    ],
    bullets: [
      "Dynamic risk scoring with allow, review, or deny responses.",
      "Chargeback defense workflows with supporting evidence trails.",
      "Collaborative review tools for fraud teams and support agents."
    ],
    cta: {
      label: "Review fraud controls",
      href: "/#contact",
    },
  },
  {
    id: "recurring",
    title: "Recurring Billing & Subscriptions",
    description: "Flexible billing logic, tokenization, and smart retries built to grow customer lifetime value.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "Launch subscription plans in minutes with support for fixed, metered, or usage-based pricing.",
      "Automate invoicing, manage upgrades and downgrades, and empower customers with self-service portals."
    ],
    bullets: [
      "Tokenized billing paired with intelligent dunning campaigns.",
      "Granular webhook events for renewals, cancellations, and refunds.",
      "Revenue reporting with cohort and retention insights."
    ],
    cta: {
      label: "Optimize recurring billing",
      href: "/#quote",
    },
  },
  {
    id: "analytics",
    title: "Payments Analytics",
    description: "Real-time visibility into approvals, funding, disputes, and fees across every channel.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "Monitor KPIs across ecommerce, POS, and mobile with customizable dashboards and alerts.",
      "Export trends to your BI stack or drill into transaction-level detail for operational reviews."
    ],
    bullets: [
      "Authorization and retry analytics surfaced in real time.",
      "Payout transparency down to individual batches and deposits.",
      "CSV and API exports to feed finance and product teams."
    ],
    cta: {
      label: "Explore analytics options",
      href: "/#quote",
    },
  },
  {
    id: "developer",
    title: "For Developers",
    description: "Transparent APIs, secure webhooks, and polished SDKs that cut integration time to days instead of weeks.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "Build confidently with RESTful endpoints, detailed schema documentation, and language-specific SDKs.",
      "Collect.js enables seamless browser tokenization while HMAC-SHA256 signatures keep every webhook verifiable."
    ],
    bullets: [
      "Comprehensive sandbox environments for rapid prototyping.",
      "Robust webhook retry logic with signed payloads.",
      "Client libraries for web, iOS, and Android teams."
    ],
    cta: {
      label: "Access developer resources",
      href: "/#contact",
    },
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="bg-muted/30">
        <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">Payment Services</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-ubuntu font-bold">
              Scale every channel with the MerchantHaus payment stack
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the services that power modern commerce—from omnichannel acceptance and mobile checkout to
              intelligent fraud defense and developer-first tooling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 py-6 text-base sm:text-lg" asChild>
                <Link to="/#quote">Request a tailored plan</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base sm:text-lg" asChild>
                <Link to="/#contact">Connect with sales</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-border rounded-3xl overflow-hidden shadow-lg bg-card/60 backdrop-blur ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="h-full">
                <img
                  src={section.image}
                  alt={section.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 sm:p-10 space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase">{section.title}</p>
                  <h2 className="text-3xl font-ubuntu font-bold text-foreground">{section.description}</h2>
                </div>
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  {section.paragraphs.map(paragraph => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="space-y-2 text-sm sm:text-base text-foreground/80 list-disc pl-5">
                    {section.bullets.map(bullet => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.cta && (
                  <Button size="lg" className="rounded-full" asChild>
                    <Link to={section.cta.href}>{section.cta.label}</Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
