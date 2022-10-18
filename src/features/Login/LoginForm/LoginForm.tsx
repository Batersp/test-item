import React from 'react';

import { FormGroup } from '@mui/material';
import { Form, FormikProps } from 'formik';

import { GeneralButton } from 'common/components/Forms/GeneralButton/GeneralButton';
import { ProjectPasswordField } from 'common/components/Forms/ProjectPasswordField/ProjectPasswordField';
import { ProjectTextField } from 'common/components/Forms/ProjectTextField/ProjectTextField';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { LoginType } from 'features/Login/loginTypes';

type PropsType = {
  formik: FormikProps<LoginType>;
};

export const LoginForm: React.FC<PropsType> = ({ formik }): ReturnComponentType => {
  const { isValid, dirty, isSubmitting } = { ...formik };

  return (
    <Form>
      <FormGroup>
        <ProjectTextField
          variant="standard"
          name="name"
          label="Name"
          disabled={isSubmitting}
        />
        <ProjectPasswordField name="password" label="Password" disabled={isSubmitting} />

        <div style={{ marginTop: '30px' }}>
          <GeneralButton
            fullWidth
            label="Sing In"
            disabled={!isValid || !dirty || isSubmitting}
            type="submit"
          />
        </div>
      </FormGroup>
    </Form>
  );
};
