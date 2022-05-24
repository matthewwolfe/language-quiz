import { useWordsStore } from 'stores/useWordsStore';
import QuestionCount from './QuestionCount';

function QuestionCountContainer() {
  const { questionCount } = useWordsStore();

  return <QuestionCount questionCount={questionCount} />;
}

export default QuestionCountContainer;
