import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LiquidGlassDefs } from './components/LiquidGlassDefs';

// Pages - Home permanece estática para carregamento instantâneo
import { Home } from './pages/Home';

// Dynamic imports para rotas secundárias (reduz o bundle de entrada)
const TermosDeUso = lazy(() => import('./pages/TermosDeUso').then(m => ({ default: m.TermosDeUso })));
const PoliticaPrivacidade = lazy(() => import('./pages/PoliticaPrivacidade').then(m => ({ default: m.PoliticaPrivacidade })));
const PoliticaCookies = lazy(() => import('./pages/PoliticaCookies').then(m => ({ default: m.PoliticaCookies })));
const AvisoLegal = lazy(() => import('./pages/AvisoLegal').then(m => ({ default: m.AvisoLegal })));
const EstudoPage = lazy(() => import('./pages/EstudoPage').then(m => ({ default: m.EstudoPage })));
const AntonioRomanoPage = lazy(() => import('./pages/AntonioRomanoPage').then(m => ({ default: m.AntonioRomanoPage })));
const FamiliaPage = lazy(() => import('./pages/FamiliaPage').then(m => ({ default: m.FamiliaPage })));

import { MetaPixelRouterListener } from './components/MetaPixelRouterListener';
import { GoogleAnalyticsRouterListener } from './components/GoogleAnalyticsRouterListener';
import { initClarity } from './lib/clarity';

// Loader leve para transições de rotas lazy
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh] w-full" aria-live="polite" aria-busy="true">
    <div className="w-8 h-8 border-2 border-accent-primary/20 border-t-accent-primary rounded-full animate-spin"></div>
  </div>
);

// Layout do site oficial (com Navbar e Footer)
function MainLayout() {
  return (
    <div className="relative z-10 flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

// Layout limpo (sem Navbar e Footer)
function CleanLayout() {
  return (
    <div className="relative z-10 flex flex-col min-h-screen overflow-x-hidden">
      <div className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const clarityId = import.meta.env.VITE_CLARITY_ID;
    if (clarityId) {
      initClarity(clarityId);
    }
  }, []);

  return (
    <Router>
      <LiquidGlassDefs />
      <MetaPixelRouterListener />
      <GoogleAnalyticsRouterListener />
      <div className="min-h-screen bg-bg-primary text-text-primary font-sans transition-colors duration-300 overflow-x-hidden">
        {/* Background ambient glow contained inside overflow-hidden */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-[128px]"></div>
        </div>
        
        <Routes>
          {/* Rota com Layout Limpo */}
          <Route element={<CleanLayout />}>
            <Route path="/antonio-romano" element={<AntonioRomanoPage />} />
            <Route path="/familia" element={<FamiliaPage />} />
          </Route>

          {/* Rotas com o Layout Principal do Site */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/estudo" element={<EstudoPage />} />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
            <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
