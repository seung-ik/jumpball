import { ResponseMyBetting } from '@components/jumpball/MyTab';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: {
  address: string;
  token: number;
  chainId: number;
  bettingList: ResponseMyBetting[];
} = {
  address: '',
  token: 0,
  chainId: 1,
  bettingList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.address = action.payload.address;
      state.token = action.payload.token;
      state.chainId = action.payload.chainId;
    },
    reset(state) {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserBettingList.fulfilled, (state, action) => {
      state.bettingList = action.payload;
    });
  },
});

export default userSlice;

export const fetchUserBettingList = createAsyncThunk(
  'users/fetchUserBettingList',
  async (_, thunkAPI: any): Promise<ResponseMyBetting[]> => {
    const { address } = thunkAPI.getState().user;
    const { data } = await axios.get('/api/hello', { params: { address } });

    const sortedByDate = data.sort((a: ResponseMyBetting, b: ResponseMyBetting) => {
      if (new Date(a.gameDate) > new Date(b.gameDate)) return -1;
      if (new Date(a.gameDate) < new Date(b.gameDate)) return 1;
      return 0;
    });

    return sortedByDate;
  },
);
