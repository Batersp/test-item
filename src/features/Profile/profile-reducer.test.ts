import { profileActions, profileReducer } from 'features/Profile/index';
import { InitialStateType, ProfileType } from 'features/Profile/profileTypes';

let startState: InitialStateType;

beforeEach(() => {
  startState = {
    profile: {} as ProfileType,
  };
});

test('profile should be set', () => {
  const profile = {
    name: 'Maria',
    photo: '',
    status: 'hot day',
    pets: [{ name: 'Reks', pet: 'dog', photo: '', id: '2' }],
  };

  const endState = profileReducer(startState, profileActions.setProfile({ profile }));

  expect(endState.profile).toEqual(profile);
});
