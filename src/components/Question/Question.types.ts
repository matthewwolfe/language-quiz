import type { Pair } from 'types/app.types';

export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  answers: Array<Pair>;
  onNext: () => void;
  onSubmit: () => void;
  revealAnswer: boolean;
  selectedAnswer: Pair | null;
  selectedWordPair: Pair;
  setSelectedAnswer: (answer: Pair) => void;
}

interface SharedProps {}
