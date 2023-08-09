import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  user: string;
  token?: string;
};

type InitialState = {
  value: AuthState;
};

const initialState = {
  value: {
    user: 'testandooo',
    token: undefined,
  } as AuthState,
} as InitialState;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      state.value.user = action.payload.user;
    },
    setToken: (state, action: PayloadAction<AuthState>) => {
      state.value.token = action.payload.token;
    },
    logOut: (state) => {
      state.value.user = '';
      state.value.token = undefined;
    },
  },
});

export const { setUser, logOut, setToken } = authSlice.actions;
export default authSlice.reducer;
