import { Shield } from 'lucide-react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db/db';

export default function DetectiveBadge() {
  const achievements = useLiveQuery(() => db.achievements.toArray(), []) || [];
  
  // Basic rank logic based on achievements count
  let rank = "Rookie";
  let color = "#cd7f32"; // Bronze
  
  if (achievements.length >= 3) {
    rank = "Detective";
    color = "#c0c0c0"; // Silver
  }
  if (achievements.length >= 10) {
    rank = "Chief Inspector";
    color = "#ffd700"; // Gold
  }

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '0.5rem',
      background: 'rgba(255,255,255,0.1)',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      border: `1px solid ${color}`,
      boxShadow: `0 0 10px ${color}33`
    }}>
      <Shield size={20} color={color} />
      <span style={{ 
        fontFamily: 'var(--font-sans)', 
        fontWeight: 'bold',
        fontSize: '0.85rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: color
      }}>
        {rank}
      </span>
    </div>
  );
}
