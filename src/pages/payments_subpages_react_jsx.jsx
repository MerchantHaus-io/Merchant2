// PaymentsOverview.jsx — Enhanced with Calls to Action
// Long scrollable layout with alternating image/text sections and CTA buttons where appropriate.
// Based on MerchantHaus.io HTML content (2025).

import React from "react";

const sections = [
  {
    id: "omnichannel",
    title: "Omnichannel Payments",
    desc: "One gateway for every way they want to pay — online, in‑store, mobile, or unattended.",
    img: "images/omni.webp.webp",
    content: (
      <>
        <p>
          Modern commerce happens everywhere. Accept cards, ACH, and contactless from a single platform.
          Whether checkout happens on your site, at a countertop, or via a kiosk, everything lands in one
          settlement and reporting engine.
        </p>
        <ul>
          <li>Unified management across locations and IDs.</li>
          <li>Consistent tokenization and customer profiles across channels.</li>
          <li>White‑label ready experiences that match your brand.</li>
        </ul>
        <a href="onboarding.html" className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700">
          Get Started
        </a>
      </>
    ),
  },
  {
    id: "mobile",
    title: "Mobile Commerce",
    desc: "Checkout that moves with your team — fast, secure and reliable.",
    img: "images/mobile_commerce.png",
    content: (
      <>
        <p>
          Transform any smartphone or tablet into a certified terminal. Enable Tap‑to‑Pay, Apple Pay, Google Pay,
          and contactless cards anywhere — perfect for pop‑ups, field service or curbside pickup.
        </p>
        <p>
          SDKs for iOS and Android let you pair EMV readers and manage encryption automatically. Every
          transaction syncs with your main ledger in real time.
        </p>
        <a href="support/index.html" className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700">
          Learn More
        </a>
      </>
    ),
  },
  {
    id: "pos",
    title: "Modern POS",
    desc: "Modular, powerful, and built for busy counters and unattended kiosks alike.",
    img: "images/modern_pos.png",
    content: (
      <>
        <p>
          Power your countertop and self‑service experiences with the latest Ingenico and Verifone devices. Accept
          chip, PIN, swipe, and contactless payments through a unified gateway — all managed remotely from the
          Merchant Portal.
        </p>
        <p>
          Extend to mobile or unattended scenarios with certified card readers and secure kiosk integrations. View
          consolidated reporting and device health in one dashboard.
        </p>
        <a href="onboarding.html" className="inline-block mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700">
          Upgrade Your POS
        </a>
      </>
    ),
  },
  {
    id: "fraud",
    title: "AI‑Powered Fraud Detection",
    desc: "Adaptive security that learns with every transaction — stop fraud without crushing conversions.",
    img: "images/fraud.webp",
    content: (
      <>
        <p>
          Our platform combines <strong>iSpyFraud</strong> with <strong>Kount AI</strong> to assess each transaction in
          milliseconds. Device fingerprints, IPs, and velocity patterns feed real‑time risk scores to protect your
          business without blocking good customers.
        </p>
        <ul>
          <li>Customizable rules and regional velocity limits.</li>
          <li>Whitelist / blacklist management and adaptive learning.</li>
          <li>Chargeback defense with proactive alerts and evidence trails.</li>
        </ul>
        <a href="security.html" className="inline-block mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700">
          See Security Tools
        </a>
      </>
    ),
  },
  {
    id: "recurring",
    title: "Recurring Billing & Subscriptions",
    desc: "Flexible plans, secure tokenization, and smart retries to maximize lifetime value.",
    img: "images/recurring.webp",
    content: (
      <>
        <p>
          Support fixed, metered, or usage‑based pricing models with robust webhook events and analytics.
          Automate retries, manage plan upgrades, and empower customers with self‑service portals.
        </p>
        <ul>
          <li>Tokenized billing and smart dunning recovery.</li>
          <li>Consolidated invoices and exportable revenue reports.</li>
          <li>Reliable webhook delivery and dispute handling tools.</li>
        </ul>
        <a href="pricing.html" className="inline-block mt-6 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow hover:bg-yellow-700">
          View Plans
        </a>
      </>
    ),
  },
  {
    id: "analytics",
    title: "Payments Analytics",
    desc: "From approvals to payouts, get the signal you need to grow revenue and reduce cost.",
    img: "images/analytics.webp",
    content: (
      <>
        <p>
          Real‑time dashboards show performance across web, POS, and mobile. Slice by region, product, or team.
          Monitor authorization rates, retries, disputes, and fees from a single hub.
        </p>
        <ul>
          <li>Live dashboards, cohort tracking, and payout transparency.</li>
          <li>Retry intelligence and alerting for key performance drops.</li>
          <li>CSV and API exports to your BI stack.</li>
        </ul>
        <a href="options.html" className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700">
          See Your Options
        </a>
      </>
    ),
  },
  {
    id: "developer",
    title: "For Developers",
    desc: "Embed payments faster with transparent APIs, secure webhooks, and powerful SDKs.",
    img: "images/developer.png",
    content: (
      <>
        <p>
          Build confidently using RESTful APIs with full JSON support. Webhooks notify you instantly of events
          like payments, disputes, and renewals, all secured with HMAC‑SHA256 signatures.
        </p>
        <p>
          SDKs for web, iOS, and Android accelerate integration with Collect.js for seamless browser tokenization.
        </p>
        <a href="developers/index.html" className="inline-block mt-6 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow hover:bg-black">
          Visit Developer Docs
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
        <h1 className="text-5xl font-extrabold mb-4">MerchantHaus Payment Solutions</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Explore a unified suite of payment services — from omnichannel acceptance to developer tools — built
          to scale with modern commerce.
        </p>
        <a href="onboarding.html" className="inline-block mt-8 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800">
          Start Now
        </a>
      </header>
      {sections.map((section, i) => (
        <Section key={section.id} {...section} reverse={i % 2 !== 0} />
      ))}
      <footer className="text-center py-12 border-t mt-16 text-gray-500">
        <p>© 2025 MerchantHaus.io — Modern Payments for Modern Merchants.</p>
        <a href="contact.html" className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700">
          Contact Us
        </a>
      </footer>
    </main>
  );
}
