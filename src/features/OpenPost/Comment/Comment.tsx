import React from 'react';

import userLogo from 'assets/images/userLogo.png';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { CommentType } from 'features/Blog/blogTypes';
import style from 'features/OpenPost/Comment/Comment.module.css';

type PropsType = {
  comment: CommentType;
};

export const Comment: React.FC<PropsType> = ({ comment }): ReturnComponentType => {
  const { text, date, author } = comment;

  return (
    <div className={style.container}>
      <div className={style.content}>
        <img className={style.userLogo} src={userLogo} alt="User logo" />
        <div className={style.info}>
          <div className={style.author}>{author}</div>
          <div className={style.text}>{text}</div>
          <div className={style.date}>{date}</div>
        </div>
      </div>
    </div>
  );
};
