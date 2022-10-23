import React from 'react';

import { Button } from '@mui/material';

import style from './Consultation.module.css';

import { ReturnComponentType } from 'common/types/ReturnComponentType';

export const Consultation = (): ReturnComponentType => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.title}>Ask a question to the veterinarian</div>
        <div className={style.textareaContainer}>
          <textarea placeholder="Your question" style={{ width: '100%' }} rows={7} />
          <Button variant="contained">Sent</Button>
        </div>
      </div>
    </div>
  );
};
