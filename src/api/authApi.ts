import axios from 'axios';

import { ProfileType } from 'features/Profile/profileTypes';

export const authApi = {
  login() {
    return axios.get<ProfileType[]>('./users.json');
  },
};
