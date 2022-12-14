import React from 'react';

import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { NavLink } from 'react-router-dom';

import style from './Navbar.module.css';

import { path } from 'common/enums/path';
import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { loginAsyncActions, loginSelectors } from 'features/Login';
import { profileSelectors } from 'features/Profile';

const setActive = ({ isActive }: any): string => (isActive ? style.active : '');

export const Navbar = (): ReturnComponentType => {
  const { name } = useAppSelector(profileSelectors.getProfile);
  const isLoggedIn = useAppSelector(loginSelectors.getIsLoggedIn);
  const dispatch = useAppDispatch();
  const logoutProfile = (): void => {
    dispatch(loginAsyncActions.logoutTC());
  };

  return (
    <div className={style.container}>
      <div className={style.item}>
        <NavLink to={path.CONSULTATION} className={setActive}>
          CONSULTATION
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to={path.SUBSCRIPTION} className={setActive}>
          SUBSCRIPTION
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to={path.BLOG} className={setActive}>
          BLOG
        </NavLink>
      </div>
      {isLoggedIn ? (
        <div className={style.logout}>
          <NavLink to={path.PROFILE} className={style.name}>
            {name}
          </NavLink>
          <ExitToAppOutlinedIcon
            className={style.icon}
            color="warning"
            fontSize="large"
            onClick={logoutProfile}
          />
        </div>
      ) : (
        <div className={style.item}>
          <NavLink to={path.LOGIN} className={setActive}>
            SIGN IN
          </NavLink>
        </div>
      )}
    </div>
  );
};
