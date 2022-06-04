import { Navigation } from 'components/Navigation';
import { Question } from 'components/Question';
import { QuestionCount } from 'components/QuestionCount';
import { Flex } from 'design';

function Dashboard() {
  return (
    <Flex sx={{ flexDirection: 'column', px: 6, py: 2 }}>
      <Flex sx={{ justifyContent: 'space-between', mb: 2 }}>
        <QuestionCount />
        <Navigation />
      </Flex>

      <Question />
    </Flex>
  );
}

export default Dashboard;
