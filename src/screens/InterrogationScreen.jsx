import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { db } from '../db/db';
import { useLiveQuery } from 'dexie-react-hooks';
import { motion } from 'framer-motion';

export default function InterrogationScreen() {
  const { characterId, id: caseId } = useParams();
  const navigate = useNavigate();
  const activeCase = useGameStore(state => state.activeCase);
  const progress = useGameStore(state => state.progress);
  
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const character = activeCase?.suspects.find(s => s.id === characterId) || 
                    activeCase?.witnesses.find(w => w.id === characterId);

  const transcripts = useLiveQuery(() => 
    db.transcripts.where({ case_id: caseId, characterId }).sortBy('timestamp'),
    [caseId, characterId]
  ) || [];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcripts, isTyping]);

  if (!activeCase || !character) return null;

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setIsTyping(true);

    // Save user message
    await db.transcripts.add({
      case_id: caseId,
      characterId,
      role: 'player',
      content: userMsg,
      timestamp: Date.now()
    });

    try {
      const response = await fetch('/api/interrogate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          character,
          caseContext: { title: activeCase.title, summary: activeCase.police_briefing.summary },
          conversationHistory: transcripts,
          presentedEvidence: null,
          userMessage: userMsg
        })
      });

      if (!response.ok) throw new Error("Failed to get response");
      const data = await response.json();

      // Save character response
      await db.transcripts.add({
        case_id: caseId,
        characterId,
        role: 'assistant',
        content: data.reply,
        timestamp: Date.now()
      });
    } catch (err) {
      console.error(err);
      await db.transcripts.add({
        case_id: caseId,
        characterId,
        role: 'assistant',
        content: "*The suspect refuses to answer.* (Error connecting to server)",
        timestamp: Date.now()
      });
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100%', background: '#1a1a1a', color: '#e0e0e0' }}>
      
      {/* Subject Column */}
      <div style={{ 
        width: '400px', 
        padding: '3rem', 
        borderRight: '1px solid #333',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #222, #111)'
      }}>
        <div className="polaroid" style={{ transform: 'rotate(-2deg)' }}>
          <div style={{ width: '250px', height: '250px', background: '#444' }}></div>
          <div className="polaroid-caption">{character.name}</div>
        </div>
        <div style={{ marginTop: '3rem', fontFamily: 'var(--font-typewriter)', fontSize: '0.9rem', color: '#888' }}>
          <strong>SUBJECT:</strong> {character.name.toUpperCase()}<br/>
          <strong>ROLE:</strong> {character.role_in_victims_life || character.connection_to_case}
        </div>
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
              marginBottom: '1rem',
              color: t.role === 'player' ? 'var(--blood-red)' : 'var(--typewriter-ink)'
            }}>
              <strong>{t.role === 'player' ? 'DETECTIVE' : character.name.toUpperCase()}:</strong> {t.content}
            </div>
          ))}
          {isTyping && (
            <div style={{ color: '#666', fontStyle: 'italic' }}>
              {character.name} is speaking...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: '2rem 3rem', background: 'rgba(0,0,0,0.05)', borderTop: '1px solid #ccc' }}>
          <form onSubmit={handleSend} style={{ display: 'flex', gap: '1rem' }}>
            <input 
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question..."
              style={{
                flex: 1,
                padding: '1rem',
                fontFamily: 'var(--font-typewriter)',
                fontSize: '1.1rem',
                border: '1px solid #999',
                background: 'white',
                outline: 'none'
              }}
            />
            <button type="submit" className="btn" disabled={isTyping}>ASK</button>
          </form>
        </div>

      </div>
    </div>
  );
}
