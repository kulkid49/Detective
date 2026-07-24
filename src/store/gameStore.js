import { create } from 'zustand';
import { db } from '../db/db';

export const useGameStore = create((set, get) => ({
  activeCase: null,
  progress: {
    unlockedEvidence: [],
    discoveredTimeline: [],
    notebook: '',
    hintsUsed: 0,
  },
  isLoading: false,
  error: null,

  setActiveCase: async (caseId) => {
    set({ isLoading: true, error: null });
    try {
      const caseData = await db.cases.get(caseId);
      const progressData = await db.progress.get(caseId) || {
        case_id: caseId,
        unlockedEvidence: [],
        discoveredTimeline: [],
        notebook: '',
        hintsUsed: 0,
      };
      
      set({ activeCase: caseData, progress: progressData, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  generateNewCase: async (type, difficulty, setting) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('/api/generate-case', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, difficulty, setting })
      });

      if (!response.ok) throw new Error('Failed to generate case');
      
      const newCase = await response.json();
      
      // Save to IndexedDB
      await db.cases.put(newCase);
      
      // Initialize progress
      const initialProgress = {
        case_id: newCase.case_id,
        unlockedEvidence: [],
        discoveredTimeline: [],
        notebook: '',
        hintsUsed: 0,
      };
      await db.progress.put(initialProgress);

      set({ activeCase: newCase, progress: initialProgress, isLoading: false });
      return newCase.case_id;
    } catch (err) {
      set({ error: err.message, isLoading: false });
      throw err;
    }
  },

  updateNotebook: async (text) => {
    const { activeCase, progress } = get();
    if (!activeCase) return;
    
    const newProgress = { ...progress, notebook: text };
    set({ progress: newProgress });
    await db.progress.put(newProgress);
  },

  unlockEvidence: async (evidenceId) => {
    const { activeCase, progress } = get();
    if (!activeCase || progress.unlockedEvidence.includes(evidenceId)) return;
    
    const newProgress = { 
      ...progress, 
      unlockedEvidence: [...progress.unlockedEvidence, evidenceId] 
    };
    set({ progress: newProgress });
    await db.progress.put(newProgress);
  },
  
  useHint: async () => {
    const { activeCase, progress } = get();
    if (!activeCase || progress.hintsUsed >= 3) return;
    
    const newProgress = {
      ...progress,
      hintsUsed: progress.hintsUsed + 1
    };
    set({ progress: newProgress });
    await db.progress.put(newProgress);
  }
}));
