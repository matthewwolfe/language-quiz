import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import { AnswerRadio } from 'components/AnswerRadio';
import { Button, Flex } from 'design';

import type { Props } from './Question.types';

function Question({
  answers,
  onNext,
  onSubmit,
  revealAnswer,
  selectedAnswer,
  selectedWordPair,
  setSelectedAnswer,
}: Props) {
  return (
    <Flex sx={{ flexDirection: 'column', width: 1 }}>
      <Flex sx={{ mb: 6 }}>
        <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
          {selectedWordPair.spanish}
        </Typography>
      </Flex>

      <Flex sx={{ width: 1 }}>
        <FormControl sx={{ width: 1 }}>
          <RadioGroup sx={{ width: 1 }}>
            {answers.map((answer) => {
              const selected = selectedAnswer === answer;

              return (
                <AnswerRadio
                  answer={answer}
                  disabled={revealAnswer}
                  error={revealAnswer && selectedAnswer !== selectedWordPair && selected}
                  key={answer.number}
                  onChange={() => setSelectedAnswer(answer)}
                  selected={selected}
                  success={revealAnswer && selectedWordPair === answer}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </Flex>

      <Flex sx={{ width: 1 }}>
        {!revealAnswer && (
          <Button disabled={selectedAnswer === null} fullWidth onClick={onSubmit}>
            Submit
          </Button>
        )}

        {revealAnswer && (
          <Button fullWidth onClick={onNext}>
            Next
          </Button>
        )}
      </Flex>
    </Flex>
  );
}

export default Question;
