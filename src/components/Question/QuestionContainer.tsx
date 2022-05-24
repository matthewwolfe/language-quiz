import { useAnswers } from 'hooks/useAnswers';
import { useWordsStore } from 'stores/useWordsStore';
import Question from './Question';

function QuestionContainer() {
  const { selectedWordPair } = useWordsStore();
  const { answers } = useAnswers(selectedWordPair);

  if (!selectedWordPair) {
    return null;
  }

  return <Question answers={answers} selectedWordPair={selectedWordPair} />;
}

export default QuestionContainer;
