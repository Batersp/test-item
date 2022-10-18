import React from 'react';

import { NavLink } from 'react-router-dom';

import style from './Navbar.module.css';

import { path } from 'common/enums/path';
import { ReturnComponentType } from 'common/types/ReturnComponentType';

const setActive = ({ isActive }: any): string => (isActive ? style.active : '');

export const Navbar = (): ReturnComponentType => {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <NavLink to={path.CONSULTATION} className={setActive}>
          КОНСУЛЬТАЦИЯ
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to={path.SUBSCRIPTION} className={setActive}>
          ПОДПИСКА
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to={path.BLOG} className={setActive}>
          БЛОГ
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to={path.LOGIN} className={setActive}>
          ВХОД
        </NavLink>
      </div>
    </div>
  );
};
