import { useCallback, useState } from 'react';
import { useAnswers } from 'hooks/useAnswers';
import { useWordsStore } from 'stores/useWordsStore';
import Question from './Question';

import type { WordPair } from 'types/words.types';

function QuestionContainer() {
  const { selectedWordPair, generateSelectedWordPair } = useWordsStore();
  const { answers } = useAnswers(selectedWordPair);

  const [selectedAnswer, setSelectedAnswer] = useState<WordPair | null>(null);
  const [revealAnswer, setRevealAnswer] = useState<boolean>(false);

  const handleNext = useCallback(() => {
    setRevealAnswer(false);
    setSelectedAnswer(null);

    generateSelectedWordPair();
  }, [generateSelectedWordPair]);

  const handleSubmit = useCallback(() => {
    setRevealAnswer(true);
  }, []);

  if (!selectedWordPair) {
    return null;
  }

  return (
    <Question
      answers={answers}
      onNext={handleNext}
      onSubmit={handleSubmit}
      revealAnswer={revealAnswer}
      selectedAnswer={selectedAnswer}
      selectedWordPair={selectedWordPair}
      setSelectedAnswer={setSelectedAnswer}
    />
  );
}

export default QuestionContainer;
