/* eslint-disable no-param-reassign */
import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    // user 정보
    email: '',
    password: '',
    samePassword: '',

    memberId: 0,
    name: '',
    memberType: 'YOUTH',
    dateOfBirth: '',
    introduction: '',
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
      state.memberType = action.payload.memberType;
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
    setMemberId: (state, action) => {
      state.memberId = action.payload.memberId;
    },
    setUserInfo: (state, action) => {
      state.memberId = action.payload.memberId;
      state.memberType = action.payload.memberType;
      state.avgStarRate = action.payload.avgStarRate;
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.introduction = action.payload.introduction;
    },
    editProfile: (state, action) => {
      state.name = action.payload.name;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.introduction = action.payload.introduction;
    },
  },
});

export const { loginUser, logoutUser, setTokens, resetToken, setUserInfo, setMemberId, editProfile } =
  userSlice.actions;

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
