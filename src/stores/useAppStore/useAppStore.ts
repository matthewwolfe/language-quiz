import { create } from 'zustand';

import type { Pair } from 'types/app.types';

interface AppStore {
  pairs: Pair[];
  questionCount: number;
  selectedPair: Pair | null;
  generateSelectedPair: () => void;
  setPairs: (pairs: Pair[]) => void;
}

const useAppStore = create<AppStore>()((set) => ({
  pairs: [],
  questionCount: 0,
  selectedPair: null,
  generateSelectedPair: () =>
    set(({ questionCount, pairs }) => ({
      questionCount: questionCount + 1,
      selectedPair: pairs[Math.floor(Math.random() * pairs.length)],
    })),
  setPairs: (pairs) => set({ questionCount: 0, pairs }),
}));

export default useAppStore;
