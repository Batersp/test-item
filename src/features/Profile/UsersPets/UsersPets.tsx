import React from 'react';

import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { PetType } from 'features/Profile/profileTypes';
import style from 'features/Profile/UsersPets/UsersPets.module.css';

type PropsType = {
  pet: PetType;
};

export const UsersPets: React.FC<PropsType> = ({ pet }): ReturnComponentType => {
  const { name, photo } = pet;

  return (
    <div className={style.container}>
      <div className={style.name}>
        <b>Name</b>: {name}
      </div>
      <img className={style.photo} src={photo} alt="" />
    </div>
  );
};
