import { createSlice } from '@reduxjs/toolkit';
import { addDays, subDays } from 'date-fns';

export type JumpBallTab = 'NBA' | 'MLB' | 'MY';

interface PageSliceType {
  date: Date;
  tab: JumpBallTab;
}

const initialState: PageSliceType = {
  date: new Date(),
  tab: 'NBA',
};

const userSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    addDate(state) {
      state.date = addDays(state.date, 1);
    },
    subDate(state) {
      state.date = subDays(state.date, 1);
    },
    setTab(state, action) {
      state.tab = action.payload;
    },
    reset(state) {
      Object.assign(state, initialState);
    },
  },
});

export default userSlice;
