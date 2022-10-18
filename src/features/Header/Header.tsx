import React from 'react';

import style from './Header.module.css';

import petLogo from 'assets/images/petLogo.svg';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { Navbar } from 'features/Header/Navbar/Navbar';

export const Header = (): ReturnComponentType => {
  return (
    <div className={style.container}>
      <img className={style.logo} src={petLogo} alt="logo" />
      <Navbar />
    </div>
  );
};
