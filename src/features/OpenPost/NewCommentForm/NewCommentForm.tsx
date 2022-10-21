import React, { ChangeEvent, useState } from 'react';

import SendIcon from '@mui/icons-material/Send';
import { Button, TextField } from '@mui/material';

import { useAppSelector } from 'common/hooks/useAppSelector';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import style from 'features/OpenPost/NewCommentForm/NewCommentForm.module.css';
import { profileSelectors } from 'features/Profile';

export const NewCommentForm = (): ReturnComponentType => {
  const [value, setValue] = useState<string>('');
  const profilePhoto = useAppSelector(profileSelectors.getProfile).photo;

  const onInputChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setValue(event.currentTarget.value);
  };

  return (
    <div className={style.container}>
      <img className={style.photo} src={profilePhoto} alt="" />
      <TextField
        className={style.input}
        value={value}
        onChange={onInputChangeHandler}
        label="Comment"
        variant="outlined"
      />
      <Button className={style.btn} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
  );
};
