import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import type { Props } from './AnswerRadio.types';

function AnswerRadio({ answer, onChange, selected }: Props) {
  return (
    <FormControlLabel
      control={
        <Radio
          onChange={onChange}
          sx={{
            '&.Mui-checked': {
              color: 'background.paper',
            },
          }}
        />
      }
      label={answer.english}
      sx={{
        backgroundColor: selected ? 'primary.200' : 'primary.50',
        borderRadius: 4,
        display: 'flex',
        margin: 0,
        p: 6,
        mb: 6,

        '& .MuiFormControlLabel-label': {
          fontSize: 24,
          marginLeft: 4,
        },
      }}
      value={answer.english}
    />
  );
}

export default AnswerRadio;
