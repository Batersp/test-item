import React, { useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import { useField } from 'formik';

import { ReturnComponentType } from 'common/types/ReturnComponentType';

type PropsType = {
  name: string;
  label: string;
  disabled?: boolean;
};

export const ProjectPasswordField: React.FC<PropsType> = ({
  label,
  name,
  disabled,
}): ReturnComponentType => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const onClickIconButtonHandle = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Input
        type={showPassword ? 'text' : 'password'}
        margin="dense"
        {...field}
        name={name}
        disabled={disabled}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClickIconButtonHandle}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
    </FormControl>
  );
};
