// PaymentsOverview.jsx — Enhanced with Calls to Action
// Long scrollable layout with alternating image/text sections and CTA buttons where appropriate.
// Based on MerchantHaus.io HTML content (2025).

import React from "react";

const sections = [
  {
    id: "infrastructure",
    title: "Built on Proven Infrastructure",
    desc: "Enterprise-grade reliability without the enterprise-level complexity.",
    img: "images/modern_pos.png",
    content: (
      <>
        <p>
          Behind every Merchant Haus transaction lies the stability of our partnership with <strong>NMI</strong>,
          a global leader in payment enablement. You get resilient uptime, redundancy, and compliance baked into
          every swipe, tap, and tokenized checkout.
        </p>
        <ul>
          <li>Processor-agnostic routing with intelligent failover.</li>
          <li>Certified security frameworks that exceed PCI requirements.</li>
          <li>Hands-on launch support to accelerate your go-live timeline.</li>
        </ul>
        <a
          href="onboarding.html"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
        >
          Explore Infrastructure
        </a>
      </>
    ),
  },
  {
    id: "omnichannel",
    title: "Unified Omnichannel Flow",
    desc: "One dashboard for every in-store, online, and on-the-go transaction.",
    img: "images/omni.webp.webp",
    content: (
      <>
        <p>
          Real-time updates across locations help you make smarter decisions and spot growth opportunities faster.
          Whether customers pay in person, on the web, or through your mobile app, Merchant Haus brings every
          settlement into a single, intuitive view.
        </p>
        <ul>
          <li>Shared customer profiles and tokenized credentials across channels.</li>
          <li>Location-level and enterprise-wide reporting in seconds.</li>
          <li>Automated alerts for volume spikes, declines, and payout milestones.</li>
        </ul>
        <a
          href="dashboard.html"
          className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700"
        >
          See the Dashboard
        </a>
      </>
    ),
  },
  {
    id: "security",
    title: "Security That Builds Trust",
    desc: "Advanced defenses that stay invisible to your checkout experience.",
    img: "images/fraud.webp",
    content: (
      <>
        <p>
          Encryption, tokenization, and AI-driven fraud detection work together to protect your brand and your
          customers. Customize thresholds, automate dispute responses, and keep friendly shoppers flowing through
          frictionless approvals.
        </p>
        <ul>
          <li>AI scoring powered by iSpyFraud and Kount for proactive risk insights.</li>
          <li>Chargeback defense kits with automated evidence packaging.</li>
          <li>Hardened token vault with rotating keys and regionalized storage.</li>
        </ul>
        <a
          href="security.html"
          className="inline-block mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700"
        >
          Review Security Suite
        </a>
      </>
    ),
  },
  {
    id: "business-models",
    title: "Built for Every Business Model",
    desc: "Flexible settlement and pricing paths that scale as you grow.",
    img: "images/mobile_commerce.png",
    content: (
      <>
        <p>
          From boutiques to franchises, field services to SaaS, Merchant Haus flexes to fit how you operate. Launch
          with tailored rate plans, create split funding rules, and adapt to new channels without rebuilding your
          payment stack.
        </p>
        <ul>
          <li>Support for card-present, card-not-present, ACH, and unattended flows.</li>
          <li>Configurable fee profiles, surcharging, and cash discount options.</li>
          <li>Automated settlements with transparent reconciliation reporting.</li>
        </ul>
        <a
          href="pricing.html"
          className="inline-block mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700"
        >
          Customize Your Plan
        </a>
      </>
    ),
  },
  {
    id: "data",
    title: "Data That Drives Action",
    desc: "Actionable analytics that transform raw transactions into strategy.",
    img: "images/analytics.webp",
    content: (
      <>
        <p>
          Visualize performance, monitor settlement timing, and track revenue trends with a clear lens into every
          payment event. Build reports in seconds or push data into your BI stack using exports and APIs.
        </p>
        <ul>
          <li>Real-time dashboards covering approvals, retries, disputes, and fees.</li>
          <li>Custom cohort tracking for locations, teams, and product lines.</li>
          <li>Automated alerts and digest emails to keep leadership in the loop.</li>
        </ul>
        <a
          href="analytics.html"
          className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700"
        >
          Dive Into Insights
        </a>
      </>
    ),
  },
  {
    id: "partner-growth",
    title: "Partner-Powered Growth",
    desc: "Technology from Merchant Haus and NMI to accelerate revenue everywhere.",
    img: "images/developer.png",
    content: (
      <>
        <p>
          Merchant Haus partners with <strong>NMI</strong> so you can accept payments anywhere, on any device, across every
          channel. Simplify your payment stack while protecting transactions through one trusted connection.
        </p>
        <ul>
          <li>Tap to Pay and mobile wallets for modern checkout experiences.</li>
          <li>ACH and card acceptance tuned to customer preference.</li>
          <li>Recurring billing, subscription automation, and developer-ready APIs.</li>
        </ul>
        <a
          href="developers/index.html"
          className="inline-block mt-6 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow hover:bg-black"
        >
          Build With Us
        </a>
      </>
    ),
  },
];

const Section = ({ id, title, desc, img, content, reverse }) => (
  <section
    id={id}
    className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-10 py-16 border-b border-gray-200`}
  >
    <div className="md:w-1/2 p-4">
      <img src={img} alt={title} className="rounded-xl shadow-lg object-cover w-full" />
    </div>
    <div className="md:w-1/2 p-4">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p className="text-lg text-gray-600 mb-4">{desc}</p>
      <div className="text-gray-700 leading-relaxed space-y-3">{content}</div>
    </div>
  </section>
);

export default function PaymentsOverview() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <header className="text-center py-16">
        <h1 className="text-5xl font-extrabold mb-4">The Merchant Haus Payments Experience</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          At Merchant Haus, we’ve reimagined how businesses handle payments. Our platform brings together the best of
          technology, design, and reliability, ensuring every transaction feels effortless—for both you and your
          customers.
        </p>
        <a
          href="onboarding.html"
          className="inline-block mt-8 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800"
        >
          Start Your Journey
        </a>
      </header>
      {sections.map((section, i) => (
        <Section key={section.id} {...section} reverse={i % 2 !== 0} />
      ))}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Merchant Haus: Where Payments Feel Effortless</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We believe the future of payments isn’t just about processing—it’s about experience. With Merchant Haus, you
          get a system that keeps up with your ambition. Fast. Flexible. Frictionless. From your first transaction to
          your millionth, we’re here to make every payment feel simple, secure, and seamless.
        </p>
        <a
          href="contact.html"
          className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
        >
          Talk With Our Team
        </a>
      </section>
      <footer className="text-center py-12 border-t mt-16 text-gray-500">
        <p>© 2025 MerchantHaus.io — Modern Payments for Modern Merchants.</p>
        <a
          href="contact.html"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
        >
          Contact Us
        </a>
      </footer>
    </main>
  );
}
