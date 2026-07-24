import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { motion } from 'framer-motion';
import { Map, Users, FolderOpen, Clock, Edit3, Image as ImageIcon } from 'lucide-react';

export default function CaseBoardScreen() {
  const activeCase = useGameStore(state => state.activeCase);
  const progress = useGameStore(state => state.progress);
  const updateNotebook = useGameStore(state => state.updateNotebook);
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('suspects');

  if (!activeCase) return null;

  const tabs = [
    { id: 'suspects', icon: <Users />, label: 'Suspects' },
    { id: 'evidence', icon: <FolderOpen />, label: 'Evidence' },
    { id: 'locations', icon: <Map />, label: 'Locations' },
    { id: 'timeline', icon: <Clock />, label: 'Timeline' },
    { id: 'notebook', icon: <Edit3 />, label: 'Notebook' },
  ];

  return (
    <div className="corkboard-bg" style={{ position: 'relative', display: 'flex' }}>
      
      {/* Sidebar Navigation */}
      <div style={{ 
        width: '250px', 
        background: 'rgba(255,255,255,0.9)', 
        borderRight: '1px solid #ccc',
        boxShadow: '2px 0 10px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 20
      }}>
        <div style={{ padding: '2rem 1rem', borderBottom: '1px solid #ddd' }}>
          <h2 style={{ fontFamily: 'var(--font-typewriter-bold)', margin: 0, fontSize: '1.2rem' }}>CASE BOARD</h2>
          <p style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.85rem', color: '#666' }}>Organize your findings</p>
        </div>
        
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {tabs.map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1rem 1.5rem',
                border: 'none',
                background: activeTab === tab.id ? '#e8e4db' : 'transparent',
                borderLeft: activeTab === tab.id ? '4px solid var(--blood-red)' : '4px solid transparent',
                cursor: 'pointer',
                fontFamily: 'var(--font-typewriter-bold)',
                fontSize: '1rem',
                textAlign: 'left',
                color: '#333',
                transition: 'all 0.2s'
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        <div style={{ padding: '2rem 1rem' }}>
          <button 
            className="btn" 
            style={{ width: '100%', background: 'var(--blood-red)', color: 'white' }}
            onClick={() => navigate(`/case/${activeCase.case_id}/accuse`)}
          >
            REQUEST WARRANT
          </button>
        </div>
      </div>

      {/* Main Board Area */}
      <div style={{ flex: 1, padding: '3rem', overflowY: 'auto', position: 'relative' }}>
        
        {activeTab === 'suspects' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
            {activeCase.suspects.map(suspect => (
              <motion.div 
                key={suspect.id}
                className="polaroid"
                whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                onClick={() => navigate(`/case/${activeCase.case_id}/interrogate/${suspect.id}`)}
              >
                <div className="pushpin"></div>
                {suspect.portrait_image ? (
                  <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden' }}>
                    <img src={suspect.portrait_image} alt={suspect.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ) : (
                  <div style={{ width: '100%', aspectRatio: '1', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ImageIcon color="#999" size={48} />
                  </div>
                )}
                <div className="polaroid-caption">{suspect.name}</div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'evidence' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {activeCase.evidence.filter(e => progress.unlockedEvidence.includes(e.id)).map(ev => (
              <motion.div key={ev.id} className="paper-doc" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="pushpin"></div>
                <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>{ev.name}</h3>
                <p>{ev.description}</p>
                <small style={{ color: '#666', marginTop: '1rem', display: 'block' }}>Found: {ev.location_found}</small>
              </motion.div>
            ))}
            {activeCase.evidence.filter(e => progress.unlockedEvidence.includes(e.id)).length === 0 && (
              <div style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-typewriter)', fontSize: '1.2rem', padding: '2rem' }}>
                No evidence unlocked yet.
              </div>
            )}
          </div>
        )}

        {activeTab === 'notebook' && (
          <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <textarea 
               value={progress.notebook}
               onChange={(e) => updateNotebook(e.target.value)}
               placeholder="Write your case notes here..."
               style={{
                 width: '80%',
                 height: '80%',
                 background: 'var(--paper-white)',
                 border: 'none',
                 boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                 padding: '3rem',
                 fontFamily: 'var(--font-handwriting)',
                 fontSize: '1.5rem',
                 lineHeight: '2rem',
                 resize: 'none',
                 outline: 'none',
                 backgroundImage: 'linear-gradient(transparent, transparent 1.9rem, #ccc 1.9rem, #ccc 2rem)',
                 backgroundSize: '100% 2rem'
               }}
             />
          </div>
        )}

        {/* Other tabs omitted for brevity in scaffolding, can be fleshed out */}
        {(activeTab === 'locations' || activeTab === 'timeline') && (
          <div className="paper-doc">
            <h3>{activeTab.toUpperCase()}</h3>
            <p>Work in progress...</p>
          </div>
        )}

      </div>
    </div>
  );
}
