/* eslint-disable no-param-reassign */
import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    // user 정보
    email: 'test@gmail.com',
    password: '',
    samePassword: '',

    memberId: 6,
    name: '천다인',
    type: 'SENIOR',
    dateOfBirth: '2002.01.10',
    introduction: 'test message',
    avgStarRate: 0,

    // auth 정보
    accessToken: '',
    refreshToken: '',
  },
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.passwordConfirm = action.payload.passwordConfirm;
      state.type = action.payload.type;
    },
    logoutUser: (state) => {
      state.accessToken = '';
      state.refreshToken = '';
    },
    setTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    resetToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    setUserInfo: (state, action) => {
      state.type = action.payload.memberType;
      state.avgStarRate = action.payload.avgStarRate;
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.introduction = action.payload.introduction;
    },
  },
});

export const { loginUser, logoutUser, setTokens, resetToken, setUserInfo } = userSlice.actions;

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
