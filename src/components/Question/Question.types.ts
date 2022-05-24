import type { WordPair } from 'types/words.types';

export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  answers: Array<WordPair>;
  onNext: () => void;
  onSubmit: () => void;
  revealAnswer: boolean;
  selectedAnswer: WordPair | null;
  selectedWordPair: WordPair;
  setSelectedAnswer: (answer: WordPair) => void;
}

interface SharedProps {}
