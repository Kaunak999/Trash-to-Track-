import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import DonationPage from './pages/DonationPage';
import KidsPage from './pages/KidsPage';
import CalculatorPage from './pages/CalculatorPage';
import TrackerPage from './pages/TrackerPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/kids" element={<KidsPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/tracker" element={<TrackerPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;