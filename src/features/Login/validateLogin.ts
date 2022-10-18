import * as Yup from 'yup';

const minCharacters = 3;

export const validateLogin = Yup.object().shape({
  name: Yup.string()
    .required('Please enter name')
    .min(minCharacters, 'Minimum 3 characters'),
  password: Yup.string()
    .required('Please enter password')
    .min(minCharacters, `Minimum 3 characters`),
});
