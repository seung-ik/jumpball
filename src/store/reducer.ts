import { combineReducers } from 'redux';

import userSlice from './userSlice';
import pageSlice from './pageSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  page: pageSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
