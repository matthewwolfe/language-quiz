import { Question } from 'components/Question';
import { QuestionCount } from 'components/QuestionCount';
import { Flex } from 'design';

function Dashboard() {
  return (
    <Flex sx={{ flexDirection: 'column', px: 6, py: 2 }}>
      <QuestionCount />
      <Question />
    </Flex>
  );
}

export default Dashboard;
