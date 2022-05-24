import type { WordPair } from 'types/words.types';

export interface Props {
  answer: WordPair;
  disabled: boolean;
  error: boolean;
  onChange: () => void;
  selected: boolean;
  success: boolean;
}
