import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useGameStore } from './store/gameStore';
import LandingScreen from './screens/LandingScreen';
import LevelSelectScreen from './screens/LevelSelectScreen';
import BriefingScreen from './screens/BriefingScreen';
import CaseBoardScreen from './screens/CaseBoardScreen';
import InterrogationScreen from './screens/InterrogationScreen';
import AccusationScreen from './screens/AccusationScreen';
import DetectiveBadge from './components/DetectiveBadge';
import BackgroundMusic from './components/BackgroundMusic';
import { Briefcase } from 'lucide-react';

function DeskLayout({ children, showTopBar = true }) {
  const activeCase = useGameStore(state => state.activeCase);
  const location = useLocation();
  const isCaseRoute = location.pathname.startsWith('/case/');
  const backLinkTarget = isCaseRoute ? '/archives' : '/';
  const backLinkLabel = isCaseRoute ? 'Back to Archives' : 'Back to Title';

  return (
    <div className="desk-layout">
      {showTopBar && (
        <header className="top-bar">
          <div className="case-title-wrap">
            <Briefcase size={24} />
            <h1 className="case-title">
              {activeCase ? `CASE: ${activeCase.title.toUpperCase()}` : 'CASE FILES'}
            </h1>
          </div>
          <div className="top-actions">
            {location.pathname !== '/' && (
              <Link className="top-link" to={backLinkTarget}>
                &larr; {backLinkLabel}
              </Link>
            )}
            <DetectiveBadge />
          </div>
        </header>
      )}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <DeskLayout showTopBar={!isLanding}>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/archives" element={<LevelSelectScreen />} />
        <Route path="/case/:id/briefing" element={<BriefingScreen />} />
        <Route path="/case/:id/board" element={<CaseBoardScreen />} />
        <Route path="/case/:id/interrogate/:characterId" element={<InterrogationScreen />} />
        <Route path="/case/:id/accuse" element={<AccusationScreen />} />
      </Routes>
    </DeskLayout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
      <BackgroundMusic />
    </Router>
  );
}

export default App;
