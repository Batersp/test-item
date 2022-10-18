import React from 'react';

import style from './Error404.module.css';

import { ReturnComponentType } from 'common/types/ReturnComponentType';

export const Error404 = (): ReturnComponentType => {
  return (
    <div className={style.container}>
      <h1>Error404</h1>
      <p>yes</p>
    </div>
  );
};
