import React from 'react';

import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { useField } from 'formik';

import { ReturnComponentType } from 'common/types/ReturnComponentType';

type PropsType = {
  name: string;
  label: string;
  disabled?: boolean;
  variant: 'standard' | 'outlined' | 'filled';
};

export const ProjectTextField: React.FC<PropsType> = ({
  name,
  variant,
  label,
  disabled,
}): ReturnComponentType => {
  const [field, meta] = useField(name);

  return (
    <FormControl fullWidth variant={variant} style={{ marginTop: '20px' }}>
      <InputLabel>{label}</InputLabel>
      <Input margin="dense" {...field} name={name} disabled={disabled} />
      {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
    </FormControl>
  );
};
