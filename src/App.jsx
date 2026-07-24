import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useGameStore } from './store/gameStore';
import HomeScreen from './screens/HomeScreen';
import BriefingScreen from './screens/BriefingScreen';
import CaseBoardScreen from './screens/CaseBoardScreen';
import InterrogationScreen from './screens/InterrogationScreen';
import AccusationScreen from './screens/AccusationScreen';
import DetectiveBadge from './components/DetectiveBadge';
import { Briefcase } from 'lucide-react';

function DeskLayout({ children }) {
  const activeCase = useGameStore(state => state.activeCase);

  return (
    <div className="desk-layout">
      <header className="top-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Briefcase size={24} />
          <h1 style={{ fontFamily: 'var(--font-typewriter-bold)', margin: 0, fontSize: '1.5rem' }}>
            {activeCase ? `CASE: ${activeCase.title.toUpperCase()}` : 'CASE FILES'}
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {activeCase && (
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontFamily: 'var(--font-typewriter)' }}>
              &larr; Back to Cabinet
            </Link>
          )}
          <DetectiveBadge />
        </div>
      </header>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <DeskLayout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/case/:id/briefing" element={<BriefingScreen />} />
          <Route path="/case/:id/board" element={<CaseBoardScreen />} />
          <Route path="/case/:id/interrogate/:characterId" element={<InterrogationScreen />} />
          <Route path="/case/:id/accuse" element={<AccusationScreen />} />
        </Routes>
      </DeskLayout>
    </Router>
  );
}

export default App;
