import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './reducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
