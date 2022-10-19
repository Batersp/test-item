import { slice } from './profile-reducer';
import * as profileSelectors from './selectors';

const profileReducer = slice.reducer;

const profileActions = slice.actions;

export { profileReducer, profileSelectors, profileActions };
