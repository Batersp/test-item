import React from 'react';

import { Button } from '@mui/material';

import style from './Subscription.module.css';

import { ReturnComponentType } from 'common/types/ReturnComponentType';

export const Subscription = (): ReturnComponentType => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.title}>
          Unlimited access to online consultations with a professional veterinarian 24/7
        </div>
        <p className={style.text}>
          By becoming a member, you always have the opportunity to control the health of
          your pet at any time, anywhere.
        </p>
        <Button className={style.btn} variant="contained">
          Subscribe
        </Button>
      </div>
    </div>
  );
};
