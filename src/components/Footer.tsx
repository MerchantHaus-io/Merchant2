import React from 'react';
import { Link } from 'react-router-dom';

const footerStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  boxShadow: '0 12px 28px rgba(15, 23, 42, 0.08)',
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  padding: '2.5rem',
};

const brandColumnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const brandNameStyle: React.CSSProperties = {
  color: '#0f172a',
  fontSize: '1.4rem',
  fontWeight: 700,
};

const descriptionStyle: React.CSSProperties = {
  color: '#475569',
  lineHeight: 1.6,
};

const headingStyle: React.CSSProperties = {
  color: '#0f172a',
  fontSize: '1rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  marginBottom: '0.75rem',
  textTransform: 'uppercase',
};

const listStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const linkStyle: React.CSSProperties = {
  color: '#475569',
  fontWeight: 500,
  textDecoration: 'none',
};

const badgeStyle: React.CSSProperties = {
  backgroundColor: '#e0e7ff',
  borderRadius: '10px',
  color: '#3730a3',
  fontSize: '0.75rem',
  fontWeight: 600,
  padding: '0.35rem 0.65rem',
};

const finePrintStyle: React.CSSProperties = {
  borderTop: '1px solid rgba(148, 163, 184, 0.3)',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  marginTop: '1rem',
  paddingTop: '1.5rem',
  color: '#94a3b8',
  fontSize: '0.85rem',
};

export default function Footer() {
  return (
    <footer>
      <div style={footerStyle}>
        <div style={brandColumnStyle}>
          <span style={brandNameStyle}>MerchantHaus</span>
          <p style={descriptionStyle}>
            Helping merchant teams orchestrate onboarding, payments, and risk with a
            single, connected infrastructure.
          </p>
          <span style={badgeStyle}>Operational excellence since 2016</span>
        </div>

        <div>
          <h4 style={headingStyle}>Platform</h4>
          <ul style={listStyle}>
            <li>
              <a href="#platform" style={linkStyle}>
                Product overview
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle}>
                Pricing &amp; packaging
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle}>
                Security &amp; trust
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={headingStyle}>Resources</h4>
          <ul style={listStyle}>
            <li>
              <a href="#" style={linkStyle}>
                Customer stories
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle}>
                Implementation guides
              </a>
            </li>
            <li>
              <Link to="/integrations" style={{ ...linkStyle, fontWeight: 600 }}>
                Integration directory
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={headingStyle}>Connect</h4>
          <ul style={listStyle}>
            <li>
              <a href="mailto:hello@merchanthaus.io" style={linkStyle}>
                hello@merchanthaus.io
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle}>
                Partner program
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle}>
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={finePrintStyle}>
        <span>© {new Date().getFullYear()} MerchantHaus. All rights reserved.</span>
        <span>MerchantHaus is a fictional platform for demonstration purposes.</span>
      </div>
    </footer>
  );
}
