import React from 'react';

import style from './Categories.module.css';

import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { CategoryType } from 'features/Blog/blogTypes';

type PropsType = {
  setCategory: (value: CategoryType) => void;
};

export const Categories: React.FC<PropsType> = ({setCategory}): ReturnComponentType => {



  return (
    <div className={style.sections}>
      <div className={`${style.item} ${style.treatment}`}>
        <p className={style.category}>Лечение</p>
      </div>
      <div className={`${style.item} ${style.training}`}>
        <p className={style.category}>Дрессировка</p>
      </div>
      <div className={`${style.item} ${style.feeding}`}>
        <p className={style.category}>Кормление</p>
      </div>
      <div className={`${style.item} ${style.care}`}>
        <p className={style.category}>Уход</p>
      </div>
    </div>
  );
};
