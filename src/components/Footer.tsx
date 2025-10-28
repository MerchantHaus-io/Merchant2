import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid #ddd' }}>
      <p>© 2025 MerchantHaus.io — All rights reserved.</p>
      <nav>
        <a href='/about'>About</a> | <a href='/developer-guides'>Developer Guides</a> | <a href='/contact'>Contact</a>
      </nav>
    </footer>
  );
}
