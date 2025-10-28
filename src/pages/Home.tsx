import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
};

const heroStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #f5f7fb 0%, #ffffff 100%)',
  borderRadius: '24px',
  padding: '3.5rem',
  boxShadow: '0 16px 32px rgba(15, 23, 42, 0.08)',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
  alignItems: 'center',
};

const heroTextStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const badgeStyle: React.CSSProperties = {
  alignSelf: 'flex-start',
  backgroundColor: '#e2e8f0',
  borderRadius: '999px',
  color: '#1f2937',
  fontSize: '0.85rem',
  fontWeight: 600,
  letterSpacing: '0.05em',
  padding: '0.5rem 1.25rem',
  textTransform: 'uppercase',
};

const titleStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  lineHeight: 1.1,
  color: '#0f172a',
  fontWeight: 700,
};

const subtitleStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#475569',
  lineHeight: 1.6,
  maxWidth: '34rem',
};

const ctaGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
};

const primaryCtaStyle: React.CSSProperties = {
  backgroundColor: '#2563eb',
  borderRadius: '12px',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 600,
  padding: '0.85rem 1.8rem',
  textDecoration: 'none',
  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
};

const secondaryCtaStyle: React.CSSProperties = {
  ...primaryCtaStyle,
  backgroundColor: '#eef2ff',
  color: '#312e81',
};

const metricsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
  gap: '1.5rem',
};

const metricCardStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  boxShadow: '0 8px 20px rgba(15, 23, 42, 0.06)',
  padding: '1.75rem',
};

const metricValueStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 700,
  color: '#1d4ed8',
};

const metricLabelStyle: React.CSSProperties = {
  color: '#475569',
  marginTop: '0.5rem',
};

const insightSectionStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '1.5rem',
};

const insightCardStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '18px',
  padding: '1.5rem',
  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.05)',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
};

const insightTitleStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#0f172a',
};

const insightDescriptionStyle: React.CSSProperties = {
  color: '#475569',
  lineHeight: 1.55,
};

const highlightStyle: React.CSSProperties = {
  color: '#4338ca',
  fontWeight: 600,
};

const heroIllustrationStyle: React.CSSProperties = {
  background: 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.25), transparent 60%)',
  borderRadius: '22px',
  border: '1px solid rgba(148, 163, 184, 0.3)',
  minHeight: '240px',
  padding: '2rem',
  position: 'relative',
};

const heroBadgeStyle: React.CSSProperties = {
  backgroundColor: '#1d4ed8',
  borderRadius: '14px',
  color: '#fff',
  fontSize: '0.9rem',
  fontWeight: 600,
  padding: '0.75rem 1rem',
  position: 'absolute',
  right: '1.5rem',
  top: '1.5rem',
  boxShadow: '0 10px 24px rgba(37, 99, 235, 0.3)',
};

const heroListStyle: React.CSSProperties = {
  listStyle: 'none',
  margin: 0,
  marginTop: '3.5rem',
  padding: 0,
  display: 'grid',
  gap: '1rem',
};

const heroListItemStyle: React.CSSProperties = {
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '14px',
  display: 'flex',
  gap: '0.75rem',
  padding: '0.9rem 1.1rem',
  boxShadow: '0 8px 16px rgba(15, 23, 42, 0.08)',
};

const dotStyle: React.CSSProperties = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: '#22c55e',
  boxShadow: '0 0 12px rgba(34, 197, 94, 0.6)',
};

const linkStyle: React.CSSProperties = {
  color: '#1d4ed8',
  fontWeight: 600,
  textDecoration: 'none',
};

export default function Home() {
  return (
    <div style={containerStyle}>
      <section style={heroStyle}>
        <div style={heroTextStyle}>
          <span style={badgeStyle}>Unified merchant infrastructure</span>
          <h2 style={titleStyle}>Build payment experiences that feel effortless.</h2>
          <p style={subtitleStyle}>
            MerchantHaus brings together onboarding, risk, reconciliation, and partner
            analytics so your team can launch new revenue streams faster. Automate the
            operational heavy lifting and focus on delivering merchant value.
          </p>
          <div style={ctaGroupStyle}>
            <a href="#platform" style={primaryCtaStyle}>
              Explore the platform
            </a>
            <Link to="/integrations" style={secondaryCtaStyle}>
              View integration directory
            </Link>
          </div>
        </div>
        <div style={heroIllustrationStyle}>
          <div style={heroBadgeStyle}>99.99% uptime</div>
          <ul style={heroListStyle}>
            <li style={heroListItemStyle}>
              <span style={dotStyle} />
              Instant merchant approvals with adaptive onboarding.
            </li>
            <li style={heroListItemStyle}>
              <span style={{ ...dotStyle, backgroundColor: '#f97316', boxShadow: '0 0 12px rgba(249, 115, 22, 0.4)' }} />
              Unified reporting across payment providers.
            </li>
            <li style={heroListItemStyle}>
              <span style={{ ...dotStyle, backgroundColor: '#6366f1', boxShadow: '0 0 12px rgba(99, 102, 241, 0.4)' }} />
              Embedded tools for partner success teams.
            </li>
          </ul>
        </div>
      </section>

      <section id="platform" style={metricsGridStyle}>
        {[{
          value: '45%',
          label: 'Faster partner activations after onboarding automation.',
        }, {
          value: '12hrs',
          label: 'Average time to launch a new payment integration.',
        }, {
          value: '30+',
          label: 'Pre-built connectors covering processors and compliance.',
        }, {
          value: '200%',
          label: 'Increase in visibility for operations teams.',
        }].map((metric) => (
          <article key={metric.value} style={metricCardStyle}>
            <div style={metricValueStyle}>{metric.value}</div>
            <p style={metricLabelStyle}>{metric.label}</p>
          </article>
        ))}
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <h3 style={{ fontSize: '1.75rem', color: '#0f172a', margin: 0 }}>
          Powering modern merchant teams
        </h3>
        <div style={insightSectionStyle}>
          <article style={insightCardStyle}>
            <h4 style={insightTitleStyle}>Adaptive underwriting</h4>
            <p style={insightDescriptionStyle}>
              Tailor review flows based on merchant risk tiers and compliance signals,
              giving your risk specialists more context and fewer false positives.
            </p>
            <Link to="/integrations" style={linkStyle}>
              Explore available signals →
            </Link>
          </article>
          <article style={insightCardStyle}>
            <h4 style={insightTitleStyle}>Unified lifecycle</h4>
            <p style={insightDescriptionStyle}>
              Track every integration, change request, and settlement event in a single
              timeline that keeps operations, finance, and partner teams aligned.
            </p>
            <span style={highlightStyle}>24/7 global support</span>
          </article>
          <article style={insightCardStyle}>
            <h4 style={insightTitleStyle}>Automation studio</h4>
            <p style={insightDescriptionStyle}>
              Deploy automation recipes that sync merchant data with your CRM and risk
              platforms—no engineering tickets required.
            </p>
            <span style={highlightStyle}>New: Reconciliation flows</span>
          </article>
        </div>
      </section>
    </div>
  );
}
