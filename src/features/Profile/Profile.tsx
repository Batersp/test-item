import React from 'react';

import { Paper } from '@mui/material';
import { Navigate } from 'react-router-dom';

import style from './Profile.module.css';

import { path } from 'common/enums/path';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { loginSelectors } from 'features/Login';
import { profileSelectors } from 'features/Profile/index';
import { UsersPets } from 'features/Profile/UsersPets/UsersPets';

export const Profile = (): ReturnComponentType => {
  const isLoggedIn = useAppSelector(loginSelectors.getIsLoggedIn);
  const profile = useAppSelector(profileSelectors.getProfile);
  const { photo, name, status, pets } = profile;

  if (!isLoggedIn) {
    return <Navigate to={path.LOGIN} />;
  }

  return (
    <div className={style.container}>
      <Paper elevation={3} className={style.paper}>
        <img className={style.photo} src={photo} alt="Profile logo" />
        <div className={style.name}>{name}</div>
        <div className={style.status}>
          <b>Status</b>: {status}
        </div>
      </Paper>
      <div className={style.pets}>
        <div className={style.title}>My Pets</div>
        {pets.map(pet => (
          <UsersPets key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};
