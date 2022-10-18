import React from 'react';

import style from './Blog.module.css';

import { ReturnComponentType } from 'common/types/ReturnComponentType';

export const Blog = (): ReturnComponentType => {
  return (
    <div className={style.container}>
      <h1>BLOG</h1>
      <p>Yes</p>
    </div>
  );
};
