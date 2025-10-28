import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import IntegrationDirectory from './pages/IntegrationDirectory';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/integrations" element={<IntegrationDirectory />} />
      </Routes>
    </Layout>
  );
}
