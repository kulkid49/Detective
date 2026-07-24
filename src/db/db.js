import Dexie from 'dexie';

export const db = new Dexie('CaseFilesDB');

db.version(1).stores({
  cases: 'case_id, title, case_type, difficulty, setting', // Main case definitions
  progress: 'case_id, unlockedEvidence, discoveredTimeline, notebook, score', // Player progress per case
  transcripts: '++id, case_id, characterId, role, content, timestamp', // Interrogation transcripts
  achievements: 'id, unlockedAt' // Global achievements
});

db.version(2).stores({
  // No longer caching cases in DB since they are static
  progress: 'case_id, status, score, completed_at', // Player progress and unlock state per case
  transcripts: '++id, case_id, characterId, role, content, timestamp, unlocks_evidence_ids, unlocks_topic_ids', 
  achievements: 'id, unlockedAt'
});
