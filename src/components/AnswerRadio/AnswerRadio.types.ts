import type { Pair } from 'types/app.types';

export interface Props {
  answer: Pair;
  disabled: boolean;
  error: boolean;
  onChange: () => void;
  selected: boolean;
  success: boolean;
}
