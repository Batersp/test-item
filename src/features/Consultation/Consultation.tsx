import React from 'react';

import style from './Consultation.module.css';

import { ReturnComponentType } from 'common/types/ReturnComponentType';

export const Consultation = (): ReturnComponentType => {
  return (
    <div className={style.container}>
      <h1>Consultation</h1>
      <p>yes</p>
    </div>
  );
};
