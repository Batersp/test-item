import React from 'react';

import { CircularProgress } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';

import { path } from 'common/enums/path';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { blogSelectors } from 'features/Blog';
import { loginSelectors } from 'features/Login';
import { Comment } from 'features/OpenPost/Comment/Comment';
import { NewCommentForm } from 'features/OpenPost/NewCommentForm/NewCommentForm';
import style from 'features/OpenPost/OpenPost.module.css';

export const OpenPost = (): ReturnComponentType => {
  const { postId } = useParams();
  const isLoggedIn = useAppSelector(loginSelectors.getIsLoggedIn);

  const post = useAppSelector(blogSelectors.getPosts).filter(
    ({ id }) => id === postId,
  )[0];

  if (!post) {
    return <CircularProgress className={style.CircularProgress} />;
  }

  const { title, image, text, category, comments, id: postIdForComment } = post;

  return (
    <div className={style.container}>
      <div className={style.link}>
        <NavLink className={style.linkItem} to={path.BLOG}>
          Вернуться назад
        </NavLink>
      </div>

      <ul className={style.info}>
        <li>Блог</li>
        <li>{category}</li>
        <li>{title}</li>
      </ul>

      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.imgContainer}>
          <img className={style.img} src={image} alt="" />
        </div>
        <div className={style.text}>{text}</div>
      </div>

      <div className={style.commentsTitle}>Comments</div>

      {comments.map(comment => (
        <Comment key={comment.id} postId={postIdForComment} comment={comment} />
      ))}
      {isLoggedIn && postId && <NewCommentForm postId={postId} />}
    </div>
  );
};
