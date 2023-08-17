/* eslint-disable no-param-reassign */
import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '천다인',
    email: 'test@gmail.com',
    password: '',
    type: 'SENIOR',
    birth: '2002.01.10',
    intro: 'test message',
    accessToken: '',
    refreshToken: '',
    // // name: '김태환',
    // name: '천다인',
    // email: 'test@gmail.com',
    // password: '',
    // // type: 'SENIOR',
    // type: 'YOUTH',
    // birth: '2002.01.10',
    // intro: 'test message',
    // // birth: new Date(),
    // // interest: [],
    // // intro: '',
  },
  reducers: {
    loginUser: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.email = action.payload.email;
      // eslint-disable-next-line no-param-reassign
      state.password = action.payload.password;
    },
    logoutUser: (state) => {
      state.accessToken = '';
      state.refreshToken = '';
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
