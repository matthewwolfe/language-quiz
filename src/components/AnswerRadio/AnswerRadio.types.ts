import type { WordPair } from 'types/words.types';

export interface Props {
  answer: WordPair;
  onChange: () => void;
  selected: boolean;
}
