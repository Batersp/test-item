import React from 'react';

import { Paper, Typography } from '@mui/material';
import { Formik, FormikHelpers } from 'formik';

import style from './Login.module.css';

import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { LoginForm } from 'features/Login/LoginForm/LoginForm';
import { LoginType } from 'features/Login/loginTypes';
import { validateLogin } from 'features/Login/validateLogin';

export const Login = (): ReturnComponentType => {
  const onSubmitHandler = (
    values: LoginType,
    { resetForm }: FormikHelpers<LoginType>,
  ): void => {
    resetForm();
  };

  return (
    <div className={style.container}>
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
