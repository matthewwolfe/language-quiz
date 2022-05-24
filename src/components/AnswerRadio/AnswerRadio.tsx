import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useTheme } from '@mui/material';
import { useMemo } from 'react';

import type { Props } from './AnswerRadio.types';

function AnswerRadio({ answer, disabled, error, onChange, selected, success }: Props) {
  const backgroundColor = useMemo(() => {
    if (error) {
      return 'error.light';
    }

    if (success) {
      return 'success.light';
    }

    if (selected) {
      return 'primary.main';
    }

    return 'primary.50';
  }, [error, selected, success]);

  console.log(useTheme());

  return (
    <FormControlLabel
      control={
        <Radio
          disabled={disabled}
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
        backgroundColor: backgroundColor,
        borderRadius: 4,
        display: 'flex',
        margin: 0,
        p: 6,
        mb: 6,

        '& .MuiFormControlLabel-label, & .Mui-disabled.MuiFormControlLabel-label': {
          color: selected ? 'background.paper' : 'text.primary',

          fontSize: 24,
          marginLeft: 4,
        },
      }}
      value={answer.english}
    />
  );
}

export default AnswerRadio;
