import React from 'react';

import { Button } from '@mui/material';

import { ReturnComponentType } from 'common/types/ReturnComponentType';

type PropsType = {
  label: string;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
};

export const GeneralButton: React.FC<PropsType> = ({
  type,
  color,
  fullWidth,
  label,
  onClick,
  disabled,
}): ReturnComponentType => {
  return (
    <Button
      fullWidth={fullWidth}
      variant="contained"
      type={type || undefined}
      color={color || 'primary'}
      disabled={disabled}
      onClick={onClick || undefined}
    >
      {label}
    </Button>
  );
};
