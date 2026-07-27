import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { db } from '../db/db';
import { useLiveQuery } from 'dexie-react-hooks';

export default function InterrogationScreen() {
  const { characterId, id: caseId } = useParams();
  const navigate = useNavigate();
  const activeCase = useGameStore(state => state.activeCase);
  const progress = useGameStore(state => state.progress);
  const unlockEvidence = useGameStore(state => state.unlockEvidence);
  
  const chatEndRef = useRef(null);

  const character = activeCase?.suspects.find(s => s.id === characterId) || 
                    activeCase?.witnesses.find(w => w.id === characterId);

  const dialogueTree = activeCase?.dialogue?.[characterId] || [];

  const transcripts = useLiveQuery(() => 
    db.transcripts.where({ case_id: caseId, characterId }).sortBy('timestamp'),
    [caseId, characterId]
  ) || [];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcripts]);

  if (!activeCase || !character) return null;

  // Determine which topics have already been asked
  const askedTopicIds = new Set(transcripts.filter(t => t.role === 'player' && t.topic_id).map(t => t.topic_id));

  // Determine available topics to show
  const availableTopics = dialogueTree.filter(topic => {
    // Hide if already asked (optional, but usually good so they don't spam it. Or keep it? We'll hide it for cleaner UI)
    if (askedTopicIds.has(topic.topic_id)) return false;

    // Check evidence requirement
    if (topic.requires_evidence_id && !progress.unlockedEvidence.includes(topic.requires_evidence_id)) return false;

    // Check topic prerequisites
    if (topic.requires_topic_ids && topic.requires_topic_ids.length > 0) {
      const hasAllPrereqs = topic.requires_topic_ids.every(id => askedTopicIds.has(id));
      if (!hasAllPrereqs) return false;
    }

    return true;
  });

  const handleTopicClick = async (topic) => {
    // 1. Log player question
    await db.transcripts.add({
      case_id: caseId,
      characterId,
      role: 'player',
      content: topic.topic_label,
      topic_id: topic.topic_id,
      timestamp: Date.now()
    });

    // 2. Log character response
    await db.transcripts.add({
      case_id: caseId,
      characterId,
      role: 'assistant',
      content: topic.response,
      reaction: topic.reaction,
      timestamp: Date.now() + 10 // slightly after
    });

    // 3. Unlock any evidence
    if (topic.unlocks_evidence_ids) {
      for (const evId of topic.unlocks_evidence_ids) {
        await unlockEvidence(evId);
      }
    }
  };

  return (
    <div className="interrogation-screen">
      
      {/* Subject Column */}
      <div className="subject-panel">
        <div className="polaroid" style={{ transform: 'rotate(-2deg)' }}>
          {character.portrait_image ? (
            <img src={character.portrait_image} alt={character.name} style={{ width: '250px', height: '250px', objectFit: 'cover' }} />
          ) : (
            <div style={{ width: '250px', height: '250px', background: '#444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: '#666', fontFamily: 'var(--font-typewriter-bold)' }}>
              {character.name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
          <div className="polaroid-caption">{character.name}</div>
        </div>
        <div style={{ marginTop: '3rem', fontFamily: 'var(--font-typewriter)', fontSize: '0.9rem', color: '#888' }}>
          <strong>SUBJECT:</strong> {character.name.toUpperCase()}<br/>
          <strong>ROLE:</strong> {character.role_in_victims_life || character.connection_to_case}
        </div>
        <button 
          className="btn"
          style={{ marginTop: 'auto', width: '100%' }}
          onClick={() => navigate(`/case/${caseId}/board`)}
        >
          &larr; BACK TO BOARD
        </button>
      </div>

      {/* Transcript Column (Stenographer Notepad Style) */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        background: 'var(--paper-white)',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '100% 2rem',
        color: 'var(--typewriter-ink)'
      }}>
        
        <div style={{ 
          flex: 1, 
          padding: '2rem 3rem', 
          overflowY: 'auto',
          fontFamily: 'var(--font-typewriter)',
          lineHeight: '2rem',
          fontSize: '1.1rem'
        }}>
          {transcripts.map((t) => (
            <div key={t.id} style={{ 
              marginBottom: '1.5rem',
              color: t.role === 'player' ? 'var(--blood-red)' : 'var(--typewriter-ink)'
            }}>
              <strong>{t.role === 'player' ? 'DETECTIVE' : character.name.toUpperCase()}:</strong> 
              {t.role === 'assistant' && t.reaction && <em style={{color: '#666'}}> [{t.reaction}] </em>}
              {t.content}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area (Dialogue Tree Buttons) */}
        <div style={{ padding: '2rem 3rem', background: 'rgba(0,0,0,0.05)', borderTop: '1px solid #ccc', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h4 style={{ fontFamily: 'var(--font-typewriter-bold)', margin: '0 0 1rem 0', color: '#666' }}>AVAILABLE TOPICS:</h4>
          {availableTopics.length === 0 ? (
            <div style={{ fontStyle: 'italic', color: '#999' }}>No more topics to discuss right now. Find more evidence!</div>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {availableTopics.map(topic => (
                <button 
                  key={topic.topic_id}
                  onClick={() => handleTopicClick(topic)}
                  className="btn"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', backgroundColor: 'var(--paper-white)', color: 'var(--typewriter-ink)', border: '1px solid #999', borderRadius: '4px', cursor: 'pointer' }}
                >
                  {topic.topic_label}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
