import { slice } from 'features/Login/login-reducer';
import * as loginSelectors from 'features/Login/selectors';

const loginReducer = slice.reducer;

export { loginReducer, loginSelectors };
