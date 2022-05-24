import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { AnswerRadio } from 'components/AnswerRadio';
import { Flex } from 'design';

import type { WordPair } from 'types/words.types';
import type { Props } from './Question.types';

function Question({ answers, selectedWordPair }: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState<WordPair | null>(null);

  return (
    <Flex sx={{ flexDirection: 'column', width: 1 }}>
      <Flex sx={{ mb: 6 }}>
        <Typography variant="h1">{selectedWordPair.spanish}</Typography>
      </Flex>

      <Flex sx={{ width: 1 }}>
        <FormControl sx={{ width: 1 }}>
          <RadioGroup sx={{ width: 1 }}>
            {answers.map((answer) => (
              <AnswerRadio
                key={answer.number}
                answer={answer}
                onChange={() => setSelectedAnswer(answer)}
                selected={selectedAnswer === answer}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Flex>
    </Flex>
  );
}

export default Question;
