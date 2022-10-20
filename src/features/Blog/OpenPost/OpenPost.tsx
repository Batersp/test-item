import React from 'react';

import { useParams } from 'react-router-dom';

import style from './OpenPost.module.css';

import { useAppSelector } from 'common/hooks/useAppSelector';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { blogSelectors } from 'features/Blog/index';

export const OpenPost = (): ReturnComponentType => {
  const { postId } = useParams();

  const post = useAppSelector(blogSelectors.getPosts).filter(
    ({ id }) => id === postId,
  )[0];

  const { title, image, text } = post;

  return (
    <div className={style.container}>
      <h2>{title}</h2>
      <div>
        <img src={image} alt="" />
      </div>
      <div>{text}</div>
    </div>
  );
};
