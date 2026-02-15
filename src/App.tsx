import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Team } from './components/Team';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { getAuthToken, analyticsAPI } from './utils/api';

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const token = getAuthToken();
    if (token) {
      setIsAuthenticated(true);
    }

    // Track page view
    analyticsAPI.track('page_view', { page: 'home' });
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowAdmin(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowAdmin(false);
  };

  // Admin Console View
  if (showAdmin && isAuthenticated) {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  // Admin Login View
  if (showAdmin && !isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  // Main Website View
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Admin Access Button */}
      <button
        onClick={() => setShowAdmin(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition z-50 flex items-center justify-center"
        title="Admin Console"
      >
        <span className="font-bold">⚙️</span>
      </button>

      <main>
        <Hero />
        <Team />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}