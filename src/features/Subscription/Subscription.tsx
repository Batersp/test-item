import React from 'react';

import style from './Subscription.module.css';

import { ReturnComponentType } from 'common/types/ReturnComponentType';

export const Subscription = (): ReturnComponentType => {
  return (
    <div className={style.container}>
      <h1>Subscription</h1>
      <p>yes</p>
    </div>
  );
};
