import type { WordPair } from 'types/words.types';

export interface ContainerProps extends SharedProps {}

export interface Props extends SharedProps {
  answers: Array<WordPair>;
  selectedWordPair: WordPair;
}

interface SharedProps {}
