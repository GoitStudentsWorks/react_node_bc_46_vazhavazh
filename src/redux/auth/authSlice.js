import { createSlice } from '@reduxjs/toolkit';

import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
  google,
} from './authThunks';
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      avatarURL: '',
      email: '',
    },
    token: null,
    isLoading: true,
    isRefreshing: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [registerUser.pending]: handlePending,
    [loginUser.pending]: handlePending,
    [getCurrentUser.pending]: handlePending,
    [logoutUser.pending]: handlePending,
    [google.pending]: handlePending,

    [registerUser.rejected]: handleRejected,
    [loginUser.rejected]: handleRejected,
    [getCurrentUser.rejected]: handleRejected,
    [logoutUser.rejected]: handleRejected,
    [google.rejected]: handleRejected,

    [registerUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: null,
      };
    },
    [google.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: null,
      };
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: null,
      };
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        error: null,
        isRefreshing: false,
      };
    },
    [getCurrentUser.pending]: (state, { payload }) => {
      return {
        ...state,
        error: null,
        isRefreshing: true,
      };
    },
    [getCurrentUser.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        isRefreshing: false,
      };
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      return {
        user: {
          id: '',
          username: '',
          email: '',
        },
        isLoading: false,
        error: null,
        isRefreshing: false,
        token: null,
      };
    },
  },
});

export default authSlice.reducer;
