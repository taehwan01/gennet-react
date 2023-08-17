/* eslint-disable no-param-reassign */
import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    // user 정보
    memberId: 6,
    name: '천다인',
    email: 'test@gmail.com',
    password: '',
    samePassword: '',
    type: 'SENIOR',
    birth: '2002.01.10',
    intro: 'test message',

    // auth 정보
    accessToken: '',
    refreshToken: '',
  },
  reducers: {
    loginUser: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.email = action.payload.email;
      // eslint-disable-next-line no-param-reassign
      state.password = action.payload.password;
      // eslint-disable-next-line no-param-reassign
      state.passwordConfirm = action.payload.passwordConfirm;
    },
    logoutUser: (state) => {
      state.accessToken = '';
      state.refreshToken = '';
    },
    setTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { loginUser, logoutUser, setTokens } = userSlice.actions;

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
