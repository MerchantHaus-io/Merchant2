import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, Sparkles, ShieldAlert } from "lucide-react";
import vampHeader from "@/assets/vamp_header.webp";
import vampMetrics from "@/assets/vamp_metrics.webp";
import vampSecurity from "@/assets/vamp_security.webp";

const ratioPoints = [
  {
    label: "TC40s (Fraud Reports)",
    description:
      "Cases where a cardholder tells their issuer a transaction was unauthorized. These are the earliest signals that fraud controls missed an event.",
  },
  {
    label: "TC15s (All Disputes)",
    description:
      "The complete universe of chargebacks, from classic fraud to product quality or processing errors. Under VAMP, every TC15 counts against the ratio.",
  },
  {
    label: "TC05s (Settled Transactions)",
    description:
      "All settled transactions for the month. The denominator Visa uses to benchmark portfolio health across the network.",
  },
];

const impactPoints = [
  {
    title: "Unified risk management",
    body:
      "Fraud and service disputes now share a single risk score. Merchants must address fulfillment, customer support, and fraud prevention with equal urgency.",
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

const Vamp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-light text-neutral-dark">
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src={vampHeader}
              alt="Abstract global payment network"
              className="h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-purple-dark/80 mix-blend-multiply" />
          </div>
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-24 sm:px-6">
            <Badge className="self-start bg-crimson text-white/90">Risk &amp; Compliance</Badge>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Visa's VAMP: A New Era for Fraud and Dispute Management
            </h1>
            <p className="max-w-3xl text-lg text-white/80">
              Visa's Acquirer Monitoring Program (VAMP) replaces separate fraud and dispute programs with a unified scorecard. Here's what ISOs, PayFacs, and sponsor banks need to know before thresholds reset in 2025.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" /> October 24, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> 8 min read
              </span>
            </div>
            <Button
              asChild
              variant="outline"
              className="self-start rounded-full border-white/50 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            >
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to insights
              </Link>
            </Button>
          </div>
        </section>

        <article className="mx-auto flex max-w-4xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
          <section className="space-y-6 text-lg leading-8 text-neutral-dark/85">
            <p>
              VAMP consolidates the Visa Fraud Monitoring Program (VFMP) and the Visa Dispute Monitoring Program (VDMP) into a single, global framework. Acquirers are scored on every merchant they board, and high-risk activity now surfaces faster than in the legacy model.
            </p>
            <div className="rounded-3xl border border-cyber-teal/40 bg-white/80 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-neutral-dark">The VAMP ratio at a glance</h2>
              <p className="mt-3 text-base text-neutral-dark/80">
                Visa blends fraud, all dispute types, and total settled transactions into a single ratio:
              </p>
              <div className="mt-6 rounded-2xl bg-neutral-light p-4 text-center font-mono text-base text-neutral-dark shadow-inner">
                VAMP Ratio = ( TC40 Fraud Reports + TC15 Disputes ) ÷ TC05 Settled Transactions
              </div>
              <ul className="mt-6 space-y-4">
                {ratioPoints.map((point) => (
                  <li key={point.label} className="rounded-2xl border border-silver-grey/40 bg-white/70 p-4">
                    <h3 className="text-base font-semibold text-crimson">{point.label}</h3>
                    <p className="mt-2 text-sm text-neutral-dark/75">{point.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-start">
            <div className="space-y-6 text-lg text-neutral-dark/85">
              <h2 className="text-3xl font-semibold text-neutral-dark">Key changes and how they impact merchants</h2>
              <p>
                The VAMP rollout is more than a rebranding exercise. It introduces a consolidated risk model that touches portfolio economics, sponsor relationships, and merchant operations.
              </p>
              <ul className="space-y-5">
                {impactPoints.map((impact) => (
                  <li key={impact.title} className="rounded-3xl border border-silver-grey/50 bg-white/80 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-neutral-dark capitalize">{impact.title}</h3>
                    <p className="mt-2 text-sm text-neutral-dark/75">{impact.body}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <img
                src={vampMetrics}
                alt="Analyst reviewing VAMP metrics"
                className="w-full rounded-3xl object-cover shadow-lg"
              />
              <div className="rounded-3xl border border-crimson/50 bg-white/85 p-6">
                <h3 className="flex items-center gap-2 text-base font-semibold text-crimson">
                  <ShieldAlert className="h-5 w-5" /> Enumeration monitoring is now explicit
                </h3>
                <p className="mt-3 text-sm text-neutral-dark/75">
                  Card testing attacks receive dedicated scoring. Merchants should pair gateway velocity controls with issuer data to stop low value probes before they harm the broader ratio.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:items-center">
            <div className="rounded-3xl border border-purple-light/40 bg-purple-dark/90 p-8 text-white shadow-xl">
              <h2 className="flex items-center gap-3 text-3xl font-semibold">
                <Sparkles className="h-7 w-7 text-cyber-teal" /> Staying compliant in the VAMP era
              </h2>
              <p className="mt-4 text-white/80">
                MerchantHaus guides ISOs and PayFacs through new sponsor expectations with proactive analytics, dispute coaching, and fraud prevention expertise.
              </p>
              <img
                src={vampSecurity}
                alt="Secure payment illustration"
                className="mt-8 w-full rounded-2xl object-cover opacity-90"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-neutral-dark">Actionable steps for your portfolio</h3>
              <p className="text-lg text-neutral-dark/80">
                The most successful programs stay ahead of network reporting. Prioritize these initiatives with every merchant cohort.
              </p>
              <ul className="space-y-4">
                {actionSteps.map((step) => (
                  <li key={step.title} className="rounded-3xl border border-silver-grey/50 bg-white/80 p-5">
                    <h4 className="text-lg font-semibold text-neutral-dark capitalize">{step.title}</h4>
                    <p className="mt-2 text-sm text-neutral-dark/75">{step.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-silver-grey/40 bg-white/80 p-8 text-sm text-neutral-dark/70 shadow-sm">
            <p>
              Posted by the MerchantHaus Compliance Team · <time dateTime="2025-10-24">October 24, 2025</time>
            </p>
            <p className="mt-2">
              Need help modelling your merchants against the new thresholds? <a href="/pages/contact.html" className="text-crimson underline decoration-dotted underline-offset-4 hover:text-crimson/80">Talk with MerchantHaus.</a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Vamp;
