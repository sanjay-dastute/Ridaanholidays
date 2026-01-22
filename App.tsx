import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import CanadaVisa from './pages/CanadaVisa';
import SchengenVisa from './pages/SchengenVisa';
import UKVisa from './pages/UKVisa';
import USAVisa from './pages/USAVisa';
import AustraliaVisa from './pages/AustraliaVisa';
import NewZealandVisa from './pages/NewZealandVisa';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/canada" element={<CanadaVisa />} />
            <Route path="/services/schengen" element={<SchengenVisa />} />
            <Route path="/services/uk" element={<UKVisa />} />
            <Route path="/services/usa" element={<USAVisa />} />
            <Route path="/services/australia" element={<AustraliaVisa />} />
            <Route path="/services/new-zealand" element={<NewZealandVisa />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;