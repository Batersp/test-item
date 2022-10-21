import React from 'react';

import { NavLink, useParams } from 'react-router-dom';

import { path } from 'common/enums/path';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { blogSelectors } from 'features/Blog';
import { Comment } from 'features/OpenPost/Comment/Comment';
import style from 'features/OpenPost/OpenPost.module.css';

export const OpenPost = (): ReturnComponentType => {
  const { postId } = useParams();

  const post = useAppSelector(blogSelectors.getPosts).filter(
    ({ id }) => id === postId,
  )[0];

  const { title, image, text, category, comments } = post;

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
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
