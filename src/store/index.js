import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: 'test@gmail.com',
    password: '',
    type: '',
    // name: '김태환',
    // birth: new Date(),
    // interest: [],
    // intro: '',
  },
  reducers: {
    loginUser: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.email = action.payload.email;
      // eslint-disable-next-line no-param-reassign
      state.password = action.payload.password;
    },
  },
});

export const { loginUser } = userSlice.actions;

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
