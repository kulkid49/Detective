import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db/db';
import { useGameStore } from '../store/gameStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, FolderPlus, Loader2 } from 'lucide-react';

export default function HomeScreen() {
  const cases = useLiveQuery(() => db.cases.toArray(), []) || [];
  const navigate = useNavigate();
  const generateNewCase = useGameStore(state => state.generateNewCase);
  const setActiveCase = useGameStore(state => state.setActiveCase);
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  const [form, setForm] = useState({
    type: 'murder',
    difficulty: 'medium',
    setting: '1940s Los Angeles'
  });

  const handleLoadCase = async (caseId) => {
    await setActiveCase(caseId);
    navigate(`/case/${caseId}/board`);
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    try {
      const caseId = await generateNewCase(form.type, form.difficulty, form.setting);
      navigate(`/case/${caseId}/briefing`);
    } catch (err) {
      alert("Failed to generate case. Check console or API key.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      height: '100%',
      padding: '2rem'
    }}>
      
      <div style={{
        background: 'rgba(0,0,0,0.6)',
        padding: '3rem',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8), 0 10px 30px rgba(0,0,0,0.5)',
        width: '100%',
        maxWidth: '800px',
        border: '2px solid #4a3b2c' // filing cabinet metal look
      }}>
        <h2 style={{ 
          fontFamily: 'var(--font-typewriter-bold)', 
          color: '#fff', 
          textAlign: 'center', 
          marginBottom: '2rem',
          letterSpacing: '2px' 
        }}>
          AGENCY FILING CABINET
        </h2>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          {/* New Case Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(!showForm)}
            style={{
              background: 'var(--manila-folder)',
              width: '200px',
              height: '140px',
              borderRadius: '5px 15px 5px 5px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '2px 5px 10px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
          >
            <div style={{ 
              position: 'absolute', top: '-10px', left: 0, width: '60px', height: '15px', 
              background: 'var(--manila-folder)', borderRadius: '5px 5px 0 0'
            }} />
            <FolderPlus size={32} color="var(--typewriter-ink)" />
            <span style={{ fontFamily: 'var(--font-typewriter-bold)', marginTop: '0.5rem', fontWeight: 'bold' }}>
              NEW CASE
            </span>
          </motion.div>

          {/* Existing Cases */}
          {cases.map((c) => (
            <motion.div 
              key={c.case_id}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLoadCase(c.case_id)}
              style={{
                background: 'var(--manila-folder)',
                width: '200px',
                height: '140px',
                borderRadius: '5px 15px 5px 5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '2px 5px 10px rgba(0,0,0,0.3)',
                position: 'relative',
                padding: '1rem',
                textAlign: 'center'
              }}
            >
              <div style={{ 
                position: 'absolute', top: '-10px', left: '20px', width: '60px', height: '15px', 
                background: 'var(--manila-folder)', borderRadius: '5px 5px 0 0'
              }} />
              <Folder size={32} color="var(--typewriter-ink)" />
              <span style={{ 
                fontFamily: 'var(--font-typewriter)', 
                marginTop: '0.5rem',
                fontSize: '0.85rem',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {c.title}
              </span>
            </motion.div>
          ))}

        </div>

        <AnimatePresence>
          {showForm && (
            <motion.form 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              onSubmit={handleGenerate}
              style={{ 
                marginTop: '2rem', 
                padding: '1.5rem', 
                background: 'rgba(255,255,255,0.1)', 
                borderRadius: '4px',
                color: 'white',
                fontFamily: 'var(--font-typewriter)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <h3 style={{ margin: 0 }}>Case Parameters</h3>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label>Type:</label>
                  <select 
                    value={form.type} 
                    onChange={e => setForm({...form, type: e.target.value})}
                    style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem', fontFamily: 'var(--font-typewriter)', background: '#fff' }}
                  >
                    <option value="murder">Murder</option>
                    <option value="heist">Heist</option>
                    <option value="disappearance">Disappearance</option>
                  </select>
                </div>
                <div style={{ flex: 1 }}>
                  <label>Difficulty:</label>
                  <select 
                    value={form.difficulty} 
                    onChange={e => setForm({...form, difficulty: e.target.value})}
                    style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem', fontFamily: 'var(--font-typewriter)', background: '#fff' }}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>

              <div>
                <label>Setting (City/Era/Tone):</label>
                <input 
                  type="text" 
                  value={form.setting} 
                  onChange={e => setForm({...form, setting: e.target.value})}
                  style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem', fontFamily: 'var(--font-typewriter)', background: '#fff', border: 'none' }}
                />
              </div>

              <button 
                type="submit" 
                className="btn" 
                disabled={isGenerating}
                style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}
              >
                {isGenerating ? <Loader2 size={18} className="spin" /> : "Request File"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
