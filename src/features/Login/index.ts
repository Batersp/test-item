import { asyncActions, slice } from 'features/Login/login-reducer';
import * as loginSelectors from 'features/Login/selectors';

const loginReducer = slice.reducer;

const loginActions = slice.actions;

const loginAsyncActions = asyncActions;

export { loginReducer, loginSelectors, loginActions, loginAsyncActions };
