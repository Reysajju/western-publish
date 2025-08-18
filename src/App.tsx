import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';
import GhostwritingPage from './pages/services/GhostwritingPage';
import PublishingPage from './pages/services/PublishingPage';
import MarketingPage from './pages/services/MarketingPage';
import EditingPage from './pages/services/EditingPage';
import PricingPage from './pages/PricingPage';
import TermsPage from './pages/TermsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/ghostwriting" element={<GhostwritingPage />} />
          <Route path="/services/publishing" element={<PublishingPage />} />
          <Route path="/services/marketing" element={<MarketingPage />} />
          <Route path="/services/editing" element={<EditingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund" element={<RefundPolicyPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;