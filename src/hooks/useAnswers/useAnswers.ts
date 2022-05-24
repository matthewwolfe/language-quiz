import { useMemo } from 'react';
import { useWordsStore } from 'stores/useWordsStore';
import { randomFromRange } from 'utils/randomFromRange';

import type { WordPair } from 'types/words.types';

function useAnswers(correctAnswer: WordPair | null) {
  const { wordPairs } = useWordsStore();

  const answers = useMemo(() => {
    if (!correctAnswer) {
      return [];
    }

    const randomAnswers = Array.from(Array(3)).map(() => {
      const randomIndex = randomFromRange(1, wordPairs.length);
      return wordPairs[randomIndex];
    });

    return [...randomAnswers, correctAnswer]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }, [correctAnswer, wordPairs]);

  return {
    answers,
  };
}

export default useAnswers;
