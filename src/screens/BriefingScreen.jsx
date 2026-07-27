import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, index));
      index++;
      if (index > text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 15); // Speed of typing
    
    return () => clearInterval(interval);
  }, [text]); // Removed onComplete to prevent restart on parent re-render

  return <span className="typewriter-text">{displayedText}</span>;
};

export default function BriefingScreen() {
  const activeCase = useGameStore(state => state.activeCase);
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  if (!activeCase) {
    return <div style={{ color: 'white', padding: '2rem' }}>Loading case...</div>;
  }

  const { title, police_briefing } = activeCase;

  return (
    <div className="briefing-screen scroll-screen">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className="paper-doc briefing-doc"
      >
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '2px solid #ccc', paddingBottom: '1rem' }}>
          CASE BRIEFING: {title.toUpperCase()}
        </h2>

        <div style={{ marginBottom: '2rem' }}>
          <strong>SUMMARY:</strong><br/>
          <TypewriterText text={police_briefing.summary} onComplete={() => setShowButton(true)} />
        </div>

        {showButton && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="briefing-details"
          >
            <div style={{ flex: 1 }}>
              <strong>VICTIM / TARGET:</strong><br/>
              Name: {police_briefing.victim_or_target.name}<br/>
              Age: {police_briefing.victim_or_target.age}<br/>
              Occupation: {police_briefing.victim_or_target.occupation}<br/>
              <br/>
              <em>Background:</em> {police_briefing.victim_or_target.background}
            </div>
            <div style={{ flex: 1 }}>
              <strong>INCIDENT DETAILS:</strong><br/>
              Location: {police_briefing.incident_details.location}<br/>
              Time: {police_briefing.incident_details.time_estimate}<br/>
              {police_briefing.incident_details.cause_of_death_or_method && (
                <>Method: {police_briefing.incident_details.cause_of_death_or_method}<br/></>
              )}
              Scene State: {police_briefing.incident_details.initial_state_of_scene}
            </div>
          </motion.div>
        )}

        {showButton && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn" onClick={() => navigate(`/case/${activeCase.case_id}/board`)}>
              ACCEPT CASE & OPEN BOARD
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
