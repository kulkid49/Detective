import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { motion } from 'framer-motion';
import { Map, Users, FolderOpen, Clock, Edit3, Image as ImageIcon } from 'lucide-react';
import AlertModal from '../components/AlertModal';

export default function CaseBoardScreen() {
  const activeCase = useGameStore(state => state.activeCase);
  const progress = useGameStore(state => state.progress);
  const updateNotebook = useGameStore(state => state.updateNotebook);
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('suspects');
  const [modalConfig, setModalConfig] = useState({ isOpen: false, message: '' });

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
            style={{ width: '100%', marginBottom: '1rem', background: 'transparent', color: '#333', border: '1px solid #ccc' }}
            onClick={() => navigate(`/case/${activeCase.case_id}/briefing`)}
          >
            &larr; CASE BRIEFING
          </button>
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

        {activeTab === 'locations' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {activeCase.locations?.map(loc => (
              <motion.div key={loc.id} className="paper-doc" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <h3 style={{ borderBottom: '2px solid var(--blood-red)', paddingBottom: '0.5rem', marginTop: 0, fontFamily: 'var(--font-typewriter-bold)' }}>
                  {loc.name.toUpperCase()}
                </h3>
                {loc.real_world_reference && <p style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', margin: '0.5rem 0' }}>{loc.real_world_reference}</p>}
                <p style={{ marginTop: '1rem', lineHeight: '1.5' }}>{loc.description}</p>
                
                {loc.examinable_details && loc.examinable_details.length > 0 && (
                  <div style={{ marginTop: '2rem', borderTop: '1px dashed #ccc', paddingTop: '1rem' }}>
                    <h4 style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>INVESTIGATE:</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {loc.examinable_details.map(detail => {
                        const allUnlocked = detail.unlocks_evidence_ids?.every(id => progress.unlockedEvidence.includes(id));
                        return (
                          <button
                            key={detail.id}
                            className="btn"
                            style={{ 
                              textAlign: 'left', 
                              padding: '0.75rem 1rem', 
                              fontSize: '0.9rem',
                              background: allUnlocked ? '#e8e4db' : 'transparent',
                              color: 'var(--typewriter-ink)',
                              border: '1px solid #999',
                              opacity: allUnlocked ? 0.7 : 1,
                              display: 'flex',
                              gap: '0.5rem',
                              alignItems: 'flex-start'
                            }}
                            onClick={() => {
                              const store = useGameStore.getState();
                              if (detail.unlocks_evidence_ids) {
                                let newlyUnlocked = false;
                                detail.unlocks_evidence_ids.forEach(evId => {
                                  if (!store.progress.unlockedEvidence.includes(evId)) {
                                    store.unlockEvidence(evId);
                                    newlyUnlocked = true;
                                  }
                                });
                                if (newlyUnlocked) {
                                  setModalConfig({ isOpen: true, message: detail.text + "\n\n[ NEW EVIDENCE UNLOCKED! Check the Evidence tab. ]" });
                                } else {
                                  setModalConfig({ isOpen: true, message: detail.text });
                                }
                              } else {
                                setModalConfig({ isOpen: true, message: detail.text });
                              }
                            }}
                          >
                            <span style={{ fontWeight: 'bold' }}>{allUnlocked ? "✓" : "?"}</span>
                            <span>Examine {detail.id.replace(/_/g, ' ')}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
            {(!activeCase.locations || activeCase.locations.length === 0) && (
              <div style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-typewriter)', fontSize: '1.2rem', padding: '2rem' }}>
                No locations available.
              </div>
            )}
          </div>
        )}

        {activeTab === 'timeline' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', background: 'var(--paper-white)', border: '1px solid #ccc', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
          >
            <h2 style={{ textAlign: 'center', borderBottom: '2px solid #333', paddingBottom: '1rem', fontFamily: 'var(--font-typewriter-bold)', margin: '0 0 2rem 0' }}>
              CHRONOLOGY OF EVENTS
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {activeCase.timeline?.map((event, idx) => {
                const isKnown = event.public_knowledge !== false || 
                               (event.unlocks_with && progress.unlockedEvidence.includes(event.unlocks_with));
                
                return (
                  <div key={idx} style={{ display: 'flex', gap: '2rem', opacity: isKnown ? 1 : 0.6 }}>
                    <div style={{ width: '180px', flexShrink: 0, fontWeight: 'bold', borderRight: '2px solid var(--blood-red)', paddingRight: '1rem', textAlign: 'right', fontFamily: 'var(--font-typewriter-bold)', color: isKnown ? 'var(--typewriter-ink)' : '#999' }}>
                      {event.time}
                    </div>
                    <div style={{ flex: 1, fontFamily: 'var(--font-typewriter)', fontStyle: isKnown ? 'normal' : 'italic', color: isKnown ? 'var(--typewriter-ink)' : '#666' }}>
                      {isKnown ? event.event : "[ UNDISCLOSED EVENT - Information missing or concealed ]"}
                    </div>
                  </div>
                )
              })}
              {(!activeCase.timeline || activeCase.timeline.length === 0) && (
                <div style={{ textAlign: 'center', color: '#666' }}>No timeline data available.</div>
              )}
            </div>
          </motion.div>
        )}

      </div>

      <AlertModal 
        isOpen={modalConfig.isOpen} 
        message={modalConfig.message} 
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })} 
      />
    </div>
  );
}
