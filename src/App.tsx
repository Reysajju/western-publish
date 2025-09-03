import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import GhostwritingPage from './pages/services/GhostwritingPage';
import EditingPage from './pages/services/EditingPage';
import MarketingPage from './pages/services/MarketingPage';
import PublishingPage from './pages/services/PublishingPage';
import ServicePage from './pages/services/ServicePage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund" element={<RefundPolicyPage />} />
          <Route path="/services/ghostwriting" element={<GhostwritingPage />} />
          <Route path="/services/editing" element={<EditingPage />} />
          <Route path="/services/fiction-writing" element={<ServicePage serviceName="Fiction Writing" />} />
          <Route path="/services/marketing" element={<MarketingPage />} />
          <Route path="/services/non-fiction-writing" element={<ServicePage serviceName="Non Fiction Writing" />} />
          <Route path="/services/publishing" element={<PublishingPage />} />
          <Route path="/services/story-book-writing" element={<ServicePage serviceName="Story Book Writing" />} />
          <Route path="/services/audio-book" element={<ServicePage serviceName="Audio Book" />} />
          <Route path="/services/biography-writing" element={<ServicePage serviceName="Biography Writing" />} />
          <Route path="/services/book-trailer" element={<ServicePage serviceName="Book Trailer" />} />
          <Route path="/services/children-book-writing" element={<ServicePage serviceName="Children Book Writing" />} />
          <Route path="/services/designing" element={<ServicePage serviceName="Designing" />} />
          <Route path="/services/google-ads" element={<ServicePage serviceName="Google Ads" />} />
          <Route path="/services/facebook-instagram-ads" element={<ServicePage serviceName="Facebook & Instagram Ads" />} />
          <Route path="/services/tiktok-ads" element={<ServicePage serviceName="TikTok Ads" />} />
          <Route path="/services/amazon-ads" element={<ServicePage serviceName="Amazon Ads" />} />
          <Route path="/services/linkedin-ads" element={<ServicePage serviceName="LinkedIn Ads" />} />
          <Route path="/services/content-marketing" element={<ServicePage serviceName="Content Marketing" />} />
          <Route path="/services/social-media-presence" element={<ServicePage serviceName="Social Media Presence" />} />
          <Route path="/services/email-marketing" element={<ServicePage serviceName="Email Marketing" />} />
          <Route path="/services/podcast-youtube-appearances" element={<ServicePage serviceName="Podcast / YouTube Appearances" />} />
          <Route path="/services/goodreads-book-reviews" element={<ServicePage serviceName="Goodreads & Book Reviews" />} />
          <Route path="/services/press-releases" element={<ServicePage serviceName="Press Releases" />} />
          <Route path="/services/virtual-book-launch" element={<ServicePage serviceName="Virtual Book Launch" />} />
          <Route path="/services/collaborations" element={<ServicePage serviceName="Collaborations" />} />
          <Route path="/services/book-clubs" element={<ServicePage serviceName="Book Clubs" />} />
          <Route path="/services/email-cold-outreach" element={<ServicePage serviceName="Email / Cold Outreach" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
