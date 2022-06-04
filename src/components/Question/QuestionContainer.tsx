import { useCallback, useState } from 'react';
import { useAnswers } from 'hooks/useAnswers';
import { useAppStore } from 'stores/useAppStore';
import Question from './Question';

import type { Pair } from 'types/app.types';

function QuestionContainer() {
  const { selectedPair, generateSelectedPair } = useAppStore();
  const { answers } = useAnswers(selectedPair);

  const [selectedAnswer, setSelectedAnswer] = useState<Pair | null>(null);
  const [revealAnswer, setRevealAnswer] = useState<boolean>(false);

  const handleNext = useCallback(() => {
    setRevealAnswer(false);
    setSelectedAnswer(null);

    generateSelectedPair();
  }, [generateSelectedPair]);

  const handleSubmit = useCallback(() => {
    setRevealAnswer(true);
  }, []);

  if (!selectedPair) {
    return null;
  }

  return (
    <Question
      answers={answers}
      onNext={handleNext}
      onSubmit={handleSubmit}
      revealAnswer={revealAnswer}
      selectedAnswer={selectedAnswer}
      selectedPair={selectedPair}
      setSelectedAnswer={setSelectedAnswer}
    />
  );
}

export default QuestionContainer;
