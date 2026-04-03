import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { TermosDeUso } from './pages/TermosDeUso';
import { PoliticaPrivacidade } from './pages/PoliticaPrivacidade';
import { PoliticaCookies } from './pages/PoliticaCookies';
import { AvisoLegal } from './pages/AvisoLegal';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-primary text-text-primary font-sans transition-colors duration-300">
        {/* Background ambient glow */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-[128px]"></div>
        </div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/termos-de-uso" element={<TermosDeUso />} />
              <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
              <Route path="/aviso-legal" element={<AvisoLegal />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </Router>
  );
}
