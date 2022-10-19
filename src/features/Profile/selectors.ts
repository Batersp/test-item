import { AppRootStateType } from 'app/store';
import { ProfileType } from 'features/Profile/profileTypes';

export const getProfile = (state: AppRootStateType): ProfileType => state.profile.profile;
