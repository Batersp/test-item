import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';

import likeLogo from 'assets/images/like-2.svg';
import userLogo from 'assets/images/userLogo.png';
import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { blogActions } from 'features/Blog';
import { CommentType } from 'features/Blog/blogTypes';
import { loginSelectors } from 'features/Login';
import style from 'features/OpenPost/Comment/Comment.module.css';
import { profileSelectors } from 'features/Profile';

type PropsType = {
  comment: CommentType;
  postId: string;
};

export const Comment: React.FC<PropsType> = ({
  comment,
  postId,
}): ReturnComponentType => {
  const { text, date, author, id, likeCount } = comment;
  const isLoggedIn = useAppSelector(loginSelectors.getIsLoggedIn);
  const userName = useAppSelector(profileSelectors.getProfile).name;
  const dispatch = useAppDispatch();
  const deleteComment = (): void => {
    dispatch(blogActions.deleteComment({ commentId: id, postId }));
  };

  const addLike = (): void => {
    dispatch(
      blogActions.addLike({
        postId,
        commentId: id,
        likeCount: (parseInt(likeCount, 10) + 1).toString(),
      }),
    );
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <img className={style.userLogo} src={userLogo} alt="User logo" />
        <div className={style.info}>
          <div className={style.author}>{author}</div>
          <div className={style.text}>{text}</div>
          <div className={style.date}>{date}</div>
          <div className={style.likeContainer}>
            {likeCount !== '0' && <span>{likeCount}</span>}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <img
              onClick={addLike}
              className={style.likeLogo}
              src={likeLogo}
              alt="like logo"
            />
          </div>
          {isLoggedIn && userName === author && (
            <DeleteIcon
              onClick={deleteComment}
              color="error"
              className={style.deleteIcon}
            />
          )}
        </div>
      </div>
    </div>
  );
};
