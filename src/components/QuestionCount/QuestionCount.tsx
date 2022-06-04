import Typography from '@mui/material/Typography';
import { Flex } from 'design';

import { Props } from './QuestionCount.types';

function QuestionCount({ questionCount }: Props) {
  return (
    <Flex>
      <Typography variant="h4" sx={{ color: 'secondary.main' }}>
        Question {questionCount}
      </Typography>
    </Flex>
  );
}

export default QuestionCount;
