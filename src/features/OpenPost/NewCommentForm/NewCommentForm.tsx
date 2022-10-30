import React, { ChangeEvent, useState } from 'react';

import SendIcon from '@mui/icons-material/Send';
import { Button, TextField } from '@mui/material';
import { v1 } from 'uuid';

import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { blogActions } from 'features/Blog';
import { CommentType } from 'features/Blog/blogTypes';
import style from 'features/OpenPost/NewCommentForm/NewCommentForm.module.css';
import { profileSelectors } from 'features/Profile';

type PropsType = {
  postId: string;
};

export const NewCommentForm: React.FC<PropsType> = ({ postId }): ReturnComponentType => {
  const [value, setValue] = useState<string>('');
  const profile = useAppSelector(profileSelectors.getProfile);
  const dispatch = useAppDispatch();
  const date = new Date();
  const stringDate = date?.toLocaleDateString();

  const onInputChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setValue(event.currentTarget.value);
  };

  const addComment = (): void => {
    const comment: CommentType = {
      id: v1(),
      text: value,
      author: profile.name,
      date: stringDate,
      likeCount: '0',
    };

    dispatch(blogActions.addComment({ newComment: { comment, postId } }));
    setValue('');
  };

  return (
    <div className={style.container}>
      <img className={style.photo} src={profile.photo} alt="" />
      <TextField
        className={style.input}
        value={value}
        type="text"
        onChange={onInputChangeHandler}
        label="Comment"
        variant="outlined"
      />
      <div className={style.btn}>
        <Button
          disabled={!value.trim()}
          onClick={addComment}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
