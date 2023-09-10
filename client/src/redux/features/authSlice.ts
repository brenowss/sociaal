import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  user?: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    picturePath: string;
    friends: [];
    location: string;
    occupation: string;
    viewedProfile: number;
    impressions: number;
    createdAt: string;
    updatedAt: string;
  };
  token?: string;
};

type InitialState = {
  value: AuthState;
};

const initialState = {
  value: {
    user: undefined,
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
      state.value.user = undefined;
      state.value.token = undefined;
    },
  },
});

export const { setUser, logOut, setToken } = authSlice.actions;
export default authSlice.reducer;
