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
  selectedPair,
  setSelectedAnswer,
}: Props) {
  return (
    <Flex sx={{ flexDirection: 'column', width: 1 }}>
      <Flex sx={{ mb: 4 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          {selectedPair.spanish}
        </Typography>
      </Flex>

      <Flex sx={{ width: 1 }}>
        <FormControl sx={{ width: 1 }}>
          <RadioGroup sx={{ width: 1 }}>
            {answers.map((answer, index) => {
              const selected = selectedAnswer === answer;

              return (
                <AnswerRadio
                  answer={answer}
                  disabled={revealAnswer}
                  error={revealAnswer && selectedAnswer !== selectedPair && selected}
                  key={index}
                  onChange={() => setSelectedAnswer(answer)}
                  selected={selected}
                  success={revealAnswer && selectedPair === answer}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </Flex>

      <Flex sx={{ mt: 2, width: 1 }}>
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
