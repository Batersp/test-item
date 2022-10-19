import React from 'react';

import { Paper, Typography } from '@mui/material';
import { Formik, FormikHelpers } from 'formik';
import { Navigate } from 'react-router-dom';

import style from './Login.module.css';

import petsBanner from 'assets/images/animals-pets-banner.jpg';
import { path } from 'common/enums/path';
import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { loginAsyncActions, loginSelectors } from 'features/Login/index';
import { LoginForm } from 'features/Login/LoginForm/LoginForm';
import { LoginType } from 'features/Login/loginTypes';
import { validateLogin } from 'features/Login/validateLogin';

export const Login = (): ReturnComponentType => {
  const isLoggedIn = useAppSelector(loginSelectors.getIsLoggedIn);

  const dispatch = useAppDispatch();

  const onSubmitHandler = (
    { name, password }: LoginType,
    { resetForm }: FormikHelpers<LoginType>,
  ): void => {
    dispatch(loginAsyncActions.loginTC({ name, password }));
    resetForm();
  };

  const backgroundImage = {
    backgroundImage: `url(${petsBanner})`,
  };

  if (isLoggedIn) {
    return <Navigate to={path.PROFILE} />;
  }

  return (
    <div className={style.container} style={backgroundImage}>
      <Paper elevation={3} className={style.paper}>
        <Typography variant="h4" className={style.title}>
          Sing In
        </Typography>
        <Formik
          initialValues={{ name: '', password: '' }}
          validationSchema={validateLogin}
          onSubmit={onSubmitHandler}
          validateOnMount={false}
        >
          {formik => <LoginForm formik={formik} />}
        </Formik>
      </Paper>
    </div>
  );
};
