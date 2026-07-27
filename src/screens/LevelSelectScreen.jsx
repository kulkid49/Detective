import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { db } from '../db/db';
import { cases } from '../data/cases/index.js';
import { Lock, Unlock, CheckCircle } from 'lucide-react';

export default function LevelSelectScreen() {
  const navigate = useNavigate();
  const initProgression = useGameStore(state => state.initProgression);
  const setActiveCase = useGameStore(state => state.setActiveCase);
  const [levelData, setLevelData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      await initProgression();
      const loaded = [];
      for (const c of cases) {
        const progress = await db.progress.get(c.case_id);
        loaded.push({ ...c, progress });
      }
      setLevelData(loaded);
      setLoading(false);
    }
    load();
  }, [initProgression]);

  if (loading) return <div style={{ color: 'white', padding: '2rem' }}>Loading Case Files...</div>;

  return (
    <div className="archives-screen">
      <h2 className="screen-heading">
        AGENCY ARCHIVES
      </h2>
      <div className="archive-grid">
        {levelData.map((level) => {
          const status = level.progress?.status || 'locked';
          const isLocked = status === 'locked';
          const isCompleted = status === 'completed';

          return (
            <div 
              key={level.case_id}
              onClick={async () => {
                if (!isLocked) {
                  await setActiveCase(level.case_id);
                  navigate(`/case/${level.case_id}/briefing`);
                }
              }}
              style={{
                backgroundColor: isLocked ? 'rgba(0,0,0,0.5)' : 'var(--paper-white)',
                padding: '1.5rem',
                borderRadius: '4px',
                cursor: isLocked ? 'not-allowed' : 'pointer',
                border: isLocked ? '1px solid #333' : '1px solid #c7b89e',
                boxShadow: isLocked ? 'none' : '4px 4px 8px rgba(0,0,0,0.3)',
                color: isLocked ? '#666' : 'var(--typewriter-ink)',
                position: 'relative',
                transition: 'transform 0.2s',
                transform: isLocked ? 'none' : 'scale(1.02)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-typewriter-bold)', fontSize: '1.2rem', color: isLocked ? '#666' : 'var(--accent-red)' }}>
                  FILE #{level.level_number.toString().padStart(2, '0')}
                </span>
                {isLocked ? <Lock size={20} color="#666" /> : isCompleted ? <CheckCircle size={20} color="green" /> : <Unlock size={20} />}
              </div>
              
              <h3 style={{ fontFamily: 'var(--font-typewriter-bold)', fontSize: '1.4rem', marginBottom: '0.5rem', opacity: isLocked ? 0.5 : 1 }}>
                {isLocked ? "CLASSIFIED" : level.title.toUpperCase()}
              </h3>
              
              {!isLocked && (
                <>
                  <p style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    Type: {level.case_type} | Difficulty: {level.difficulty.toUpperCase()}
                  </p>
                  {isCompleted && level.progress?.score !== null && (
                    <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px dashed #ccc', fontFamily: 'var(--font-typewriter-bold)', color: 'green' }}>
                      RATING: {level.progress.score}/100
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
