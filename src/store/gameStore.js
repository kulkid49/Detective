import { create } from 'zustand';
import { db } from '../db/db';
import { cases } from '../data/cases/index.js';

export const useGameStore = create((set, get) => ({
  activeCase: null,
  progress: {
    status: 'locked', // 'locked', 'unlocked', 'completed'
    score: null,
    completed_at: null,
    unlockedEvidence: [],
    discoveredTimeline: [],
    notebook: '',
    hintsUsed: 0,
  },
  allCases: cases,
  isLoading: false,
  error: null,

  // Initialize DB for all levels on first boot
  initProgression: async () => {
    const case1Progress = await db.progress.get(cases[0].case_id);
    if (!case1Progress) {
      // First boot: unlock level 1, lock the rest
      for (let i = 0; i < cases.length; i++) {
        await db.progress.put({
          case_id: cases[i].case_id,
          status: i === 0 ? 'unlocked' : 'locked',
          score: null,
          completed_at: null,
          unlockedEvidence: cases[i].evidence.filter(e => e.unlocked_by_default).map(e => e.id),
          discoveredTimeline: [],
          notebook: '',
          hintsUsed: 0,
        });
      }
    }
  },

  setActiveCase: async (caseId) => {
    set({ isLoading: true, error: null });
    try {
      const caseData = cases.find(c => c.case_id === caseId);
      if (!caseData) throw new Error("Case not found");

      let progressData = await db.progress.get(caseId);
      if (!progressData) {
        progressData = {
          case_id: caseId,
          status: 'locked',
          score: null,
          completed_at: null,
          unlockedEvidence: [],
          discoveredTimeline: [],
          notebook: '',
          hintsUsed: 0,
        };
      }
      
      if (progressData.status === 'locked') {
        throw new Error("This case is locked.");
      }

      set({ activeCase: caseData, progress: progressData, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  submitAccusation: async (score) => {
    const { activeCase, progress } = get();
    if (!activeCase) return;

    // Mark current level as completed
    const newProgress = { ...progress, status: 'completed', score, completed_at: Date.now() };
    set({ progress: newProgress });
    await db.progress.put(newProgress);

    // Unlock next level
    const currentIndex = cases.findIndex(c => c.case_id === activeCase.case_id);
    if (currentIndex >= 0 && currentIndex < cases.length - 1) {
      const nextCase = cases[currentIndex + 1];
      const nextProgress = await db.progress.get(nextCase.case_id);
      if (nextProgress && nextProgress.status === 'locked') {
        await db.progress.put({ ...nextProgress, status: 'unlocked' });
      }
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
