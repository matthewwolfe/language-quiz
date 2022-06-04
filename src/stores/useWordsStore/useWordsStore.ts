import create from 'zustand';
import wordsJson from 'data/words.json';

import type { Pair } from 'types/app.types';

interface WordsStore {
  wordPairs: Array<Pair>;
  questionCount: number;
  selectedWordPair: Pair | null;
  generateSelectedWordPair: () => void;
}

const useWordsStore = create<WordsStore>()((set) => ({
  wordPairs: wordsJson,
  questionCount: 0,
  selectedWordPair: null,
  generateSelectedWordPair: () =>
    set(({ questionCount, wordPairs }) => ({
      questionCount: questionCount + 1,
      selectedWordPair: wordPairs[Math.floor(Math.random() * wordPairs.length)],
    })),
}));

export default useWordsStore;
