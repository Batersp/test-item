import { loginActions, loginReducer } from 'features/Login/index';

let startState: { isLoggedIn: boolean };

beforeEach(() => {
  startState = {
    isLoggedIn: false,
  };
});

test('changeLoggedIn should be change', () => {
  const endState = loginReducer(startState, loginActions.changeLoggedIn({ value: true }));

  expect(endState.isLoggedIn).toBe(false);
});
