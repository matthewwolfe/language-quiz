import { useMemo } from 'react';
import { useAppStore } from 'stores/useAppStore';
import { randomFromRange } from 'utils/randomFromRange';

import type { Pair } from 'types/app.types';

function useAnswers(correctAnswer: Pair | null) {
  const { pairs } = useAppStore();

  const answers = useMemo(() => {
    if (!correctAnswer) {
      return [];
    }

    const randomAnswers = randomFromRange({
      min: 1,
      max: pairs.length,
      omit: [pairs.findIndex((pair) => pair === correctAnswer)],
      size: 3,
    }).map((index) => pairs[index]);

    return [...randomAnswers, correctAnswer]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }, [correctAnswer, pairs]);

  return {
    answers,
  };
}

export default useAnswers;
