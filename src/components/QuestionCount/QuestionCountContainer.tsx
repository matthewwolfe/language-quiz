import { useAppStore } from 'stores/useAppStore';
import QuestionCount from './QuestionCount';

function QuestionCountContainer() {
  const { questionCount } = useAppStore();

  return <QuestionCount questionCount={questionCount} />;
}

export default QuestionCountContainer;
