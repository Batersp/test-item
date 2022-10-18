import React from 'react';

import style from './Profile.module.css';

import { ReturnComponentType } from 'common/types/ReturnComponentType';

export const Profile = (): ReturnComponentType => {
  return (
    <div className={style.container}>
      <h1>Profile</h1>
      <p>yes</p>
    </div>
  );
};
