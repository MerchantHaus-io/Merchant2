import React from 'react';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='layout-container'>
      <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <h1>MerchantHaus</h1>
      </header>
      <main style={{ minHeight: '70vh', padding: '1rem' }}>{children}</main>
      <Footer />
    </div>
  );
}
