import create from 'zustand';
import wordsJson from 'data/words.json';

import type { Pair } from 'types/app.types';

interface AppStore {
  pairs: Array<Pair>;
  questionCount: number;
  selectedPair: Pair | null;
  generateSelectedPair: () => void;
}

const useAppStore = create<AppStore>()((set) => ({
  pairs: wordsJson,
  questionCount: 0,
  selectedPair: null,
  generateSelectedPair: () =>
    set(({ questionCount, pairs }) => ({
      questionCount: questionCount + 1,
      selectedPair: pairs[Math.floor(Math.random() * pairs.length)],
    })),
}));

export default useAppStore;
