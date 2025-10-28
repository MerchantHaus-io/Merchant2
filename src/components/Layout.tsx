import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

const appShellStyle: React.CSSProperties = {
  backgroundColor: '#eef2f9',
  minHeight: '100vh',
  padding: '2.5rem 0',
};

const wrapperStyle: React.CSSProperties = {
  margin: '0 auto',
  maxWidth: '1120px',
  padding: '0 1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
};

const headerStyle: React.CSSProperties = {
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  boxShadow: '0 14px 32px rgba(15, 23, 42, 0.08)',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.5rem 2rem',
};

const logoStyle: React.CSSProperties = {
  color: '#0f172a',
  fontSize: '1.4rem',
  fontWeight: 700,
  letterSpacing: '-0.01em',
};

const navListStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1.25rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const navLinkStyle: React.CSSProperties = {
  color: '#475569',
  fontWeight: 600,
  textDecoration: 'none',
  padding: '0.5rem 0.9rem',
  borderRadius: '999px',
};

const activeNavStyle: React.CSSProperties = {
  backgroundColor: '#e0e7ff',
  color: '#3730a3',
};

const mainContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div style={appShellStyle}>
      <div style={wrapperStyle}>
        <header style={headerStyle}>
          <Link to="/" style={logoStyle}>
            MerchantHaus
          </Link>
          <nav>
            <ul style={navListStyle}>
              {[
                { to: '/', label: 'Home' },
                { to: '/integrations', label: 'Integration directory' },
              ].map((item) => {
                const isActive =
                  item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to);
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      style={{
                        ...navLinkStyle,
                        ...(isActive ? activeNavStyle : {}),
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
        <main style={mainContainerStyle}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
