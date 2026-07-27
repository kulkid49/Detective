import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { motion, AnimatePresence } from 'framer-motion';
import AlertModal from '../components/AlertModal';

export default function AccusationScreen() {
  const activeCase = useGameStore(state => state.activeCase);
  const navigate = useNavigate();
  
  const [selectedSuspect, setSelectedSuspect] = useState('');
  const [selectedEvidence, setSelectedEvidence] = useState([]);
  const [stamp, setStamp] = useState(null); // 'APPROVED' or 'REJECTED'
  const [revealText, setRevealText] = useState('');
  const [modalConfig, setModalConfig] = useState({ isOpen: false, message: '' });

  if (!activeCase) return null;

  const toggleEvidence = (evId) => {
    if (selectedEvidence.includes(evId)) {
      setSelectedEvidence(selectedEvidence.filter(id => id !== evId));
    } else {
      setSelectedEvidence([...selectedEvidence, evId]);
    }
  };

  const submitWarrant = async () => {
    if (!selectedSuspect) {
      setModalConfig({ isOpen: true, message: "You must select a primary suspect before submitting a warrant." });
      return;
    }
    
    const isCorrect = selectedSuspect === activeCase.solution.culprit_id;
    // Calculate a rough score based on getting the suspect and evidence right
    let score = isCorrect ? 50 : 0;
    const correctEv = selectedEvidence.filter(e => activeCase.solution.key_evidence_chain.includes(e));
    score += Math.floor((correctEv.length / Math.max(1, activeCase.solution.key_evidence_chain.length)) * 50);

    if (isCorrect) {
      setStamp('APPROVED');
      setRevealText(activeCase.solution.full_explanation);
      await useGameStore.getState().submitAccusation(score);
    } else {
      setStamp('REJECTED');
      setRevealText("The District Attorney threw out your case. You got the wrong person, Detective.");
    }
  };

  return (
    <div className="accusation-screen scroll-screen">
      
      <div className="paper-doc accusation-doc">
        
        <h2 style={{ fontFamily: 'var(--font-typewriter-bold)', textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', borderBottom: '2px solid #000', paddingBottom: '1rem' }}>
          WARRANT REQUEST
        </h2>

        {!stamp ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div>
              <label style={{ fontWeight: 'bold' }}>1. PRIMARY SUSPECT:</label>
              <select 
                value={selectedSuspect} 
                onChange={e => setSelectedSuspect(e.target.value)}
                style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', fontFamily: 'var(--font-typewriter)', fontSize: '1.2rem', background: 'transparent', border: 'none', borderBottom: '1px dashed #000', outline: 'none' }}
              >
                <option value="">Select a suspect...</option>
                {activeCase.suspects.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ fontWeight: 'bold' }}>2. KEY EVIDENCE:</label>
              <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {activeCase.evidence.map(ev => (
                  <label key={ev.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      checked={selectedEvidence.includes(ev.id)}
                      onChange={() => toggleEvidence(ev.id)}
                      style={{ width: '1.2rem', height: '1.2rem' }}
                    />
                    {ev.name}
                  </label>
                ))}
              </div>
            </div>

            <div className="warrant-actions">
              <button 
                className="btn" 
                onClick={() => navigate(`/case/${activeCase.case_id}/board`)}
                style={{ fontSize: '1.2rem', padding: '1rem 3rem', background: 'transparent' }}
              >
                &larr; BACK
              </button>
              <button 
                className="btn" 
                onClick={submitWarrant}
                style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
              >
                SUBMIT TO D.A.
              </button>
            </div>
          </div>
        ) : (
          <div style={{ marginTop: '2rem', minHeight: '300px' }}>
            <h3 style={{ marginBottom: '1rem' }}>CASE CLOSED</h3>
            <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8' }}>{revealText}</p>
            
            <button className="btn" onClick={() => navigate('/')} style={{ marginTop: '3rem' }}>
              RETURN TO DESK
            </button>
          </div>
        )}

        <AnimatePresence>
          {stamp && (
            <motion.div 
              initial={{ scale: 3, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              className="stamp"
              style={{
                top: '50px',
                right: '50px',
                color: stamp === 'APPROVED' ? '#2e7d32' : 'var(--stamp-red)',
                borderColor: stamp === 'APPROVED' ? '#2e7d32' : 'var(--stamp-red)',
              }}
            >
              {stamp}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      <AlertModal 
        isOpen={modalConfig.isOpen} 
        message={modalConfig.message} 
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })} 
      />
    </div>
  );
}
