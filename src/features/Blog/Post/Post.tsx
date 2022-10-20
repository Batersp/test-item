import React from 'react';

import { NavLink } from 'react-router-dom';

import style from './Post.module.css';

import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { PostType } from 'features/Blog/blogTypes';

type PropsType = {
  post: PostType;
};

export const Post: React.FC<PropsType> = ({ post }): ReturnComponentType => {
  const { date, category, title, image, id } = post;

  return (
    <div className={style.content}>
      <div>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img className={style.image} src={image} alt="Post image" />
      </div>
      <div className={style.info}>
        <div className={style.category}>{category}</div>
        <div className={style.date}>{date}</div>
      </div>
      <NavLink to={`/blog/${id}`} className={style.title}>
        {title}
      </NavLink>
    </div>
  );
};
